
//id("wm").className("android.widget.ImageView").descStartsWith("评论").findOne().parent().click()
//click(553,180)   
/* swipe(553, 1568, 500, 737, 700)
sleep(1000)
swipe(500, 737, 553, 1568, 700) */
/* var hd = random(10000, 15000)
console.log("滑动时间："+hd ) */

id("wm").className("android.widget.ImageView").descStartsWith("评论").findOne().parent().click()
sleep(2000)
var sj1 = random(1, 5);
var sj2 = sj1 - 1;
console.log("随机数1:" + sj1)
console.log("随机数2:" + sj2)
for (var i = 0; i < sj1; i++) {
    swipe(553, 1568, 500, 737, 700)
    sleep(1000)
}
for (var i = 0; i < sj2; i++) {
    swipe(500, 737, 553, 1568, 700)
    sleep(1000)
}
click(553, 180)
sleep(1000)