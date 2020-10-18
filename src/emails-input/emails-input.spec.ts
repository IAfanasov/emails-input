import {EmailsInput} from './emails-input';

describe('EmailsInput', () => {

    it(`return null When null provided instead of html element`, () => {
        const result = EmailsInput(null);

        expect(result).toBeNull();
    });

});
