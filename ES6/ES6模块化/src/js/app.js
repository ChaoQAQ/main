// 入口文件统一存放
// 通用方式引入
// 1. 引入分别暴露模块
import * as m1 from "./01-模块化的使用.js";
console.log(m1); // m1 是变量 是引入的所有内容

// 2. 引入统一暴露模块
import * as m2 from "./m2.js";
console.log(m2);

// 3. 引入默认暴露模块
import * as m3 from "./m3.js";
console.log(m3);
m3.default.change(); // 引入默认的 会包一层 default 对象

// 用jquery 修改背景颜色为粉色
// import $ from 'jquery'; // const $ = require("jquery");
// $("body").css("background", "pink");