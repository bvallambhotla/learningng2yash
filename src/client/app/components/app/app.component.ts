import { Component } from '@angular/core';

let COMPONENT_DEF: any = {
    moduleId: module.id,
    templateUrl: 'app.component.html',
    selector: 'app-component'
};

@Component(COMPONENT_DEF)
class AppComponent {
    constructor() {
        console.log('App Component Initialized!');
    }
}

export default AppComponent;