/**
 * Created by 俊杰 on 2017/12/22.
 */

/**
 * 翻翻卡动画
 * @param up 在上的图片
 * @param down 在下的图片
 */
function turnCardAnimate(up,down) {

    if (turnCardAnimate.isTurned){ // 已经旋转过,将两个对象互转
        // 取反
        var temp = up;
        up = down;
        down = temp;
    }


    var upDeg = 0; // 上面图片起始角度
    var downDeg = 180; // 下面图片起始角度
    down.style.display = 'none'; // 隐藏下面的图片
    down.style.transform = 'perspective(1000px) rotateY('+downDeg+'deg)'; // 将下面的图片翻转180°

    main.timer = setInterval(function () {

        // 翻转每次加1度
        upDeg += 1;
        downDeg += 1;

        // 同时翻转2张图片
        up.style.transform = 'perspective(1000px) rotateY('+upDeg+'deg)';
        down.style.transform = 'perspective(1000px) rotateY('+downDeg+'deg)';

        // 当上面的图片翻转到90度,隐藏上面,显示下面的图片
        if(upDeg >= 90){
            up.style.display = 'none';
            down.style.display = 'block';
        }

        // 当上面的图片翻转到180度,初始化设置,清除定时器,并记录是否旋转
        if (upDeg >= 180){
            clearInterval(main.timer);
            downDeg = 180;
            upDeg = 0;
            animateOver = false;
            turnCardAnimate.isTurned = !turnCardAnimate.isTurned;
        }
    },2);
}