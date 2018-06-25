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
      // @todo add JS settings.
    }
  }
}
