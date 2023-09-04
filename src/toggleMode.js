let darkMode = true

const darkToggleMode = document.getElementById('toggleButton')
const toggleButtonIcon = document.querySelector('.bi_toggleIcon')

darkToggleMode.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')
    toggleButtonIcon.classList.add('animated')

    // adaptacao para leitores de tela e acessibilidade
    const mode  = darkMode ? 'light' : 'dark'  // se darkmode for true vira light, se falso, vira dark
    event.currentTarget.querySelector('.sr-only').textContent = `O modo ${mode} foi ativado.`

    darkMode = !darkMode

    // icon change 
    if(document.documentElement.classList.contains('light')) {
        toggleButtonIcon.classList.remove('bi-moon-fill')
        toggleButtonIcon.classList.add('bi-sun-fill')
    
    } else {
        toggleButtonIcon.classList.remove('bi-sun-fill')
        toggleButtonIcon.classList.add('bi-moon-fill')
    }

    setTimeout( () => {
        toggleButtonIcon.classList.remove('animated')
    }, 500)
})
