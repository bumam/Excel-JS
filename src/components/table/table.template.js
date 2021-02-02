const CODES = {
  A: 65,
  Z: 90,
}

function createRow(content, info) {
  return `
   <div class="row">
	   <div class="row-info">${info}</div>
		 <div class="row-data">${content}</div>
	 </div>
 `
}

function toColumn(col) {
  return `
   <div class="column">${col}</div>
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

  rows.push(createRow(cols, '' ))

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i+1))
  }

  return rows.join('')
}
