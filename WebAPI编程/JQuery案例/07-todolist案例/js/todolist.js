$(function() {

    // 页面打开加载数据
    load();

    // 1.按下回车 把完整数据 存储到本地存储里面
    // 存储的数据格式 var todolist = [{title:"xxx", done: false}]
    $("#title").on("keydown", function(event) {
        if (event.keyCode === 13) { // 回车键的ASCII为13
            if ($(this).val() === "") {
                alert("请输入你要的操作！");
            } else {
                // 先读取本地存储的原来的数据
                var local = getDate();
                // console.log(local);

                // 把 local 数组进行更新数据 把最新的数据追加给 local 数组
                // local.push({ title: "xxx", done: false });
                local.push({ title: $(this).val(), done: false }); // false 默认为完成
                // 把这个数组 local 存储给本地存储
                saveDate(local);

                // 2. toDoList 本地存储数据渲染加载到页面 
                load();
                $(this).val("");
            }
        }
    });

    // 3.toDoList 删除操作
    $("ol, ul").on("click", "a", function() {
        // alert(11);
        // 先获取本地存储
        var data = getDate();
        // console.log(data);

        // 修改数据
        var index = $(this).attr("id");
        // console.log(index);
        data.splice(index, 1);

        // 保存到本地存储
        saveDate(data);

        // 重新渲染页面
        load();
    })

    // 4. toDoList 正在进行的和已完成选项操作
    $("ol, ul").on("click", "input", function() {
        // alert(11);
        // 先获取本地存储的数据
        var data = getDate();

        // 修改数据
        var index = $(this).siblings("a").attr("id");
        // console.log(index);
        // data[?].done = ?
        data[index].done = $(this).prop("checked");
        // console.log(data);

        // 保存到本地存储里面
        saveDate(data);

        // 重新渲染页面
        load();
    });


    // 读取本地存储的数据
    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    // 保存本地存储数据
    function saveDate(data) {
        data = JSON.stringify(data);
        localStorage.setItem("todolist", data);
    }

    // 渲染加载数据
    function load() {
        // 遍历之前先要情况ol里面的元素内容
        $("ul").empty();
        $("ol").empty();

        // 统计数据个数
        var todoCount = 0; // 正在进行的个数
        var doneCount = 0; // 已经完成的个数

        // 读取本地存储的数据
        var data = getDate();
        // console.log(data); 
        // 遍历这个数据
        $.each(data, function(i, n) {
            // console.log(n);
            if (n.done) {
                var li = $("<li><input type='checkbox' checked='checked' ><p>" + n.title + "</p> <a href='javascript:;' id='" + i + "'></a> </li>");
                $("ul").prepend(li);
                doneCount++;
            } else {
                var li = $("<li><input type='checkbox' ><p>" + n.title + "</p> <a href='javascript:;' id='" + i + "'></a> </li>");
                $("ol").prepend(li);
                todoCount++;
            }
        });

        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);

    }

})