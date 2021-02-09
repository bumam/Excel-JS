export class TableSelection {
  static className = 'selected'
  constructor() {
    this.group = []
  }

  // $el instanceof Dom === true
  select($el) {
    this.clear()
    this.group.push($el)
    $el.addClass(TableSelection.className)
  }

  selectGroup() {

  }

  clear() {
    this.group.forEach($el => $el.removeClass(TableSelection.className))
    this.group =[]
  }
}
