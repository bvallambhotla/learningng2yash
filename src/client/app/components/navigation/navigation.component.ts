import { Component } from '@angular/core';

let COMPONENT_DEF = {
    moduleId: module.id,
    templateUrl: 'navigation.component.html',
    selector: 'navigation-component'
};

@Component(COMPONENT_DEF)
class NavigationComponent {
    constructor() {
        console.log('Navigation Component Initialized!');
    }
}

export default NavigationComponent;
