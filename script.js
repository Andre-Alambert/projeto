function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if(html.classList.contains("light")) {
    
    img.setAttribute('src', './assets/me-light.png')
    img.setAttribute("alt", "ANDRE ALAMBERT")

  } else {
    
    img.setAttribute("src", "./assets/me-night.png")
    img.setAttribute("alt", "ANDRE ALAMBERT")
  }

}