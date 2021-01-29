import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners =[]) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`)
    }
    this.$root = $root
    this.listeners = listeners
    this.boundListeners = [];
  }

  throwIfNoMethod(method) {
    if (!this[method]) {
      throw new Error(
        `Method ${method} is not implemented 
        in ${this.constructor.name} Component`
      );
    }
  }

  initDomListener() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.throwIfNoMethod(method);
      const boundListener = this[method].bind(this);
      this.boundListeners.push({event: listener, boundListener});
      this.$root.on(listener, boundListener);
    });
  }

  removeDomListener() {
    this.boundListeners.forEach(({event, boundListener}) => {
      this.$root.off(event, boundListener);
    });
  }
}

// input => onInput
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
