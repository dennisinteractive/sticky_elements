(function () {
  Drupal.behaviors.stickyElementsBehavior = {
    attach: function (context, settings) {
      let { sticky_elements } = settings;
      
      var initSticky = function() {
        // Main init entry
        StickyElements.init(sticky_elements);

        // We rejig the slot on in the event that a DFP slot is being targeted
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          let slotSelector = '#' + event.slot.getSlotElementId();
          let slotElement = document.querySelector(slotSelector);

          sticky_elements.elements.forEach(element => {
              let slotChild = element.target.querySelector(slotSelector);
              
              if(element.target === slotElement || slotChild){
                  if(element.type !== 'timeout') {
                  this.setHeight(element.parent, element.value);
                  }else{
                  this.setHeight(element.target);
                  }
                  this.setAllEnds(element);
              }
          });
        }.bind(StickyElements));
      }

      // If StickyElements is loaded then go for it. If not wait for the load event.
      if(StickyElements) {
        initSticky();
      }else {
        document.addEventListener("sticky-element:load", function(event){
          initSticky();
        });
      }
    }
  };
})();