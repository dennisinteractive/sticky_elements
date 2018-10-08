(function () {
  if (Drupal) {
    Drupal.behaviors.stickyElementsBehavior = {
      attach: function (context, settings) {
        // If StickyElements is loaded then go for it. If not wait for the load event.
        if(StickyElements) {
          StickyElements.init(settings.sticky_elements);
        }else {
          document.addEventListener("sticky-element:load", function(event){
            StickyElements.init(settings.sticky_elements);
          }.bind(window));
        }
        
        googletag.cmd.push(function(){
          googletag.pubads().addEventListener('slotRenderEnded', function (event) {
            var slotSelector = '#' + event.slot.getSlotElementId();
            var slotElement = document.querySelector(slotSelector);

            settings.sticky_elements.elements.forEach(function(element){
              var slotChild = element.target.querySelector(slotSelector);

              if (element.target === slotElement || slotChild) {
                if(element.type !== "timeout") {
                  StickyElements.resetParent(element);
                }else{
                  StickyElements.setTimeoutTriggers();
                }
              }
            });
          });
        });
      }
    };
  }
})();