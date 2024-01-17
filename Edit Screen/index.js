function changeFont() {
  var fontSelect = document.getElementById('fontSelect');
  var userText = document.getElementById('userText');
  userText.style.fontFamily = fontSelect.value;
}

function changeSize() {
  var sizeInput = document.getElementById('sizeInput');
  var userText = document.getElementById('userText');
  userText.style.fontSize = sizeInput.value + 'px';
}

function changeColor() {
  var colorInput = document.getElementById('colorInput');
  var userText = document.getElementById('userText');
  userText.style.color = colorInput.value;
}

function startDrag(e) {
  e.preventDefault();

  var userText = document.getElementById('userText');
  var offsetX = e.clientX - userText.getBoundingClientRect().left;
  var offsetY = e.clientY - userText.getBoundingClientRect().top;

  function dragMove(e) {
    userText.style.left = e.clientX - offsetX + 'px';
    userText.style.top = e.clientY - offsetY + 'px';
  }

  function dragEnd() {
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
  }

  document.addEventListener('mousemove', dragMove);
  document.addEventListener('mouseup', dragEnd);
}