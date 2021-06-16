window.addEventListener('load', function() {
    // 1.获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;

    // 2.鼠标经过focus 就显示隐藏我们的左右按钮
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; // 清楚定时器变量
    })
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(() => {
            // 手动调用点击事件
            arrow_r.click();
        }, 2000);
    })

    // 3.动态生成小圆圈 有几种图片就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');

    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小li
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性 来做
        li.setAttribute('index', i);
        // 把小li插入到ol里面
        ol.appendChild(li);

        // 4.绑定点击事件
        li.addEventListener('click', function() {
            // 把所有小li清除current类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';

            // 5.点击小圆圈 移动图片 移动的是 ul
            // animate(obj, target, callback)
            // ul 的移动距离就是小圆圈的索引号 乘以 图片的宽度 注意是负值
            // 当我们点击了某个小li 就拿到了当前小 li 的索引号
            var index = this.getAttribute('index');
            // console.log(index);
            // 当我们点击了某个小li 就要把这个 li 的索引号给 num
            num = index;
            circle = index;

            console.log(focusWidth);
            console.log(index);

            animate(ul, -index * focusWidth);
        })
    }
    // 把ol里面的第一个小li 设置类名为 current
    ol.children[0].className = 'current';

    // 6.克隆第一张图片 li 放到 ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 7.点击右侧按钮 图片滚动一张
    var num = 0;
    // flag 节流阀
    var flag = true;
    // circle 控制小圆圈的播放
    var circle = 0;

    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false; // 关闭节流阀
            // 如果走到了最后赋值的一张图片 此时 我们的ul 要快速复原 left 改为 0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            // animate(obj, target, callback);
            animate(ul, -num * focusWidth, function() {
                flag = true; // 打开节流阀
            });

            // 8.点击右侧按钮 小圆圈跟随着一起变化 可以在声明一个变量控制小圆圈的播放
            circle++;
            // 如果cricle == 4说明走到了最后我们克隆的这张图片 我们就复原
            // if (circle == ol.children.length) {
            //     circle = 0;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;

            // 调用函数
            circleChange();
        }
    });

    // 9.左侧按钮
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            // 如果走到了最后赋值的一张图片 此时 我们的ul 要快速复原 left 改为 0
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            // animate(obj, target, callback);
            animate(ul, num * -focusWidth, function() {
                flag = true; // 打开节流阀
            });

            // 8.点击右侧按钮 小圆圈跟随着一起变化 可以在声明一个变量控制小圆圈的播放
            circle++;
            // 如果cricle == 4说明走到了最后我们克隆的这张图片 我们就复原
            if (circle == ol.children.length) {
                circle = 0;
            }

            circleChange();
        }

    });

    function circleChange() {
        // 先清除其余小圆圈的 current 类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前小圆圈的 current 类名
        ol.children[circle].className = 'current';
    }

    // 10.自动播放轮播图
    var timer = setInterval(() => {
        // 手动调用点击事件
        arrow_r.click();
    }, 2000);


})