(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{583:function(e,t,r){"use strict";r.r(t);r(7),r(6),r(78),r(59);var n,o=r(19),l=r(569),c=r.n(l),f=(r(138),r(38),r(20)),v=r(21),d=r(570),m=r.n(d),h=r(2),x=r.n(h),w=r(175),k=(r(176),function(){function e(){Object(f.a)(this,e)}var t;return Object(v.a)(e,null,[{key:"render",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,template,n,o,l,c,f,v,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.drivers,template=t.template,n=t.month,o=new m.a.Workbook,e.next=4,o.xlsx.load(template);case 4:return l=o.getWorksheet("main"),c=["январе","феврале","марте","апреле","мае","июне","июле","фвгусте","сентябре","октябре","ноябре","декабре"],l.getRow(1).getCell(1).value='Администрация Филиала "Юго-Западный", в лице директора  Р.А. Езохова, предлагает нижеперечисленным водителям 13-ой автоколонны выполнять сверхурочную работу за пределами установленной продолжительности рабочего времени (баланса), а так же работу в выходные, праздничные дни в '.concat(c[+n-1]," 2019  года."),f=3,v=0,d=0,r.forEach((function(e){v=2+4*d,l.getRow(f).getCell(v).value=e.tabnumber,v=3+4*d,l.getRow(f).getCell(v).value=e.shortName,51==++f&&(f=3,d++)})),e.next=13,o.xlsx.writeBuffer();case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}()),R=function(){function e(){Object(f.a)(this,e)}var t;return Object(v.a)(e,null,[{key:"render",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,template,n,o,l,c,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.drivers,template=t.template,n=new m.a.Workbook,e.next=4,n.xlsx.load(template);case 4:return o=n.getWorksheet("main"),c=10,r.forEach((function(e){l=o.getRow(c),f=3,l.getCell(f).value=e.name,f=6,l.getCell(f).value=e.tabnumber,f=10,new w.a(e).statusesByDate("2019-09-01",30,!0).forEach((function(e){l.getCell(f).value=e,f++})),c++})),e.next=9,n.xlsx.writeBuffer();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),y=function(){function e(){Object(f.a)(this,e)}var t;return Object(v.a)(e,null,[{key:"render",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,template,n,o,l,c,f,v,i,d,h,k,R,y,C,_,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j=function(e,t){var r=9;t.forEach((function(t){!function(e,t,r,l){var c=r,f=l;if(t.busnumber){var v=[];switch(t.drivers.length){case 1:v=[4];break;case 2:v=[2,6];break;case 3:v=[1,4,7];break;case 4:v=[1,3,5,7]}t.drivers.forEach((function(t,r){for(var l=new w.a(t),d=x()("".concat(o,"-").concat(n),"YYYY-MM").daysInMonth(),m=l.statusesByDate({date:"".concat(o,"-").concat(n,"-13"),count:d-12,isShort:!0}),h=0;h<d-12;h++)e.getRow(c+v[r]).getCell(f+h).value=m[h]}))}}(e,t,r,20),r+=8}))},_=function(e,t){var r=9;t.forEach((function(t){!function(e,t,r,l){var c=r,f=l;if(t.busnumber){e.getRow(c).getCell(f).value=t.busnumber;var v=[];switch(t.drivers.length){case 1:v=[4];break;case 2:v=[2,6];break;case 3:v=[1,4,7];break;case 4:v=[1,3,5,7]}t.drivers.forEach((function(t,r){var l=new w.a(t);!function(e,t,r,l){var c=r,f=l;e.getRow(c).getCell(f+1).value=t.shortName,e.getRow(c).getCell(f+2).value=t.tabnumber;for(var v=t.statusesByDate({date:"".concat(o,"-").concat(n,"-01"),count:12,isShort:!0}),d=0;d<12;d++)e.getRow(c).getCell(f+4+d).value=v[d]}(e,l,c+v[r],f)}))}}(e,t,r,2),r+=8}))},r=t.buses,template=t.template,n=t.month,o="2019",l=(l=Array.from(r)).sort((function(a,b){return a.busnumber-b.busnumber})),c=new m.a.Workbook,e.next=9,c.xlsx.load(template);case 9:for((f=Math.ceil(l.length/4))%2==0&&f++,v=[],i=0;i<f;i++)for(v.push([]),d=0;d<4;d++)v[i].push(l[4*i+d]||{});for(v.unshift([{},{},{},{}]),h=v.length,k=c.getWorksheet("Page 1"),R=1;R<h;R++)(y=c.addWorksheet("Sheet")).model=Object.assign(k.model,{mergeCells:k.model.merges}),y.name="Page "+(1+R);for(C=0;C<h/2;C++)k=c.getWorksheet("Page "+(2*C+1)),_(k,v[C+1]),j(k,v[h-(C+1)]),k=c.getWorksheet("Page "+(2*C+2)),_(k,v[(h-C)%h]),j(k,v[C]);return e.next=20,c.xlsx.writeBuffer();case 20:return e.abrupt("return",e.sent);case 21:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),C={transition:"fade",data:function(){var e,t,r,n=this;return{downloads:[{title:"А3",month:"01",renderer:y,code:"a3",getData:(r=Object(o.a)(regeneratorRuntime.mark((function e(){var t,template;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.$store.dispatch("buses/readAll"),n.$store.dispatch("templates/download",{filename:"a3.xlsx"})]);case 2:return t=n.$store.getters["buses/list"],template=n.$store.getters["templates/template"]("a3.xlsx"),e.abrupt("return",{buses:t,template:template});case 5:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{title:"А4",month:"01",renderer:R,code:"a4",getData:(t=Object(o.a)(regeneratorRuntime.mark((function e(){var t,template;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.$store.dispatch("buses/readAll"),n.$store.dispatch("templates/download",{filename:"a4.xlsx"})]);case 2:return t=n.$store.getters["buses/list"],template=n.$store.getters["templates/template"]("a4.xlsx"),e.abrupt("return",{buses:t,template:template});case 5:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{title:"Согласие",month:"01",renderer:k,code:"agreement",getData:(e=Object(o.a)(regeneratorRuntime.mark((function e(){var t,template;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.$store.dispatch("drivers/readAll"),n.$store.dispatch("templates/download",{filename:"agreement.xlsx"})]);case 2:return t=n.$store.getters["drivers/list"],template=n.$store.getters["templates/template"]("agreement.xlsx"),e.abrupt("return",{drivers:t,template:template});case 5:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})}],items:[{text:"Январь",value:"01"},{text:"Февраль",value:"02"},{text:"Март",value:"03"},{text:"Апрель",value:"04"},{text:"Май",value:"05"},{text:"Июнь",value:"06"},{text:"Июль",value:"07"},{text:"Август",value:"08"},{text:"Сентябрь",value:"09"},{text:"Октябрь",value:"10"},{text:"Ноябрь",value:"11"},{text:"Декабрь",value:"12"}]}},methods:{get_file:(n=Object(o.a)(regeneratorRuntime.mark((function e(t){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData();case 2:return(data=e.sent).month=t.month,e.next=6,t.renderer.render(data);case 6:r=e.sent,c()(new Blob([r]),t.code+".xlsx");case 8:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})}},_=r(24),j=r(28),O=r.n(j),$=r(104),V=r(550),W=r(549),B=r(580),E=r(539),D=r(128),P=r(541),A=r(521),component=Object(_.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:""}},e._l(e.downloads,(function(t,n){return r("v-flex",{key:n,staticClass:"pa-3",attrs:{xs12:"",sm6:"",md4:""}},[r("v-card",[r("v-card-title",{staticClass:"green"},[r("v-icon",{attrs:{dark:""}},[e._v("fa-file-excel")]),e._v(" "),r("span",{staticClass:"ml-3 white--text"},[e._v(e._s(t.title))])],1),e._v(" "),r("v-card-text",{staticClass:"pt-2"},[r("v-select",{attrs:{items:e.items,label:"Месяц"},model:{value:t.month,callback:function(r){e.$set(t,"month",r)},expression:"download.month"}}),e._v(" "),r("v-file-input",{attrs:{label:"Шаблон"}}),e._v(" "),r("v-layout",{attrs:{row:"","justify-space-between":""}},[r("v-flex",[r("v-btn",{attrs:{rounded:"",color:"green",dark:""}},[e._v("Загрузить")])],1),e._v(" "),r("v-flex",[r("v-btn",{attrs:{rounded:"",color:"green",dark:""}},[e._v("Скачать ")])],1)],1)],1),e._v(" "),r("v-card-actions",{staticClass:"pa-0"},[r("v-btn",{staticStyle:{"font-size":"1.4rem","border-top-left-radius":"0","border-top-right-radius":"0"},attrs:{height:"52",block:"",color:"green",dark:""},on:{click:function(r){return e.get_file(t)}}},[e._v("\r\n          Скачать\r\n        ")])],1)],1)],1)})),1)}),[],!1,null,null,null);t.default=component.exports;O()(component,{VBtn:$.a,VCard:V.a,VCardActions:W.a,VCardText:W.b,VCardTitle:W.c,VFileInput:B.a,VFlex:E.a,VIcon:D.a,VLayout:P.a,VSelect:A.a})}}]);