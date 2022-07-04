$(function() {
    // 1. 全选 全部选功能模块
    // 就是把全选按钮 checkall 的选择状态赋值给 商品的小复选框 j-checkbox 就可以了
    // 事件可以使用 change 发生改变就触发事件
    $(".checkall").change(function() {
        // console.log($(this).prop("checked"));
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            // 如果全选按钮的选中状态为true 就让所有的商品添加这个背景类名
            $(".cart-item").addClass("check-cart-item");
        } else {
            // 否则移除这个类名
            $(".cart-item").removeClass("check-cart-item");
        }
    })
    // 2. 如果商品的小复选框选中的个数等于了所有商品的个数 就应该把全选按钮选上 否则全选按钮不选中
    $(".j-checkbox").change(function() {
        // if(被选中的个数 === 所有商品的个数) {
        //     就要全选按钮选中
        // } else {
        //     不要全选按钮选中
        // }
        // 复选框元素:checked可以得到被选中的元素
        // console.log($(".j-checkbox:checked").length); // 可以得到被选中的个数
        // console.log($(".j-checkbox").length); // 可以的到所有商品的个数
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            // 如果当前按钮的选中状态为true 就让当前商品添加这个背景类名
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            // 否则移除这个类名
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    })
    // 3. 增减商品数量模块 首先声明一个变量 当我们点击 + 号 increment 就让这个值++ 然后赋值给文本框
    $(".increment").click(function() {
        var n = $(this).siblings(".itxt").val(); // 得到这个+号的兄弟文本框的value值
        // console.log(n);
        n++; // 每点一次++ 字符串自增返回字符串 结果正常计算
        $(this).siblings(".itxt").val(n);
        // 4. 计算小计模块 根据文本框的值 乘以当前商品的价格 计算 商品的小计
        // 当前商品价格 p
        var p = $(this).parents(".p-num").siblings(".p-price").text();
        p = p.substr(1);
        // console.log(p);
        var price = (p * n).toFixed(2); // 保留两位小数
        $(this).parents(".p-num").siblings(".p-sum").text("￥"+ price);
        getSum();
    })
    // 点击decrement 就让这个变量减减
    $(".decrement").click(function() {
        var n = $(this).siblings(".itxt").val(); // 得到这个-号的兄弟文本框的value值
        // console.log(n);
        if(n == 1) {
            return false; // 为1时就直接退出不执行
        }
        n--; // 每点一次-- 字符串自增返回字符串 结果正常计算
        $(this).siblings(".itxt").val(n);
        var p = $(this).parents(".p-num").siblings(".p-price").text();
        p = p.substr(1);
        // console.log(p);
        var price = (p * n).toFixed(2); // 保留两位小数
        $(this).parents(".p-num").siblings(".p-sum").text("￥"+ price);
        getSum();
    })
    // 5. 用户修改文本框的值 乘以 当前商品的单价 用change事件
    $(".itxt").change(function() {
        var n = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").text();
        p = p.substr(1);
        // console.log(p);
        var price = (p * n).toFixed(2); // 保留两位小数
        $(this).parents(".p-num").siblings(".p-sum").text("￥"+ price);
        getSum();
    })
    // 6. 计算总计 总额模块
    getSum(); // 页面加载完先调用一次
    function getSum() {
        var count = 0; // 计算总件数
        var money = 0; // 计算总额
        $(".itxt").each(function(i, domEle) {
            count += parseInt($(domEle).val());
            $(".amount-sum em").text(count);
        })
        $(".p-sum").each(function(i, domEle) {
            money += parseFloat($(domEle).text().substr(1));
            console.log(money);
            $(".price-sum em").text("￥" + money.toFixed(2));
        })
    }
    // 7. 删除商品模块
    // (1) 商品后面的删除按钮
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
        getSum();
    })
    // (2) 删除选中的按钮
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    })
    // (3) 清空购物车删除全部商品
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })
})