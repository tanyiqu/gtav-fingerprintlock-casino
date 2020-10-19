// 入口函数

const fingerprints = [
    'imgs/fingerprints/1.png',
    'imgs/fingerprints/2.bmp',
    'imgs/fingerprints/3.bmp',
    'imgs/fingerprints/4.bmp'
];

const fingerprintsFragments = [
    'imgs/fingerprints/1.1.bmp',
    'imgs/fingerprints/1.2.bmp',
    'imgs/fingerprints/1.3.bmp',
    'imgs/fingerprints/1.4.bmp',
];

$(function () {


    startTimer();


});

// 开启计时
function startTimer() {
    let m = 2;
    let s = 59;
    let ms = 99;

    $('#timmer').text(fotmatTime(m, s, ms));

    let id = setInterval(() => {
        // 过了1s
        if (ms < 3) {
            // 判断计时结束
            if (m === 0 && s === 0) {
                clearInterval(id);
                $('#timmer').text(fotmatTime(0, 0, 0));
                onTimeout();
                return;
            }
            // 没有结束
            ms = 99;
            if (s > 0) {
                s--;
            } else {
                s = 59;
                if (m > 0) {
                    m--;
                }
            }
        }
        ms -= 3;
        $('#timmer').text(fotmatTime(m, s, ms));
    }, 30);

}

function onTimeout() {
    alert('计时结束');
}

// 格式化计时时间
function fotmatTime(m, s, ms) {

    if ((m + '').length < 2) {
        m = ('0' + m);
    }
    if ((s + '').length < 2) {
        s = ('0' + s);
    }
    if ((ms + '').length < 2) {
        ms = ('0' + ms);
    }

    let format = "{0}:{1}:{2}".format(m, s, ms);
    return format;
}