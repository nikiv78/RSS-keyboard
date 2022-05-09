export default class KeyboardKey {
  constructor({ small, shift, code }) {
    this.small = small;
    this.shift = shift;
    this.code = code;
  }

  generate(charCase) {
    const key = document.createElement('button');
    key.classList.add('keyboard__key');
    key.dataset.keycode = this.code;

    switch (this.code) {
      case 'Backspace':
        key.classList.add('backspace__key');
        key.innerText = this.small;
        break;
      case 'Tab':
        key.classList.add('tab__key');
        key.innerText = this.small;
        break;
      case 'Delete':
        key.innerText = this.small;
        break;
      case 'CapsLock':
        key.classList.add('caps__key');
        key.innerText = 'CapsLock';
        break;
      case 'Enter':
        key.classList.add('enter__key');
        key.innerText = this.small;
        break;
      case 'ShiftLeft':
        key.classList.add('shift__key', 'shift__key--left');
        key.innerText = this.small;
        break;
      case 'ShiftRight':
        key.innerText = this.small;
        break;
      case 'MetaLeft':
        key.innerText = 'Win';
        break;
      case 'ControlLeft':
        key.innerText = this.small;
        break;
      case 'ControlRight':
        key.innerText = this.small;
        break;
      case 'AltLeft':
        key.innerText = this.small;
        break;
      case 'AltRight':
        key.innerText = this.small;
        break;
      case 'Space':
        key.classList.add('space__key');
        key.innerText = this.small;
        break;
      case 'ArrowUp':
        key.classList.add('keyboard__key');
        key.innerHTML = `<span class="material-icons">
   keyboard_arrow_up
   </span>`;
        break;
      case 'ArrowDown':
        key.classList.add('keyboard__key');
        key.innerHTML = `<span class="material-icons">
   keyboard_arrow_down
   </span>`;
        break;
      case 'ArrowLeft':
        key.classList.add('keyboard__key');
        key.innerHTML = `<span class="material-icons">
   keyboard_arrow_left
   </span>`;
        break;
      case 'ArrowRight':
        key.classList.add('keyboard__key');
        key.innerHTML = `<span class="material-icons">
   keyboard_arrow_right
   </span>`;
        break;
      default:
        key.classList.add('keyboard__key');
        key.innerText = this[charCase];
    }
    return key;
  }
}
