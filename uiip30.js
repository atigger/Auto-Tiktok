"ui";
importClass(android.view.View);
setScreenMetrics(1080, 2340);
var a = 0
var aaa = 0;
var timenumber = 0
if (!floaty.checkPermission()) {
    toast("请打开悬浮窗权限")
    floaty.requestPermission()
}
var vi = device.getMusicVolume();
toast("当前音量为" + vi);
ui.layout(
    <vertical>
        <button id="wzh" text="点击打开无障碍服务" />
        <text text="请设置您需要自动操作的时间" />
        <input id="time1" inputType="number" hint="单位（分钟）" line="1" text="" />
        <button id="ok" text="确定" />
        <button id="gb" text="点击关闭脚本" />
    </vertical>
);
ui.wzh.on("click", () => {
    auto();
});
var i = 0;
ui.ok.on("click", () => {
    timenumber = parseInt(ui.time1.text());
    var timenumber1 = timenumber * 6;
    console.log("将要进行的时间:", timenumber);
    toast("正在打开抖音极速版");
    app.launchApp("抖音极速版");
    var thread1 = threads.start(function() {
        //在新线程执行的代码                   
        while (i < timenumber1) {
            sleep(5000)
            if (aaa == 0) {
                swipe(500, 1500, 500, 500, 500)
                i = i + 1;
                console.log("正在进行的次数", i)
            } else {
                sleep(5000);
            }
        }
    });
    var thread2 = threads.start(function() {
        //在新线程执行的代码     
        while (1) {
            if (text("开宝箱").id("brn").exists()) {
                aaa = 1;
                id("brj").findOne().click();
                sleep(5000);
                text("开宝箱得金币").findOne().click();
                sleep(5000);
                click(500, 1360)
                console.log("进入广告：", "1")
                className("android.widget.TextView").text("关闭广告").findOne().click()
                sleep(2000)
                className("android.view.View").text("去领取").findOne().click()
                var b = 0;
                while (b < 45) {
                    if (className("android.widget.TextView").text("关闭广告").exists()) {
                        className("android.widget.TextView").text("关闭广告").findOne().click()
                        sleep(1000)
                        aaa = 0;
                        back();
                        b = 46;
                    }
                    sleep(1000);
                    toast("等待中" + b);
                    b++;
                }
                back();
                aaa = 0;
            }
            aaa = 0;
            sleep(1000)
        }
    });
    threads.start(function() {
        thread1.waitFor();
        while (1) {
            sleep(2000)
            console.log("线程是否存活：", thread1.isAlive())
            if (!thread1.isAlive()) {
                threads.shutDownAll();
                toast("脚本即将停止运行");
                device.vibrate(2000);
                home();
                engines.stopAll();
            }
        }
    });

});
ui.gb.on("click", () => {
    engines.stopAll();
});