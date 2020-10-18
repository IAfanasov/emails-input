import {isValidEmail} from './is-valid-email';

describe(`isValidEmail`, () => {

    describe(`should return TRUE when email is valid`, () => {
        [
            'iafanasov@hotmail.com',
            'iafanasov@outlook.com',
            'a@a.a',
        ].forEach(email => it(email, () =>
                expect(isValidEmail(email)).toBeTrue(),
            ),
        );
    });


    describe(`should return FALSE when email is INvalid`, () => {
        [
            'iafanasov_hotmail.com',
            '@outlook.com',
            'iafanasov@',
            // while this address follows the standard, public facing web sites prefer do not accept such
            'iafanasov@outlook',
        ].forEach(email => it(email, () =>
                expect(isValidEmail(email)).toBeFalse(),
            ),
        );
    });

});
