toastLog("正在打开淘宝");
//app.launchApp("手机淘宝");
var thread1 = threads.start(function () {
    //在新线程执行的代码               
    /*    className("android.widget.FrameLayout").content-desc("领淘金币").findOne().click()
       sleep(1000); */
    /* className("android.widget.FrameLayout").content - desc("芭芭农场").findOne().click()
    sleep(1000); */
    /*     text("TB1m6mfx4D1gK0jSZFyXXciOVXa-114-132").findOne().click()
        if(text("一键领取").findOne().exists()){
            text("一键领取").findOne().click();
        } */
    /*     if (className("android.widget.Button").text("去完成").findOne().exists()) {
        
        } */
    //index("14").text("去完成").findOne().click()
    console.show();
    /*    var uc = className("android.widget.Button").find();
       for (var i = 0; i < uc.length; i++) {
           var tv = uc[i];
           if (tv.text() != "") {
               log(tv.text());
           }
       } */
    console.log(findByText("去完成"))
floaty.closeAll();
});
//text("一键领取").findOne()