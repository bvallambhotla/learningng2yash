import { Component } from '@angular/core';

let COMPONENT_DEF = {
    moduleId: module.id,
    templateUrl: 'signin.component.html',
    selector: 'signin-component'
};

@Component(COMPONENT_DEF)
class SigninComponent {
    constructor() {
        console.log('Signin Component Initialized!');
    }
}

export default SigninComponent;
