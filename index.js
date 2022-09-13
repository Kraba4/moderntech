var now = new Date();
var newYear = new Date("January 1, "+(now.getFullYear()+1))
var time = newYear - now
var days = parseInt(time / 86400000)
time = time % 86400000
var hours = parseInt(time / 3600000)
time = time % 3600000
var minutes = parseInt(time / 60000)
time = time % 60000
var seconds = parseInt(time / 1000)
time = time % 1000
console.log("Осталось ", days , " дней ", hours, " часов ", minutes, " минут ", seconds, " секунд ", time, "миллисекунд") 
