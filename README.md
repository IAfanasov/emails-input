# Emails input component

## Usage

Import the emails input script file. Call the `EmailsInput` function with HtmlElement or collection of elements which should contain the emails input. 
``` js
const emailsInput = EmailsInput(inputContainerNode, options);
```

### Options
```ts
interface EmailInputOptions {
    value: string | string[];
}
```
Value could be a string with an email or comma separated emails or array of such strings. Examples of supported values:
```
'iafanasov@hotmail.com'
'iafanasov@hotmail.com,iafanasov@outlook.com'
' iafanasov@hotmail.com , iafanasov@outlook.com '
[' iafanasov@hotmail.com , iafanasov@outlook.com ']
[' iafanasov@hotmail.com , iafanasov@outlook.com ', null]
[' iafanasov@hotmail.com , iafanasov@outlook.com ', 'iafanasov@gmail.com']
``` 

### API
The EmailsInput function call return the object with the following API
```ts
export interface EmailInputAPI {
    /** Adds the email
     * @param email a string with an email or comma separated emails or array of such strings
     */
    add: (email: string | string[]) => void;
    /** @returns array with all the valid entered emails */
    getValidEmails: () => string[];
}
```

### Examples

```js
const inputContainerNode = document.querySelector('#emails-input');
const emailsInput = EmailsInput(inputContainerNode, {value: [' iafanasov@hotmail.com , trololo ', 'iafanasov@gmail.com']});
```
```js
const inputContainerNodes = document.querySelectorAll('.my-emails-input');
inputContainerNodes.forEach(function (elem) {
   EmailsInput(elem);
})
```

## Development

`package.json` contains all the information and commands necessary for the further development.
