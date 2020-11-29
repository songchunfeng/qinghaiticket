Schema.addCategory({name:"lane",text:"泳池/泳道"});function getPool(a,d){for(var b=Model.orderList.length-1;b>=0;b--){var e=Model.orderList[b].id;var c=Model.getShapeById(e);if(c.name==d){if(Utils.rectCross(c.props,a.props)){return c}}}return null}function getVerticalPoolWidth(c){var a=0;for(var b=0;b<c.children.length;b++){var d=c.children[b];var e=Model.getShapeById(d);if(e.name!="horizontalSeparator"){a+=e.props.w}}return a}function getHorizontalPoolHeight(c){var a=0;for(var b=0;b<c.children.length;b++){var d=c.children[b];var e=Model.getShapeById(d);if(e.name!="horizontalSeparator"){a+=e.props.w}}return a}function getChild(c,a){for(var b=0;b<c.children.length;b++){var d=c.children[b];var e=Model.getShapeById(d);if(e.name==a){return e}}return null}Schema.addShape({name:"verticalPool",title:"泳池(垂直)",category:"lane",attribute:{rotatable:false,linkable:false,container:true},children:[],props:{w:250,h:540},fontStyle:{size:16},textBlock:[{position:{x:10,y:0,w:"w-20",h:40}}],anchors:[],resizeDir:["l","b","r"],path:[{fillStyle:{type:"none"},lineStyle:{lineStyle:"solid"},actions:{ref:"rectangle"}},{lineStyle:{lineStyle:"solid"},actions:[{action:"move",x:0,y:0},{action:"line",x:"w",y:0},{action:"line",x:"w",y:40},{action:"line",x:0,y:40},{action:"close"}]}],drawIcon:function(b,c){b+=8;var a=-4;return[{fillStyle:{type:"none"},actions:[{action:"move",x:a,y:0},{action:"line",x:b,y:0},{action:"line",x:b,y:c},{action:"line",x:a,y:c},{action:"close"}]},{actions:[{action:"move",x:a,y:0},{action:"line",x:b,y:0},{action:"line",x:b,y:4},{action:"line",x:a,y:4},{action:"close"}]},{actions:[{action:"move",x:(a+b)/2,y:4},{action:"line",x:(a+b)/2,y:c}]}]}});Schema.addShape({name:"verticalLane",title:"泳道(垂直)",category:"lane",attribute:{container:true,rotatable:false,linkable:false},props:{w:250,h:500},textBlock:[{position:{x:10,y:0,w:"w-20",h:30}}],anchors:[],resizeDir:["l","b","r"],path:[{fillStyle:{type:"none"},lineStyle:{lineStyle:"solid"},actions:{ref:"rectangle"}},{lineStyle:{lineStyle:"solid"},actions:[{action:"move",x:0,y:0},{action:"line",x:"w",y:0},{action:"line",x:"w",y:30},{action:"line",x:0,y:30},{action:"close"}]}],drawIcon:function(a,b){return[{fillStyle:{type:"none"},lineStyle:{lineStyle:"solid"},actions:[{action:"move",x:0,y:0},{action:"line",x:a,y:0},{action:"line",x:a,y:b},{action:"line",x:0,y:b},{action:"close"}]},{lineStyle:{lineStyle:"solid"},actions:[{action:"move",x:0,y:0},{action:"line",x:a,y:0},{action:"line",x:a,y:4},{action:"line",x:0,y:4},{action:"close"}]}]},onCreated:function(f,k){var f=f||getPool(this,"verticalPool");if(f==null){f=Model.create("verticalPool",this.props.x,this.props.y-40);f.children=[this.id];Model.add(f)}else{if(!f.children){f.children=[]}var h=[f];var g=f.props.x;var c=0;var j=0;var a=null;for(var e=0;e<f.children.length;e++){var d=f.children[e];var b=Model.getShapeById(d);if(b.name=="verticalLane"){g+=b.props.w;if(a==null){a=b}if(b.props.x>a.props.x){a=b}c++}else{if(b.name=="verticalSeparatorBar"){g+=b.props.w;j++}}}if(a){this.fillStyle=a.fillStyle;this.fontStyle=a.fontStyle;this.props.w=a.props.w;this.lineStyle=a.lineStyle}this.props.x=g;this.props.y=f.props.y+40;this.props.h=f.props.h-40;if(c==0){if(j==0){this.props.w=f.props.w}else{this.props.w=f.props.w-20}}Designer.painter.renderShape(this);f.props.w=this.props.x+this.props.w-f.props.x;for(var e=0;e<f.children.length;e++){var d=f.children[e];var b=Model.getShapeById(d);if(b.name=="horizontalSeparator"){b.props.w=f.props.w;Designer.painter.renderShape(b);h.push(b)}}f.children.push(this.id);if(!k){Model.updateMulti(h)}}Designer.painter.renderShape(f);this.parent=f.id}});Schema.addShape({name:"verticalSeparatorBar",title:"水平分隔条",category:"lane",attribute:{rotatable:false,linkable:false,visible:false},props:{w:20,h:500},anchors:[],resizeDir:[],textBlock:[],path:[{lineStyle:{lineStyle:"solid"},actions:{ref:"rectangle"}}]});Schema.addShape({name:"horizontalSeparator",title:"分隔符(水平)<br>需拖动到泳池泳道上",category:"lane",attribute:{rotatable:false,linkable:false},props:{w:300,h:0},fontStyle:{orientation:"horizontal",textAlign:"left"},textBlock:[{position:{x:0,y:5,w:20,h:"h-10"},text:"阶段"}],anchors:[],resizeDir:["b"],path:[{fillStyle:{type:"none"},lineStyle:{lineStyle:"solid"},actions:[{action:"move",x:0,y:"h"},{action:"line",x:"w",y:"h"}]},{actions:[{action:"move",x:0,y:0},{action:"line",x:20,y:0},{action:"line",x:20,y:"h"},{action:"line",x:0,y:"h"},{action:"close"}]}],drawIcon:function(a,b){return[{fillStyle:{type:"none"},lineStyle:{lineStyle:"solid"},actions:[{action:"move",x:0,y:0},{action:"line",x:a,y:0}]}]},onCreated:function(){var g=getPool(this,"verticalPool");if(g==null){return false}var j=getChild(g,"verticalSeparatorBar");if(j==null){j=Model.create("verticalSeparatorBar",g.props.x-20,g.props.y+40);j.props.h=g.props.h-40;j.parent=g.id;Model.add(j);Designer.painter.renderShape(j);g.props.x-=j.props.w;g.props.w+=j.props.w;g.children.push(j.id);Designer.painter.renderShape(g)}var a=this.props.y+this.props.h;var h=g.props.y+40;var f=null;for(var e=0;e<g.children.length;e++){var d=g.children[e];var b=Model.getShapeById(d);if(b.name!="horizontalSeparator"){continue}var c=b.props.y+b.props.h;if(c<=a){h+=b.props.h}else{if(f==null||b.props.y<f.props.y){f=b}}}this.props.x=g.props.x;this.props.w=g.props.w;this.props.h=a-h;this.props.y=h;g.children.push(this.id);this.parent=g.id;if(a>g.props.y+g.props.h){this.props.h=g.props.y+g.props.h-h}Designer.painter.renderShape(this);if(f!=null){f.props.y+=this.props.h;f.props.h-=this.props.h;Designer.painter.renderShape(f);Model.updateMulti([g,f])}else{Model.update(g)}this.props.zindex=Model.maxZIndex+1}});Schema.addShape({name:"horizontalSeparatorBar",title:"垂直分隔条",category:"lane",attribute:{rotatable:false,linkable:false,visible:false},props:{w:600,h:20},anchors:[],resizeDir:[],textBlock:[],path:[{lineStyle:{lineStyle:"solid"},actions:{ref:"rectangle"}}]});Schema.addShape({name:"verticalSeparator",title:"分隔符(垂直)<br>需拖动到泳池泳道上",category:"lane",attribute:{rotatable:false,linkable:false},props:{w:0,h:300},fontStyle:{textAlign:"right"},textBlock:[{position:{x:5,y:0,w:"w-10",h:20},text:"阶段"}],anchors:[],resizeDir:["r"],path:[{fillStyle:{type:"none"},lineStyle:{lineStyle:"solid"},actions:[{action:"move",x:"w",y:0},{action:"line",x:"w",y:"h"}]},{actions:[{action:"move",x:0,y:0},{action:"line",x:"w",y:0},{action:"line",x:"w",y:20},{action:"line",x:0,y:20},{action:"close"}]}],drawIcon:function(a,b){return[{fillStyle:{type:"none"},lineStyle:{lineStyle:"solid"},actions:[{action:"move",x:0,y:0},{action:"line",x:0,y:b}]}]},onCreated:function(){var e=getPool(this,"horizontalPool");if(e==null){return false}var g=getChild(e,"horizontalSeparatorBar");if(g==null){g=Model.create("horizontalSeparatorBar",e.props.x+40,e.props.y-20);e.props.y-=g.props.h;e.props.h+=g.props.h;e.children.push(g.id);Designer.painter.renderShape(e);g.props.w=e.props.w-40;g.parent=e.id;Model.add(g);Designer.painter.renderShape(g)}var j=this.props.x+this.props.w;var h=e.props.x+40;var d=null;for(var c=0;c<e.children.length;c++){var b=e.children[c];var a=Model.getShapeById(b);if(a.name!="verticalSeparator"){continue}var f=a.props.x+a.props.w;if(f<=j){h+=a.props.w}else{if(d==null||a.props.x<d.props.x){d=a}}}this.props.x=h;this.props.w=j-h;this.props.y=e.props.y;this.props.h=e.props.h;if(j>e.props.x+e.props.w){this.props.w=e.props.x+e.props.w-h}Designer.painter.renderShape(this);e.children.push(this.id);this.parent=e.id;if(d!=null){d.props.x+=this.props.w;d.props.w-=this.props.w;Designer.painter.renderShape(d);Model.updateMulti([e,d])}else{Model.update(e)}this.props.zindex=Model.maxZIndex+1}});Schema.addShape({name:"horizontalPool",title:"泳池(水平)",category:"lane",attribute:{rotatable:false,linkable:false,container:true},children:[],props:{w:640,h:200},fontStyle:{size:16,orientation:"horizontal"},textBlock:[{position:{x:0,y:10,w:40,h:"h-20"}}],anchors:[],resizeDir:["t","r","b"],path:[{fillStyle:{type:"none"},lineStyle:{lineStyle:"solid"},actions:{ref:"rectangle"}},{lineStyle:{lineStyle:"solid"},actions:[{action:"move",x:0,y:0},{action:"line",x:40,y:0},{action:"line",x:40,y:"h"},{action:"line",x:0,y:"h"},{action:"close"}]}],drawIcon:function(a,b){b+=8;var c=-4;return[{fillStyle:{type:"none"},actions:[{action:"move",x:0,y:c},{action:"line",x:a,y:c},{action:"line",x:a,y:b},{action:"line",x:0,y:b},{action:"close"}]},{actions:[{action:"move",x:0,y:c},{action:"line",x:4,y:c},{action:"line",x:4,y:b},{action:"line",x:0,y:b},{action:"close"}]},{actions:[{action:"move",x:4,y:(c+b)/2},{action:"line",x:a,y:(c+b)/2}]}]}});Schema.addShape({name:"horizontalLane",title:"泳道(水平)",category:"lane",attribute:{container:true,rotatable:false,linkable:false},props:{w:600,h:200},fontStyle:{orientation:"horizontal"},textBlock:[{position:{x:0,y:10,w:30,h:"h-20"}}],anchors:[],resizeDir:["t","b","r"],path:[{fillStyle:{type:"none"},lineStyle:{lineStyle:"solid"},actions:{ref:"rectangle"}},{lineStyle:{lineStyle:"solid"},actions:[{action:"move",x:0,y:0},{action:"line",x:30,y:0},{action:"line",x:30,y:"h"},{action:"line",x:0,y:"h"},{action:"close"}]}],drawIcon:function(a,b){b+=3;return[{fillStyle:{type:"none"},lineStyle:{lineStyle:"solid"},actions:[{action:"move",x:0,y:-1},{action:"line",x:a,y:-1},{action:"line",x:a,y:b},{action:"line",x:0,y:b},{action:"close"}]},{lineStyle:{lineStyle:"solid"},actions:[{action:"move",x:0,y:-1},{action:"line",x:4,y:-1},{action:"line",x:4,y:b},{action:"line",x:0,y:b},{action:"close"}]}]},onCreated:function(f,k){var f=f||getPool(this,"horizontalPool");if(f==null){f=Model.create("horizontalPool",this.props.x-40,this.props.y);f.children=[this.id];Model.add(f)}else{if(!f.children){f.children=[]}var h=[f];var g=f.props.y;var c=0;var j=0;var a=null;for(var e=0;e<f.children.length;e++){var d=f.children[e];var b=Model.getShapeById(d);if(b.name=="horizontalLane"){g+=b.props.h;if(a==null){a=b}if(b.props.y>a.props.y){a=b}c++}else{if(b.name=="horizontalSeparatorBar"){g+=b.props.h;j++}}}if(a){this.fillStyle=a.fillStyle;this.fontStyle=a.fontStyle;this.props.h=a.props.h;this.lineStyle=a.lineStyle}this.props.y=g;this.props.x=f.props.x+40;this.props.w=f.props.w-40;if(c==0){if(j==0){this.props.h=f.props.h}else{this.props.h=f.props.h-20}}Designer.painter.renderShape(this);f.props.h=this.props.y+this.props.h-f.props.y;for(var e=0;e<f.children.length;e++){var d=f.children[e];var b=Model.getShapeById(d);if(b.name=="verticalSeparator"){b.props.h=f.props.h;Designer.painter.renderShape(b);h.push(b)}}f.children.push(this.id);if(!k){Model.updateMulti(h)}}Designer.painter.renderShape(f);this.parent=f.id}});