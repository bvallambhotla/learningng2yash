import { Pipe, PipeTransform } from '@angular/core';

let PIPE_DEF = {
    name: 'where'
};

const FIND_INDEX_POS = 0;

@Pipe(PIPE_DEF)
class WherePipe implements PipeTransform {
    transform(bindingValue: any[], ...args: any[]): any[] {
        let filteredValues: any[] = bindingValue;

        let filterProperty: string = args[0];
        let filterValue: string = args[1];

        if (filterProperty && filterValue) {
            filteredValues = bindingValue.filter(
                item => item[filterProperty].indexOf(filterValue) >= FIND_INDEX_POS);
        }
        
        return filteredValues;
    }
}

export default WherePipe;
