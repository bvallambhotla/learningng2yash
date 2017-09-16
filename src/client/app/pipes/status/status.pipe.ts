import { Pipe, PipeTransform } from '@angular/core';

const SYMBOLS = {
    check: '\u2713',
    cross: '\u2718'
};

const PIPE_DEF = {
    name: 'status'
};

@Pipe(PIPE_DEF)
class StatusPipe implements PipeTransform {
    transform(bindingValue: any, ...args: any[]): string {
        return bindingValue ? SYMBOLS.check : SYMBOLS.cross;
    }
}

export default StatusPipe;
