var verticalLines = {
  generateShapes: function () {
    var xOffset = 0, spacing = 1, width = 5

    while (xOffset < this.width) {
      this.shapes.push({ x: xOffset, y: 0, width: width, height: this.height })
      xOffset += width + spacing
    }
  },
  printShape: function (shape, index) {
    this.context.fillStyle = 'red'
    this.context.fillRect(shape.x, shape.y, shape.width, shape.height)
  },
  updateShape: function (shape, index) {
    shape.x = (shape.x + 1) % this.width
  }
}

var horizontalLines = {
  generateShapes: function () {
    var yOffset = 0, spacing = 20, height = 10

    while (yOffset < this.height) {
      this.shapes.push({ x: 0, y: yOffset, width: this.width, height: height})
      yOffset += height + spacing
    }
  },
  printShape: function (shape, index) {
    this.context.fillStyle = 'rgba(0,0,255,1)'
    this.context.fillRect(shape.x, shape.y, shape.width, shape.height)
  },
  updateShape: function (shape, index) {
    shape.y = (shape.y + 1) % this.height
  }
}

var $layerNum = $('.layer-num')

var layers = []
layers.push(new Layer(verticalLines))
layers.push(new Layer(horizontalLines))

var currentLayer = layers[0]
$(document).on('keyup', function (e) {
  console.log('e.keyCode: ', e.keyCode)
  if (_.inRange(e.keyCode, 49, 58)) {
    var layerNum = e.keyCode - 49
    currentLayer = layers[layerNum]
    $layerNum.text(layerNum + 1)
  }

  switch (e.keyCode) {
    case 32:
      currentLayer.toggleDisplay()
      break;
    case 13:
      currentLayer.toggleAnimation()
      break;
  }
})
