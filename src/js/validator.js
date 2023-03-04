export default class Validator {
  constructor(login) {
    this.login = login;
  }

  validateUsername() {
    let test = !/[^\w-]/.test(this.login);
    if (test) {
      test = /^[\D_-][\w-]+[\D_-]$/.test(this.login);
    }

    if (test) {
      test = !/\d{4}/.test(this.login);
    }

    return test;
  }
}
