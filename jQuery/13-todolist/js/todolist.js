$(function() {
    // 页面打开时就直接先渲染加载一次页面
    load(); 
    // 1. 按下回车 把表单里的数据 存储到本地存储里面
    // 存储的数据格式 var todoList = [{
    //     title: "xxx",
    //     done: false
    // }]
    $("#title").on("keydown", function(e) {
        if (e.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入你要的操作");
            } else {
                // 读取本地数据
                var local = getData();
                // 更新本地数据
                local.push({
                    title: $(this).val(),
                    done: false
                })
                // 存储本地数据
                saveData(local);
                // 2. todoList 本地存储的数据渲染到页面
                load();
            }
            $(this).val("");
        }
    })
    // 3. 点击里面的 a 就删除本地存储对应索引号的数据
    $("ol, ul").on("click", "a", function() {
        // 先读取本地存储数据
        var data = getData();
        // console.log($(this));
        // 修改本地存储数据
        var index = $(this).attr("index");
        // console.log(index);
        // 删除数组元素方法 从哪个索引号开始 删除几位数
        data.splice(index, 1);
        // 保存本地数据
        saveData(data);
        // 重新渲染加载页面
        load();
    })
    // 4. todoList 正在进行和已完成选项操作
    $("ol, ul").on("click", "input", function() {
        // 先读取本地存储数据
        var data = getData();
        // 修改对应属性数据
        var index = $(this).siblings("a").attr("index");
        // console.log(index);
        data[index].done = $(this).prop("checked");
        // console.log(data);
        // 保存到本地数据
        saveData(data);
        // 重新渲染加载页面
        load();
    })
    // (1) 读取数据函数 getData()
    function getData() {
        // 读取本地数据名为 todoList
        var data = localStorage.getItem("todoList");
        if (data !== null) {
            // 本地数据存储的格式是字符串 这里需要转换为对象格式
            return JSON.parse(data);
        } else {
            // 如果本地没有todoList这个数据就返回一个空的数组
            return [];
        }
    }
    // (2) 存储本地数据 saveData()
    function saveData(data) {
        // 本地数据只能存储字符串格式 这里需要把对象格式转换为字符串格式
        localStorage.setItem("todoList", JSON.stringify(data));
    }
    // (3) 渲染加载数据 load()
    function load() {
        // 先读取本地数据 并转换为对象格式
        var data = getData();
        // console.log(data);
        // 遍历之前先清空ol 和 ul 里面的元素内容
        $("ul, ol").empty();
        // 5. todoList统计正在进行个数和已完成个数
        var todoCount = 0; // 正在进行的个数
        var doneCount = 0; // 已经完成的个数
        $.each(data, function(index, ele) {
            // console.log(ele.done);
            if (ele.done) {
                $("ul").prepend("<li> <input type='checkbox' checked='checked' /> <p>"+ele.title+"</p> <a href='javascript:;' index=" + index + "></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li> <input type='checkbox' /> <p>"+ele.title+"</p> <a href='javascript:;' index=" + index + "></a></li>");
                todoCount++;
            }
        })
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }

})