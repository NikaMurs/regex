export default class Phone {
  constructor(number) {
    this.number = number;
  }

  validatePhone() {
    this.number = this.number.replace(/^[^+]/, '+7');
    this.number = this.number.replace(/[()]/g, '');
    this.number = this.number.replace(/[-_ ]/g, '');
    return this.number;
  }
}
