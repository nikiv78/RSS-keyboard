import generateKeyboard from './generateKb.js'
import languages from './languages.js';


export default () => {
  const container = document.createElement('div');
  container.classList.add('container');

  const textWrapper = document.createElement('textarea');
  textWrapper.classList.add('text');

  const keyboard = generateKeyboard(languages.eng)

  const info = document.createElement('div')
  info.classList.add('body')
  info.innerHTML = `<span>создано для винды</span>
  <span><br>смена языка через шифт альт</span>`


  container.append(textWrapper);
  container.append(keyboard);
  container.append(info);
  document.body.append(container);

  }

