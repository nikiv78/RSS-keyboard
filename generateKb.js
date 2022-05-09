import KeyboardKey from './keys.js';
import languages from './languages.js';
import {
  setLanguages, getLanguages, setCase, getCase,
} from './localStorage.js';

let runSwitchLng = false;

function keyboardHandler(keycode, value, textWrapper) {
  const text = textWrapper;
  const start = text.dataset.position;
  const end = text.dataset.position;
  switch (keycode) {
    case 'Backspace':
      text.value = `${text.value.slice(0, start - 1)}${text.value.slice(end)}`;
      text.dataset.position = text.dataset.position > 0 ? +text.dataset.position - 1 : 0;

      break;
    case 'Tab':
      text.value = `${text.value.slice(0, start)}${'    '}${text.value.slice(end)}`;
      text.dataset.position = +text.dataset.position + 1;
      break;
    case 'Delete':
      text.value = `${text.value.slice(0, start - 1)}${text.value.slice(end)}`;
      text.dataset.position = text.dataset.position > 0 ? +text.dataset.position - 1 : 0;
      break;
    case 'CapsLock':
      break;
    case 'Enter':
      text.value = `${text.value.slice(0, start)}${'\n'}${text.value.slice(end)}`;
      text.dataset.position = +text.dataset.position + 1;
      break;
    case 'MetaLeft':
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
      break;
    case 'ControlLeft':
    case 'ControlRight':
      break;
    case 'AltLeft':
    case 'AltRight':
      break;
    case 'Space':
      text.value = `${text.value.slice(0, start)}${' '}${text.value.slice(end)}`;
      text.dataset.position = +text.dataset.position + 1;
      break;
    default:
      text.value = `${text.value.slice(0, start)}${value}${text.value.slice(end)}`;
      text.dataset.position = +text.dataset.position + 1;
  }
}
function switchLng(keyboard) {
  const keyboardLng = keyboard;
  let lang = getLanguages();
  if (lang === 'eng') {
    setLanguages('rus');
    lang = 'rus';
  } else {
    setLanguages('eng');
    lang = 'eng';
  }
  const newCharsArray = languages[lang];
  keyboardLng.innerHTML = '';

  newCharsArray.forEach((kbRow) => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');

    kbRow.forEach((key) => {
      const keyboardKey = new KeyboardKey(key);
      row.append(keyboardKey.generate('small'));
    });

    keyboard.append(row);
  });
}

function switchCase(keyboard) {
  const lang = getLanguages();
  const switchKeyboard = keyboard;
  let charCase = getCase();

  if (charCase === 'small') {
    setCase('shift');
    charCase = 'shift';
  } else {
    setCase('small');
    charCase = 'small';
  }
  const newCharsArray = languages[lang];
  switchKeyboard.innerHTML = '';

  newCharsArray.forEach((kbRow) => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');

    kbRow.forEach((key) => {
      const keyboardKey = new KeyboardKey(key);
      row.append(keyboardKey.generate(charCase));
    });

    keyboard.append(row);
  });
}

export default (textWrapper) => {
  const lng = getLanguages();
  const charsArray = languages[lng];
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  charsArray.forEach((kbRow) => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');

    kbRow.forEach((key) => {
      const keyboardKey = new KeyboardKey(key);
      row.append(keyboardKey.generate('small'));
    });

    keyboard.append(row);
  });

  keyboard.addEventListener('click', (e) => {
    if (e.target.dataset.keycode) {
      const { keycode } = e.target.dataset;
      const value = e.target.innerText;
      keyboardHandler(keycode, value, textWrapper);
    }
  });

  window.addEventListener('keydown', (e) => {
    e.preventDefault();

    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      switchCase(keyboard);
    }

    if (e.code === 'CapsLock') {
      switchCase(keyboard);
    }

    if (e.code === 'ShiftLeft' || e.code === 'AltLeft') {
      if (runSwitchLng) {
        switchLng(keyboard);
        runSwitchLng = false;
      } else {
        runSwitchLng = true;
      }
    }

    const key = document.querySelector(`[data-keycode=${e.code}]`);
    if (key) {
      key.classList.add('active');
      const { keycode } = key.dataset;
      const value = key.innerText;
      keyboardHandler(keycode, value, textWrapper);
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.code === 'ShiftLeft' || e.code === 'AltLeft') {
      runSwitchLng = false;
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      switchCase(keyboard);
    }

    const key = document.querySelector(`[data-keycode=${e.code}]`);
    if (key) {
      key.classList.remove('active');
    }
  });

  window.addEventListener('contextmenu', () => {
    switchLng(keyboard);
  });

  return keyboard;
};
