export function isValidEmail(email: string): boolean {
    // inspired by http://www.regular-expressions.info/email.html
    // tslint:disable-next-line:max-line-length
    return /[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        .test(email);
}
