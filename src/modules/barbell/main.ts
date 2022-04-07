export class Barbell {
  canvas: HTMLCanvasElement | null;
  ctx;
  canvasHeight: number;
  canvasMidheight: number;
  collarWidth = 10;
  collarHeight = this.collarWidth * 2;
  barbellxStart = 20;
  barbellxEnd = 61;
  barbellHeight = 12;
  barbellEnd = 0;
  plateBuffer = 5;
  plateWidth = 7;

  constructor() {
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvasHeight = this.canvas.height;
    this.canvasMidheight = Math.round(this.canvasHeight / 2);
  }

  canvasExists(): boolean {
    return this.canvas !== null
      && this.canvas !== undefined
      && this.canvas.getContext('2d') !== null
      && this.canvas.getContext('2d') !== undefined;
  }

  drawBarbell() {
    if (this.canvasExists()) {
      const barbellHalf = this.canvasMidheight - this.barbellHeight / 2;
      const barbellLowerHalf = this.canvasMidheight + this.barbellHeight / 2;

      this.ctx.fillStyle = 'Silver';
      this.ctx.beginPath();
      this.ctx.moveTo(this.barbellxStart, barbellHalf);
      this.ctx.lineTo(this.barbellxEnd - this.collarWidth, barbellHalf);
      this.ctx.lineTo(
        this.barbellxEnd - this.collarWidth,
        barbellHalf - this.collarHeight / 2
      );
      this.ctx.lineTo(this.barbellxEnd, barbellHalf - this.collarHeight / 2);
      this.ctx.lineTo(this.barbellxEnd, barbellLowerHalf + this.collarHeight / 2);
      this.ctx.lineTo(this.barbellxEnd - this.collarWidth, barbellLowerHalf + this.collarHeight / 2);
      this.ctx.lineTo(this.barbellxEnd - this.collarWidth, barbellLowerHalf);
      this.ctx.lineTo(this.barbellxStart, barbellLowerHalf);
      this.ctx.closePath();
      this.ctx.fill();

      this.addBarbellLength(this.barbellxEnd);
    }
  }

  addBarbellLength(length: number) {
    this.barbellEnd = this.barbellEnd + length;
  }

  addBuffer() {
    this.addBarbellLength(this.plateBuffer);
  }

  drawPlate(plateHeight: number, colour: string) {
    if (this.canvasExists()) {
      this.ctx.fillStyle = colour;
      this.ctx.beginPath();
      this.ctx.moveTo(this.barbellEnd, this.canvasMidheight - plateHeight / 2);
      this.ctx.fillRect(
        this.barbellEnd,
        this.canvasMidheight - plateHeight / 2,
        10,
        plateHeight,
      );
      this.ctx.closePath();
      this.ctx.fill();

      this.addBarbellLength(this.plateWidth);
      this.addBuffer();
    }
  }

  drawCollar() {
    const collarHalf = this.canvasMidheight - this.collarHeight;
    const collarLowerHalf = this.canvasMidheight + this.collarHeight;

    if (this.canvasExists()) {
      this.ctx.fillStyle = 'Orange';
      this.ctx.beginPath();
      this.ctx.moveTo(this.barbellEnd, collarHalf);
      this.ctx.lineTo(this.barbellEnd + this.collarWidth, collarHalf);
      this.ctx.lineTo(this.barbellEnd + this.collarWidth, this.canvasMidheight - this.barbellHeight / 2 - 5);
      this.ctx.lineTo(this.barbellEnd + this.collarWidth + 10, this.canvasMidheight - this.barbellHeight / 2 - 5);
      this.ctx.lineTo(this.barbellEnd + this.collarWidth + 10, this.canvasMidheight + this.barbellHeight / 2 + 5);
      this.ctx.lineTo(this.barbellEnd + this.collarWidth, this.canvasMidheight + this.barbellHeight / 2 + 5);
      this.ctx.lineTo(this.barbellEnd + this.collarWidth, collarLowerHalf);
      this.ctx.lineTo(this.barbellEnd, collarLowerHalf);
      this.ctx.closePath();
      this.ctx.fill();

      this.addBarbellLength(this.barbellEnd + this.collarWidth / 2 + 5);
      this.addBuffer();
    }
  }

  init(): null {
    this.drawBarbell();
    this.drawPlate(100, 'red'); // 25
    this.drawPlate(100, 'red'); // 25
    this.drawPlate(100, 'red'); // 25
    this.drawPlate(100, 'red'); // 25
    this.drawPlate(100, 'red'); // 25
    this.drawPlate(100, 'blue'); // 20
    this.drawPlate(85, 'yellow'); // 15
    this.drawPlate(55, 'green'); // 10
    this.drawPlate(35, 'black'); // 5
    this.drawPlate(20, 'darkgrey'); // 2.5
    this.drawCollar();
    return null;
  }
}
