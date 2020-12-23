/**
 * 工具类
 */


// 生成随机数
function rand() {
    return randInt(1, 3);
}


//生成从minNum到maxNum的随机数
function randInt(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}


// 洗牌算法
function shuffle(arr) {
    if (!Array.isArray(arr) && arr.length) {
        return []
    }
    const res = []
    for (let i = arr.length; i > 0; i--) {
        const idx = Math.floor(Math.random() * i)
        res.push(arr[idx])
        arr.splice(idx, 1)
    }
    return res
}