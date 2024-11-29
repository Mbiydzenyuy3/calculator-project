const input = document.getElementById('display')
const buttons = document.querySelectorAll('button')

let string = ''
const arr = Array.from(buttons)
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log({ string: e.target.innerHTML })
    if (e.target.innerHTML.trim() === '=') {
      string = eval(input.value)
      input.value = string
    } else if (e.target.innerHTML.trim() === 'AC') {
      string = ''
      input.value = string; 
    } else if (e.target.innerHTML.trim() === 'DE') {
      string = string.substring(0, string.length - 1)
      input.value = string;
    } else {
      string += e.target.innerHTML.trim()
      input.value = string
    }
  })
})
