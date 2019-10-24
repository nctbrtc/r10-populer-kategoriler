// ==UserScript==
// @name         r10 widget
// @namespace    https://www.r10.net/members/52078-entriko.html
// @version      0.1
// @description  r10 modern temada ana sayfa widget i 
// @author       entriko
// @match        https://www.r10.net/
// @grant    GM_addStyle

// ==/UserScript==


document.querySelector("body > main > div > div.featuredTabs").style.width="80%";
document.querySelector("body > main > div > div.featuredTabs").style.float="left";
document.querySelector("body > main > div > div.forumList > div > div.mainHead").style.width="100%";

document.querySelector("body > main > div > div.featuredTabs > ul.nav.nav-tabs.nav-desktop.ui-sortable > li.customize.unsortable").remove();

var h=document.querySelector("body > main > div > div.featuredTabs > ul.nav.nav-tabs.nav-desktop.ui-sortable").offsetHeight;
var h2=document.querySelector("body > main > div > div.featuredTabs > div > div.head").offsetHeight;


    var birinci = document.querySelector("body > main > div > div.featuredTabs")
    var widget = document.createElement("div");


var o=document.querySelector("body > main > div > div.forumStats > div:nth-child(2) > span:nth-child(1)");
var o1=o.innerText.split('da: ');
var o2=o1[1].split(' (');
var toplamOnline=o2[0]





// birinci.appendChild(widget);


var konular=document.querySelector("body > main > div > div.forumList > div");
var bir;
var onlinelar=[];
var linklikat=[];
var $i;
var onlineSay;
var katLink=[];
var onlineSayisi=[];
var kats=konular.getElementsByClassName('title');
for ($i=0;$i<kats.length;$i++) {



var parca1=kats[$i].innerHTML.split('</span>');
var kategori=parca1[0].replace("<span>","");
linklikat.push(kategori);
var k=parca1[1].split('<a rel="nofollow"');
onlineSay=k[0].replace('<span class="online">',"").replace("(","").replace(' Görüntülüyor)','').replace('  ','').replace(' ','');
if (onlineSay)
{ onlineSay=onlineSay}
else {onlineSay='0';}

onlinelar.push(onlineSay);
    }
// console.log(onlinelar.sort((a,b) => b - a));

// console.log(linklikat);
var list = [];
for (var j = 0; j < onlinelar.length; j++) {
    list.push({'link': linklikat[j], 'sayi': onlinelar[j]});
var sirali = list.sort( function( a, b ) { return b.sayi - a.sayi; });

}

var siralicikti=[];
for ($i=0;$i<10;$i++)
{
  siralicikti.push('<div class="widgetSatir"><span class="kategori-ismi"><i class="fa fa-angle-right"></i> '+sirali[$i]['link']+'</span><span class="onlineSayisi"> <i class="fa fa-circle" style="color:#11f762;"></i> '+sirali[$i]['sayi']+'</span></div>')
}


 widget.innerHTML ='<div class="widgetTop">'+
''+
'	<div class="widgetTitle" style="height:'+h+'px;line-height:'+h+'px;">  <i class="icon-statistics"></i>  Populer  Kategoriler  '+
'	</div>'+
'   '+
'   	<div class="widgetHeader" style="height:'+h2+'px;line-height:'+h2+'px;">'+
'   		<span class="katcol">Kategori</span>'+
'   		<span class="onlinecol">Online</span>'+
'   	</div>'+
'   	<div class="widgetBody">'+
''+
''+ siralicikti.join("")+
'   		<div class="widgetSatir">	 '+
'   			<span class="kategori-ismi">'+
'   				<i class="fa fa-hashtag"></i> <b>Toplam Online</b> '+
'   			</span>'+
'  			<span  class="onlineSayisi">'+
'  				<i class="fa fa-circle" style="color:#ff5e3a;"></i><b> '+toplamOnline+
'  			</b></span>'+
'  		</div>'+
'   	</div>'+
'   	'+
' '+
'</div>';

widget.style.width='18%';
widget.style.float='right';

// birinci.parentNode.insertAfter(widget, birinci.nextSibling);
birinci.insertAdjacentHTML("afterend", widget.innerHTML);

console.log(sirali);

GM_addStyle(`
.widgetTitle
{
background-color: #3f4257;
color: white;
margin: 0px auto;
padding:0 20px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
}

.widgetTop {width: 19.5%;float:
right;border-color: #3f4257;
border-radius: 5px;
background-color: #e2e6e9;
background-color: #f5f8fa;
}
.onlinecol {
width:20%;float:right;font-weight: 600;
}
.katcol {
width:80%;float:left;padding-left:9px;font-weight: 600;
}
.widgetHeader {
display: block;color: white !important;background: #494c62;
}
.kategori-ismi
{
padding:9px; float:left; width:78%;line-height: 13px;height:32px;
 white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.onlineSayisi{
padding:9px;float:right;width:22%;line-height: 13px;
}




`);
