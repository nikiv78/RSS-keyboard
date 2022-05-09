import KeyboardKey from "./keys.js"

function keyboardHandler(event)

export default (kbLng) => {
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
      keyboardHandler(e)
  })

  return keyboard
}