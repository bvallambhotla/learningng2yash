import { Component } from '@angular/core';

let COMPONENT_DEF = {
    moduleId: module.id,
    templateUrl: 'layout.component.html',
    selector: 'layout-component'
};

@Component(COMPONENT_DEF)
class LayoutComponent {
    constructor() {
        console.log('Layout Component Initialized!');
    }
}

export default LayoutComponent;
