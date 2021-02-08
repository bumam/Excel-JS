import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';
import {TableSelection} from '@/components/table/TableSelection';
// import {TableSelection} from '@/components/table/table.selection';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown', 'click'],
    });
  }

  init() {
    super.init()

    this.selection = new TableSelection()
  }

  toHTML() {
    return createTable()
  }

  onClick(event) {
    console.log('click')
    // select(event)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }

  onMousemove() {
    console.log('mousemove')
  }

  onMouseup() {
    console.log('mouseup')
  }
}
