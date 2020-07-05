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
console.log(getVerName(app.getPackageName("自动抖音")));
console.log(getVerName1(app.getPackageName("抖音极速版")));
var zddy = getVerName(app.getPackageName("自动抖音"))
var dyjsb = getVerName1(app.getPackageName("抖音极速版"))
ui.layout(
    <vertical>
        <button id="wzh" text="点击打开无障碍服务" />
        <button id="sz" text="点击打开设置" />
        <text text="请设置您需要自动操作的时间" marginTop="30" />
        <input id="time1" inputType="number" hint="单位（分钟）" line="1" text="" />
        <button id="ok" text="确定" />
        <button id="gbgg" text="自动关闭广告功能" marginTop="30" />
        <text text="此功能会无限循环自动点击关闭广告按钮，方便看广告的时候无需再手动点击关闭广告，需要停止时请点击音量+键即可关闭" textColor="black" />
        <button id="gb" text="点击关闭脚本" marginTop="30" />
        <text text="重要" textColor="red" gravity="center" textSize="40sp" marginTop="30" />
        <text id="myText" line="4" textColor="red" gravity="center" />
        <text id="text1" textColor="black" gravity="center" textSize="20sp" />
        <text id="text2" textColor="black" gravity="center" textSize="20sp" />
    </vertical>
);
function getVerName(package_name) {
    let pkgs = context.getPackageManager().getInstalledPackages(0).toArray();
    for (let i in pkgs) {
        if (pkgs[i].packageName.toString() === package_name) return pkgs[i].versionName;
    }
}
function getVerName1(package_name) {
    let pkgs = context.getPackageManager().getInstalledPackages(0).toArray();
    for (let i in pkgs) {
        if (pkgs[i].packageName.toString() === package_name) return pkgs[i].versionName;
    }
}
ui.text1.setText("当前APP版本：" + zddy);
ui.text2.setText("当前抖音版本：" + dyjsb);
ui.myText.setText("打开后请先点击无障碍，如果点击无反应则为开启成功\n如果APP出现无障碍打开后依然提示无障碍服务未开启\n请点击第二个按钮清除应用数据\n按音量上键可以停止脚本\n请保证APP版本与抖音版本一致");
ui.sz.on("click", () => {
    var pack = getPackageName("自动抖音");
    console.log("11", pack)
    app.openAppSetting(pack);
});
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
    var thread1 = threads.start(function () {
        //在新线程执行的代码                   
        while (i < timenumber1) {
            sleep(10000)
            if (aaa == 0) {
                swipe(500, 1500, 500, 500, 500)
                i = i + 1;
                console.log("正在进行的次数", i)
            } else {
                sleep(5000);
            }
        }
    });
    var thread2 = threads.start(function () {
        //在新线程执行的代码     
        while (1) {
            if (text("开宝箱").id("brn").exists()) {
                toastLog("已发现开宝箱按钮，60秒后将自动点击");
                var babb = 0;
                while (babb < 60) {
                    if (babb == 30) {
                        toastLog("已发现开宝箱按钮，将在30秒后将自动点击");
                    }
                    if (babb == 50) {
                        toastLog("已发现开宝箱按钮，将在10秒后将自动点击");
                    }
                    sleep(1000);
                    babb = babb + 1;
                }
                aaa = 1;
                toastLog("正在点击开宝箱按钮");
                id("brj").findOne().click();
                text("开宝箱得金币").findOne().click();
                toastLog("已点击开宝箱得金币按钮");
                sleep(3000);
                toastLog("正在点击看广告视频按钮");
                click(548, 1388)
                var b = 0;
                while (b < 9) {
                    if (className("android.widget.TextView").text("关闭广告").exists()) {
                        className("android.widget.TextView").text("关闭广告").findOne().click()
                        sleep(1000)
                        toastLog("第一个广告观看完毕");
                        b = 10;
                        break;
                    }
                    sleep(5000);
                    toastLog("正在等待关闭广告按钮" + b * 5 + "秒");
                    b++;
                }
                sleep(2000)
                if (className("android.view.View").text("去领取").exists()) {
                    toastLog("正在准备观看第二个广告");
                    className("android.view.View").text("去领取").findOne().click()
                    var b = 0;
                    while (b < 9) {
                        if (className("android.widget.TextView").text("关闭广告").exists()) {
                            className("android.widget.TextView").text("关闭广告").findOne().click()
                            sleep(1000)
                            aaa = 0;
                            back();
                            toastLog("第二个广告观看完毕");
                            b = 10;
                            break;
                        }
                        sleep(5000);
                        toastLog("正在等待关闭广告按钮" + b * 5 + "秒");
                        b++;
                    }
                } else {
                    back();
                }
                back();
                aaa = 0;
            }
            aaa = 0;
            sleep(1000)
        }
    });


    threads.start(function () {
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
ui.gbgg.on("click", () => {
    toastLog("正在打开抖音极速版");
    app.launchApp("抖音极速版");
    var thread5 = threads.start(function () {
        //在新线程执行的代码                   
        while (true) {
            className("android.widget.TextView").text("关闭广告").findOne().click()
            toastLog("已自动关闭广告")
        }
    });
});