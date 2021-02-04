const CODES = {
  A: 65,
  Z: 90,
}

function createRow(content, info) {
  const resize = info ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
   <div class="row">
	   <div class="row-info">${info ? info : ''}
	     ${resize}
	   </div>
		 <div class="row-data">${content}</div>
	 </div>
 `
}

function toColumn(col) {
  return `
   <div class="column" data-type="resizable">${col} 
     <div class="col-resize" data-resize="col"></div>
   </div>
 `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

function createCell() {
  return `
   <div class="cell" contenteditable=""></div>
   `
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount).fill('')
    .map(toChar)
    .map(toColumn)
    .join('')

  const cells = new Array(colsCount).fill(createCell()).join('')

  rows.push(createRow(cols, null ))

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i+1))
  }

  return rows.join('')
}
