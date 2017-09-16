import { Component } from '@angular/core';

let COMPONENT_DEF = {
    moduleId: module.id,
    templateUrl: 'vacancies.component.html',
    selector: 'vacancies-component'
};

@Component(COMPONENT_DEF)
class VacanciesComponent {
    constructor() {
        console.log('Vacancies Component Initialized!');
    }
}

export default VacanciesComponent;
