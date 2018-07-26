# Sticky Elements

Provides context reaction to make any element on the page sticky

## Requirements 

### Sticky Elements JS
https://github.com/dennisinteractive/sticky_elements_js

This is included as a library in the `sticky_elements.make` file.

Please refer to https://www.drupal.org/project/libraries for more details on using libraries.


## Installation

Install as you would normally install a contributed Drupal module. See:
https://drupal.org/documentation/install/modules-themes/modules-7 for further
information.

## Usage

Add the _Sticky Elements_ context reaction and configure:

### Sticky Element
CSS selector of the element to stick

### Type
| Type            | Value        | Description                                          |
| --------------- | ------------ | ---------------------------------------------------- |
| Trigger element | CSS selector | Stop sticking when this element is reached           |
| Offset          | Pixels       | Stop sticking when this offset is reached            |
| Timeout         | Milliseconds | Stop sticking when this number of seconds has passed |

