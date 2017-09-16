import { Component } from '@angular/core';

let COMPONENT_DEF = {
    moduleId: module.id,
    templateUrl: 'home.component.html',
    selector: 'home-component'
};

@Component(COMPONENT_DEF)
class HomeComponent {
    constructor() {
        console.log('Home Component Initialized!');
    }
}

export default HomeComponent;
