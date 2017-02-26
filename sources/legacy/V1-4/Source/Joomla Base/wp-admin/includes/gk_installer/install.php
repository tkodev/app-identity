<?php

function gk_installer_run($table_prefix, $wpdb) {
	// set the predefined options
	gk_installer_predefined_options($wpdb, $table_prefix);
	// page url
	$page_url = get_option('siteurl');
	// load the SQL dumps files
	$comments_dump = file_get_contents(dirname(__FILE__) . '/sql_dumps/comments.sql');
	$options_dump = file_get_contents(dirname(__FILE__) . '/sql_dumps/options.sql');
	$postmeta_dump = file_get_contents(dirname(__FILE__) . '/sql_dumps/postmeta.sql');
	$posts_dump = file_get_contents(dirname(__FILE__) . '/sql_dumps/posts.sql');
	$term_rel_dump = file_get_contents(dirname(__FILE__) . '/sql_dumps/term_relationships.sql');
	$term_tax_dump = file_get_contents(dirname(__FILE__) . '/sql_dumps/term_taxonomy.sql');
	$terms_dump = file_get_contents(dirname(__FILE__) . '/sql_dumps/terms.sql');
	// replace all variables with the proper values
	$comments_dump = str_replace(array('{$table_prefix}', '{$page_url}'), array($table_prefix, $page_url), $comments_dump);
	$options_dump = str_replace(array('{$table_prefix}', '{$page_url}', '{$inactive_widgets}'), array($table_prefix, $page_url, 's:'.(16 + strlen($table_prefix)).':\"'.$table_prefix.'inactive_widgets'), $options_dump);
	$postmeta_dump = str_replace(array('{$table_prefix}', '{$page_url}'), array($table_prefix, $page_url), $postmeta_dump);
	$posts_dump = str_replace(array('{$table_prefix}', '{$page_url}'), array($table_prefix, $page_url), $posts_dump);
	$term_rel_dump = str_replace(array('{$table_prefix}', '{$page_url}'), array($table_prefix, $page_url), $term_rel_dump);
	$term_tax_dump = str_replace(array('{$table_prefix}', '{$page_url}'), array($table_prefix, $page_url), $term_tax_dump);
	$terms_dump = str_replace(array('{$table_prefix}', '{$page_url}'), array($table_prefix, $page_url), $terms_dump);
	// run the queries from SQL dumps
	$wpdb->query($comments_dump);
	$wpdb->query('ALTER TABLE '.$table_prefix.'comments AUTO_INCREMENT=5;');
	$wpdb->query($options_dump);
	$wpdb->query('ALTER TABLE '.$table_prefix.'options AUTO_INCREMENT=643;');
	$wpdb->query($postmeta_dump);
	$wpdb->query('ALTER TABLE '.$table_prefix.'postmeta AUTO_INCREMENT=819;');
	$wpdb->query($posts_dump);
	$wpdb->query('ALTER TABLE '.$table_prefix.'posts AUTO_INCREMENT=207;');
	$wpdb->query($term_rel_dump);
	// no alter table for the term_relationships
	$wpdb->query($term_tax_dump);
	$wpdb->query('ALTER TABLE '.$table_prefix.'term_taxonomy AUTO_INCREMENT=31;');
	$wpdb->query($terms_dump);
	$wpdb->query('ALTER TABLE '.$table_prefix.'terms AUTO_INCREMENT=31;');
}

function gk_installer_predefined_options($wpdb, $table_prefix) {
	// set the theme
	update_option('template', "Photo");
	update_option('stylesheet', "Photo");
}

// EOF
