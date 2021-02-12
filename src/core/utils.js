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
