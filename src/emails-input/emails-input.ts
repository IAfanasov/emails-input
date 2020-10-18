import './styles/emails-input.scss';
import CrossIcon from '../../src/assets/icons/cross.svg';

import {isValidEmail} from './is-valid-email';
import {normalizeEmailValues} from './normilize-email-value';

export interface EmailInputAPI {
    /** Adds the email
     * @param email a string with an email or comma separated emails or array of such strings
     */
    add: (email: string | string[]) => void;
    /** @returns array with all the valid entered emails */
    getValidEmails: () => string[];
}

export interface EmailInputOptions {
    value: string | string[];
}

export function EmailsInput(elementOrListOfElelemnts: HTMLElement, options?: EmailInputOptions): EmailInputAPI {
    if (!elementOrListOfElelemnts) {
        return null;
    }

    const emailInputContainer = elementOrListOfElelemnts as HTMLElement;
    emailInputContainer.classList.add('emails-input');

    const input: HTMLInputElement = createInput();
    emailInputContainer.appendChild(input);

    const publicApi = createPublicAPI(emailInputContainer, input);

    subscribeToInputEvents(input, publicApi);

    if (options && options.value) {
        publicApi.add(options.value);
    }

    return publicApi;
}

function createInput(): HTMLInputElement {
    const input = document.createElement('input');
    input.placeholder = 'add more people...';
    input.classList.add('emails-input--input');
    return input;
}

function subscribeToInputEvents(input: HTMLInputElement, publicApi: EmailInputAPI) {
    function inputValueToChips() {
        publicApi.add(input.value);
        input.value = '';
    }

    // onpaste fires before the input updated
    input.onpaste = () => setTimeout(inputValueToChips, 0);
    input.onblur = inputValueToChips;
    input.onkeyup = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            inputValueToChips();
        }
    };
}

function appendChip(emailInputContainer: HTMLElement, normalizedEmail: string, input: HTMLInputElement): HTMLDivElement {
    const chipContainer = document.createElement('div');
    chipContainer.classList.add('emails-input--chip');
    if (isValidEmail(normalizedEmail)) {
        chipContainer.classList.add('emails-input--chip__valid');
    } else {
        chipContainer.classList.add('emails-input--chip__invalid');
    }

    const chipTextElelemnt = document.createElement('span');
    chipTextElelemnt.classList.add('emails-input--chip-text');
    chipTextElelemnt.innerText = normalizedEmail;
    chipContainer.append(chipTextElelemnt);

    const removeChipIcon = document.createElement('img');
    removeChipIcon.classList.add('emails-input--chip-remove');
    removeChipIcon.classList.add('pointer');
    removeChipIcon.src = CrossIcon;
    removeChipIcon.onclick = () => chipContainer.remove();
    chipContainer.append(removeChipIcon);

    emailInputContainer.insertBefore(chipContainer, input);

    return chipContainer;
}

function createPublicAPI(emailInputContainer: HTMLElement, input: HTMLInputElement): EmailInputAPI {
    const add = (value: string | string[]) => normalizeEmailValues(value).forEach(email => appendChip(emailInputContainer, email, input));
    const getValidEmails = () => (Array.from(emailInputContainer.querySelectorAll('.emails-input--chip__valid')) as HTMLElement[])
        .map(x => x.innerText);

    return {
        add,
        getValidEmails,
    };
}

(window as any).EmailsInput = EmailsInput;
