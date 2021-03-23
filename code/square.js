function drawSquare(positionInitX, positionInitY, positionEndX, positionEndY) {  
    drawLine(positionInitX, positionInitY, positionEndX, positionInitY)
    drawLine(positionInitX, positionInitY, positionInitX, positionEndY)
    drawLine(positionEndX, positionEndY, positionEndX, positionInitY)
    drawLine(positionEndX, positionEndY, positionInitX, positionEndY)
}