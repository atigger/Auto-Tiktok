var t1 = threads.start(function () {
    while (true) {
        var x = random(400, 700)
        var y = random(1300, 1500)
        click(x, y)
        sleep(75)
    }
});
var t2 = threads.start(function () {
    while (true) {
        var x = random(400, 700)
        var y = random(1300, 1500)
        click(x, y)
        sleep(75)
    }
});
var t3 = threads.start(function () {
    while (true) {
        var x = random(400, 700)
        var y = random(1300, 1500)
        click(x, y)
        sleep(75)
    }
});