import KeyboardKey from "./keys.js"
import languages from "./languages.js"
import { setLanguages, getLanguages } from './localStorage.js'

let runSwitchLng = false

function keyboardHandler(keycode, value, textWrapper) {
  const text = textWrapper
  let start = text.dataset.position
  let end = text.dataset.position
  switch (keycode) {
    case 'Backspace':
        text.value = `${text.value.slice(0, start - 1)}${text.value.slice(end)}`
        text.dataset.position = text.dataset.position > 0 ? +text.dataset.position - 1 : 0
        
      break;
    case 'Tab':
      break;
    case 'Delete':
      break;
    case 'CapsLock':
      break;
    case 'Enter':
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
      text.value = `${text.value.slice(0, start)}${value}${text.value.slice(end)}`
      text.dataset.position = +text.dataset.position + 1
      
}
}
function switchLng(keyboard) {
    let lang = getLanguages()
    if (lang === 'eng') {
        setLanguages('rus')
        lang = 'rus'
    } else {
        setLanguages('eng')
        lang = 'eng'
    }
    const newCharsArray = languages[lang]
    keyboard.innerHTML = ''
    
    newCharsArray.forEach(kbRow => {
        const row = document.createElement('div')
        row.classList.add('keyboard__row')
    
        kbRow.forEach((key) => {
          const keyboardKey = new KeyboardKey(key)
          row.append(keyboardKey.generate('small'))
        }
        )
    
        keyboard.append(row)
      })
    
    }

    function switchCase(keyboard, charCase) {
        let lang = getLanguages()
        const newCharsArray = languages[lang]
        keyboard.innerHTML = ''
        
        newCharsArray.forEach(kbRow => {
            const row = document.createElement('div')
            row.classList.add('keyboard__row')
        
            kbRow.forEach((key) => {
              const keyboardKey = new KeyboardKey(key)
              row.append(keyboardKey.generate(charCase))
            }
            )
        
            keyboard.append(row)
          })
        
        }




export default (textWrapper) => {
  const lng = getLanguages()
  const charsArray = languages[lng]
  const keyboard = document.createElement('div')
  keyboard.classList.add('keyboard')

  charsArray.forEach(kbRow => {
    const row = document.createElement('div')
    row.classList.add('keyboard__row')

    kbRow.forEach((key) => {
      const keyboardKey = new KeyboardKey(key)
      row.append(keyboardKey.generate('small'))
    }
    )

    keyboard.append(row)
  })

  keyboard.addEventListener('click', (e) => {
    if (e.target.dataset.keycode) {
      const keycode = e.target.dataset.keycode
        const value = e.target.innerText
      keyboardHandler(keycode, value, textWrapper)  
    }})

    window.addEventListener('keydown', (e) => {
        e.preventDefault()

        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            switchCase(keyboard)
        }

if (e.code === 'ShiftLeft' || e.code === 'AltLeft') {
   if (runSwitchLng) {
       switchLng(keyboard)
       runSwitchLng = false
   } else {
       runSwitchLng = true
   }

}

        const key = document.querySelector(`[data-keycode=${e.code}]`)
        if (key) {
            key.classList.add('active')
          const keycode = key.dataset.keycode
          const value = key.innerText
          keyboardHandler(keycode, value, textWrapper)
        }})
        
    window.addEventListener('keyup', (e) => {
if (e.code === 'ShiftLeft' || e.code === 'AltLeft') {
    runSwitchLng = false
}

        const key = document.querySelector(`[data-keycode=${e.code}]`)
        if (key) {
            key.classList.remove('active')
        }
  })

  window.addEventListener('contextmenu', (e) => {
    switchLng(keyboard)
})

  return keyboard
}