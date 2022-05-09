import languages from './languages.js'

const rusKeyboard = languages.rus
const engKeyboard = languages.eng

const generateApp = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  
  const textWrapper = document.createElement('div');
  textWrapper.classList.add('text');

  const text = document.createElement('textarea');
  textWrapper.append(text);

container.append(textWrapper)
document.body.append(container)

}

generateApp()
