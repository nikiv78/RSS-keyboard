export default class KeyboardKey {
  constructor({small, shift, code}) {
    this.small = small;
    this.shift = shift;
    this.code = code;
}

  generate() {
    const key = document.createElement('button')
    key.classList.add('keyboard__key')

    switch (this.code) {
      case 'Backspace':
        key.classList.add('backspace__key');
        key.innerText = this.small
        break;
      case 'Tab':
        key.classList.add('tab__key');
        key.innerText = this.small
        break;
      case 'CapsLock':
        key.classList.add('caps__key');
        key.innerText = this.small
        break;
      case 'Enter':
        key.classList.add('enter__key');
        key.innerText = this.small
        break;
      case 'ShiftLeft':
        key.classList.add('shift__key', 'shift__key--left');
        key.innerText = this.small
        break;
      case 'Space':
        key.classList.add('space__key');
        key.innerText = this.small
        break;
        case 'ArrowUp': 
   key.classList.add('keyboard__key')
   key.innerHTML = `<span class="material-icons">
   keyboard_arrow_up
   </span>`
   break
   case 'ArrowDown': 
   key.classList.add('keyboard__key')
   key.innerHTML = `<span class="material-icons">
   keyboard_arrow_down
   </span>`
   break
   case 'ArrowLeft': 
   key.classList.add('keyboard__key')
   key.innerHTML = `<span class="material-icons">
   keyboard_arrow_left
   </span>`
   break
   case 'ArrowRight': 
   key.classList.add('keyboard__key')
   key.innerHTML = `<span class="material-icons">
   keyboard_arrow_right
   </span>`
   break
      default:
        key.classList.add('keyboard__key');
        key.innerText = this.small
    }
    return key
}
}