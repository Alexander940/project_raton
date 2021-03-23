class Line {
  constructor()
  {
    this.mdType;
    this.color;
    this.postionInitX;
    this.postionInitY;
   }
  initialMouse(ev)
  {
    this.positionInitX = ev.layerX;
    this.positionInitY = ev.layerY;
  }

  endMouse(ev)
  {  
    this.positionEndX = ev.layerX;
    this.positionEndY = ev.layerY;
    switch (this.mdType.target.value) {
      case "line":
        drawLine(this.positionInitX, this.positionInitY, this.positionEndX, this.positionEndY);
        break;
      case "star":
        drawStar(this.positionEndX, this.positionEndY);
        break;
      case "square":
        drawSquare.apply(Line, [this.positionInitX, this.positionInitY, this.positionEndX, this.positionEndY])  
        break;
      case "circle":
        drawCircle(this.positionInitX, this.positionInitY, this.positionEndX, this.positionEndY, this.color)  
      default:
        break;
    }
  }
}
