let btns = document.querySelectorAll('button')
let timer  = document.querySelector('.container')
let h1 = document.querySelector('.num')
let interval
let minutes = 0
let seconds = 0

btns.forEach(btn => {
    btn.onclick = () => {

        btns.forEach(el => el.classList.remove('active'))
        btn.classList.add('active')

        let btnType = btn.getAttribute('data-type')

        switch (btnType) {
            case "start":
                startTimer()
                break;
            case "stop":
                stopTimer()
                break;    
            case "reset":
                resetTimer()
                break;            
        }
    }
})

let countDown;

function startTimer() {
    clearInterval(interval)

    interval = setInterval(() => {


        seconds++
        if (seconds === 60) {
            seconds = 0
            minutes++    
        }

        h1.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds}`
    }, 1000)
}
function stopTimer() {
    clearInterval(interval);
}
function resetTimer() {
    h1.innerHTML = '00:00'
    clearInterval(interval);
}