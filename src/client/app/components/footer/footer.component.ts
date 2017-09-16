import { Component } from '@angular/core';

let COMPONENT_DEF = {
    moduleId: module.id,
    templateUrl: 'footer.component.html',
    selector: 'footer-component'
};

@Component(COMPONENT_DEF)
class FooterComponent {
    constructor() {
        console.log('Footer Component Initialized!');
    }
}

export default FooterComponent;
