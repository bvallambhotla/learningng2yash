import { Pipe, PipeTransform } from '@angular/core';

const PEOPLE_IMAGE_BASE_URL: string = '/assets/images/people/';
const DEFAULT_FORMAT: string = 'JPG';

const PIPE_DEF = {
    name: 'photoUrl'
};

@Pipe(PIPE_DEF)
class PhotoUrlPipe implements PipeTransform {
    transform(bindingValue: any, ...args: any[]): string {
        let photoUrl: string = '';
        let format: string = args[0] || DEFAULT_FORMAT;

        if (bindingValue) {
            photoUrl = `${PEOPLE_IMAGE_BASE_URL}/Customer${bindingValue}.${format}`;
        }

        return photoUrl;
    }
}

export default PhotoUrlPipe;
