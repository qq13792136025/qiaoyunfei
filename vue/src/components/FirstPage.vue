<template>
<div class="website1 g-clearfix">
  <div class="web-logo g-clearfix">
    <div class="logo g-clearfix">
      <div class="logo-l">
        <div class="logo-img">
          <a href="index.html"><img src="http://common.njjshdzb.com/m003/bjxd/images/logo.png" alt=""></a>
        </div>
        <div class="logo-b">
          <p>{{msg}}</p>
          <p>立行业品牌典范</p>
        </div>
      </div>
      <div class="logo-r">
        <h3>尊享服务热线</h3>
        <p>400-965-8066</p>
      </div>
    </div>
  </div>
  <!--web-nav-->
  <div class="web-nav g-clearfix">
    <div class="nav g-clearfix">
      <div class="nav-l">
        <p><a href='javascript:void(0)' onClick='openZoosUrl();LR_HideInvite();;return false;'>在线咨询</a></p>
        <p><a href='javascript:void(0)' onClick='openZoosUrl();LR_HideInvite();;return false;'>在线预约</a></p>
        <p><a href='javascript:void(0)' onClick='openZoosUrl();LR_HideInvite();;return false;'>切换城市</a></p>        
      </div>
      <div class="nav-r">
        <ul>
          <li><a href="index.html">网站首页</a><i>/</i></li>
          <li><a href="#modal1">中心简介</a><i>/</i></li>
          <li><a href="index.html#href-wxpp">维修品牌</a><i>/</i></li>
          <li><a href="index.html#href-ddzn">到店指南</a><i>/</i></li>
          <li><a href="index.html#href-yjwx">邮寄维修</a></li>
        </ul>
      </div>
    </div>
  </div>
  <!--web-nav end-->
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '树钟表维修标杆'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset "UTF-8";
/*css 初始化 */
html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img { margin:0; padding:0; }
fieldset, img,input,button { border:none; padding:0;margin:0;outline-style:none; }
ul, ol, li { list-style:none; }
input { padding-top:0; padding-bottom:0; font-family: "Microsoft YaHei","SimSun","宋体";}
select, input { vertical-align:middle; }
select, input, textarea { font-size:14px; margin:0; }
textarea { resize:none; } /*防止拖动*/
img {border:0;  vertical-align:middle; max-width:100%;margin:auto;}  /*  去掉图片低测默认的3像素空白缝隙*/
img,object{max-width:100%;margin:auto;}
table { border-collapse:collapse; }
body {
    font:.24rem/150% '微软雅黑',Microsoft YaHei,SimSun,Arial,Verdana,"\5b8b\4f53";
    color:#353535;
    background-color: #fff;
}
.g-clearfix:before,.g-clearfix:after{
    content:"";
    display:table;
}
.g-clearfix:after{clear:both;}
.g-clearfix{
    *zoom:1;/*IE/7/6*/
}
a{color:#353535; text-decoration:none; }
a:hover{text-decoration: none; }
h1,h2,h3,h4,h5,h6{text-decoration:none;font-weight:normal;font-size:100%;}
s,i,em{font-style:normal;text-decoration:none;}

/* 鼠标手势 */
.cur-p {cursor: pointer}

/* 浮动 */
.fl {float:left}
.fr {float:right}

/* 显示/隐藏 */
.show {display: block !important}
.hidden {display: none !important}
.ov-h {overflow: hidden;zoom: 1}

/* 块级元素 */
.block { display: block; margin-left: auto; margin-right: auto; }
.inblock { display: inline-block; }

.web-logo {
  margin:0 auto;
  width: 100%;
  height: 104px;
  background:url(../assets/web-logo.png) no-repeat center ;
}
.logo {
  margin:0 auto;
  width:1200px;
  height: 58px;
  padding-top:25px;
}
.logo-l {
  float:left;
}
.logo-img {
  float: left;
}
.logo-b {
  float: left;
  border-left: 1px solid #fff;
  margin:0 0 0 24px;
}                                                                                                                                         
.logo-b p {
  font-size: 26px;
  color:#fff;
  line-height: 26px;
  padding: 2px 24px ;
}
.logo-r {
  float: right;
  text-align: right;
  border-right: 3px solid #fff;
  padding: 2px 24px;
}
.logo-r h3 {
  font-size: 24px;
  color: #fff;
  line-height: 24px;
}
.logo-r p {
  font-size: 30px;
  color: #fff;
  line-height: 30px;
}
/**   web-nav */
.web-nav {
  width:100%;
  height: 60px;
  background-color: #fff;
}
.nav {
  margin:0 auto;
  width: 1200px;
}
.nav-l {
  float: left;
  padding: 15px 0;
  position: relative;
}
.nav-l p{
  float: left;
  font-size: 18px;
  color: #000;
  line-height: 18px;
  padding:  5px 15px;
  border: 1px solid #000;
  border-radius: 5px;
}
.nav-l p:not(:first-child) {
  float: left;
  font-size: 18px;
  color: #000;
  padding:  5px 15px;
  border: 1px solid #000;
  border-radius: 5px;
  margin-left:10px;
}

.nav-r {
  float: right;
  padding: 22px 0;
}
.nav-r li {
  float: left;
  font-size: 18px;
  color: #000;
  line-height: 18px;
  margin-right: 20px;
}
.nav-r li:last-child {
  float: left;
  font-size: 18px;
  color: #000;
  line-height: 18px;
  margin-right:0px;
}

.nav-r li i {
  color: #969696;
  margin-left: 20px;
}
</style>
