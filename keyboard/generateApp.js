import generateKeyboard from './generateKb.js'



export default (languages) => {
  const container = document.createElement('div');
  container.classList.add('container');

  const textWrapper = document.createElement('textarea');
  textWrapper.classList.add('text');
  textWrapper.dataset.position = 0;
  textWrapper.addEventListener('click', (e) => {
    textWrapper.dataset.position = e.target.selectionStart
  })

  const keyboard = generateKeyboard(textWrapper)

  const info = document.createElement('div')
  info.classList.add('body')
  info.innerHTML = `<span>создано для винды</span>
  <span><br>смена языка через шифт альт</span>`


  container.append(textWrapper);
  container.append(keyboard);
  container.append(info);
  document.body.append(container);

  textWrapper.focus()

  }

