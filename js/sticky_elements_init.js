(function () {
  if (Drupal) {
    Drupal.behaviors.stickyElementsBehavior = {
      attach: function (context, settings) {

        function initSticky() {
          // Main init entry
          StickyElements.init(settings.sticky_elements);

          // We rejig the slot on in the event that a DFP slot is being targeted
          googletag.cmd.push(function(){
            googletag.pubads().addEventListener('slotRenderEnded', function (event) {
              var slotSelector = '#' + event.slot.getSlotElementId();
              var slotElement = document.querySelector(slotSelector);

              settings.sticky_elements.elements.forEach(function(element){
                var slotChild = element.target.querySelector(slotSelector);

                if (element.target === slotElement || slotChild) {
                  if (element.type !== 'timeout') {
                    StickyElements.setDimensions(element.parent, element.value);
                  } else {
                    StickyElements.setDimensions(element.target);
                  }
                  StickyElements.setAllEnds(element);
                }
              });
            });
          });
        }

        // If StickyElements is loaded then go for it. If not wait for the load event.
        if(StickyElements) {
          initSticky();
        }else {
          document.addEventListener("sticky-element:load", function(event){
            initSticky();
          }.bind(window));
        }
      }
    };
  }
})();