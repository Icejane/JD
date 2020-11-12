var hour = document.querySelector('.hour')
var hm = document.querySelector('.hm')
var minute = document.querySelector('.minute')
var ms = document.querySelector('.ms')
var second = document.querySelector('.second')



fn()

setInterval(fn, 1000);

function fn() {
    var date = new Date()
    var guoqing = new Date('2020-11-13 00:00:00')
    var cha = guoqing - date


    var time = cha / 1000;
    var h = parseInt(time / 60 / 60);
    hour.innerHTML = h
    if (h < 10) {

        hour.innerHTML = "0" + h
    } else {
        hour.innerHTML = h
    }

    var f = parseInt(time / 60 % 60);
    minute.innerHTML = f
    if (f < 10) {

        minute.innerHTML = "0" + f
    } else {
        minute.innerHTML = f
    }

    var m = parseInt(time % 60);
    second.innerHTML = m
    if (m < 10) {

        second.innerHTML = "0" + m
    } else {
        second.innerHTML = m
    }
}