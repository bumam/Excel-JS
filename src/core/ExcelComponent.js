import {DomListener} from './DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || ''
    this.emitter = options.emitter

    console.log(options)

    this.prepare()
  }

  toHTML() {
    return ''
  }

  prepare() {}

  init() {
    this.initDomListener()
  }

  remove() {
    this.removeDomListener()
  }
}
