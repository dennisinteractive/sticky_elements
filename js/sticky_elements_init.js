import StickyElements from '../../../../libraries/sticky_elements_js';

document.addEventListener("DOMContentLoaded", function(event) {
    let { sticky_elements } = Drupal.settings;

    // StickyElements entry point
    StickyElements.init(sticky_elements);

    // We rejig the slot on DFP render
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
});