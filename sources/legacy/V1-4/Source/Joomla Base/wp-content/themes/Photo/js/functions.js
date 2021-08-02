/**
 * Functionality specific to Photo.
 **/

// Google maps function
var gkMapInitialize = function() {
  var maps = jQuery('.gk-map');
  var mapCenters = [];
  var mapAreas = [];
  
  maps.each(function(i, map) {
    map = jQuery(map);
    mapCenters[i] = new google.maps.LatLng(0.0, 0.0);
      
      
    if(map.data('latitude') !== undefined && map.data('longitude') !== undefined) {
        mapCenters[i] = new google.maps.LatLng(
            parseFloat(map.data('latitude')), 
            parseFloat(map.data('longitude'))
        );
    }
      
      
      var mapOptions = {
        scrollwheel: false,
        zoom: parseInt(map.data('zoom'), 10) || 12,
        center: mapCenters[i],
        disableDefaultUI: map.data('ui') === 'yes' ? false : true,
		panControl: map.data('ui') === 'yes' ? true : false,
		panControlOptions: {
			position: google.maps.ControlPosition.RIGHT_TOP
		},
		zoomControl: map.data('ui') === 'yes' ? true : false,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.RIGHT_TOP
		},
		streetViewControl: map.data('ui') === 'yes' ? true : false,
		streetViewControlOptions: {
			position: google.maps.ControlPosition.RIGHT_TOP
		},
		mapTypeControl: map.data('ui') === 'yes' ? true : false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
		scaleControl: map.data('ui') === 'yes' ? true : false
      };
    
      mapAreas[i] = new google.maps.Map(map.get(0), mapOptions);
      var link = jQuery('<a>', { class: 'gk-map-close'});
      link.insertAfter(map);
      // custom events for the full-screen display
      var marker = null;
      map.on('displaybigmap', function() {
        marker = new google.maps.Marker({
           position: mapCenters[i],
           map: mapAreas[i],
           animation: google.maps.Animation.DROP
        });
        
        setTimeout(function() {
            google.maps.event.trigger(mapAreas[i], 'resize');
        }, 300);
        
        mapAreas[i].setCenter(mapCenters[i]);
        
        if(map.data('line') !== undefined) {
            var points = map.data('line').split(';');
            var polyline = [];
            
            points = points.filter(function(x) { 
                return x != '';
            });
            
            jQuery.each(points, function(i, item) {
                var coords = item.split(',');
                polyline.push(new google.maps.LatLng(parseFloat(coords[0]), parseFloat(coords[1])));
            });
            
            if(points.length) {
                var path = new google.maps.Polyline({
                    path: polyline,
                    geodesic: true,
                    strokeColor: '#ff0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
                
                path.setMap(mapAreas[i]);
            }
        }
      });
      
      if(jQuery(maps[i]).hasClass('static')) {
        marker = new google.maps.Marker({
           position: mapCenters[i],
           map: mapAreas[i],
           animation: google.maps.Animation.DROP
        });
      }
      
      map.on('hidebigmap', function() {
        if(marker) {
            marker.setMap(null);
        }
      });
  });
  
  jQuery(window).resize(function() {
    mapAreas.each(function(map, i) {
        map.setCenter(mapCenters[i]);
    });
  });
};

(function($) {
    $(document).ready(function(){
	    // smooth anchor scrolling
        jQuery('a[href*="#"]').on('click', function (e) {
            e.preventDefault();

            if(this.hash !== '' && this.href.replace(this.hash, '') == window.location.href.replace(window.location.hash, '')) {
                var target = jQuery(this.hash);

                if(target.length) {
                    jQuery('html, body').stop().animate({
                        'scrollTop': target.offset().top
                    }, 1000, 'swing', function () {
                        window.location.hash = target.selector;
                    });
                } else {
                    window.location = jQuery(this).attr('href');
                }
            } else {
                window.location = jQuery(this).attr('href');
            }
        });

        // Fit videos
        jQuery(document).ready(function() {
            jQuery('.gk-video-wrap').fitVids(); 
        });

         // Google Maps loading
        var loadScript = function() {
            $.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&callback=gkMapInitialize")
              .fail(function( jqxhr, settings, exception ) {
               console.log('Google Maps script not loaded');
            });     
        };
        
        if($('.gk-map').length > 0) {
            loadScript();
        }

        // Single item featured image
        if($('body').hasClass('single') && $('article').children('.entry-header').length)  {
            var header = $('article').children('.entry-header');
            
            if(header.length) {
                $(window).scroll(function() {
                    var h = header.outerHeight();
                    var y = $(window).scrollTop();
                    if(y <= h) {
                        var progress = (y / h);
                        header.css('background-position', 'center ' + (50 - (50 * progress)) + '%');
                        var opacity = (100 - 90 * progress) / 100;
                        header.css('opacity', opacity);
                    }
                });
            }
        }

        // portfolio
        if($('#content').hasClass('portfolio')) {
            var wrapper = $('#content');
            var filter = wrapper.find('.item-filter');
            var items_wrapper = wrapper.find('.item-list');
            var tag_list = wrapper.find('ol');
            var tag_items = filter.find('li');
            var virtual_list = [];
            // move pagination
            if(wrapper.find('.paging-navigation').length && $(window).outerWidth() > 640) {
                var pagination = wrapper.find('.paging-navigation');
                $('#page-nav').find('.site').before(pagination);
            }
            
            // fix for case when there is a lot of tags and only few items for display in the current selection
            wrapper.css('min-height', (tag_list.outerHeight() + 70) + "px");
            
            wrapper.find('.item-view').each(function(i, item) {
                item = $(item);
                var overlay = $('<a href="'+item.attr('data-link')+'" class="gk-overlay"><span></span></a>');
            
                if(wrapper.hasClass('blog-grid')) {
                    var overlay = $('<a href="'+item.attr('data-link')+'" class="gk-overlay"><strong>'+item.attr('data-text')+'</strong></a>');
                }
                item.find('.item-image-block').append(overlay);
                // create virtual list of nodes
                var copy = item.clone(true, true);
                copy.attr('class', 'item-view');
                virtual_list.push(copy[0]);
            });
            
            if(filter.length) {
                filter.click(function() {               
                    if(!$(this).hasClass('gk-active')) {
                        $(this).addClass('gk-active');
                        $(this).find('ol').addClass('gk-show');
                        
                        var list = $(this).find('ol');
                        list.find('li').each(function(i, li) {
                            setTimeout(function() {
                                if(list.hasClass('gk-show')) {
                                    $(li).addClass('gk-active');
                                }
                            }, i * 50);
                        });
                    } else {
                        var self = this;
                        setTimeout(function() {
                            $(self).removeClass('gk-active');
                        }, 300);
                        $(this).find('ol').removeClass('gk-show');
                        $(this).find('ol li').removeClass('gk-active');
                    }
                });
                
                tag_items.click(function() {
                    var id = $(this).attr('data-value');
                    var name = $(this).text();
                    var items = wrapper.find('.item-view');
                    // update label
                    $('#item-filter-selected').text(name);
                    // show filtered items
                    if(id !== '') {
                        items.removeClass('gk-active');
                        items.addClass('gk-hide');
                        
                        setTimeout(function() {
                            // remove all items
                            items.remove();
                            // create list of new items
                            $(virtual_list).each(function(i, item) {
                                item = $(item);
                                
                                var item_tags = item.attr('data-tags') || '';
                                if(item_tags != '') {
                                    item_tags.split(' ');
                                }
                                
                                if(item_tags.indexOf(id) !== -1) {
                                    var copy = item.clone(true, true);
                                    items_wrapper.append(copy);
                                    setTimeout(function() {
                                        copy.addClass('gk-active');
                                    }, 100);
                                }
                            });
                            // activate lazy load
                            jQuery("div.lazy").lazyload({
                                 effect : "fadeIn"
                            });
                        }, 350);
                    } else {
                        items.removeClass('gk-active');
                        items.addClass('gk-active');
                        
                        setTimeout(function() {
                            // remove all items
                            items.remove();
                            // create list of new items
                            $(virtual_list).each(function(i, item) {
                                item = $(item);
                                var copy = item.clone(true, true);
                                items_wrapper.append(copy);
                                setTimeout(function() {
                                    copy.addClass('gk-active');
                                }, 100);
                            });
                            // activate lazy load
                            jQuery("div.lazy").lazyload({
                                 effect : "fadeIn"
                            });
                        }, 350);
                    }
                });
            }
        }

        // Gallery popups
        var photos = jQuery('.gallery-item');

        if(photos.length > 0) {
            // photos collection
            var collection = [];
            // create overlay elements
            var overlay = jQuery('<div>', { class: 'gk-photo-overlay' });
            var overlay_prev = jQuery('<a>', { class: 'gk-photo-overlay-prev' });
            var overlay_next = jQuery('<a>', { class: 'gk-photo-overlay-next' });
            // put the element
            overlay.appendTo(jQuery('body'));
            // add events
            overlay.click(function() {
                var img = overlay.find('img');
                if(img) { img.remove(); }
                overlay.removeClass('active');
                overlay_prev.removeClass('active');
                overlay_next.removeClass('active');
                setTimeout(function() {
                    overlay.css('display', 'none');
                }, 300);
            });
            // prepare links
            photos.each(function(j, photo) {
                photo = jQuery(photo);
                var link = photo.find('a');
                collection.push(link.attr('href'));
                link.click(function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    overlay.css('display', 'block');

                    setTimeout(function() {
                        overlay.addClass('active');

                        setTimeout(function() {
                            overlay_prev.addClass('active');
                            overlay_next.addClass('active');
                        }, 300);

                        var img = jQuery('<img>', { class: 'loading' });
                        img.load(function() {
                            img.removeClass('loading');
                        });
                        img.attr('src', link.attr('href'));
                        img.prependTo(overlay);
                    }, 50);
                });
            });
            // if collection is bigger than one photo
            if(collection.length > 1) {
                overlay_prev.appendTo(overlay);
                overlay_next.appendTo(overlay);

                overlay_prev.click(function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var img = overlay.find('img');
                    if(!img.hasClass('loading')) {
                        img.addClass('loading');
                    }
                    setTimeout(function() {
                        var current_img = img.attr('src');
                        var id = collection.indexOf(current_img);
                        var new_img = collection[(id > 0) ? id - 1 : collection.length - 1];
                        img.attr('src', new_img);
                    }, 300);
                });

                overlay_next.click(function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var img = overlay.find('img');
                    if(!img.hasClass('loading')) {
                        img.addClass('loading');
                    }
                    setTimeout(function() {
                        var current_img = img.attr('src');
                        var id = collection.indexOf(current_img);
                        var new_img = collection[(id < collection.length - 1) ? id + 1 : 0];
                        img.attr('src', new_img);
                    }, 300);
                });
            }
        }
    
        // main menu 
        // menu effect on scroll
        var menu_block = $('#page-nav');
        
        if($(window).outerHeight() <= 480 || $(window).outerWidth() <= 480) {
            $('#page-nav').addClass('active');
        }
        
        $(window).resize(function() {
            if($(window).outerHeight() <= 480 || $(window).outerWidth() <= 480) {
                $('#page-nav').addClass('active');
            }
        });
        
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            
            if($(window).outerHeight() <= 480 || $(window).outerWidth() <= 480) {
                if(!menu_block.hasClass('active')) {
                    menu_block.addClass('active');
                }
            } else {
                if(scroll > 0) {
                    if(!menu_block.hasClass('active')) {
                        menu_block.addClass('active');
                    }
                } else {
                    if(menu_block.hasClass('active')) {
                        // menu_block.removeClass('active');
                    }
                }
            }
        });
        
        // Opening menu
        var menu_button = $('#gk-menu-button');
        var menu_button_label = menu_button.find('span');
        
        menu_button.click(function() {
            var overlay = $('#overlay-menu-content');
            overlay.toggleClass('active');
            if(!$('#page-nav').hasClass('active')) {
                overlay.css('bottom', $('#page-nav').outerHeight() + 1);
            }
            
            var current_text = menu_button_label.text();
            var new_text = menu_button_label.attr('data-text');
            menu_button_label.text(new_text);
            menu_button_label.attr('data-text', current_text);
            
            if(overlay.hasClass('active')) {
                menu_button.addClass('active');
                menu_block.find('.pagination').addClass('gk-hide');
                
                setTimeout(function() {
                    var menu_items = overlay.find('.level0').children('li');
                    menu_items.each(function(i, item) {
                        item = jQuery(item);
                        setTimeout(function() {
                            if(overlay.hasClass('active')) {
                                item.addClass('gk-active');
                            }
                        }, (menu_items.length - i) * 100);
                    });
                }, 250);    
            } else {
                menu_button.removeClass('active');
                menu_block.find('.pagination').removeClass('gk-hide');
                
                overlay.find('.level0').children('li').each(function(i, item) {
                    item = jQuery(item);
                    item.removeClass('gk-active');
                }); 
            }       
        });
        
        gk_photo_menu_height_check();
        
        $(window).resize(function() {
            gk_photo_menu_height_check();
        });
        
        if($(window).outerWidth() >= 840 && $('html').hasClass('touch')) {
            // fix for the iOS devices     
            jQuery('.gk-overlay-menu > ul > li > span').each(function(i, el) {
                el.attr('onmouseover', '');
            });
    
            jQuery('.gk-overlay-menu > ul > li > a').each(function(i, el) {
                el = jQuery(el);
                el.attr('onmouseover', '');
    
                if(el.parent().hasClass('menu-item-has-children')) {
                    el.click(function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        if(el.attr("dblclick") == undefined) {
                            el.attr("dblclick", new Date().getTime());
                        } else {
                            var now = new Date().getTime();
                            
                            if(now - el.attr("dblclick") < 750) {
                                window.location = el.attr('href');
                            } else {
                               el.attr("dblclick", new Date().getTime());
                            }
                        }
                    });
                }
            });
        }
        
        $('#overlay-menu-content').find('.sub-menu').each(function(i, submenu) {
            submenu = $(submenu);
            var parent = submenu.parent();
            
            parent.on('touchstart mouseenter focus', function(e) {
                if(submenu.hasClass('gk-hide')) {
                    submenu.removeClass('gk-hide');
                    submenu.removeClass('gk-active');
                }
                
                if($('html').hasClass('touch')) {
                    $('#overlay-menu-content').find('.sub-menu').each(function(i, submenu_hide) {
                        submenu_hide = $(submenu_hide);
                   
                        if(submenu_hide.get(0) != submenu.get(0)) {
                            submenu_hide.addClass('gk-hide');
                            setTimeout(function() {
                                submenu_hide.removeClass('gk-hide');
                                submenu_hide.removeClass('gk-active');
                            }, 300);
            
                            submenu_hide.children('li').each(function(i, item) {
                                item.removeClass('gk-active');
                            });
                        }
                    });
                }
            
                submenu.addClass('gk-active');
                
                submenu.children('li').each(function(i, item) {
                    setTimeout(function() {
                        // prevent before adding class when it is not necessary
                        if(submenu.hasClass('gk-active') && !submenu.hasClass('gk-hide')) {
                            item = jQuery(item);
                            item.addClass('gk-active');
                        }
                    }, i * 75);
                });
                
                // calculating position
                var z = submenu.outerHeight();
                var x = parent.parent().parent().outerHeight();
                var y = parent.position().top;
                var h = parent.outerHeight();
                var m = x - (y + h/2);
                /*
                    Cases:
                    
                    z/2 < y + h/2 && z/2 < m => -(z/2)
                    z/2 > y + h/2 && z/2 < m => -(y + h/2)
                    z/2 < y + h/2 && z/2 > m => -(z/2) - (z/2 - m)
                    z/2 > y + h/2 && z/2 > m => 0
                */
                if(z/2 < y + h/2 && z/2 < m) {
                    submenu.css('top', -(z/2) + (h/2) + 'px');
                } else if(z/2 > y + h/2 && z/2 < m) {
                    submenu.css('top', -(y + h/2) + 'px');
                } else if(z/2 < y + h/2 && z/2 > m) {
                    submenu.css('top', (-(z/2) + (h/2)) - (z/2 - m) + 'px');
                } else {
                    submenu.css('top', '0px');
                }
            });
            
            parent.mouseleave(function() {
                submenu.addClass('gk-hide');
                setTimeout(function() {
                    submenu.removeClass('gk-hide');
                    submenu.removeClass('gk-active');
                }, 300);

                submenu.children('li').each(function(i, item) {
                    item = jQuery(item);
                    item.removeClass('gk-active');
                });
            });         
        });
    });
    
    function gk_photo_menu_height_check() {
        var wrap = $('#overlay-menu-content-wrap1');
        var menu = $('.gk-overlay-menu');
        
        if(wrap.outerHeight() < menu.outerHeight()) {
            if(!wrap.hasClass('area-too-small')) {
                wrap.addClass('area-too-small');
            }
        } else {
            if(wrap.hasClass('area-too-small')) {
                wrap.removeClass('area-too-small');
            }
        }
    }

})(jQuery);

/*! Overthrow. An overflow:auto polyfill for responsive design. (c) 2012: Scott Jehl, Filament Group, Inc. http://filamentgroup.github.com/Overthrow/license.txt */
(function( w, o, undefined ){

    // o is overthrow reference from overthrow-polyfill.js
    if( o === undefined ){
        return;
    }

    o.scrollIndicatorClassName = "overthrow";
    
    var doc = w.document,
        docElem = doc.documentElement,
        // o api
        nativeOverflow = o.support === "native",
        canBeFilledWithPoly = o.canBeFilledWithPoly,
        configure = o.configure,
        set = o.set,
        forget = o.forget,
        scrollIndicatorClassName = o.scrollIndicatorClassName;

    // find closest overthrow (elem or a parent)
    o.closest = function( target, ascend ){
        return !ascend && target.className && target.className.indexOf( scrollIndicatorClassName ) > -1 && target || o.closest( target.parentNode );
    };
        
    // polyfill overflow
    var enabled = false;
    o.set = function(){
            
        set();

        // If nativeOverflow or it doesn't look like the browser canBeFilledWithPoly, our job is done here. Exit viewport left.
        if( enabled || nativeOverflow || !canBeFilledWithPoly ){
            return;
        }

        w.overthrow.addClass();

        enabled = true;

        o.support = "polyfilled";

        o.forget = function(){
            forget();
            enabled = false;
            // Remove touch binding (check for method support since this part isn't qualified by touch support like the rest)
            if( doc.removeEventListener ){
                doc.removeEventListener( "touchstart", start, false );
            }
        };

        // Fill 'er up!
        // From here down, all logic is associated with touch scroll handling
            // elem references the overthrow element in use
        var elem,
            
            // The last several Y values are kept here
            lastTops = [],
    
            // The last several X values are kept here
            lastLefts = [],
            
            // lastDown will be true if the last scroll direction was down, false if it was up
            lastDown,
            
            // lastRight will be true if the last scroll direction was right, false if it was left
            lastRight,
            
            // For a new gesture, or change in direction, reset the values from last scroll
            resetVertTracking = function(){
                lastTops = [];
                lastDown = null;
            },
            
            resetHorTracking = function(){
                lastLefts = [];
                lastRight = null;
            },
        
            // On webkit, touch events hardly trickle through textareas and inputs
            // Disabling CSS pointer events makes sure they do, but it also makes the controls innaccessible
            // Toggling pointer events at the right moments seems to do the trick
            // Thanks Thomas Bachem http://stackoverflow.com/a/5798681 for the following
            inputs,
            setPointers = function( val ){
                inputs = elem.querySelectorAll( "textarea, input" );
                for( var i = 0, il = inputs.length; i < il; i++ ) {
                    inputs[ i ].style.pointerEvents = val;
                }
            },
            
            // For nested overthrows, changeScrollTarget restarts a touch event cycle on a parent or child overthrow
            changeScrollTarget = function( startEvent, ascend ){
                if( doc.createEvent ){
                    var newTarget = ( !ascend || ascend === undefined ) && elem.parentNode || elem.touchchild || elem,
                        tEnd;
                            
                    if( newTarget !== elem ){
                        tEnd = doc.createEvent( "HTMLEvents" );
                        tEnd.initEvent( "touchend", true, true );
                        elem.dispatchEvent( tEnd );
                        newTarget.touchchild = elem;
                        elem = newTarget;
                        newTarget.dispatchEvent( startEvent );
                    }
                }
            },
            
            // Touchstart handler
            // On touchstart, touchmove and touchend are freshly bound, and all three share a bunch of vars set by touchstart
            // Touchend unbinds them again, until next time
            start = function( e ){

                // Stop any throw in progress
                if( o.intercept ){
                    o.intercept();
                }
                
                // Reset the distance and direction tracking
                resetVertTracking();
                resetHorTracking();
                
                elem = o.closest( e.target );
                    
                if( !elem || elem === docElem || e.touches.length > 1 ){
                    return;
                }           

                setPointers( "none" );
                var touchStartE = e,
                    scrollT = elem.scrollTop,
                    scrollL = elem.scrollLeft,
                    height = elem.offsetHeight,
                    width = elem.offsetWidth,
                    startY = e.touches[ 0 ].pageY,
                    startX = e.touches[ 0 ].pageX,
                    scrollHeight = elem.scrollHeight,
                    scrollWidth = elem.scrollWidth,
                
                    // Touchmove handler
                    move = function( e ){
                    
                        var ty = scrollT + startY - e.touches[ 0 ].pageY,
                            tx = scrollL + startX - e.touches[ 0 ].pageX,
                            down = ty >= ( lastTops.length ? lastTops[ 0 ] : 0 ),
                            right = tx >= ( lastLefts.length ? lastLefts[ 0 ] : 0 );
                            
                        // If there's room to scroll the current container, prevent the default window scroll
                        if( ( ty > 0 && ty < scrollHeight - height ) || ( tx > 0 && tx < scrollWidth - width ) ){
                            e.preventDefault();
                        }
                        // This bubbling is dumb. Needs a rethink.
                        else {
                            changeScrollTarget( touchStartE );
                        }
                        
                        // If down and lastDown are inequal, the y scroll has changed direction. Reset tracking.
                        if( lastDown && down !== lastDown ){
                            resetVertTracking();
                        }
                        
                        // If right and lastRight are inequal, the x scroll has changed direction. Reset tracking.
                        if( lastRight && right !== lastRight ){
                            resetHorTracking();
                        }
                        
                        // remember the last direction in which we were headed
                        lastDown = down;
                        lastRight = right;                          
                        
                        // set the container's scroll
                        elem.scrollTop = ty;
                        elem.scrollLeft = tx;
                    
                        lastTops.unshift( ty );
                        lastLefts.unshift( tx );
                    
                        if( lastTops.length > 3 ){
                            lastTops.pop();
                        }
                        if( lastLefts.length > 3 ){
                            lastLefts.pop();
                        }
                    },
                
                    // Touchend handler
                    end = function( e ){

                        // Bring the pointers back
                        setPointers( "auto" );
                        setTimeout( function(){
                            setPointers( "none" );
                        }, 450 );
                        elem.removeEventListener( "touchmove", move, false );
                        elem.removeEventListener( "touchend", end, false );
                    };
                
                elem.addEventListener( "touchmove", move, false );
                elem.addEventListener( "touchend", end, false );
            };
            
        // Bind to touch, handle move and end within
        doc.addEventListener( "touchstart", start, false );
    };
        
})( this, this.overthrow );

// GK Image Show
 jQuery(window).load(function(){
         setTimeout(function() {
             jQuery(".gk-is-wrapper-gk-photo").each(function(i, el){
                 var wrapper = jQuery(el);
                 var $G = [];
                 var slides = [];
                 var links = [];
                 var imagesToLoad = [];
                 var loadedImages = [];
                 var swipe_min_move = 30;
                 var swipe_max_time = 500;
                 // animation variables
                 $G['animation_timer'] = false;
                 $G['anim_speed'] = wrapper.attr('data-speed');
                 $G['anim_interval'] = wrapper.attr('data-interval');
                 $G['autoanim'] = wrapper.attr('data-autoanim');
                 // blank flag
                 $G['blank'] = false;
                 // load the images
                 wrapper.find('figure').each(function(i, el){
                     el = jQuery(el);
                     var newImg = jQuery('<img title="' + el.attr('data-title') + '" class="gk-is-slide" style="z-index: ' + el.attr('data-zindex') + ';" src="'+ el.attr('data-url') + '" />');
                     links[i] = el.attr('data-link');
                     imagesToLoad.push(newImg);
                     el.prepend(newImg);
                 });
                 //
                 imagesToLoad.forEach(function(item, i) {
                     loadedImages.push(false);
                 });
                 //
                 var time = setInterval(function(){
                     var process = 0;                
                     jQuery(imagesToLoad).each(function(i, elm){
                         elm = jQuery(elm);
                         
                         if(elm[0].complete && !loadedImages[i]) {
                            var wrap = elm.parent();
                             var newImgLayer = jQuery('<div title="' + elm.attr('title') + '" class="gk-is-slide" style="z-index: ' + elm.attr('data-zindex') + '; background-image: url(\''+elm.attr('src')+'\');">');
                             
                             wrap.prepend(newImgLayer);
                             
                             if(i > 0) {
                                 newImgLayer.parent().css('opacity', 0);
                             }
                         
                        loadedImages[i] = true;
                         }
                     
                         if(elm[0].complete) {
                        process++;
                         }
                     });
                     
                     if(process == imagesToLoad.length){
                         clearInterval(time);
                         wrapper.find('img.gk-is-slide').each(function(i, img){
                              jQuery(img).remove();
                         });
                                         
                         setTimeout(function() {
                             wrapper.find('.gk-is-preloader').css('position', 'absolute');
                             wrapper.find('.gk-is-preloader').fadeOut();
                             wrapper.find('figure').first().css('opacity', 1).fadeIn();
                             wrapper.find('figure').addClass('active');
                             wrapper.addClass('loaded');
         
                             setTimeout(function() {
                                wrapper.find('figure').first().addClass('activated');
                            }, 50);

                             setTimeout(function() {
                                wrapper.find('.gk-is-preloader').remove();
                            }, 300);
                            
                         }, 400); 
                                 
                         $G['actual_slide'] = 0;

                         var arrow_element = jQuery('<div class="gk-is-wrapper-arrow">');
                         wrapper.append(arrow_element);
                         
                         wrapper.find('.gk-is-slide').each(function(i, elmt) {
                            slides[i] = jQuery(elmt);

                            if(!Modernizr || (Modernizr && !Modernizr.touch)) {
                                jQuery(elmt).mouseover(function() {
                                    if(!wrapper.hasClass('gk-arrow-visible')) {
                                        wrapper.addClass('gk-arrow-visible');
                                    }
                                });

                                jQuery(elmt).mouseout(function() {
                                    if(wrapper.hasClass('gk-arrow-visible')) {
                                        wrapper.removeClass('gk-arrow-visible');
                                    }
                                });

                                jQuery(elmt).mousemove(function(e) {
                                    var w = wrapper.outerWidth();
                                    if(e.pageX > w/2 && !arrow_element.hasClass('inverse')) {
                                    arrow_element.addClass('inverse');
                                    } else if(e.pageX < w/2 && arrow_element.hasClass('inverse')) {
                                        arrow_element.removeClass('inverse');
                                    }
                                    
                                    arrow_element.css({
                                        'top': e.pageY- 64 + "px",
                                        'left': e.pageX - 32 + "px"
                                    });

                                });
                            }
                         });
         
                         setTimeout(function() {
                             var initfig = slides[0].parent().find('figcaption');
                             if (initfig) {
                                initfig.css('opacity', 0);
                                 initfig.animate({ opacity: 1 }, 250);
                             }
                         }, 250);
                         //

                         var pagination = jQuery('.gk-is-pagination');
                         pagination.addClass('gk-is-photo-pagination');

                         if(jQuery('#page-nav').length > 0)  {
                            jQuery('#page-nav').prepend(pagination);
                         }

                         pagination.children('li').each(function(i, item) {
                             jQuery(item).click(function() {
                                 if (i != $G['actual_slide']) {
                                     $G['blank'] = true;
                                     gk_photo_autoanimate($G, wrapper, 'next', i);
                                 }
                             });
                         });           
                         
                         // auto-animation
                         if ($G['autoanim'] == 'on') {
                             $G['animation_timer'] = setTimeout(function() {
                                 gk_photo_autoanimate($G, wrapper, 'next', null);
                             }, $G['anim_interval']);
                         }

                         // navigation
                        jQuery('.gk-is-slide').click(function() {
                            $G['blank'] = true;
                            
                            if(arrow_element.hasClass('inverse')) {
                                gk_photo_autoanimate($G, wrapper, 'next', null);
                            } else {
                                gk_photo_autoanimate($G, wrapper, 'prev', null);
                            }
                        });
                             
                         // pagination
                         var slide_pos_start_x = 0;
                         var slide_pos_start_y = 0;
                         var slide_time_start = 0;
                         var slide_swipe = false;
 
                         wrapper.bind('touchstart', function (e) {
                             slide_swipe = true;
                             var touches = e.originalEvent.changedTouches || e.originalEvent.touches;
 
                             if (touches.length > 0) {
                                 slide_pos_start_x = touches[0].pageX;
                                 slide_pos_start_y = touches[0].pageY;
                                 slide_time_start = new Date().getTime();
                             }
                         });
 
                         wrapper.bind('touchmove', function (e) {
                             var touches = e.originalEvent.changedTouches || e.originalEvent.touches;
 
                             if (touches.length > 0 && slide_swipe) {
                                 if (
                                     Math.abs(touches[0].pageX - slide_pos_start_x) > Math.abs(touches[0].pageY - slide_pos_start_y)
                                 ) {
                                     e.preventDefault();
                                 } else {
                                     slide_swipe = false;
                                 }
                             }
                         });
 
                         wrapper.bind('touchend', function (e) {
                             var touches = e.originalEvent.changedTouches || e.originalEvent.touches;
 
                             if (touches.length > 0 && slide_swipe) {
                                 if (
                                     Math.abs(touches[0].pageX - slide_pos_start_x) >= swipe_min_move &&
                                     new Date().getTime() - slide_time_start <= swipe_max_time
                                 ) {
                                     if (touches[0].pageX - slide_pos_start_x > 0) {
                                         $G.blank = true;
                                         gk_photo_autoanimate($G, wrapper, 'prev', null);
                                     } else {
                                         $G.blank = true;
                                         gk_photo_autoanimate($G, wrapper, 'next', null);
                                     }
                                 }
                             }
                         });
                     }
                 }, 500);
             });
     }, 1000);
 });
 
 var gk_photo_animate = function($G, wrapper, imgPrev, imgNext) {
     var prevfig = jQuery(imgPrev).find('figcaption');
     //
     if (prevfig) {
         prevfig.css('opacity', 1);
         prevfig.animate({
             opacity: 0
         }, 150);
     }
     //
     jQuery(imgNext).attr('class', 'animated');
 
     jQuery(imgPrev).animate({
         opacity: 0
     }, $G['anim_speed'], function() {
         jQuery(imgPrev).attr('class', '');
     });
    
    jQuery(imgNext).animate({
         opacity: 1
     }, $G['anim_speed'], function() {
         jQuery(imgNext).attr('class', 'active');
         var nextfig = jQuery(imgNext).find('figcaption');
         
        setTimeout(function() {
            jQuery(imgNext).attr('class', 'active activated');
        }, 50);
         
         if (nextfig) {
             nextfig.css('opacity', 0);
             nextfig.animate({
                 opacity: 1
             }, 150);
         }
         if ($G['autoanim'] == 'on') {
             clearTimeout($G['animation_timer']);
 
             $G['animation_timer'] = setTimeout(function() {
                 if ($G['blank']) {
                     $G['blank'] = false;
                     clearTimeout($G['animation_timer']);
 
                     $G['animation_timer'] = setTimeout(function() {
                         gk_photo_autoanimate($G, wrapper, 'next', null);
                     }, $G['anim_interval']);
                 } else {
                     gk_photo_autoanimate($G, wrapper, 'next', null);
                 }
             }, $G['anim_interval']);
         }
     });
 };
 
 var gk_photo_autoanimate = function($G, wrapper, dir, next) {
     var i = $G['actual_slide'];
     var imgs = wrapper.find('figure');
 
     if (next == null) {
         next = (dir == 'next') ? ((i < imgs.length - 1) ? i + 1: 0) : ((i == 0) ? imgs.length - 1: i - 1);
         // dir: next|prev
         }
 
     gk_photo_animate($G, wrapper, imgs[i], imgs[next]);
     $G['actual_slide'] = next;
    
     var pagination = jQuery('.gk-is-pagination');
     pagination.children('li').removeClass('active');
     pagination.children('li').eq(next).addClass('active');
 };