const toggles = document.querySelectorAll('.toggle')
const nameMode = document.querySelector('#nameMode')
const mode = document.querySelector('#mode')
const html = document.querySelector('html')

toggles.forEach(toggle => toggle.addEventListener('change', () => {
  if (!mode.checked) {
    html.classList.add('light')
    nameMode.innerHTML = "Light Mode"
  } else {
    html.classList.remove('light')
    nameMode.innerHTML = "Dark Mode"
  }
}));
