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

// 入口函数
$(function () {
    $('.start').click(onStart);
});

// 点击开始
function onStart() {
    $('.pre').css('display', 'none');
    $('.main').show(200);
    startTimer();
}

// 开启计时
function startTimer() {
    let m = 3;
    let s = 59;
    let ms = 99;
    // 剩余条形计时
    let rest = 30;
    let count = 0;
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

            // 条形计时器 周期为8s，每8s熄灭一个
            count++;
            if (count == 8) {
                count = 0;
                let id = '#tick' + rest;
                $(id).css('background', '#000');
                rest--;
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

// 开始动画
function loadAnime() {

}