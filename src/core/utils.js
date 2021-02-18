// Pure functions
export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toLocaleUpperCase() + string.slice(1)
}

export function range(start, end) {
  return new Array( Math.abs(end - start +1))
    .fill('')
    .map((_, index)=> start + index)
}

export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key))
  }
  localStorage.setItem(key, JSON.stringify(data))
}

export function isEqual(a, b) {
  if (typeof a == 'object' && typeof b == 'object') {
    return JSON.stringify(a) === JSON.stringify(b)
  }
  return a === b
}
