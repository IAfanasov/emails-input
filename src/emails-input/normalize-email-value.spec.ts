import {normalizeEmailValues} from './normilize-email-value';

describe('normalizeEmailValues', () => {

    [{
        value: null,
        expected: [],
    }, {
        value: [],
        expected: [],
    }, {
        value: 'iafanasov@hotmail.com',
        expected: ['iafanasov@hotmail.com'],
    }, {
        value: 'iafanasov@hotmail.com,iafanasov@outlook.com',
        expected: ['iafanasov@hotmail.com', 'iafanasov@outlook.com'],
    }, {
        value: ' iafanasov@hotmail.com , iafanasov@outlook.com ',
        expected: ['iafanasov@hotmail.com', 'iafanasov@outlook.com'],
    }, {
        value: [' iafanasov@hotmail.com , iafanasov@outlook.com '],
        expected: ['iafanasov@hotmail.com', 'iafanasov@outlook.com'],
    }, {
        value: [' iafanasov@hotmail.com , iafanasov@outlook.com ', null],
        expected: ['iafanasov@hotmail.com', 'iafanasov@outlook.com'],
    }, {
        value: [' iafanasov@hotmail.com , iafanasov@outlook.com ', 'iafanasov@gmail.com'],
        expected: ['iafanasov@hotmail.com', 'iafanasov@outlook.com', 'iafanasov@gmail.com'],
    }]
        .forEach(testCase =>
            it(`return ${testCase.expected} When argument is ${testCase.value}`, () => {
                const result = normalizeEmailValues(testCase.value);

                expect(result).toEqual(testCase.expected);
            }),
        );

});
