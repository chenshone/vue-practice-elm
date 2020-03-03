export const debounce = (func, delay = 300) => {
  let timer = null
  return (...args) => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
