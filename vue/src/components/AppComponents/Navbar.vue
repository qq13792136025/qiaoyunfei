<template>

<!--web-banner-->
  <div class="web-banner g-clearfix">
    <div class="banner g-clearfix">
      <div class="banner-top">
        <img src="http://common.njjshdzb.com/m003/bjxd/images/web-banner-rnw.png" alt="">
      </div>
      <div class="banner-cen">
        <h3>世界名表维修服务中心</h3>
        <h4>始于1920年</h4>
        <p>中国钟表协会协作单位  <span>/</span>   34个省级行政区域连锁  <span>/</span>   国家资格认证服务技师</p>
      </div>
    </div>
  </div>
  <!--web-banner end-->

</template>

<script>

</script>

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
.web-banner {
  width: 100%;
  height: 484px;
  background:url(../../assets/web-banner-bj.jpg) no-repeat center;
  border-bottom: 1px solid #fff;
}
.banner {
  margin:0 auto;
  width: 1200px;
  text-align: center;
}
.banner-top {
  width:70px;
  margin:0 auto;
  margin-top: 95px;
}
.banner-top img {
  display: block;
}
.banner h3 {
  font-size: 80px;
  color: #fff;
  margin-top: 20px;
}
.banner h4 {
  font-size: 30px;
  color: #fff;
  margin-top: 25px;
}
.banner p {
  font-size: 22px;
  color: #fff;
  margin-top: 35px;
}



</style>
