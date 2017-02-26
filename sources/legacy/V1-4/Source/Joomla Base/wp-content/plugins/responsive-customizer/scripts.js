(function($) {
	var iframe, wprc_v, bv, bvpr, width = false, height = false;

	var previewer = wp.customize.Previewer;
	wp.customize.Previewer = previewer.extend({
		refresh: function() {
			previewer.prototype.refresh.apply(this);
			this.loading.done( function() {
				iframe = $('#customize-preview iframe');
				if (width && height) {
					iframe.width(width).height(height);
				}
			});
		}
	});

	$.fn.resizeTo = function(dimensions) {
		var $this = $(this), marginLeft;

		dimensions = dimensions.split('x');
		if (isNaN(dimensions[0]) || isNaN(dimensions[1])) {
			return $this;
		}

		width = parseInt(dimensions[0]);
		height = parseInt(dimensions[1]);

		marginLeft = 0 - width / 2;

		$this.each(function() {
			$(this).animate({
				width: width + 'px',
				height: height + 'px'
			}, 1000);
		});

		return $this;
	};

	wprc_v = wprcustomizer.view = {};
	bv = Backbone.View;
	bvpr = bv.prototype.render;

	if (!_.isFunction(bv.prototype.make)) {
		bv.prototype.make = function(tag, attrs, val) {
			var html, attr;

			html = '<' + tag;
			for (attr in attrs) {
				html += ' ' + attr + '="' + attrs[attr] + '"';
			}
			html += '>' + val + '</' + tag + '>';

			return html;
		};
	}

	wprc_v.Toolbar = bv.extend({
		id: 'wprc-reponsive-preview',

		render: function() {
			var self = this, resolutions, rotator;

			bvpr.apply(self, arguments);

			resolutions = new wprc_v.Resolutions();
			resolutions.render();
			self.$el.append(resolutions.$el);

			rotator = new wprc_v.Rotator();
			rotator.render();
			self.$el.append(rotator.$el);
		}
	});

	wprc_v.Resolutions = bv.extend({
		id: 'wprc-resolutions',
		tagName: 'select',

		events: {
			change: 'onResolutionChange'
		},

		render: function() {
			var self = this;

			bvpr.apply(self, arguments);

			self.$el.append(self.make('option', {}, '-- ' + wprcustomizer.l10n.select + ' --'));
			self.$el.append(_.chain(wprcustomizer.devices).map(function(devices) {
				return $(self.make('optgroup', { label: devices.title }, _.chain(devices.sizes).map(function(size) {
					return self.make('option', {}, size);
				}).value()));
			}).value());
		},

		onResolutionChange: function(e) {
			this.$el.find('> option').remove();
			iframe.resizeTo(e.target.value);
		}
	});

	wprc_v.Rotator = bv.extend({
		tagName: 'button',
		className: 'button',

		events: {
			click: 'onRotateClick'
		},

		render: function() {
			bvpr.apply(this, arguments);
			this.$el.attr('type', 'button').text(wprcustomizer.l10n.rotate);
		},

		onRotateClick: function() {
			var width = iframe.width(),
				height = iframe.height();

			iframe.resizeTo(height + 'x' + width);
		}
	});

	$(document).ready(function() {
		var toolbar = new wprc_v.Toolbar();

		toolbar.render();
		$('#customize-preview').prepend(toolbar.$el);
	});
})(jQuery);