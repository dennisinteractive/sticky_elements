<?php

/**
 * @file
 * Context reaction plugin for Sticky Elements.
 */

/**
 * Reaction form for sticky elements.
 */
class sticky_elements_context_reaction extends context_reaction {
  /**
   * Options form.
   * @see context_reaction::options_form()
   */
  function options_form($context) {
    // Get existing values for this form.
    $settings = $this->fetch_from_context($context);
    $existing_elements = isset($settings['elements']) ? $settings['elements'] : array();
    return _sticky_elements_elements_form($existing_elements);
  }

  /**
   * Options form submit handler.
   */
  function options_form_submit($values) {
    // Remove form elements, such as buttons, that shouldn't be exported in context.
    foreach ($values['elements'] as &$element) {
      unset($element['remove']);
    }
    unset($values['sticky_elements_more_elements']);
    return $values;
  }

  /**
   * Add sticky JS configuration.
   */
  function execute(&$variables) {
    foreach ($this->get_contexts() as $context) {
      if (!isset($context->reactions['sticky_elements_context'])) {
        continue;
      }
      if ($elements = $this->fetch_from_context($context, 'values')) {
        drupal_add_js(array('sticky_elements' => $elements), 'setting');
        drupal_add_js(libraries_get_path('sticky_elements_js') . '/dist/stickyElements.min.js', array(
          'attributes' => array('async' => 'async'),
        ));
        drupal_add_js(drupal_get_path('module', 'sticky_elements') . '/js/sticky_elements_init.js');
      }
    }
  }
}
