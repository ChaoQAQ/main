// 服务器响应

// 1. 获取服务器的响应 XMLHttpRequest 对象的 responseText 或 responseXML 属性

const xhr = new XMLHttpRequest();

// (1) responseText 获取 字符串 形式的响应数据

xhr.responseText; 

// (2) responseXML  获取 XML 形式的响应数据 该数据作为 XML 对象进行解析
xhr.responseXML; 
xmlDoc = xhr.responseXML;
txt = "";
x = xmlDoc.getElementsByTagName("ARTIST");
for (i=0; i < x.length; i++)
{
    txt = txt + x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("myDiv").innerHTML=txt;