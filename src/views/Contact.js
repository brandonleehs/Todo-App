import View from './View';

export default class Contact extends View {
  constructor() {
    super();
  }

  render() {
    this._main.appendChild(this.#createContent());
  }

  #createContent() {
    const section = document.createElement('section');
    section.className = 'contact';
    section.innerHTML = `
        <form action="POST" class="contact__form">
                <p class="contact__title">Contact us</p>
  
                <div class="contact__name">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" maxlength="40" required="">
                </div>

                <div class="contact__feedback">
                    <label for="feedback">Let's chat!</label>
                    <textarea id="feedback" name="feedback"></textarea>
                </div>

                <button class="contact__submit" type="submit">Submit</button>
            </form>`;
    return section;
  }
}
