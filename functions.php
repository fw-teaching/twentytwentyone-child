<?php
add_action('wp_enqueue_scripts', 'enqueue_parent_styles');
function enqueue_parent_styles() {
    wp_enqueue_style('parent_style', get_template_directory_uri().'/style.css');
}
add_action('wp_enqueue_scripts', 'enqueue_child_styles');
function enqueue_child_styles() {
    wp_enqueue_style('child_style', get_stylesheet_directory_uri().'/style.css');
}
// Jag försöker lägga in lite javascript
// https://webdesign.tutsplus.com/tutorials/how-to-add-custom-javascript-to-your-wordpress-site--cms-34368

add_action('wp_enqueue_scripts', 'tutsplus_enqueue_custom_js');
function tutsplus_enqueue_custom_js() {
    wp_enqueue_script('kraakscript', get_stylesheet_directory_uri().'/scripts/kraakscript.js');
}
?>