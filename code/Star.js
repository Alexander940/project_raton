//This function draw a star

var position = {
    xInit: 0,
    yInit: 0,
    xEnd: 0,
    yEnd: 0
}

function drawStar(xEnd, yEnd) {
    position.xInit = xEnd;
    position.yInit = yEnd - 20;
    position.xEnd = xEnd + 10;
    position.yEnd = yEnd + 20;
    drawLine(position.xInit,position.yInit,position.xEnd,position.yEnd);
    position.xInit = position.xEnd;
    position.yInit = position.yEnd;
    position.xEnd = xEnd - 20;
    position.yEnd = yEnd - 5;
    drawLine(position.xInit,position.yInit,position.xEnd,position.yEnd);
    position.xInit = position.xEnd;
    position.yInit = position.yEnd;
    position.xEnd = xEnd + 20;
    position.yEnd = yEnd - 5;
    drawLine(position.xInit,position.yInit,position.xEnd,position.yEnd);
    position.xInit = position.xEnd;
    position.yInit = position.yEnd;
    position.xEnd = xEnd - 20;
    position.yEnd = yEnd + 20;
    drawLine(position.xInit,position.yInit,position.xEnd,position.yEnd);
    position.xInit = position.xEnd;
    position.yInit = position.yEnd;
    position.xEnd = xEnd;
    position.yEnd = yEnd - 20;
    drawLine(position.xInit,position.yInit,position.xEnd,position.yEnd);
  }
