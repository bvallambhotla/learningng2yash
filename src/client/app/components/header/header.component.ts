import { Component } from '@angular/core';

let COMPONENT_DEF = {
    moduleId: module.id,
    templateUrl: 'header.component.html',
    selector: 'header-component'
};

@Component(COMPONENT_DEF)
class HeaderComponent {
    constructor() {
        console.log('Header Component Initialized!');
    }
}

export default HeaderComponent;
