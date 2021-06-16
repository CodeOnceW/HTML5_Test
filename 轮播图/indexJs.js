window.addEventListener('load', function() {
    // 1. 获取元素
    var arrow_l = document.querySelector('.arrow-l'); // 左侧小箭头
    var arrow_r = document.querySelector('.arrow-r'); // 右侧小箭头
    var focus = document.querySelector('.focus'); // 焦点图盒子
    var focusWidth = focus.offsetWidth; // 焦点盒子宽度

    // 2. 鼠标经过focus 就显示显示左右按钮
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        // 清除定时器
        clearInterval(timer);
        timer = null; // 清除定时器变量
    });

    // 3. 鼠标离开focus 就显示隐藏左右按钮
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';

        timer = setInterval(function() {
            //手动调用点击事件
            arrow_r.click();
        }, 2500);
    });

    // 4. 动态生成小圆圈  有几张图片 就生成几个小圆圈
    var ul = focus.querySelector('ul'); // 图片列表 
    var ol = focus.querySelector('.circle'); // 小圆点列表

    // console.log(ul.children.length);
    // 循环添加小圆点
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小 li 
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做 
        li.setAttribute('index', i);
        // 把小 li 插入到 ol 里面
        ol.appendChild(li);

        // 5. 小圆圈的排他思想：可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function() {
            // 把所有的小li 清除 current 类名
            for (var i = 0; i < ol.children.length; i++) {
                // 利用循环清除类目样式
                ol.children[i].className = '';
            }
            // 当前的小li 设置current 类名
            this.className = 'current';

            // 6. 点击小圆圈，移动图片 移动的是 ul 
            // ul 的移动距离 =  小圆圈的索引号 乘以 图片的宽度  (注意是负值)
            // 当点击了某个小li 就拿到当前小li 的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li 就要把这个li 的索引号给 num  
            num = index;
            // 当我们点击了某个小li 就要把这个li 的索引号给 circle  
            circle = index;

            // console.log(focusWidth);
            // console.log(index);

            // 调用动画函数
            animate(ul, -index * focusWidth);
        })
    }

    // 把ol里面的第一个小li设置类名为 current (默认选中)
    ol.children[0].className = 'current';

    // 7. 克隆第一张图片(li)放到ul 最后面 做无缝转场效果
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 8. 点击右侧按钮， 图片滚动一张
    var num = 0;
    // circle 控制小圆圈的播放
    var circle = 0;

    // flag 节流阀 避免连续点击按钮图片切换过快
    var flag = true;

    // 右侧按钮注册事件
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false; // 关闭节流阀
            // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            // 调用动画函数
            animate(ul, -num * focusWidth, function() {
                // 回调函数 在动画执行完后打开节流阀
                flag = true; // 打开节流阀
            });

            // 9. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle++;
            // 如果circle == ol.children.length 说明走到最后我们克隆的这张图片了 我们就复原
            if (circle == ol.children.length) {
                circle = 0;
            }
            // 调用小圆点排他函数
            circleChange();
        }
    });

    // 10. 左侧按钮制作
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false; // 关闭节流阀
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            // 动画函数
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle--;
            // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）

            circle = circle < 0 ? ol.children.length - 1 : circle;
            // 调用函数
            circleChange();
        }
    });

    // 小圆点排他函数 方法
    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }

    // 11. 自动播放轮播图函数方法
    var timer = setInterval(function() {
        //手动调用点击事件
        arrow_r.click();
        // 2500 设置播放速度
    }, 2500);

})