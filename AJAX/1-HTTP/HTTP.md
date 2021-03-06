# HTTP
HTTP (hypertext transport protocol) 协议 超文本传输协议 协议详细的规定了浏览器和万维网服务器之间相互通信的规则 
就是一种约定 规则

## 请求报文 浏览器向服务器发送请求数据
重点是格式与参数
1. 行       POST请求 GET请求 URL请求 HTTP/1.1 HTTP请求1.1版本用的比较多
2. 头       Houst: atguigu.com
            Cookie: name=guigu
            Content-type: application/x-www-form-urlencoded
            User-Agent: chrome 83
3. 空行
4. 体       username=admin&password=admin


## 响应报文 服务器接收到浏览器的请求作出相应 回复请求数据
1. 行       HTTP/1.1 状态码200 响应结果OK
2. 头       Content-type: text/html;charset=utf-8
            Content-lenght: 2066
            Content-encoding: gzip
3. 空行
4. 体       <html>
                <head>
                </head>
                <body>
                    <h1>尚硅谷</h1>
                </body>
            </html>

常用状态码
 2XX——表明请求被正常处理了

1、200 OK：请求已正常处理。

2、204 No Content：请求处理成功，但没有任何资源可以返回给客户端，一般在只需要从客户端往服务器发送信息，而对客户端不需要发送新信息内容的情况下使用。

3、206 Partial Content：是对资源某一部分的请求，该状态码表示客户端进行了范围请求，而服务器成功执行了这部分的GET请求。响应报文中包含由Content-Range指定范围的实体内容。

3XX——表明浏览器需要执行某些特殊的处理以正确处理请求

4、301 Moved Permanently：资源的uri已更新，你也更新下你的书签引用吧。永久性重定向，请求的资源已经被分配了新的URI，以后应使用资源现在所指的URI。

5、302 Found：资源的URI已临时定位到其他位置了，姑且算你已经知道了这个情况了。临时性重定向。和301相似，但302代表的资源不是永久性移动，只是临时性性质的。换句话说，已移动的资源对应的URI将来还有可能发生改变。

6、303 See Other：资源的URI已更新，你是否能临时按新的URI访问。该状态码表示由于请求对应的资源存在着另一个URL，应使用GET方法定向获取请求的资源。303状态码和302状态码有着相同的功能，但303状态码明确表示客户端应当采用GET方法获取资源，这点与302状态码有区别。

当301,302,303响应状态码返回时，几乎所有的浏览器都会把POST改成GET，并删除请求报文内的主体，之后请求会自动再次发送。

7、304 Not Modified：资源已找到，但未符合条件请求。该状态码表示客户端发送附带条件的请求时（采用GET方法的请求报文中包含If-Match，If-Modified-Since，If-None-Match，If-Range，If-Unmodified-Since中任一首部）服务端允许请求访问资源，但因发生请求未满足条件的情况后，直接返回304.。

8、307 Temporary Redirect：临时重定向。与302有相同的含义。

4XX——表明客户端是发生错误的原因所在。

9、400 Bad Request：服务器端无法理解客户端发送的请求，请求报文中可能存在语法错误。

10、401 Unauthorized：该状态码表示发送的请求需要有通过HTTP认证（BASIC认证，DIGEST认证）的认证信息。

11、403 Forbidden：不允许访问那个资源。该状态码表明对请求资源的访问被服务器拒绝了。（权限，未授权IP等）

12、404 Not Found：服务器上没有请求的资源。路径错误等。

5XX——服务器本身发生错误

13、500 Internal Server Error：貌似内部资源出故障了。该状态码表明服务器端在执行请求时发生了错误。也有可能是web应用存在bug或某些临时故障。

14、503 Service Unavailable：抱歉，我现在正在忙着。该状态码表明服务器暂时处于超负载或正在停机维护，现在无法处理请求。
