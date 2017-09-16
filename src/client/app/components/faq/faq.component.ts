import { Component } from '@angular/core';

let COMPONENT_DEF = {
    moduleId: module.id,
    templateUrl: 'faq.component.html',
    selector: 'faq-component'
};

@Component(COMPONENT_DEF)
class FaqComponent {
    constructor() {
        console.log('Faq Component Initialized!');
    }
}

export default FaqComponent;
