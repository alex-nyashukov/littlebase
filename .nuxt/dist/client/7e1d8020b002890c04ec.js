(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{589:function(e,t,r){"use strict";r.r(t);r(7),r(6),r(60),r(59);var n,o=r(19),c=r(570),l=r.n(c),m=(r(38),r(91),r(20)),d=r(21),v=r(571),f=r.n(v),h=r(2),w=r.n(h),x=r(176),k=(r(177),function(){function e(){Object(m.a)(this,e)}var t;return Object(d.a)(e,null,[{key:"render",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,template,n,o,c,l,m,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.drivers,template=t.template,n=t.month,o=new f.a.Workbook,e.next=4,o.xlsx.load(template);case 4:return c=o.getWorksheet("main"),l=["январе","феврале","марте","апреле","мае","июне","июле","фвгусте","сентябре","октябре","ноябре","декабре"],c.getRow(1).getCell(1).value='Администрация Филиала "Юго-Западный", в лице директора  Р.А. Езохова, предлагает нижеперечисленным водителям 13-ой автоколонны выполнять сверхурочную работу за пределами установленной продолжительности рабочего времени (баланса), а так же работу в выходные, праздничные дни в '.concat(l[+n-1]," 2019  года."),m=3,d=0,v=0,r.forEach((function(e){d=2+4*v,c.getRow(m).getCell(d).value=e.tabnumber,d=3+4*v,c.getRow(m).getCell(d).value=e.shortName,51==++m&&(m=3,v++)})),e.next=13,o.xlsx.writeBuffer();case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}()),R=function(){function e(){Object(m.a)(this,e)}var t;return Object(d.a)(e,null,[{key:"render",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,template,n,o,c,l,m,i,d,v,h,k,R,y,C,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(j=function(e,t,r,c){var l=r,m=c;e.getRow(l).getCell(m).value=t.busnumber;var d=[];switch(t.drivers.length){case 1:d=[4];break;case 2:d=[2,6];break;case 3:d=[1,4,7];break;case 4:d=[1,3,5,7]}t.drivers.forEach((function(t,r){if(t.tabnumber){var c=new x.a(t);!function(e,t,r,c){var l=r,m=c;e.getRow(l).getCell(m+3).value=t.shortName,e.getRow(l).getCell(m+4).value=t.tabnumber;for(var d=w()("".concat(o,"-").concat(n),"YYYY-MM").daysInMonth(),v=t.statusesByDate({date:"".concat(o,"-").concat(n,"-01"),count:d,isShort:!0}),f=0;f<d;f++)e.getRow(l).getCell(m+8+f).value=v[f]}(e,c,l+d[r],m)}}))},r=t.buses,template=t.template,n=t.month,o="2019",c=(c=Array.from(r)).sort((function(a,b){return a.busnumber-b.busnumber})),l=Math.ceil(c.length/5),m=[],i=0;i<l;i++)for(m.push([]),d=0;d<5;d++)m[i].push(c[5*i+d]||{});return v=new f.a.Workbook,e.next=11,v.xlsx.load(template);case 11:for(h=v.getWorksheet("Page 1"),k=1;k<m.length;k++)(R=v.addWorksheet("Sheet")).model=Object.assign(h.model,{mergeCells:h.model.merges}),R.name="Page "+(1+k);for(y=function(e){h=v.getWorksheet("Page "+(e+1)),m[e].forEach((function(e,t){e.busnumber&&j(h,e,10+8*t,2)}))},C=0;C<m.length;C++)y(C);return e.next=17,v.xlsx.writeBuffer();case 17:return e.abrupt("return",e.sent);case 18:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),y=function(){function e(){Object(m.a)(this,e)}var t;return Object(d.a)(e,null,[{key:"render",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,template,n,o,c,l,m,d,i,v,h,k,R,y,C,j,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _=function(e,t){var r=9;t.forEach((function(t){!function(e,t,r,c){var l=r,m=c;if(t.busnumber){var d=[];switch(t.drivers.length){case 1:d=[4];break;case 2:d=[2,6];break;case 3:d=[1,4,7];break;case 4:d=[1,3,5,7]}t.drivers.forEach((function(t,r){for(var c=new x.a(t),v=w()("".concat(o,"-").concat(n),"YYYY-MM").daysInMonth(),f=c.statusesByDate({date:"".concat(o,"-").concat(n,"-13"),count:v-12,isShort:!0}),h=0;h<v-12;h++)e.getRow(l+d[r]).getCell(m+h).value=f[h]})),t.way&&(e.getRow(l).getCell(m+19).value="Выход: ".concat(t.way.title),e.getRow(l+2).getCell(m+19).value="1 смена: ".concat(t.way.times.durationFirstSmene||""),e.getRow(l+2).getCell(m+22).value="2 смена: ".concat(t.way.times.durationSecondSmene||""),e.getRow(l+3).getCell(m+19).value="Выезд из парка: ".concat(t.way.times.outPark||""),e.getRow(l+4).getCell(m+19).value="Время смены: ".concat(t.way.times.change||""),e.getRow(l+5).getCell(m+19).value="Окончание работы: ".concat(t.way.times.endWork||""),e.getRow(l+7).getCell(m+19).value="1 смена: ".concat(t.way.times.lunchFirstSmene||""),e.getRow(l+7).getCell(m+22).value="2 смена: ".concat(t.way.times.lunchSecondSmene||""))}}(e,t,r,20),r+=8}))},j=function(e,t){var r=9;t.forEach((function(t){!function(e,t,r,c){var l=r,m=c;if(t.busnumber){e.getRow(l).getCell(m).value=t.busnumber;var d=[];switch(t.drivers.length){case 1:d=[4];break;case 2:d=[2,6];break;case 3:d=[1,4,7];break;case 4:d=[1,3,5,7]}t.drivers.forEach((function(t,r){var c=new x.a(t);!function(e,t,r,c){var l=r,m=c;e.getRow(l).getCell(m+1).value=t.shortName,e.getRow(l).getCell(m+2).value=t.tabnumber;for(var d=t.statusesByDate({date:"".concat(o,"-").concat(n,"-01"),count:12,isShort:!0}),v=0;v<12;v++)e.getRow(l).getCell(m+4+v).value=d[v]}(e,c,l+d[r],m)}))}}(e,t,r,2),r+=8}))},r=t.buses,template=t.template,n=t.month,o="2019",c=(c=Array.from(r)).sort((function(a,b){return a.busnumber-b.busnumber})),l=new f.a.Workbook,e.next=9,l.xlsx.load(template);case 9:for((m=Math.ceil(c.length/4))%2==0&&m++,d=[],i=0;i<m;i++)for(d.push([]),v=0;v<4;v++)d[i].push(c[4*i+v]||{});for(d.unshift([{},{},{},{}]),h=d.length,k=l.getWorksheet("Page 1"),R=1;R<h;R++)(y=l.addWorksheet("Sheet")).model=Object.assign(k.model,{mergeCells:k.model.merges}),y.name="Page "+(1+R);for(C=0;C<h/2;C++)k=l.getWorksheet("Page "+(2*C+1)),j(k,d[C+1]),_(k,d[h-(C+1)]),k=l.getWorksheet("Page "+(2*C+2)),j(k,d[(h-C)%h]),_(k,d[C]);return e.next=20,l.xlsx.writeBuffer();case 20:return e.abrupt("return",e.sent);case 21:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),C={transition:"fade",data:function(){var e,t,r,n=this;return{downloads:[{isLoading:!1,title:"А3",month:"01",renderer:y,code:"a3",getData:(r=Object(o.a)(regeneratorRuntime.mark((function e(){var t,template;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.$store.dispatch("buses/readAll"),n.$store.dispatch("templates/download",{filename:"a3.xlsx"})]);case 2:return t=n.$store.getters["buses/list"],template=n.$store.getters["templates/template"]("a3.xlsx"),e.abrupt("return",{buses:t,template:template});case 5:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{isLoading:!1,title:"А4",month:"01",renderer:R,code:"a4",getData:(t=Object(o.a)(regeneratorRuntime.mark((function e(){var t,template;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.$store.dispatch("buses/readAll"),n.$store.dispatch("templates/download",{filename:"a4.xlsx"})]);case 2:return t=n.$store.getters["buses/list"],template=n.$store.getters["templates/template"]("a4.xlsx"),e.abrupt("return",{buses:t,template:template});case 5:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{isLoading:!1,title:"Согласие",month:"01",renderer:k,code:"agreement",getData:(e=Object(o.a)(regeneratorRuntime.mark((function e(){var t,template;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.$store.dispatch("drivers/readAll"),n.$store.dispatch("templates/download",{filename:"agreement.xlsx"})]);case 2:return t=n.$store.getters["drivers/list"],template=n.$store.getters["templates/template"]("agreement.xlsx"),e.abrupt("return",{drivers:t,template:template});case 5:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})}],items:[{text:"Январь",value:"01"},{text:"Февраль",value:"02"},{text:"Март",value:"03"},{text:"Апрель",value:"04"},{text:"Май",value:"05"},{text:"Июнь",value:"06"},{text:"Июль",value:"07"},{text:"Август",value:"08"},{text:"Сентябрь",value:"09"},{text:"Октябрь",value:"10"},{text:"Ноябрь",value:"11"},{text:"Декабрь",value:"12"}]}},methods:{get_file:(n=Object(o.a)(regeneratorRuntime.mark((function e(t){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.getData();case 3:return(data=e.sent).month=t.month,e.next=7,t.renderer.render(data);case 7:r=e.sent,l()(new Blob([r]),t.code+".xlsx"),t.isLoading=!1;case 10:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})}},j=r(24),_=r(28),O=r.n(_),$=r(105),S=r(550),P=r(549),W=r(585),V=r(539),B=r(129),E=r(541),M=r(106),Y=r(521),component=Object(j.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:""}},e._l(e.downloads,(function(t,n){return r("v-flex",{key:n,staticClass:"pa-3",attrs:{xs12:"",sm6:"",md4:""}},[r("v-card",[r("v-card-title",{staticClass:"green"},[r("v-icon",{attrs:{dark:""}},[e._v("fa-file-excel")]),e._v(" "),r("span",{staticClass:"ml-3 white--text"},[e._v(e._s(t.title))])],1),e._v(" "),r("v-card-text",{staticClass:"pt-2"},[r("v-select",{attrs:{items:e.items,label:"Месяц"},model:{value:t.month,callback:function(r){e.$set(t,"month",r)},expression:"download.month"}}),e._v(" "),r("v-file-input",{attrs:{label:"Шаблон"}}),e._v(" "),r("v-layout",{attrs:{row:"","justify-space-between":""}},[r("v-flex",[r("v-btn",{attrs:{rounded:"",color:"green",dark:""}},[e._v("Загрузить")])],1),e._v(" "),r("v-flex",[r("v-btn",{attrs:{rounded:"",color:"green",dark:""}},[e._v("Скачать ")])],1)],1)],1),e._v(" "),r("v-card-actions",{staticClass:"pa-0"},[r("v-btn",{staticStyle:{"font-size":"1.4rem","border-top-left-radius":"0","border-top-right-radius":"0"},attrs:{height:"52",block:"",color:"green",dark:""},on:{click:function(r){return e.get_file(t)}}},[t.isLoading?r("v-progress-circular",{attrs:{indeterminate:""}}):r("span",[e._v("Скачать")])],1)],1)],1)],1)})),1)}),[],!1,null,null,null);t.default=component.exports;O()(component,{VBtn:$.a,VCard:S.a,VCardActions:P.a,VCardText:P.b,VCardTitle:P.c,VFileInput:W.a,VFlex:V.a,VIcon:B.a,VLayout:E.a,VProgressCircular:M.a,VSelect:Y.a})}}]);