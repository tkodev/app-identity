<?php

if(!class_exists('Photo_Color_Utils')) {
	class Photo_Color_Utils {
	    static function color_change($color, $diff_r = 0, $diff_g = 0, $diff_b = 0){
	        $color = str_replace('#', '', $color);
	        if (strlen($color) != 6){ 
	        	return '#000000'; 
	        }
	        
	        $rgb = '';
	     
	        for ($x=0; $x < 3; $x++){
	        	$diff = $diff_r;
	        	if($x == 1) $diff = $diff_g;
	        	if($x == 2) $diff = $diff_b;
	        	
	            $subcolor = hexdec(substr($color,(2 * $x),2)) - $diff;
	            $subcolor = ($subcolor < 0) ? 0 : dechex($subcolor);
	            $rgb .= (strlen($subcolor) < 2) ? '0'.$subcolor : $subcolor;
	        }
	     
	        return '#'.$rgb;
	    }
	    
	    static function color_rgba($color, $alpha = 1) {
	    	$color = str_replace('#', '', $color);
			if (strlen($color) != 6){ 
					return $color; 
			}
			
			$rgb = array();
			
			for ($x=0; $x < 3; $x++) {
			   $subcolor = hexdec(substr($color,(2 * $x),2));
			   $rgb[$x] = $subcolor;
			}
			
			return 'rgba('.$rgb[0].','.$rgb[1].','.$rgb[2].','.$alpha.')';
	    }
	}	
}