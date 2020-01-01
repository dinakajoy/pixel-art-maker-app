const createPixel = document.querySelector('#createPixel');
const column = document.querySelector('#column');
const row = document.querySelector('#row');
const output = document.querySelector('#output');
const table = document.querySelector('#table');
const color = document.querySelector('#color');
const reload = document.querySelector('#reload');

createPixel.addEventListener('click', (e) => {
  e.preventDefault();
  if(column.value === '0' || row.value === '0') {
    output.style.padding = '5px 0';
    output.textContent = 'Please set number of column and rows';
  }
  let width;
  let height;
  for (width=1; width<=row.value; width++) {
    output.style.display = 'none';
    createPixel.style.display = 'none';
    color.style.display = 'block';
    reload.style.display = 'block';
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for (height=1; height<=column.value; height++) {
      let td = document.createElement('td');
      tr.appendChild(td);
    }
  }

  const tds = document.querySelectorAll('td');
  for(let td=0; td<tds.length; td++) {
    tds[td].addEventListener('click', (e) => {
      if(tds[td].style.backgroundColor !== '') {
        tds[td].style.backgroundColor = '';
      } else {
        tds[td].style.backgroundColor = color.value;
      }
    })
  }
  reload.addEventListener('click', (e) => {
    e.preventDefault();
    location.reload();
  })
})

