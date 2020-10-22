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

let currTarget = 1;
let playMusic = true;

// 入口函数
$(function () {
    loadEvents();
});

function loadEvents() {
    // 音乐开关
    $('.music').click(() => {
        if (playMusic) {
            document.getElementById("audio").volume = 0;
            $('.music').attr('src', 'imgs/mute_active.png');
            playMusic = false;
        } else {
            document.getElementById("audio").volume = 0.2;
            $('.music').attr('src', 'imgs/mute.png');
            playMusic = true;
        }
    });
    // 点击Start
    $('.start').click(onStart);
    // 点击作者
    $('.author').click(() => {
        window.open('https://github.com/tanyiqu', '_blank');
    });
    // 点击左侧小指纹
    $('.fragment').click((e) => {
        let div = $(e.target.parentElement);

        if (div.hasClass('active')) {
            div.removeClass('active');
        } else {
            div.addClass('active');
        }
    });
}

// 点击开始
function onStart() {
    $('.pre').css('display', 'none');
    $('.main').show(500);
    $('.bg').hide();
    startTimer();
    randomNext();
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

// 随机新指纹
function randomNext() {
    // 清除所有选中的样式

    // 随机右侧大指纹
    let targetSrc = 'imgs/fingerprints/' + currTarget + '.png';
    $('.target-fingerprint').attr('src', targetSrc);

    // 随机左边的小指纹碎片
    let fragments = randomFragments();
    console.log(fragments);



}

// 随机左边的小指纹碎片
function randomFragments() {
    let fragments = [{
        src: 'imgs/fingerprints/' + currTarget + '.1.bmp',
        status: true
    }, {
        src: 'imgs/fingerprints/' + currTarget + '.2.bmp',
        status: true
    }, {
        src: 'imgs/fingerprints/' + currTarget + '.3.bmp',
        status: true
    }, {
        src: 'imgs/fingerprints/' + currTarget + '.4.bmp',
        status: true
    }];
    let tmp = currTarget;
    let n = 3;
    while (n--) {
        if (tmp === 4) {
            tmp = 1;
        } else {
            tmp++;
        }
        fragments.push({
            src: 'imgs/fingerprints/' + tmp + '.' + rand() + '.bmp',
            status: false
        });
    }
    fragments.push({
        src: 'imgs/fingerprints/' + tmp + '.4.bmp',
        status: false
    });
    return shuffle(fragments);
}

// 计时结束
function onTimeout() {
    alert('计时结束，请点击刷新重新开始！');
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