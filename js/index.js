const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector('#progress')

$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)
$backward.addEventListener('click',handleBackward)
$forward.addEventListener('click',handleForward)
$video.addEventListener('loadedmetadata',handleLoaded)
$video.addEventListener('timeupdate',handleTimeUpdate)
$progress.addEventListener('input',handleInput)

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('Esta presionando el boton play')
}

function handlePause(){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('Esta presionando el boton pause')
}

function handleBackward(){
    $video.currentTime -=10
    console.log('Esta presionando el boton backward',$video.currentTime)
}

function handleForward(){
    $video.currentTime +=10
    console.log('Esta presionando el boton forward',$video.currentTime)
}

function handleLoaded(){
    $progress.max = $video.duration
    console.log('el video ha cargado',$video.duration)
}

function handleTimeUpdate(){
    $progress.value=$video.currentTime
    // console.log('Tiempo actual',$video.currentTime)
}

function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}


