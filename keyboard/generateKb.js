import KeyboardKey from "./keys.js"

function keyboardHandler(event, textWrapper) {
  const text = textWrapper
  let start = text.dataset.position
  let end = text.dataset.position
  switch (event.target.dataset.keycode) {
    case 'Backspace':
        text.value = `${text.value.slice(0, start - 1)}${text.value.slice(end)}`
        text.dataset.position = text.dataset.position > 0 ? +text.dataset.position - 1 : 0
        
      break;
    case 'Tab':
      break;
    case 'CapsLock':
      break;
    case 'Enter':
      break;
    case 'ShiftLeft':
      break;
    case 'Space':
      text.value = `${text.value.slice(0, start)}${' '}${text.value.slice(end)}`
      text.dataset.position = +text.dataset.position + 1
      break;
    case 'ArrowUp':
      break
    case 'ArrowDown':
      break
    case 'ArrowLeft':
      break
    case 'ArrowRight':
      break
    default:
      text.value = `${text.value.slice(0, start)}${event.target.innerText}${text.value.slice(end)}`
      text.dataset.position = +text.dataset.position + 1
      
}
}

export default (kbLng, textWrapper) => {
  const keyboard = document.createElement('div')
  keyboard.classList.add('keyboard')

  kbLng.forEach(kbRow => {
    const row = document.createElement('div')
    row.classList.add('keyboard__row')

    kbRow.forEach((key) => {
      const keyboardKey = new KeyboardKey(key)
      row.append(keyboardKey.generate())
    }
    )

    keyboard.append(row)
  })
  keyboard.addEventListener('click', (e) => {
    if (e.target.dataset.keycode) {
      keyboardHandler(e, textWrapper)  
    }
    
  })

  return keyboard
}