(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{601:function(e,t,r){"use strict";r.r(t);r(7),r(6),r(60),r(53);var n,o=r(19),l=r(579),c=r.n(l),m=(r(39),r(91),r(20)),v=r(21),d=r(580),f=r.n(d),w=r(2),h=r.n(w),x=r(181),k=(r(182),function(){function e(){Object(m.a)(this,e)}var t;return Object(v.a)(e,null,[{key:"render",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,template,n,o,l,c,m,v,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.drivers,template=t.template,n=t.month,o=new f.a.Workbook,e.next=4,o.xlsx.load(template);case 4:return l=o.getWorksheet("main"),c=["январе","феврале","марте","апреле","мае","июне","июле","фвгусте","сентябре","октябре","ноябре","декабре"],l.getRow(1).getCell(1).value='Администрация Филиала "Юго-Западный", в лице директора  Р.А. Езохова, предлагает нижеперечисленным водителям 13-ой автоколонны выполнять сверхурочную работу за пределами установленной продолжительности рабочего времени (баланса), а так же работу в выходные, праздничные дни в '.concat(c[+n-1]," 2019  года."),m=3,v=0,d=0,r.forEach((function(e){v=2+4*d,l.getRow(m).getCell(v).value=e.tabnumber,v=3+4*d,l.getRow(m).getCell(v).value=e.shortName,51==++m&&(m=3,d++)})),e.next=13,o.xlsx.writeBuffer();case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}()),y=function(){function e(){Object(m.a)(this,e)}var t;return Object(v.a)(e,null,[{key:"render",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,template,n,o,l,c,m,i,v,d,w,k,y,R,C,S;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(S=function(e,t,r,l){var c=r,m=l;e.getRow(c).getCell(m).value=t.busnumber;var v=[];switch(t.drivers.length){case 1:v=[4];break;case 2:v=[2,6];break;case 3:v=[1,4,7];break;case 4:v=[1,3,5,7]}t.drivers.forEach((function(t,r){if(t.tabnumber){var l=new x.a(t);!function(e,t,r,l){var c=r,m=l;e.getRow(c).getCell(m+3).value=t.shortName,e.getRow(c).getCell(m+4).value=t.tabnumber;for(var v=h()("".concat(o,"-").concat(n),"YYYY-MM").daysInMonth(),d=t.statusesByDate({date:"".concat(o,"-").concat(n,"-01"),count:v,isShort:!0}),f=0;f<v;f++)e.getRow(c).getCell(m+8+f).value=d[f]}(e,l,c+v[r],m)}})),t.way&&(e.getRow(c).getCell(41).value="Выход: ".concat(t.way.route.title,"/").concat(t.way.title),e.getRow(c+2).getCell(41).value="1 смена: ".concat(t.way.times.durationFirstSmene||""),e.getRow(c+2).getCell(44).value="2 смена: ".concat(t.way.times.durationSecondSmene||""),e.getRow(c+3).getCell(41).value="Выезд из парка: ".concat(t.way.times.outPark||""),e.getRow(c+4).getCell(41).value="Время смены: ".concat(t.way.times.change||""),e.getRow(c+5).getCell(41).value="Окончание работы: ".concat(t.way.times.endWork||""),e.getRow(c+7).getCell(41).value="1 смена: ".concat(t.way.times.lunchFirstSmene||""),e.getRow(c+7).getCell(44).value="2 смена: ".concat(t.way.times.lunchSecondSmene||""))},r=t.buses,template=t.template,n=t.month,o="2019",l=(l=Array.from(r)).sort((function(a,b){return a.busnumber-b.busnumber})),c=Math.ceil(l.length/5),m=[],i=0;i<c;i++)for(m.push([]),v=0;v<5;v++)m[i].push(l[5*i+v]||{});return d=new f.a.Workbook,e.next=11,d.xlsx.load(template);case 11:for(w=d.getWorksheet("Page 1"),k=1;k<m.length;k++)(y=d.addWorksheet("Sheet")).model=Object.assign(w.model,{mergeCells:w.model.merges}),y.name="Page "+(1+k);for(R=function(e){(w=d.getWorksheet("Page "+(e+1))).getRow(1).getCell(44).value=e+1,m[e].forEach((function(e,t){e.busnumber&&S(w,e,10+8*t,2)}))},C=0;C<m.length;C++)R(C);return e.next=17,d.xlsx.writeBuffer();case 17:return e.abrupt("return",e.sent);case 18:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),R=function(){function e(){Object(m.a)(this,e)}var t;return Object(v.a)(e,null,[{key:"render",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,template,n,o,l,c,m,v,i,d,w,k,y,R,C,S,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j=function(e,t){var r=9;t.forEach((function(t){!function(e,t,r,l){var c=r,m=l;if(t.busnumber){var v=[];switch(t.drivers.length){case 1:v=[4];break;case 2:v=[2,6];break;case 3:v=[1,4,7];break;case 4:v=[1,3,5,7]}t.drivers.forEach((function(t,r){for(var l=new x.a(t),d=h()("".concat(o,"-").concat(n),"YYYY-MM").daysInMonth(),f=l.statusesByDate({date:"".concat(o,"-").concat(n,"-13"),count:d-12,isShort:!0}),w=0;w<d-12;w++)e.getRow(c+v[r]).getCell(m+w).value=f[w]})),t.way&&(e.getRow(c).getCell(m+19).value="Выход: ".concat(t.way.route.title,"/").concat(t.way.title),e.getRow(c+2).getCell(m+19).value="1 смена: ".concat(t.way.times.durationFirstSmene||""),e.getRow(c+2).getCell(m+22).value="2 смена: ".concat(t.way.times.durationSecondSmene||""),e.getRow(c+3).getCell(m+19).value="Выезд из парка: ".concat(t.way.times.outPark||""),e.getRow(c+4).getCell(m+19).value="Время смены: ".concat(t.way.times.change||""),e.getRow(c+5).getCell(m+19).value="Окончание работы: ".concat(t.way.times.endWork||""),e.getRow(c+7).getCell(m+19).value="1 смена: ".concat(t.way.times.lunchFirstSmene||""),e.getRow(c+7).getCell(m+22).value="2 смена: ".concat(t.way.times.lunchSecondSmene||""))}}(e,t,r,20),r+=8}))},S=function(e,t){var r=9;t.forEach((function(t){!function(e,t,r,l){var c=r,m=l;if(t.busnumber){e.getRow(c).getCell(m).value=t.busnumber;var v=[];switch(t.drivers.length){case 1:v=[4];break;case 2:v=[2,6];break;case 3:v=[1,4,7];break;case 4:v=[1,3,5,7]}t.drivers.forEach((function(t,r){var l=new x.a(t);!function(e,t,r,l){var c=r,m=l;e.getRow(c).getCell(m+1).value=t.shortName,e.getRow(c).getCell(m+2).value=t.tabnumber;for(var v=t.statusesByDate({date:"".concat(o,"-").concat(n,"-01"),count:12,isShort:!0}),d=0;d<12;d++)e.getRow(c).getCell(m+4+d).value=v[d]}(e,l,c+v[r],m)}))}}(e,t,r,2),r+=8}))},r=t.buses,template=t.template,n=t.month,o="2019",l=(l=Array.from(r)).sort((function(a,b){return a.busnumber-b.busnumber})),c=new f.a.Workbook,e.next=9,c.xlsx.load(template);case 9:for((m=Math.ceil(l.length/4))%2==0&&m++,v=[],i=0;i<m;i++)for(v.push([]),d=0;d<4;d++)v[i].push(l[4*i+d]||{});for(v.unshift([{},{},{},{}]),w=v.length,k=c.getWorksheet("Page 1"),y=1;y<w;y++)(R=c.addWorksheet("Sheet")).model=Object.assign(k.model,{mergeCells:k.model.merges}),R.name="Page "+(1+y);for(C=0;C<w/2;C++)k=c.getWorksheet("Page "+(2*C+1)),S(k,v[C+1]),j(k,v[w-(C+1)]),k=c.getWorksheet("Page "+(2*C+2)),S(k,v[(w-C)%w]),j(k,v[C]);return e.next=20,c.xlsx.writeBuffer();case 20:return e.abrupt("return",e.sent);case 21:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),C={transition:"fade",data:function(){var e,t,r,n=this;return{downloads:[{isLoading:!1,title:"А3",month:"01",renderer:R,code:"a3",getData:(r=Object(o.a)(regeneratorRuntime.mark((function e(){var t,template;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.$store.dispatch("buses/readAll"),n.$store.dispatch("templates/download",{filename:"a3.xlsx"})]);case 2:return t=n.$store.getters["buses/list"],template=n.$store.getters["templates/template"]("a3.xlsx"),e.abrupt("return",{buses:t,template:template});case 5:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{isLoading:!1,title:"А4",month:"01",renderer:y,code:"a4",getData:(t=Object(o.a)(regeneratorRuntime.mark((function e(){var t,template;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.$store.dispatch("buses/readAll"),n.$store.dispatch("templates/download",{filename:"a4.xlsx"})]);case 2:return t=n.$store.getters["buses/list"],template=n.$store.getters["templates/template"]("a4.xlsx"),e.abrupt("return",{buses:t,template:template});case 5:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{isLoading:!1,title:"Согласие",month:"01",renderer:k,code:"agreement",getData:(e=Object(o.a)(regeneratorRuntime.mark((function e(){var t,template;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.$store.dispatch("drivers/readAll"),n.$store.dispatch("templates/download",{filename:"agreement.xlsx"})]);case 2:return t=n.$store.getters["drivers/list"],template=n.$store.getters["templates/template"]("agreement.xlsx"),e.abrupt("return",{drivers:t,template:template});case 5:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})}],items:[{text:"Январь",value:"01"},{text:"Февраль",value:"02"},{text:"Март",value:"03"},{text:"Апрель",value:"04"},{text:"Май",value:"05"},{text:"Июнь",value:"06"},{text:"Июль",value:"07"},{text:"Август",value:"08"},{text:"Сентябрь",value:"09"},{text:"Октябрь",value:"10"},{text:"Ноябрь",value:"11"},{text:"Декабрь",value:"12"}]}},methods:{get_file:(n=Object(o.a)(regeneratorRuntime.mark((function e(t){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.getData();case 3:return(data=e.sent).month=t.month,e.next=7,t.renderer.render(data);case 7:r=e.sent,c()(new Blob([r]),t.code+".xlsx"),t.isLoading=!1;case 10:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})}},S=r(24),j=r(25),_=r.n(j),O=r(106),$=r(558),P=r(557),W=r(594),V=r(547),B=r(132),E=r(549),M=r(107),Y=r(529),component=Object(S.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:""}},e._l(e.downloads,(function(t,n){return r("v-flex",{key:n,staticClass:"pa-3",attrs:{xs12:"",sm6:"",md4:""}},[r("v-card",[r("v-card-title",{staticClass:"green"},[r("v-icon",{attrs:{dark:""}},[e._v("fa-file-excel")]),e._v(" "),r("span",{staticClass:"ml-3 white--text"},[e._v(e._s(t.title))])],1),e._v(" "),r("v-card-text",{staticClass:"pt-2"},[r("v-select",{attrs:{items:e.items,label:"Месяц"},model:{value:t.month,callback:function(r){e.$set(t,"month",r)},expression:"download.month"}}),e._v(" "),r("v-file-input",{attrs:{label:"Шаблон"}}),e._v(" "),r("v-layout",{attrs:{row:"","justify-space-between":""}},[r("v-flex",[r("v-btn",{attrs:{rounded:"",color:"green",dark:""}},[e._v("Загрузить")])],1),e._v(" "),r("v-flex",[r("v-btn",{attrs:{rounded:"",color:"green",dark:""}},[e._v("Скачать ")])],1)],1)],1),e._v(" "),r("v-card-actions",{staticClass:"pa-0"},[r("v-btn",{staticStyle:{"font-size":"1.4rem","border-top-left-radius":"0","border-top-right-radius":"0"},attrs:{height:"52",block:"",color:"green",dark:""},on:{click:function(r){return e.get_file(t)}}},[t.isLoading?r("v-progress-circular",{attrs:{indeterminate:""}}):r("span",[e._v("Скачать")])],1)],1)],1)],1)})),1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{VBtn:O.a,VCard:$.a,VCardActions:P.a,VCardText:P.b,VCardTitle:P.c,VFileInput:W.a,VFlex:V.a,VIcon:B.a,VLayout:E.a,VProgressCircular:M.a,VSelect:Y.a})}}]);