<?php
if(!class_exists('Photo_Customize_Category_Checklist')) {
	function photo_add_custom_controls($wp_customize) {
		class Photo_Customize_Category_Checklist extends WP_Customize_Control {
			public $type = 'category_checklist';

			public function __construct($manager, $id, $args = array()) {
        		parent::__construct($manager, $id, $args);
    		}

	    	public function enqueue() {
	        	wp_enqueue_script('photo-category-checklist', get_template_directory_uri() . '/js/theme-customizer.js' );
	        	wp_enqueue_style('photo-category-checklist', get_template_directory_uri() . '/css/customizer.css');
			}

	    	public function render_content() {
	    		?>
				<label>
			        <?php if(!empty($this->label)) : ?>
			            <span class="customize-control-title">
			                <?php echo esc_html( $this->label ); ?>
			            </span>
			        <?php endif; ?>
			 
			      <?php if(!empty($this->description)) : ?>
			         <span class="description customize-control-description">
			            <?php echo $this->description ; ?>
			         </span>
			        <?php endif; ?>
			 
			 		<div class="gk-category-checklist">
			        	<ul>
				        	<li class="gk-fake-checkbox"><input type="checkbox" /></li>
				        	<?php wp_category_checklist(0, 0, explode(',', $this->value()), false, new GK_TC_Walker_Category_Checklist($this->id), false); ?>
	        			</ul>
			        	<input type="hidden" id="<?php echo $this->id; ?>" class="gk-category-checklist-value" <?php $this->link(); ?> value="<?php echo sanitize_text_field( $this->value() ); ?>">
			        </div>
			    </label>
	    		<?php
	    	}
	    }
	}
	
	add_action('customize_register', 'photo_add_custom_controls');
}

class GK_TC_Walker_Category_Checklist extends Walker {
	var $tree_type = 'category';
	var $db_fields = array ('parent' => 'parent', 'id' => 'term_id');
	var $field_name = '';

	function __construct($field_name) {
		$this->field_name = $field_name;
	}
	function start_lvl( &$output, $depth = 0, $args = array() ) {
		$indent = str_repeat("\t", $depth);
		$output .= "$indent<ul class='children'>\n";
	}
	function end_lvl( &$output, $depth = 0, $args = array() ) {
		$indent = str_repeat("\t", $depth);
		$output .= "$indent</ul>\n";
	}
	function start_el( &$output, $category, $depth = 0, $args = array(), $id = 0 ) {
		extract($args);
		$output .= "\n<li>" . '<label><input value="' . $category->term_id . '" type="checkbox" ' . checked(in_array($category->term_id, $selected_cats), true, false ) . disabled(empty($args['disabled']), false, false) . ' class="gk-category-checklist-checkbox" data-id="'.$this->field_name.'" data-category-id="'.$category->term_id.'" /> ' . esc_html( apply_filters('the_category', $category->name )) . '</label>';
	}
	function end_el( &$output, $category, $depth = 0, $args = array() ) {
		$output .= "</li>\n";
	}
}
// EOF