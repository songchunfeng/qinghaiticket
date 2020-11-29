var flow2svg={init:function(o){var k=this;k.type=o;var b=$("#svg_exporter");this.cleanSvgHtml();var s=this.calcCanvasSize();var q=SVG("svg_exporter").size(s.w,s.h);var a=Model.define.elements;var l=Model.define.theme==null?false:true;var n=Model.define.page;if(o=="jpg"&&(n.backgroundColor==null||n.backgroundColor=="transparent")){q.rect(s.w,s.h).fill("rgb(250,250,250)")}else{if(n.backgroundColor!=null&&n.backgroundColor!="transparent"){q.rect(s.w,s.h).fill("rgb("+n.backgroundColor+")")}}var p=[];for(var r in a){p.push(Utils.copy(a[r]))}p=p.sort(function(j,i){return j.props.zindex-i.props.zindex});for(var g=0,h=p.length;g<h;g++){var m=p[g];if(m.name=="linker"){this.linker2svg(m,q,s,l)}else{if(m.parent==""||m.parent==null){this.shape2svg(m,q,s);if(m.children!=null&&m.children.length>0){var d=m.children;for(var f=0;f<d.length;f++){var e=d[f];var c=Utils.copy(a[e]);this.shape2svg(c,q,s,l)}}}}}if(Model.define.page.watermark||waterMark){this.setWatermark(Model.define.page.watermark||waterMark,s)}return{w:s.w,h:s.h}},getSvgHtml:function(){this.init();var a=$("#svg_exporter").html();return a},cleanSvgHtml:function(){$("#svg_exporter").html("")},shape2svg:function(shape,draw,canvasSize,hasTheme){var props=shape.props,x=25,y=25,w=props.w,h=props.h,path=shape.path,textBlock=shape.textBlock,dataAttr=shape.dataAttributes;props.x-=canvasSize.minX;props.y-=canvasSize.minY;x=props.x-15;y=props.y-15;var fStyle=Utils.getShapeFillStyle(shape.fillStyle,hasTheme);var lStyle=Utils.getShapeLineStyle(shape.lineStyle,hasTheme);var shapeBox=Utils.getShapeBox(shape);var shapeStyle=shape.shapeStyle;var defs=draw.defs();var group=draw.group().attr("transform","translate("+x+","+y+")");renderShape(path,group,fStyle,lStyle,defs);renderShapeMarkers(group);renderText(textBlock,group);renderDataAttr(dataAttr,group);function renderShapeMarkers(group){if(shape.attribute&&shape.attribute.markers&&shape.attribute.markers.length>0){var markers=shape.attribute.markers;var size=Schema.config.markerSize;var spacing=4;var offset=shape.attribute.markerOffset;var markersWidth=markers.length*size+(markers.length-1)*spacing;var x=shape.props.w/2-markersWidth/2;for(var i=0;i<markers.length;i++){var markerName=markers[i];var top=shape.props.h-size-offset;var marker_g=group.group().attr("transform","translate("+x+","+top+")");var markerPaths=Schema.markers[markerName].call(shape,size);renderShape(markerPaths,marker_g,fStyle,lStyle,defs);x+=size+spacing}}}function renderShape(path,group,fStyle,lStyle,defs){for(var i=0;i<path.length;i++){var cmd=path[i];var lineStyle=$.extend({},lStyle,cmd.lineStyle);var fillStyle=$.extend({},fStyle,cmd.fillStyle);var actions=cmd.actions,pathStr="";for(var j=0;j<actions.length;j++){var action=actions[j];pathStr+=parsePath(action,w,h,lineStyle.lineWidth)}var group_path=group.path(pathStr);renderBorder(lineStyle,fillStyle,group_path);renderFill(fillStyle,group_path,defs)}if(props.angle!=null&&props.angle!=0){var angle=180*props.angle/Math.PI;group.rotate(angle,props.w/2,props.h/2)}}function renderFill(fillStyle,group_path,defs){if(fillStyle.type=="none"){if(group_path!=null){group_path.fill("none")}return}else{if(fillStyle.type=="image"){var image=fillStyle.fileId;if(image.indexOf("http")<0){if(image.indexOf("/")<0){image=location.origin+"/file/id/"+image+"/diagram_user_image.png"}else{if(image.indexOf("/")==0){image=location.origin+image}else{image=location.origin+"/"+image}}if(location.origin.indexOf("processon.com")>-1){image=image.replace("http://","https://")}}else{if(image.indexOf("orgu2a928.bkt.clouddn.com")>=0){image=image.replace("orgu2a928.bkt.clouddn.com","cdn2.processon.com").replace("http://","https://")}else{if(image.indexOf("7xt9nt.com1.z0.glb.clouddn.com")>=0){image=image.replace("7xt9nt.com1.z0.glb.clouddn.com","cdn.processon.com").replace("http://","https://")}else{if(image.indexOf("p7o7ul1nf.bkt.clouddn.com")>=0){image=image.replace("p7o7ul1nf.bkt.clouddn.com","cdn1.processon.com").replace("http://","https://")}}}image=image.replace(/^http:\/\//,"https://")}var imgW=fillStyle.imageW,imgH=fillStyle.imageH,imgX=0,imgY=0;switch(fillStyle.display){case"static":imgX=eval("var w="+props.w+";var h = "+props.h+";"+fillStyle.imageX);imgY=eval("var w="+props.w+";var h = "+props.h+";"+fillStyle.imageY);break;case"stretch":imgW=props.w;imgH=props.h;break;case"fill":if(h/imgH>w/imgW){imgW=imgW*(h/imgH);imgH=h;imgX=(w-imgW)/2}else{imgH=imgH*(w/imgW);imgW=w;imgY=(h-imgH)/2}break;case"fit":if(h/imgH<w/imgW){imgW=imgW*(h/imgH);imgH=h;imgX=(w-imgW)/2}else{imgH=imgH*(w/imgW);imgW=w;imgY=(h-imgH)/2}break;case"original":imgX=(w-imgW)/2;imgY=(h-imgH)/2;break;case"tile":w=imgW;h=imgH;break}imgW=imgW>0?imgW:1;imgH=imgH>0?imgH:1;w=w>0?w:1;h=h>0?h:1;if(fillStyle.display=="stretch"&&flow2svg.type=="pdfHD"){var image=group.image(image).size(imgW,imgH).attr({preserveAspectRatio:"none",crossOrigin:"anonymous"});group_path.fill("transparent");image=null}else{var pattern=group.pattern(w,h,function(img){img.image(image).size(imgW,imgH).attr({preserveAspectRatio:"none",crossOrigin:"anonymous"}).move(imgX,imgY)});group_path.fill(pattern);pattern=null}return}}if(fillStyle.type=="gradient"&&fillStyle.gradientType=="radial"){fillStyle.alpha=fillStyle.alpha!=null?fillStyle.alpha:shapeStyle.alpha;var gradient=defs.gradient("radial",function(stop){stop.at(0,"rgb("+fillStyle.beginColor+")",fillStyle.alpha);stop.at(1,"rgb("+fillStyle.endColor+")",fillStyle.alpha)});gradient.radius(fillStyle.radius);group_path.fill(gradient)}else{if(fillStyle.type=="gradient"&&fillStyle.gradientType=="linear"){fillStyle.alpha=fillStyle.alpha!=null?fillStyle.alpha:shapeStyle.alpha;var gradient=defs.gradient("linear",function(stop){stop.at(0,"rgb("+fillStyle.beginColor+")",fillStyle.alpha);stop.at(1,"rgb("+fillStyle.endColor+")",fillStyle.alpha)});gradient.from(1,0).to(0,1);group_path.fill(gradient)}else{var st=$.extend(shape.fillStyle,fillStyle);var fillStyle_=Utils.getShapeFillStyle(st,hasTheme);var color=fillStyle_.color;if(color.indexOf("r")>=0){var colors=[];if($.isEmptyObject(shape.fillStyle)){colors=fillStyle_.color.split(",")}else{colors=shape.fillStyle.color.split(",")}var r=colors[0];var g=colors[1];var b=colors[2];if(typeof r=="string"){color=color.replace("r",255).replace("g",255).replace("b",255)}else{color=color.replace("r",r).replace("g",g).replace("b",b)}var cs=color.split(",");var newColor=[];newColor.push(eval(cs[0]));newColor.push(eval(cs[1]));newColor.push(eval(cs[2]));color=newColor.join(",")}var fs={color:"rgb("+color+")"};if(fillStyle.alpha!=null){fs.opacity=fillStyle.alpha}else{if(shapeStyle.alpha!=null){fs.opacity=shapeStyle.alpha}}group_path.fill(fs)}}}function renderBorder(lineStyle,fillStyle,group_path){var lineStyle_=Utils.getShapeLineStyle(shape.lineStyle,false);var lineWidth=lineStyle.lineWidth;if(typeof lineStyle.lineWidth=="string"){lineWidth=eval("var lineWidth="+lineStyle_.lineWidth+";"+lineStyle.lineWidth)}lineStyle.lineColor=lineStyle.lineColor?lineStyle.lineColor:"0,0,0";shapeStyle.alpha=shapeStyle.alpha?shapeStyle.alpha:"1";var style={width:lineWidth,color:"rgba("+lineStyle.lineColor+","+shapeStyle.alpha+")"};if(lineStyle.lineStyle=="dot"){style=$.extend(style,{dasharray:"3,4"})}else{if(lineStyle.lineStyle=="dashed"){style=$.extend(style,{dasharray:"10,6"})}else{if(lineStyle.lineStyle=="dashdot"){style=$.extend(style,{dasharray:"10,6,3,6"})}}}if(lineStyle.lineWidth==0){group_path.stroke("none")}else{group_path.stroke(style)}}function renderText(textBlock,group){for(var i=0;i<textBlock.length;i++){var textObj=textBlock[i];var pos=textObj.position,text=textObj.text,style=null;var fontStyle=Utils.getShapeFontStyle(shape.fontStyle);fontStyle=$.extend({},fontStyle,textObj.fontStyle);var _w=eval("var w="+props.w+";var h = "+props.h+";"+pos.w);var _h=eval("var w="+props.w+";var h = "+props.h+";"+pos.h);var _x=eval("var w="+props.w+";var h = "+props.h+";"+pos.x);var _y=eval("var w="+props.w+";var h = "+props.h+";"+pos.y);if(fontStyle.orientation=="horizontal"){var blockCenter={x:_x+_w/2,y:_y+_h/2};pos={x:blockCenter.x-_h/2,y:blockCenter.y-_w/2,w:_h,h:_w}}var _group=group.group();var style="font-family:"+fontStyle.fontFamily+";text-align:"+fontStyle.textAlign+";font-size:"+fontStyle.size+"px;vertical-align:"+fontStyle.vAlign+";color:rgb("+fontStyle.color+");";if(fontStyle.bold){style+="font-weight:700;"}else{style+="font-weight:400;"}if(fontStyle.italic){style+="font-style:italic;"}if(fontStyle.underline){style+="text-decoration:underline;"}if(fontStyle.orientation=="horizontal"){style+="line-height:"+Math.round(fontStyle.size*1.25)+"px;width:"+Math.ceil(_h)+"px; -ms-word-wrap: break-word;word-break:break-word;overflow-wrap: break-word;border:0;"}else{style+="line-height:"+Math.round(fontStyle.size*1.25)+"px;width:"+Math.ceil(_w)+"px; -ms-word-wrap: break-word;word-break:break-word;overflow-wrap: break-word;border:0;"}text=text||"";text=text.replace(/\n/g,"</br>").replace(/\u001C/g," ").replace(//g," ").replace(/<div><\/div>/g,"");if(typeof isNewTextV!="undefined"&&!isNewTextV){text=text.replace(/</g,"&lt;").replace(/>/g,"&gt;");text=text.replace(/&lt;br&gt;/gi,"<br>");text=text.replace(/&lt;b&gt;/gi,"<b>").replace(/&lt;\/b&gt;/gi,"</b>");text=text.replace(/&lt;div&gt;/gi,"<div>").replace(/&lt;\/div&gt;/gi,"</div>");text=text.replace(/&lt;i&gt;/gi,"<i>").replace(/&lt;\/i&gt;/gi,"</i>");text=text.replace(/&lt;u&gt;/gi,"<u>").replace(/&lt;\/u&gt;/gi,"</u>");text=text.replace(/&lt;font/gi,"<font").replace(/\"&gt;/gi,'">').replace(/&lt;\/font&gt;/gi,"</font>");text=text.replace(/&lt;span/gi,"<span").replace(/&lt;\/span&gt;/gi,"</span>");text=text.replace(/&lt;p/gi,"<p").replace(/&lt;\/p&gt;/gi,"</p>")}var tempDiv=$("<div contenteditable=true style='"+style+";display:inline-block;position: relative;'>"+text+"</div>").appendTo("body");var textH=tempDiv.outerHeight();var top=0;if(fontStyle.vAlign=="middle"){top=(_h-textH)/2}else{if(fontStyle.vAlign=="bottom"){top=_h-textH}else{top=0}}top=top+_y;var deg=0;if(fontStyle.orientation=="horizontal"){top=(_w/2-textH/2);var textAngle=shape.props.angle;textAngle=(Math.PI*1.5+textAngle)%(Math.PI*2);deg=Math.round(textAngle/(Math.PI*2)*360);top=_x+top;_x=(props.h-_h)/2-props.h}flow2svg.richText2svg(tempDiv,_group,_x,top,deg,shapeStyle.alpha);tempDiv.remove()}}function renderText1(textBlock,group){for(var i=0;i<textBlock.length;i++){var textObj=textBlock[i];var pos=textObj.position,text=textObj.text,style=null;var fontStyle=Utils.getShapeFontStyle(shape.fontStyle);fontStyle=$.extend({},fontStyle,textObj.fontStyle);var _w=eval("var w="+props.w+";var h = "+props.h+";"+pos.w);var _h=eval("var w="+props.w+";var h = "+props.h+";"+pos.h);var _x=eval("var w="+props.w+";var h = "+props.h+";"+pos.x);var _y=eval("var w="+props.w+";var h = "+props.h+";"+pos.y);if(fontStyle.orientation=="horizontal"){var blockCenter={x:_x+_w/2,y:_y+_h/2};pos={x:blockCenter.x-_h/2,y:blockCenter.y-_w/2,w:_h,h:_w}}var _group=group.group();var fobj=_group.foreignObject(_w,_h);fobj.attr("x",_x);fobj.attr("style","overflow:visible;");var style="font-family:"+fontStyle.fontFamily+";text-align:"+fontStyle.textAlign+";font-size:"+fontStyle.size+"px;vertical-align:"+fontStyle.vAlign+";color:rgb("+fontStyle.color+");";if(fontStyle.bold){style+="font-weight:700;"}else{style+="font-weight:400;"}if(fontStyle.italic){style+="font-style:italic;"}if(fontStyle.underline){style+="text-decoration:underline;"}if(fontStyle.orientation=="horizontal"){style+="line-height:"+Math.round(fontStyle.size*1.25)+"px;width:"+Math.ceil(_h)+"px;word-break:break-word;border:0;"}else{style+="line-height:"+Math.round(fontStyle.size*1.25)+"px;width:"+Math.ceil(_w)+"px;word-break:break-word;border:0;"}var tempDiv=$("<div contenteditable=true style='"+style+";display:inline-block;'></div>").appendTo("body");var text1=(text||"").replace(/<br><br>/g,"<div style='padding-top:"+Math.round(fontStyle.size*1.25)+"px;'></div><div></div>").replace(/&nbsp;/g,"\u00a0").replace(/<div><br>/g,"<div style='padding-top:"+Math.round(fontStyle.size*1.25)+"px;'>").replace(/<br>/g,"<div></div>");text1=text1.replace(/\n/g,"<div></div>").replace(/\t/g,"&nbsp;").replace(/\  /g,"&nbsp;&nbsp;");if(typeof isNewTextV!="undefined"&&!isNewTextV){text1=text1.replace(/</g,"&lt;").replace(/>/g,"&gt;");text1=text1.replace(/&lt;br&gt;/gi,"<br>");text1=text1.replace(/&lt;b&gt;/gi,"<b>").replace(/&lt;\/b&gt;/gi,"</b>");text1=text1.replace(/&lt;div&gt;/gi,"<div>").replace(/&lt;\/div&gt;/gi,"</div>");text1=text1.replace(/&lt;i&gt;/gi,"<i>").replace(/&lt;\/i&gt;/gi,"</i>");text1=text1.replace(/&lt;u&gt;/gi,"<u>").replace(/&lt;\/u&gt;/gi,"</u>");text1=text1.replace(/&lt;font/gi,"<font").replace(/\"&gt;/gi,'">').replace(/&lt;\/font&gt;/gi,"</font>");text1=text1.replace(/&lt;span/gi,"<span").replace(/&lt;\/span&gt;/gi,"</span>");text1=text1.replace(/&lt;p/gi,"<p").replace(/&lt;\/p&gt;/gi,"</p>")}tempDiv.html(text1);var textH=tempDiv.outerHeight();fobj.attr("height",textH);var top=0;if(fontStyle.vAlign=="middle"){top=(_h/2-textH/2)}else{if(fontStyle.vAlign=="bottom"){top=(_h-textH)}else{top=0}}fobj.attr("y",top+_y);tempDiv.remove();if(fontStyle.orientation=="horizontal"){top=(_w/2-textH/2);var textCenter={x:_x+_w/2,y:top+textH/2};var textAngle=shape.props.angle;if(textAngle!=0){var center={x:shape.props.w/2,y:shape.props.h/2};textCenter=Utils.getRotated(center,textCenter,textAngle)}textAngle=(Math.PI*1.5+textAngle)%(Math.PI*2);var deg=Math.round(textAngle/(Math.PI*2)*360);var left=(textCenter.x+(shape.props.x-shapeBox.x))-pos.w/2;var degStr="width:"+Math.ceil(pos.w)+"px;height:"+textH+"px;";fobj.attr({y:_x+top,x:(props.h-_h)/2-props.h,width:pos.w,transform:"rotate("+deg+")"});style+=degStr}else{style+=""}fobj.appendChild("div",{innerHTML:text1,style:style})}}function renderDataAttr(dataAttr,group){for(var i=0,len=dataAttr.length;i<len;i++){var dataAttrBoj=dataAttr[i],text="";if(dataAttrBoj.showType=="text"||dataAttrBoj.showType=="icon"){var _group=group.group();if(dataAttrBoj.showType=="text"){text=dataAttrBoj.value;if(dataAttrBoj.type=="link"){text="<a style='color:#4183C4;' href="+text+" target='_blank'> "+text+" </a>"}if(dataAttrBoj.showName==true){text=dataAttrBoj.name+":"+text}}else{if(dataAttrBoj.showType=="icon"){var imgUrl="http://192.168.10.11:8080/themes/default/images/diagraming/data-attr-icons.png";var left=0,top=0;dataAttrBoj.icon=dataAttrBoj.icon>29?parseInt(dataAttrBoj.icon)+1:dataAttrBoj.icon;left=-(dataAttrBoj.icon-1)%5*24-5+"px";top=-(Math.floor((dataAttrBoj.icon)/5))*23-4+"px";text='<i style="display:inline-block;width:21px;height:21px;background:url(https://www.processon.com/themes/default/images/diagraming/data-attr-icons.png) '+left+" "+top+'"></i>';if(dataAttrBoj.type=="link"){text="<a href="+dataAttrBoj.value+' target="_blank" style="display:inline-block;width:21px;height:21px;background:url(https://www.processon.com/themes/default/images/diagraming/data-attr-icons.png) '+left+" "+top+'"></a>'}if(dataAttrBoj.showName==true){text='<span style ="position: relative;top:-7px">'+dataAttrBoj.name+": </span>"+text}if(location.origin.indexOf("processon.com")>-1){image="https://www.processon.com/images/data-attr/"+dataAttrBoj.icon+".png"}else{image=location.origin+"/images/data-attr/"+dataAttrBoj.icon+".png"}var iconRect=_group.image(image,20,20)}}var tempDiv=$("<div contenteditable=true style='display:inline-block;font-size:12px;color:#333;'>"+text+"</div>").appendTo("body");var h=tempDiv.outerHeight();var w=tempDiv.outerWidth();var x,y;var horizontal=dataAttrBoj.horizontal,vertical=dataAttrBoj.vertical;if(horizontal=="mostleft"){x=-w-2}else{if(horizontal=="leftedge"){x=-w/2}else{if(horizontal=="left"){x=2}else{if(horizontal=="center"){x=(shape.props.w-w)/2}else{if(horizontal=="right"){x=shape.props.w-w-2}else{if(horizontal=="rightedge"){x=shape.props.w-w/2}else{x=shape.props.w+2}}}}}}if(vertical=="mosttop"){y=-h}else{if(vertical=="topedge"){y=-h/2}else{if(vertical=="top"){y=0}else{if(vertical=="middle"){y=(shape.props.h-h)/2}else{if(vertical=="bottom"){y=shape.props.h-h}else{if(vertical=="bottomedge"){y=shape.props.h-h/2}else{y=shape.props.h}}}}}}flow2svg.richText2svg(tempDiv,_group,x,y,0);if(typeof(iconRect)!="undefined"){iconRect.attr({x:x+w-21,y:y})}tempDiv.remove()}}}function renderDataAttr1(dataAttr,group){for(var i=0,len=dataAttr.length;i<len;i++){var dataAttrBoj=dataAttr[i],text="";if(dataAttrBoj.showType=="text"||dataAttrBoj.showType=="icon"){var _group=group.group();if(dataAttrBoj.showType=="text"){text=dataAttrBoj.value;if(dataAttrBoj.type=="link"){text="<a style='color:#4183C4;' href="+text+" target='_blank'> "+text+" </a>"}if(dataAttrBoj.showName==true){text=dataAttrBoj.name+":"+text}}else{if(dataAttrBoj.showType=="icon"){var imgUrl="http://192.168.10.11:8080/themes/default/images/diagraming/data-attr-icons.png";var left=0,top=0;dataAttrBoj.icon=dataAttrBoj.icon>29?parseInt(dataAttrBoj.icon)+1:dataAttrBoj.icon;left=-(dataAttrBoj.icon-1)%5*23-3+"px";top=-(Math.floor((dataAttrBoj.icon)/5))*23+"px";text='<i style="display:inline-block;width:21px;height:21px;background:url(https://www.processon.com/themes/default/images/diagraming/data-attr-icons.png) '+left+" "+top+'"></i>';if(dataAttrBoj.type=="link"){text="<a href="+dataAttrBoj.value+' target="_blank" style="display:inline-block;width:21px;height:21px;background:url(https://www.processon.com/themes/default/images/diagraming/data-attr-icons.png) '+left+" "+top+'"></a>'}if(dataAttrBoj.showName==true){text='<span style ="position: relative;top:-7px">'+dataAttrBoj.name+": </span>"+text}}}var tempDiv=$("<div contenteditable=true style='display:inline-block;font-size:12px;color:#333;'>"+text+"</div>").appendTo("body");var h=tempDiv.outerHeight();var w=tempDiv.outerWidth();tempDiv.remove();var fobj=_group.foreignObject(w,h);var x,y;var horizontal=dataAttrBoj.horizontal,vertical=dataAttrBoj.vertical;if(horizontal=="mostleft"){x=-w-2}else{if(horizontal=="leftedge"){x=-w/2}else{if(horizontal=="left"){x=2}else{if(horizontal=="center"){x=(shape.props.w-w)/2}else{if(horizontal=="right"){x=shape.props.w-w-2}else{if(horizontal=="rightedge"){x=shape.props.w-w/2}else{x=shape.props.w+2}}}}}}if(vertical=="mosttop"){y=-h}else{if(vertical=="topedge"){y=-h/2}else{if(vertical=="top"){y=0}else{if(vertical=="middle"){y=(shape.props.h-h)/2}else{if(vertical=="bottom"){y=shape.props.h-h}else{if(vertical=="bottomedge"){y=shape.props.h-h/2}else{y=shape.props.h}}}}}}fobj.attr({x:x,y:y});fobj.appendChild("div",{innerHTML:text,style:"font-size : 12px;color:#333;"})}}}function parsePath(action,w,h,lineWidth){var path="";if(action.action=="close"){return"Z"}var ac=action.action.substring(0,1).toUpperCase();path+=ac+" ";var baseStr="var w = "+w+";var h = "+h+";";if(action.action=="curve"){return path+eval(baseStr+action.x1)+" "+eval(baseStr+action.y1)+" "+eval(baseStr+action.x2)+" "+eval(baseStr+action.y2)+" "+eval(baseStr+action.x)+" "+eval(baseStr+action.y)}else{if(action.action=="quadraticCurve"){return path+eval(baseStr+action.x1)+" "+eval(baseStr+action.y1)+" "+eval(baseStr+action.x)+" "+eval(baseStr+action.y)}}return path+eval(baseStr+action.x)+" "+eval(baseStr+action.y)}},linker2svg:function(l,j,c,i){var p=l.points;var n=g(l.from);var d=g(l.to);if(l.attribute&&l.attribute.collapseBy){return}if(Math.abs(n.y-d.y)<1&&Math.abs(n.x-d.x)<1){return}var o=Utils.getEndpointAngle(l,"from");var f=Utils.getEndpointAngle(l,"to");var e=Utils.getLinkerLineStyle(l.lineStyle,i);if(e.lineWidth==0){e.lineWidth=1}if(l.linkerType=="broken"){var r=Model.intersection[l.id];if(r){p=m(l.from,l.points,r.points,l.to)}}b();function b(){var A="";var z=j.group();if(l.linkerType=="curve"){A+="M"+n.x+" "+n.y+"C";for(var v=0;v<p.length;v++){var y=g(p[v]);A+=" "+y.x+" "+y.y}A+=" "+d.x+" "+d.y}else{if(l.linkerType=="broken"){var s=Model.intersection[l.id];if(s){n=g(n);d=g(d)}A+="M"+n.x+" "+n.y;for(var v=0;v<p.length;v++){var y=g(p[v]);if(y.type=="intersectionR"){var u=y.x,t=y.y;A+="L"+(u-6)+" "+t+"A 3 3, 0, 0, 1,"+(u+6)+" "+t}else{if(y.type=="intersectionL"){var u=y.x,t=y.y;A+="L"+(u+6)+" "+t+"A 3 3, 0, 0, 0,"+(u-6)+" "+t}else{if(y.type!="equal"){A+="L"+y.x+" "+y.y}}}}A+="L"+d.x+" "+d.y}else{if(l.linkerType=="normal"){A+="M"+n.x+" "+n.y;A+="L"+d.x+" "+d.y}}}var x=z.path(A);var w={width:e.lineWidth,color:"rgb("+e.lineColor+")"};if(e.lineStyle=="dashed"){w=$.extend(w,{dasharray:"8,5"})}else{if(e.lineStyle=="dot"){w=$.extend(w,{dasharray:"3,3"})}else{if(e.lineStyle=="dashdot"){w=$.extend(w,{dasharray:"10,5,3,5"})}}}x.stroke(w);x.fill("none");q(e,x);k(z)}function q(s,v){var u=null;switch(s.beginArrowStyle){case"solidArrow":var w="M15,1.5 L2,6 L15,10.5",t=0;if(s.lineWidth=="1"){w="M10,3 L0,6 L10,9";t=0}u=j.marker(16,12,function(y){y.path(w).fill("rgb("+s.lineColor+")").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",t);break;case"normal":u=j.marker(16,20,function(y){y.path("M15,1 L1,10 L15,19").fill("none").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",0);break;case"dashedArrow":u=j.marker(16,12,function(y){y.path("M1,6 L15,1 L15,11L1,6").fill("#fff").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",0);break;case"solidDiamond":u=j.marker(20,12,function(y){y.path("M2,6 L10,2 L18,6 L10,10L2,6").fill("rgb("+s.lineColor+")").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",0);break;case"dashedDiamond":u=j.marker(20,12,function(y){y.path("M2,6 L10,2 L18,6 L10,10L2,6").fill("#fff").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",0);break;case"solidCircle":u=j.marker(16,16,function(y){y.circle(8).center(8,8).fill("rgb("+s.lineColor+")").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",3);break;case"dashedCircle":u=j.marker(16,16,function(y){y.circle(8).center(8,8).fill("#fff").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",3);break;case"cross":u=j.marker(14,12,function(y){y.path("M14,0 L0,12").fill("none").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",-1);break;case"asynch1":u=j.marker(20,12,function(y){y.path("M0,8 L15,0").fill("none").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",0).attr("refY",8);break;case"asynch2":u=j.marker(20,12,function(y){y.path("M0,0 L15,8").fill("none").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",0).attr("refY",0);break;default:break}var x=null;switch(s.endArrowStyle){case"solidArrow":var w="M0,2 L14,6 L0,11 L0,2",t=16;if(s.lineWidth=="1"){w="M0,3 L10,6 L0,9 L0,3";t=10}x=j.marker(16,12,function(y){y.path(w).fill("rgb("+s.lineColor+")").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",t);break;case"normal":x=j.marker(16,16,function(y){y.path("M0,0 L10,8 L0,16").fill("none").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",11);break;case"dashedArrow":x=j.marker(14,12,function(y){y.path("M1,1 L14,6 L1,11L1,1").fill("#fff").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",16);break;case"solidDiamond":x=j.marker(20,12,function(y){y.path("M2,6 L10,2 L18,6 L10,10L2,6").fill("rgb("+s.lineColor+")").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",20);break;case"dashedDiamond":x=j.marker(20,12,function(y){y.path("M2,6 L10,2 L18,6 L10,10L2,6").fill("#fff").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",20);break;case"solidCircle":x=j.marker(16,16,function(y){y.circle(8).center(8,8).fill("rgb("+s.lineColor+")").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",13);break;case"dashedCircle":x=j.marker(16,16,function(y){y.circle(8).center(8,8).fill("#fff").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",13);break;case"cross":x=j.marker(14,12,function(y){y.path("M14,0 L0,12").fill("none").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",15);break;case"asynch1":x=j.marker(20,12,function(y){y.path("M15,0 L0,8").fill("none").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",16).attr("refY",0);break;case"asynch2":x=j.marker(20,12,function(y){y.path("M15,8 L0,0").fill("none").stroke({width:s.lineWidth,color:"rgb("+s.lineColor+")"})}).attr("markerUnits","userSpaceOnUse").attr("refX",16).attr("refY",8);break;default:break}if(u!=null){if(typeof s.lineStyle!="undefined"||s.lineStyle!=="solid"){u.attr("stroke-dasharray","0,0")}v.attr("marker-start","url(#"+u.node.id+")")}if(x!=null){if(typeof s.lineStyle!="undefined"||s.lineStyle!=="solid"){x.attr("stroke-dasharray","0,0")}v.attr("marker-end","url(#"+x.node.id+")")}}function k(C){if(l.text==null||l.text==""){return}var D=null;if(l.textPos!=null){var z=g({x:l.textPos.x,y:l.textPos.y});D={x:z.x,y:z.y};var u=$("#"+l.id).children(".linker_text");if(l.textPos.pos=="bottom"){D.y+=u.outerHeight()/2+4}else{if(l.textPos.pos=="top"){D.y-=u.outerHeight()/2+4}}}else{D=a()}var w=Utils.getLinkerFontStyle(l.fontStyle);var x=w.fontFamily;var s="display:none;vertical-align: top;text-align:"+w.textAlign+";color:rgb("+w.color+");line-height:"+Math.round(w.size*1.25)+"px;font-size:"+w.size+"px;font-family:"+x+";white-space:nowrap;display:inline-block;background:#fff;";if(w.bold){s+="font-weight:700;"}else{s+="font-weight:400;"}if(w.italic){s+="font-style:italic;"}if(w.underline){s+="text-decoration:underline;"}var B=l.text.replace(/\n/g,"<br>").replace(/\u001C/g," ").replace(//g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&lt;br&gt;/gi,"<br>").replace(/&lt;div&gt;/gi,"<div>").replace(/&lt;\/div&gt;/gi,"</div>");var v=$("<div contenteditable=true style='"+s+";display:inline-block;'></div>").appendTo("body");v.html(B);var y=v.width(),t=v.outerHeight();v.css("width",y);var A=C.rect();A.attr({width:y,height:t,x:D.x-y/2,y:D.y-t/2,fill:"#fff"});flow2svg.richText2svg(v,C,D.x-y/2,D.y-t/2,0);v.remove()}function a(){var z={};if(l.linkerType=="normal"){z={x:0.5*n.x+0.5*d.x,y:0.5*n.y+0.5*d.y}}else{if(l.linkerType=="curve"){var G=n;var E=p[0];var A=p[1];var y=d;z={x:G.x*0.125+E.x*0.375+A.x*0.375+y.x*0.125,y:G.y*0.125+E.y*0.375+A.y*0.375+y.y*0.125}}else{var H=[];H.push(n);for(var u=0;u<p.length;u++){var s=p[u];H.push(s)}H.push(d);var D=0;for(var w=1;w<H.length;w++){var E=H[w-1];var A=H[w];var x=Utils.measureDistance(E,A);D+=x}var C=D/2;var v=0;for(var w=1;w<H.length;w++){var E=H[w-1];var A=H[w];var x=Utils.measureDistance(E,A);var B=v+x;if(B>=C){var F=(C-v)/x;z={x:(1-F)*E.x+F*A.x,y:(1-F)*E.y+F*A.y};break}v=B}}}return z}function m(E,G,v,F){for(var z=0;z<G.length-1;z++){var D=G[z].x,A=G[z].y,u=G[z+1].x,C=G[z+1].y;if(Math.abs(A-C)<1&&Math.abs(D-u)<1){G[z+1].type="equal";G[z].type="equal"}}G.unshift(h(E));G.push(h(F));for(var z=0;z<G.length-1;z++){var D=G[z].x,A=G[z].y,u=G[z+1].x,C=G[z+1].y;if(Math.abs(A-C)<1){G[z].intersectionArr=[];if(u>D){for(var w=0;w<v.length;w++){var t=v[w].x,B=v[w].y;if(Math.abs(A-B)<1&&t>D&&t<u){v[w].type="intersectionR";G[z].intersectionArr.push(v[w])}}G[z].intersectionArr=H(G[z].intersectionArr,"x")}else{for(var w=0;w<v.length;w++){var t=v[w].x,B=v[w].y;if(Math.abs(A-B)<1&&t<D&&t>u){v[w].type="intersectionL";G[z].intersectionArr.push(v[w])}}G[z].intersectionArr=H(G[z].intersectionArr,"x").reverse()}}}var I=[];for(var z=0;z<G.length;z++){I.push(G[z]);var s=G[z].intersectionArr;if(s!=undefined&&s.length>0){for(var w=0;w<s.length;w++){I.push(s[w])}}}I.splice(0,1);I.splice(I.length-1,1);return I;function H(x,L){var y;for(var K=0;K<x.length-1;K++){for(var J=0;J<x.length-1;J++){if(x[J][L]>x[J+1][L]){y=x[J];x[J]=x[J+1];x[J+1]=y}}}return x}}function g(t){var s=15;t.x=t.x-c.minX-s;t.y=t.y-c.minY-s;return t}function h(t){var s=15;t.x=t.x+c.minX+s;t.y=t.y+c.minY+s;return t}},calcCanvasSize:function(){var a=null;var h=null;var e=null;var d=null;var g=Model.define.elements;$(".shape_box").each(function(){var y=$(this);var q=y.position();if(y.hasClass("linker_box")){var k=y.attr("id");var u=g[k].from.x,r=g[k].from.y,v=g[k].to.x,s=g[k].to.y;if(Math.abs(u-v)<1&&Math.abs(r-s)<1){return true}}var w=q.left+y.width();var j=q.top+y.height();if(y.children(".linker_text").length>0){var o=y.children(".linker_text").position().left;var n=q.left+o+y.children(".linker_text").width();if(o<0){q.left=q.left+o}if(n>w){w=n}}if(y.children(".text_canvas").length>0){var p=y.children(".text_canvas");var i=p.position(),l=p.height(),x=y.height();if(i.top<0){q.top=q.top+i.top}if(i.top+l>x){j=y.position().top+i.top+l}}var t=0;var m=0;y.find(".attr_canvas").each(function(){var z=$(this);var A=z.position();var B=A.left+z.width()-y.width();if(A.left<0){if(t==0||A.left<t){t=A.left}}else{if(m==0||B>m){m=B}}});if(a==null||q.left+t<a){a=q.left+t}if(h==null||q.top<h){h=q.top}if(e==null||w+m>e){e=w+m}if(d==null||j>d){d=j}});var b=$("#designer_canvas");if(a==null){a=0;h=0;e=0;d=0}a=a-30;h=h-30;var c=e-a;var f=d-h;return{w:c,h:f,minX:a,minY:h}},richText2svg:function(x,h,C,B,m,f){var s=x[0].style;var p={anchor:s.textAlign=="center"?"middle":s.textAlign=="right"?"end":"start",family:s.fontFamily,size:s.fontSize,width:s.width?s.width:0,fill:s.color,weight:s.fontWeight,align:s.verticalAlign};var o={boxW:parseInt(p.width),boxX:C||0,boxY:B||0,deg:m||0,alpha:f||1};x.find("font").each(function(){$(this).css("fill",$(this).attr("color"))});x.find("b").css("font-weight","bold");x.find("i").css("font-style","italic");x.find("u").css("text-decoration","underline");var l=[];function a(E){for(var G=0,D=E.length;G<D;G++){if(E[G].nodeName=="#text"){for(var F=0;F<E[G].data.length;F++){if(E[G].parentNode.nodeName=="DIV"){var H={text:E[G].data[F],style:""}}else{var H={text:E[G].data[F],style:E[G].parentNode.getAttribute("style")}}l.push(H)}}else{if(E[G].nodeName=="BR"){if(G>0&&E[G-1].nodeName=="DIV"){var H={text:"</br>",style:""};l.push(H)}var H={text:"</br>",style:""};l.push(H)}else{if(E[G].nodeName=="DIV"){if(l.length>0&&l[l.length-1].text!="</br>"){var H={text:"</br>",style:""};l.push(H)}}else{if(E[G].parentNode.nodeName=="DIV"){if(typeof E[G].getAttribute=="function"){E[G].setAttribute("style",E[G].getAttribute("style"))}}else{E[G].setAttribute("style",E[G].parentNode.getAttribute("style")+E[G].getAttribute("style"))}}}}a(E[G].childNodes)}}a(x[0].childNodes);x.empty();var r=[];for(var v=0;v<l.length;v++){var d="";if(l[v].text=="</br>"){d=l[v].text}else{d='<span style="'+l[v].style+'">'+l[v].text+"</span>"}$(d).appendTo(x)}x.children().each(function(j){if(l[j].text=="</br>"){if(typeof l[j-1]=="undefined"||l[j-1].text=="</br>"){l[j].dy=null;r.push(l[j])}}else{l[j].dy=$(this)[0].offsetTop;l[j].dx=$(this)[0].offsetLeft;l[j].w=$(this).width();l[j].h=$(this).height();if(r.length!=0&&r[r.length-1].style==l[j].style&&r[r.length-1].dy==l[j].dy&&r.dy!==0){r[r.length-1].text+=l[j].text;r[r.length-1].w+=l[j].w}else{r.push(l[j])}}});for(var v=0;v<r.length;v++){var z=r[v];if(z.style.indexOf("underline")>-1){var A=z.style.split(";");var t=p.fill;for(var u=0;u<A.length-1;u++){if(A[u].indexOf("fill")>-1){t=A[u].split(":")[1];break}}r[v].style=A.join(";");var y=z.dx+o.boxX,w=y+z.w,c=o.boxY+z.dy+z.h-(parseInt(p.size)/10),b=c;if(flow2svg.type!="svg"){var k=h.line(y,c,w,b).stroke({width:Math.round(parseInt(p.size)/20),color:t})}}else{if(s.textDecoration=="underline"){var A=z.style.split(";");var t=p.fill;for(var u=0;u<A.length-1;u++){if(A[u].indexOf("fill")>-1){t=A[u].split(":")[1];break}}r[v].style=A.join(";");var y=z.dx+o.boxX,w=y+z.w,c=o.boxY+z.dy+z.h-(parseInt(p.size)/10),b=c;if(flow2svg.type!="svg"){var k=h.line(y,c,w,b).stroke({width:Math.round(parseInt(p.size)/20),color:t})}}}}var g=[];for(var v=0;v<r.length;v++){if(g.length!=0&&r[v].dy==r[v-1].dy&&r[v].dy!==null){g[g.length-1].texts.push(r[v])}else{g.push({texts:[r[v]],dy:r[v].dy})}}var q=0;q=p.anchor=="middle"?o.boxX+o.boxW/2:p.anchor=="end"?o.boxX+o.boxW:o.boxX;var n=h.text(function(D){for(var j=0;j<g.length;j++){D.tspan(function(E){var F=g[j].texts;for(var i=0;i<F.length;i++){F[i].text=F[i].text=="</br>"?"\u00a0":F[i].text;F[i].style="text-decoration:"+s.textDecoration+";"+F[i].style;E.tspan(F[i].text).attr("style",F[i].style)}}).dy(Math.floor(parseInt(p.size)*1.25)).attr({x:q})}});var e=parseInt(p.size)>20?2:0;n.font(p).attr("font-style",s.fontStyle);n.attr("opacity",o.alpha);n.attr({y:o.boxY-parseInt(p.size)*0.15-e,transform:"rotate("+o.deg+")"})},setWatermark:function(e,n){var a=Model.define.page.backgroundColor;if(a=="transparent"){a="255,255,255"}var b=Utils.getDarkestColor(a);var h=$("#canvas_container").width();var f=$("#canvas_container").height();var l=Model.define.page.padding;var g=$("#svg_exporter>svg");var k=$("#svg_exporter>svg>rect").length?$("#svg_exporter>svg>rect").last():"";var d=g.find("defs")[0];var j="http://www.w3.org/2000/svg";var c=document.createElementNS(j,"pattern");c.setAttributeNS(null,"patternUnits","userSpaceOnUse");c.setAttributeNS(null,"id","pattern_mark");c.setAttributeNS(null,"width","300");c.setAttributeNS(null,"height","300");d.appendChild(c);var m=document.createElementNS(j,"text");m.setAttributeNS(null,"x","-50");m.setAttributeNS(null,"y","150");m.setAttributeNS(null,"fill","rgba("+b+",0.8)");m.setAttributeNS(null,"font-size","18");m.setAttributeNS(null,"transform","rotate(-45, 150, 150)");m.textContent=$("<span/>").html(e).text();c.appendChild(m);var i=document.createElementNS(j,"rect");i.setAttributeNS(null,"fill","url(#pattern_mark)");i.setAttributeNS(null,"transform","translate("+(l-8-n.minX)+","+(l-24-n.minY)+")");i.setAttributeNS(null,"width",h);i.setAttributeNS(null,"height",f);i.setAttributeNS(null,"id","rect_mark");i.setAttributeNS(null,"pointer-events","none");if(k){k.after(i)}else{g.prepend(i)}}};