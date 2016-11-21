# responsiveWeb主要知识点总结
[项目展示](http://XiaomuZhang.github.io/responsiveWeb/index.html)在使用了boostrap框架,大多数界面元素都是通过bootstrap提供好的界面组件修改得来
### 1.container类
用于定义一个固定宽度且居中的版心    
### 2.响应式网格系统   
一个容器划分为12列，通过col-xx-xx的类名控制每一列的占比:`col-lg-xx`大桌面显示器 (≥1200px);`col-md-xx`桌面显示器 (≥992px);`col-sm-xx`平板 (≥768px);`col-xs-xx`手机 (<768px)。    
每一列有左右15px的padding值，row类中`margin-left:-15px;margin-right:-15px`可以屏蔽掉每一行的边距。   
### 2.字体图标    
```
/*定义字体库：*/
@font-face{
font-family:'字体名称';
src:url('XXX');
}
/*字体库引用*/
/*选择类名中以icon开头及包含icon的所有标签*/
[class=^"icon-"],
[class*=" icon-"] {
  font-family: itcast;
  font-style: normal;
}
```
### 3.容器的隐藏/显示，类名定义
- __hidden-xx__ : 在某种屏幕尺寸下隐藏
- __visible-xx__ : 在某种屏幕尺寸下显示     

### 4.顶部导航栏组件   
- __data-toggle__： 表明该组件的作用；
- __data-target__： 表明该组件的作用对象，值一般以"#xxx"开头，"XXX"为ID名;
- __navbar-default__：默认的外观样式,一般用自己的样式替换;
- __navbar-inverse__：暗色背景的样式;

```html
<nav class="navbar navbar-default navbar-static-top" role="navigation" >
  <div class="container">
    //面包板组件
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
     </button>
     //商标
      <a href="#" class="navbar-brand">
      ......
      </a>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
           <ul class="nav navbar-nav">
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
            //靠近右边的导航栏
            <ul class="nav navbar-nav navbar-right">
                 .....
            </ul>
      </div>
  </div>
</nav>
```
### 5.轮播图组件			
- __data-slide-to__：是指当前的li元素绑定的是第几个轮播项，给默认的展示项加上active；		
- __role__：添加的语义属性，解释当前标签的作用；
- __data-slide__：图片滑动的方向
- 当在大屏幕下时使用背景图片方式，小图片时用img标签，使图片等比例变化（不能设置固定高度)
```html 
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <!-- 轮播图的控制标签 -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <!-- 所有轮播项的盒子 -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="..." alt="...">
    </div>
    <div class="item">
      <img src="..." alt="...">
    </div>
    ...
  </div>

  <!-- 轮播图的左右两个控制按钮，a标签的href属性必须指向需要控制的轮播图组件id-->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```
### 6.在一个较小屏幕下展示一个超宽的图片，并让图片居中显示：		
		1. 使用换背景图的方式，`background-position:center center; background-size: cover/contain;`
		2. 使img元素绝对定位
###7.resize事件				
屏幕尺寸发生变化时触发，`$(window).on('resize', callback)`

###8.媒体对象		
这些组件都具有在文本内容左侧或右侧对其的图片		
```html
<div class="media">
  <a class="media-left media-middle" href="#">
    <img data-src="..." alt="...">
  </a>
  <div class="media-body">
    <h4 class="media-heading">Middle aligned media</h4>
    ...
  </div>
</div>
```
###9.tab选项卡
点击nav-tabs中的标签，点击后展示tab-content中相应的内容	
```html
<!-- 选项卡标签 -->
<ul class="nav nav-tabs" role="tablist">
  <li role="presentation" class="active"><a href="#home" role="tab" data-toggle="tab">Home</a></li>
  <li role="presentation"><a href="#profile" role="tab" data-toggle="tab">Profile</a></li>
  <li role="presentation"><a href="#messages" role="tab" data-toggle="tab">Messages</a></li>
  <li role="presentation"><a href="#settings" role="tab" data-toggle="tab">Settings</a></li>
</ul>
<!-- 标签内容 -->
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="home">...</div>
  <div role="tabpanel" class="tab-pane" id="profile">...</div>
  <div role="tabpanel" class="tab-pane" id="messages">...</div>
  <div role="tabpanel" class="tab-pane" id="settings">...</div>
</div>
```
###10.tooltip插件
需用js初始化:`$('[data-toggle="tooltip"]').tooltip()`
```html
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
```
###11.小屏幕下ul横向滑动
动态计算ul的宽度，如果宽度超过屏幕宽度，则其父容器设置`.css(overflow-x, scroll)`,使导航条横向滚动。

###12.固定定位affix插件
通过data-spy属性设置组件的固定定位
```html
<div data-spy="affix" data-offset-top="60" data-offset-bottom="200">
  ...
</div>
```
