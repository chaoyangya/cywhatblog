// /* 轮播背景图片 */
// $(function () {
// 	$.backstretch([
//         "/img/background/IMG_banner_4.JPG",
//         "/img/background/IMG_banner_7.JPG",
//         "/img/background/IMG_banner_2.JPG",
//         "/img/background/IMG_banner_1.JPG",
//         "/img/background/IMG_banner_3.JPG",
//         "/img/background/IMG_banner_6.JPG",
//         "/img/background/IMG_banner_5.JPG"
// 	], { duration: 6000, fade: 1500 });
// });

/* 站点运行时间 */
function runtime() {
    window.setTimeout("runtime()", 1000);
    /* 请修改这里的起始时间 */
    let startTime = new Date('04/24/2018 15:00:00');
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));
    let runbox = document.getElementById('run-time');
    runbox.innerHTML = '本站已运行<i class="far fa-clock fa-fw"></i> '
        + ((days < 10) ? '0' : '') + days + ' 天 '
        + ((hours < 10) ? '0' : '') + hours + ' 时 '
        + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
        + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
}

runtime();
