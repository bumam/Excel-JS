const CODES = {
  A: 65,
  Z: 90,
}

function createRow(content, info) {
  const resize = info ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
   <div class="row" data-type="resizable">
	   <div class="row-info">${info ? info : ''}
	     ${resize}
	   </div>
		 <div class="row-data">${content}</div>
	 </div>
 `
}

function toColumn(col, index) {
  return `
   <div class="column" data-type="resizable" data-col="${index}">${col} 
     <div class="col-resize" data-resize="col"></div>
   </div>
 `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

function toCell(_, col) {
  return `
   <div class="cell" contenteditable data-col="${col}"></div>
   `
}

export function createTable(rowsCount = 60) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount).fill('')
    .map(toChar)
    .map(toColumn)
    .join('')


  const cells = new Array(colsCount).fill('')
    .map(toChar)
    .map(toCell)
    .join('')

  rows.push(createRow(cols, null ))

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i+1))
  }

  return rows.join('')
}
