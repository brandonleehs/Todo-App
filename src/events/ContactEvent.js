import ViewEvent from './ViewEvent';

export default class ContactEvent extends ViewEvent {
  constructor(controller) {
    super(controller);
  }
  bindEventAll() {
    this.#bindSubmitButton();
  }

  #bindSubmitButton() {
    const submitButton = document.querySelector('.contact__submit');

    submitButton.addEventListener('click', function (e) {
      const input = document.querySelector('#name');
      if (input.value) {
        document
          .querySelectorAll('.contact__form input, .contact__form textarea')
          .forEach((node) => (node.value = ''));
        input.value = '';
        e.preventDefault();
      }
    });
  }
}
