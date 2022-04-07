import './style.css'
import { Barbell } from './modules/barbell/main';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Canvas!</h1>
  <canvas width="250" height="150" id="canvas"></canvas>
`

const barbell = new Barbell();
barbell.init();
