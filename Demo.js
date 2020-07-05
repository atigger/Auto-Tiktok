toast("正在打开抖音极速版");
app.launchApp("抖音极速版");
sleep(1000);
id("ay7").findOne().click();
sleep(2000);
if (text("去领取").exists()) {
    text("去领取").findOne().click();
    text("关闭广告").findOne().click()
    id("p0").findOne().click();
} else {
    id("p0").findOne().click();
}