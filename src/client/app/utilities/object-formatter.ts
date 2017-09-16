const DELIMITER: string = ', ';
const NO_OF_TRAIL_CHARACTERS: number = 2;
const START_POS: number = 0;
const INVALID_ARGUMENTS: string = 'Invalid Argument(s) Specified!';

class ObjectFormatter {
    static format(formattableObject: any): string {
        let formattedMessage: string = '';

        if (!formattableObject)
            throw new Error(INVALID_ARGUMENTS);

        for (let property in formattableObject) {
            let propertyValue = formattableObject[property];

            if (propertyValue && typeof propertyValue !== 'function') {
                formattedMessage += `${propertyValue}${DELIMITER}`;
            }

            formattedMessage = formattedMessage.substr(START_POS,
                formattedMessage.length - NO_OF_TRAIL_CHARACTERS);
        }

        return formattedMessage;
    }
}

export default ObjectFormatter;
