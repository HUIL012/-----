var cs=document.getElementById("cs");
var boss=document.getElementById("boss");
var bossM=document.getElementById("bossMax");
var gameover=document.getElementById("gameover");
var foods=document.getElementById("foods");
var foodfs=document.getElementById("foodfs");
var cs2=document.getElementById("b");
var cs3=document.getElementById("cs3");
var fsfinde=document.getElementById("fsfinde");
var die=document.getElementById("die"); //分数
var food=document.getElementById("food");
var level=document.getElementById("level");
var restart=document.getElementById('restart');  //restart按钮
var startorstop=document.getElementById('startorstop');
var z;
var bossSpeed=13;  //boss速度
var mySpeed=5;  //my速度
var foodsCount=0;  //吃掉食物数
var ten=10;   //每隔10个食物boss就加快
var fs=0;  //分数
var fsB=10;  //根据boss的速度来改变加分的情况
var dies=0; //死了次数
var stsp=0; //start和stop按钮
var bossZd=0; //boos走动按钮
var mousedownbutton=0;

var BossZ=setInterval(function(){  //boss自动走动
	BosszFun();
},bossSpeed);

Start();
//开始
function Start(){
boss.style.top="50%";
boss.style.left="50%";
bossM.style.top="0px";
bossM.style.left="800px";
gameover.style.display="none";
Sjw();   //食物的随机位置

foodsCount=0;  //食物归零
clearInterval(BossZ);    //先停止boss走动
bossSpeed=13;  //boss速度
BossZ=setInterval(function(){   //再开启boss走动
	BosszFun();
},bossSpeed);
ten=10;
fs=0;
fsB=10;
cs3.innerHTML="您所得的分数："+fs;
cs2.innerHTML="吃掉的食物数："+foodsCount;
foodfs.innerHTML="";
dies++;  //死了就加一
Bstart();
}
//判断boss速度
setInterval(function(){
		
	if(foodsCount==ten){
		clearInterval(BossZ);    //先停止boss走动          
		bossSpeed--;   //每隔10个食物boss减一
		fsB+=10;
		ten+=10;
		BossZ=setInterval(function(){   //再开启boss走动
			BosszFun();
		},bossSpeed);
	}
},1);
//分数


//boss走动函数
function BosszFun(){
	var t=boss.offsetTop;   //图top
	var l=boss.offsetLeft;     //left
	var tM=bossM.offsetTop;   //boss top
	var lM=bossM.offsetLeft;     //left
	if(bossZd==0){
		if(t>tM){
			bossM.style.top=tM+1+"px";
		}
		if(t<tM){
			bossM.style.top=tM-1+"px";
		}
		if(l>lM){
			bossM.style.left=lM+1+"px";
		}
		if(l<lM){
			bossM.style.left=lM-1+"px";
		}
	}
	
}




//按键
var s=0;
var x=0;
var zuo=0;
var y=0;
var enter=0;
document.onkeydown =keydown;
document.onkeyup = keyup;
function keydown(e){
var e=e||event;
var currKey=e.keyCode||e.which||e.charCode;
if(currKey==13){enter=1;}
if(currKey==38){s=1;}
if(currKey==40){x=1;}
if(currKey==37){zuo=1;}
if(currKey==39){y=1;}
}
function keyup(e){
var e=e||event;
var currKey=e.keyCode||e.which||e.charCode;
if(currKey==13){enter=0;}
if(currKey==38){s=0;}
if(currKey==40){x=0;}
if(currKey==37){zuo=0;}
if(currKey==39){y=0;}
}
setInterval(function(){
	
	var t=boss.offsetTop;
	var l=boss.offsetLeft;
	var w=boss.width;
	var h=boss.height;
	if(s>0){
		if(t<0){
			boss.style.top=0+"px";
		}else{
			boss.style.top=t-1+"px";
		}
	}
	if(x>0){
		if(t>(600-h)){
			boss.style.top=600-h+"px";
		}else{
			boss.style.top=t+1+"px";
		}
	}
	if(zuo>0){
		if(l<0){
			boss.style.left=0+"px";
		}else{
			boss.style.left=l-1+"px";
		}
	}
	if(y>0){
		if(l>(800-w)){
			boss.style.left=800-w+"px";
		}else{
			boss.style.left=l+1+"px";
		}
	}
},mySpeed);

//鼠标
var dj=0;
var xx,yy;
var moustartorstop=1;
document.onmousedown=function(e){
	z=true;
	e=e||event;
	if(e.button==2){
		
	}
	document.onmousemove=function(e){
		e=e||event;
		  var x=e.clientX;
		  var y=e.clientY;
		  var t=boss.offsetTop;
		  var l=boss.offsetLeft;
		  var w=boss.width;
		  var h=boss.height;
		  x=x-w/2;
		  y=y-h/2;
		  xx=x;
		  yy=y;
		if(z==true){
			cs.innerHTML="鼠标移动坐标："+x+" "+y;
			if(t<0){
				boss.style.top="0px";
				return false;
			}
			if(t>(600-h)){
				boss.style.top=600-h+"px";
				return false;
			}
			if(l<0){
				boss.style.left="0px";
				return false;
			}
			if(l>(800-w)){
				boss.style.left=800-w+"px";
				return false;
			}
			if(moustartorstop==1){
				boss.style.top=t+(y-t)/100+"px";
				boss.style.left=l+(x-l)/100+"px";
			}
			
		}
	}
	dj=1;
	document.onmouseup=function(){z=false;dj=0;}
}
var mouseDown=setInterval(function(e){
	var t=boss.offsetTop;
	var l=boss.offsetLeft;
	if(mousedownbutton==0){
		if(dj==1){
			if(yy>t){
				boss.style.top=t+1+"px";
			}
			if(yy<t){
				boss.style.top=t-1+"px";
			}
			if(xx>l){
				boss.style.left=l+1+"px";
			}
			if(xx<l){
				boss.style.left=l-1+"px";
			}
		}
	}
	
},10);
//判断小鬼是否捉到我
setInterval(function(){
	var myt=boss.offsetTop;
	var myl=boss.offsetLeft;
	var bosst=bossM.offsetTop;
	var bossl=bossM.offsetLeft;
	var myw=boss.offsetWidth;
	var myh=boss.offsetHeight;
	var bossw=bossM.offsetWidth;
	var bossh=bossM.offsetHeight;
	//用for判断坐标
	for(var i=0;i<=myw;i++){
		for(var j=0;j<=myh;j++){
			for(var e=0;e<=bossw;e++){
				for(var r=0;r<=bossh;r++){
					if(myl+i==bossl+e && myt+j==bosst+r){
						gameover.style.display="block";
						gameover.onclick=function(){Start();}
						if(enter==1){Start();}
						LastFs();
						Bstop();
						return false;
					}
				}
			}
			
		}
		
	}
},1);

//随机物
function Sjw(){
	var fw=foods.offsetWidth;
	var fh=foods.offsetHeight;
	var st=Math.ceil(Math.random()*(600-fh))-1;
	var sl=Math.ceil(Math.random()*(600-fw))-1;
	foods.style.top=st+"px";
	foods.style.left=sl+"px";
	
	fs+=fsB;
	cs3.innerHTML="您所得的分数："+fs;
	
	
}
setInterval(function(){
	var myt=boss.offsetTop;
	var myl=boss.offsetLeft;
	var ft=foods.offsetTop;
	var fl=foods.offsetLeft;
	var myw=boss.offsetWidth;
	var myh=boss.offsetHeight;
	var fw=foods.offsetWidth;
	var fh=foods.offsetHeight;
	//用for判断坐标
	for(var i=0;i<=myw;i++){
		for(var j=0;j<=myh;j++){
			for(var e=0;e<=fw;e++){
				for(var r=0;r<=fh;r++){
					if((myl+i==fl+e) && (myt+j==ft+r)){
						
						foodsCount++;
						cs2.innerHTML="吃掉的食物数："+foodsCount;
						Sjwfs(ft,fl,fsB); //随机物分数
						Sjw();
						return false;
					}
				}
			}
			
		}
		
	}
	
},1);

function Sjwfs(ft,fl,fsB){
	var Zsize=0; //字体大小
	var Cr=Math.ceil(Math.random()*(256))-1;  //字体颜色
	var Cg=Math.ceil(Math.random()*(256))-1;
	var Cb=Math.ceil(Math.random()*(256))-1;
	var Ft=9;  //字体透明度
		foodfs.innerHTML="<h2 id=\"fsBs\" style=\"position:fixed ;top:"+ft+"px;left:"+fl+"px; font:22px \'Arial\'; color:rgba("+Cr+","+Cg+","+Cb+",."+Ft+");\">"+fsB+"</h2>";
}

function LastFs(){
	die.innerHTML="死了:"+dies+"次";
	food.innerHTML="吃掉的食物:"+foodsCount+"个";
	level.innerHTML="分数:"+fs+"分";
}
//判断是否停止
function Bstop(){
	bossZd=1;
	moustartorstop=0;
	mousedownbutton=1;
	startorstop.innerHTML="start";
}
function Bstart(){
	bossZd=0;
	moustartorstop=1;
	mousedownbutton=0;
	startorstop.innerHTML="stop";
}
setInterval(function(){
	restart.onclick=function(){
		Start();
		dies--;
		stsp=0;
		Batart();
		bossZd=0;
	};
	startorstop.onclick=function(){
		if(stsp%2==0){
			Bstop();
		}else{
			Bstart();
		}
		stsp++;
	}
},1);
//去除鼠标右键菜单
document.oncontextmenu = function (event){
    if(window.event){
        event = window.event;
    }try{
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
            return false;
        }
        return true;
    }catch (e){
        return false; 
    } 
}










