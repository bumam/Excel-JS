import {DomListener} from './DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscribers = []

    this.prepare()
  }
  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  // Настраиваем наш компонент до init
  prepare() {

  }

  // Уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписываемся на событие событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // Инициалзируем компонет
  init() {
    this.initDomListener()
  }

  // Удаляем компонет и слушатели
  destroy() {
    this.removeDomListener()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
