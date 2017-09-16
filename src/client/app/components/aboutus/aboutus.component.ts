import { Component } from '@angular/core';

let COMPONENT_DEF = {
    moduleId: module.id,
    templateUrl: 'aboutus.component.html',
    selector: 'aboutus-component'
};

@Component(COMPONENT_DEF)
class AboutUsComponent {
    constructor() {
        console.log('AboutUs Component Initialized!');
    }
}

export default AboutUsComponent;
