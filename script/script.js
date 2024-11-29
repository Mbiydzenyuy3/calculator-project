const input = document.getElementById('display')
const buttons = document.querySelectorAll('button')

// const { eval } = window
const E = eval

let string = ''
const arr = Array.from(buttons)
arr.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML.trim() === '=') {
      string = E(string)
      input.value = string
    } else if (e.target.innerHTML.trim() === 'AC') {
      string = ''
      input.value = string
    } else if (e.target.innerHTML.trim() === 'DE') {
      string = string.substring(0, string.length - 1)
      input.value = string
    } else {
      string += e.target.innerHTML.trim()
      input.value = string
    }
  })
})
