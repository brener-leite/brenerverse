const btnNo = document.getElementById('button-no');
const btnYes = document.getElementById('button-yes');
const containerAsk = document.getElementById('container-ask');
const containerHappy = document.getElementById('container-happy');

btnNo.addEventListener('mouseover', () => {
  const y = Math.floor(Math.random() * window.innerHeight);
  const maxY = window.innerHeight - btnNo.offsetHeight;
  
  if (y > maxY) {
    y = maxY;
  }
  btnNo.style.position = "absolute";
  btnNo.style.right = Math.floor(Math.random() * window.innerHeight)/2;
  btnNo.style.bottom = y + "px";
})

btnYes.addEventListener('click', () => {
  containerAsk.style.display = 'none';
  containerHappy.style.display = 'flex';
})