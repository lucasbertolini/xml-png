import html2canvas from '/js/html2canvas.esm.js';

const capture = document.querySelector('#capture');
const downloadBtn = document.querySelector('#downloadBtn');



document.addEventListener('click', () =>{


html2canvas(capture).then(canvas => {

const a = document.createElement('a');

  document.body.appendChild(a);
  a.href = canvas.toDataURL('image/jpeg');
  a.download = 'resultado.jpg';
  a.click();
  document.body.removeChild(a);


 })

}) 