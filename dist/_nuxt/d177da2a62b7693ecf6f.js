(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{573:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r(25),r(27);var n=r(20),o=r(185),l=function e(t,r){var l=this;Object(n.a)(this,e),this.errors=[],this.workTable=[],this.driverReserveCount=0,this.driverReserveTable=[],this.busReserve=[],this.outDrivers={"Выходной":[],"Больничный":[],"Отпуск":[]},this.outBuses={"Ремонт":[],"СВАРЗ":[]},r.forEach((function(e){var r={"Рабочий":[],"Первая см.":[],"Вторая см.":[]},n=0;e.drivers.forEach((function(e){var c=(e=new o.a(e)).statusesByDate({date:t,count:1,isShort:!1,withExceptions:!0})[0].status;c?["Рабочий","Первая см.","Вторая см."].includes(c)?(n++,r[c].push(e)):l.outDrivers[c].push(e):l.errors.push("У водителя ".concat(e.tabnumber," нет статуса"))})),["Ремонт","СВАРЗ","Долгостой"].includes(e.status)?("Долгостой"==e.status?l.outBuses["Ремонт"].push(e):l.outBuses[e.status].push(e),0!==n&&(l.driverReserveCount+=n,r["Автобус"]=Object.assign({},e),r["Автобус"].busnumber+=" ".concat(e.status),l.driverReserveTable.push(r))):0===n?l.busReserve.push(e):(r["Автобус"]=e,l.workTable.push(r))})),this.workTable=this.workTable.concat(this.busReserve.map((function(e){return{"Автобус":e,"Первая см.":[],"Вторая см.":[],"Рабочий":[]}}))),this.workTable=this.workTable.concat(this.driverReserveTable)}},616:function(e,t,r){"use strict";r.r(t);r(7),r(6),r(50),r(49);var n,o=r(18),l=r(2),c=r.n(l),v=r(587),m=r.n(v),f=(r(39),r(92),r(20)),d=r(21),h=r(588),w=r.n(h),R=r(573),x=r(185),C=function(){function e(){Object(f.a)(this,e)}var t;return Object(d.a)(e,null,[{key:"render",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,template,n,o,l,c,v,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.drivers,template=t.template,n=t.month,o=new w.a.Workbook,e.next=4,o.xlsx.load(template);case 4:return l=o.getWorksheet("main"),c=["январе","феврале","марте","апреле","мае","июне","июле","фвгусте","сентябре","октябре","ноябре","декабре"],l.getRow(1).getCell(1).value='Администрация Филиала "Юго-Западный", в лице директора  Р.А. Езохова, предлагает нижеперечисленным водителям 13-ой автоколонны выполнять сверхурочную работу за пределами установленной продолжительности рабочего времени (баланса), а так же работу в выходные, праздничные дни в '.concat(c[+n-1]," 2019  года."),v=3,m=0,f=0,r.forEach((function(e){m=2+4*f,l.getRow(v).getCell(m).value=e.tabnumber,m=3+4*f,l.getRow(v).getCell(m).value=e.shortName,51==++v&&(v=3,f++)})),e.next=13,o.xlsx.writeBuffer();case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),k=function(){function e(){Object(f.a)(this,e)}var t;return Object(d.a)(e,null,[{key:"render",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,o,l,c,i,v,m,f,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(h=function(e,t,r,n){var o=r,l=n;e.getRow(o).getCell(l).value="Рабочие",f++;var c=v(e,t.workTable.sort((function(a,b){return a["Автобус"].busnumber-b["Автобус"].busnumber})).slice(0,Math.ceil(t.workTable.length/2)),o,l);return v(e,t.workTable.sort((function(a,b){return a["Автобус"].busnumber-b["Автобус"].busnumber})).slice(Math.ceil(t.workTable.length/2)),o,l+6),c;function v(e,t,r,n){return f=r,l=n,f++,e.getRow(f).getCell(l).value="Автобус",e.getRow(f).getCell(l+2).value="Первая",e.getRow(f).getCell(l+3).value="Вторая",e.getRow(f).getCell(l+4).value="Полный",m=++f,t.forEach((function(t,r){f=m+r,e.getRow(f).getCell(l).value=t["Автобус"].busnumber,e.getRow(f).getCell(l+2).value=t["Первая см."].map((function(e){return e.tabnumber})).join(", "),e.getRow(f).getCell(l+3).value=t["Вторая см."].map((function(e){return e.tabnumber})).join(", "),e.getRow(f).getCell(l+4).value=t["Рабочий"].map((function(e){return e.tabnumber})).join(", ");for(var n=0;n<5;n++)e.getRow(f).getCell(l+n).border={top:{style:"thin"}}})),f}},d=function(e,t,r,n){var o=r,l=0,c=n;for(var v in e.getRow(o).getCell(c).value="Автобусы",e.getRow(o+1).getCell(c).value="Резерв (".concat(t.busReserve.length,")"),l=o+=2,t.busReserve.sort((function(a,b){return a.busnumber-b.busnumber})).forEach((function(t,r){l=o+Math.floor(r/5),e.getRow(l).getCell(c+r%5).value=t.busnumber})),l+=2,t.outBuses)e.getRow(l).getCell(c).value="".concat(v," (").concat(t.outBuses[v].length,")"),o=++l,t.outBuses[v].sort((function(a,b){return a.busnumber-b.busnumber})).forEach((function(t,r){l=o+Math.floor(r/5),e.getRow(l).getCell(c+r%5).value=t.busnumber})),l+=2;for(var m in o=r,c+=5,e.getRow(o).getCell(c).value="Водители",e.getRow(o+1).getCell(c).value="Резерв (".concat(t.driverReserveCount,")"),l=o+=2,e.getRow(o).getCell(c).value="Первая см.",e.getRow(o).getCell(c+2).value="Вторая см.",e.getRow(o).getCell(c+4).value="Полный день",o=++l,t.driverReserveTable.forEach((function(t,r){l=o+r,e.getRow(l).getCell(c).value=t["Первая см."].map((function(e){return e.tabnumber})).join(", "),e.getRow(l).getCell(c+2).value=t["Вторая см."].map((function(e){return e.tabnumber})).join(", "),e.getRow(l).getCell(c+4).value=t["Рабочий"].map((function(e){return e.tabnumber})).join(", ");for(var n=0;n<6;n++)e.getRow(l).getCell(c+n).border={top:{style:"thin"}}})),o=l+=2,t.outDrivers)e.getRow(l).getCell(c).value="".concat(m," (").concat(t.outDrivers[m].length,")"),o=++l,t.outDrivers[m].sort((function(a,b){return a.tabnumber-b.tabnumber})).forEach((function(t,r){l=o+Math.floor(r/6),e.getRow(l).getCell(c+r%6).value=t.tabnumber})),l+=2;return l},r=t.buses,n=t.date,o=new w.a.Workbook,l=o.addWorksheet("Main"),c=new R.a(n,r),i=0;i<11;i++)(v=l.getColumn(i+1)).width=11,v.style={font:{size:14}};return m=1,f=h(l,c,1,1),d(l,c,f+=2,1),e.next=14,o.xlsx.writeBuffer();case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),y=function(){function e(){Object(f.a)(this,e)}var t;return Object(d.a)(e,null,[{key:"render",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,template,n,o,l,v,m,i,f,d,h,R,C,k,y,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(j=function(e,t,r,l){var v=r,m=l;e.getRow(v).getCell(m).value=t.busnumber;var f=[];switch(t.drivers.length){case 1:f=[4];break;case 2:f=[2,6];break;case 3:f=[1,4,7];break;case 4:f=[1,3,5,7]}t.drivers.forEach((function(t,r){if(t.tabnumber){var l=new x.a(t);!function(e,t,r,l){var v=r,m=l;e.getRow(v).getCell(m+3).value=t.shortName,e.getRow(v).getCell(m+4).value=t.tabnumber;for(var f=c()("".concat(o,"-").concat(n),"YYYY-MM").daysInMonth(),d=t.statusesByDate({date:"".concat(o,"-").concat(n,"-01"),count:f,isShort:!0}),h=0;h<f;h++)e.getRow(v).getCell(m+8+h).value=d[h]}(e,l,v+f[r],m)}})),t.way&&(e.getRow(v).getCell(41).value="Выход: ".concat(t.way.route.title,"/").concat(t.way.title),e.getRow(v+2).getCell(41).value="1 смена: ".concat(t.way.times.durationFirstSmene||""),e.getRow(v+2).getCell(44).value="2 смена: ".concat(t.way.times.durationSecondSmene||""),e.getRow(v+3).getCell(41).value="Выезд из парка: ".concat(t.way.times.outPark||""),e.getRow(v+4).getCell(41).value="Время смены: ".concat(t.way.times.change||""),e.getRow(v+5).getCell(41).value="Окончание работы: ".concat(t.way.times.endWork||""),e.getRow(v+7).getCell(41).value="1 смена: ".concat(t.way.times.lunchFirstSmene||""),e.getRow(v+7).getCell(44).value="2 смена: ".concat(t.way.times.lunchSecondSmene||""))},r=t.buses,template=t.template,n=t.month,o="2019",l=(l=Array.from(r)).sort((function(a,b){return a.busnumber-b.busnumber})),v=Math.ceil(l.length/5),m=[],i=0;i<v;i++)for(m.push([]),f=0;f<5;f++)m[i].push(l[5*i+f]||{});return d=new w.a.Workbook,e.next=11,d.xlsx.load(template);case 11:for(h=d.getWorksheet("Page 1"),R=1;R<m.length;R++)(C=d.addWorksheet("Sheet")).model=Object.assign(h.model,{mergeCells:h.model.merges}),C.name="Page "+(1+R);for(k=function(e){(h=d.getWorksheet("Page "+(e+1))).getRow(1).getCell(44).value=e+1,m[e].forEach((function(e,t){e.busnumber&&j(h,e,10+8*t,2)}))},y=0;y<m.length;y++)k(y);return e.next=17,d.xlsx.writeBuffer();case 17:return e.abrupt("return",e.sent);case 18:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),j=function(){function e(){Object(f.a)(this,e)}var t;return Object(d.a)(e,null,[{key:"render",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,template,n,o,l,v,m,f,i,d,h,R,C,k,y,j,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _=function(e,t){var r=9;t.forEach((function(t){!function(e,t,r,l){var v=r,m=l;if(t.busnumber){var f=[];switch(t.drivers.length){case 1:f=[4];break;case 2:f=[2,6];break;case 3:f=[1,4,7];break;case 4:f=[1,3,5,7]}t.drivers.forEach((function(t,r){for(var l=new x.a(t),d=c()("".concat(o,"-").concat(n),"YYYY-MM").daysInMonth(),h=l.statusesByDate({date:"".concat(o,"-").concat(n,"-13"),count:d-12,isShort:!0}),w=0;w<d-12;w++)e.getRow(v+f[r]).getCell(m+w).value=h[w]})),t.way&&(e.getRow(v).getCell(m+19).value="Выход: ".concat(t.way.route.title,"/").concat(t.way.title),e.getRow(v+2).getCell(m+19).value="1 смена: ".concat(t.way.times.durationFirstSmene||""),e.getRow(v+2).getCell(m+22).value="2 смена: ".concat(t.way.times.durationSecondSmene||""),e.getRow(v+3).getCell(m+19).value="Выезд из парка: ".concat(t.way.times.outPark||""),e.getRow(v+4).getCell(m+19).value="Время смены: ".concat(t.way.times.change||""),e.getRow(v+5).getCell(m+19).value="Окончание работы: ".concat(t.way.times.endWork||""),e.getRow(v+7).getCell(m+19).value="1 смена: ".concat(t.way.times.lunchFirstSmene||""),e.getRow(v+7).getCell(m+22).value="2 смена: ".concat(t.way.times.lunchSecondSmene||""))}}(e,t,r,20),r+=8}))},j=function(e,t){var r=9;t.forEach((function(t){!function(e,t,r,l){var c=r,v=l;if(t.busnumber){e.getRow(c).getCell(v).value=t.busnumber;var m=[];switch(t.drivers.length){case 1:m=[4];break;case 2:m=[2,6];break;case 3:m=[1,4,7];break;case 4:m=[1,3,5,7]}t.drivers.forEach((function(t,r){var l=new x.a(t);!function(e,t,r,l){var c=r,v=l;e.getRow(c).getCell(v+1).value=t.shortName,e.getRow(c).getCell(v+2).value=t.tabnumber;for(var m=t.statusesByDate({date:"".concat(o,"-").concat(n,"-01"),count:12,isShort:!0}),f=0;f<12;f++)e.getRow(c).getCell(v+4+f).value=m[f]}(e,l,c+m[r],v)}))}}(e,t,r,2),r+=8}))},r=t.buses,template=t.template,n=t.month,o="2019",l=(l=Array.from(r)).sort((function(a,b){return a.busnumber-b.busnumber})),v=new w.a.Workbook,e.next=9,v.xlsx.load(template);case 9:for((m=Math.ceil(l.length/4))%2==0&&m++,f=[],i=0;i<m;i++)for(f.push([]),d=0;d<4;d++)f[i].push(l[4*i+d]||{});for(f.unshift([{},{},{},{}]),h=f.length,R=v.getWorksheet("Page 1"),C=1;C<h;C++)(k=v.addWorksheet("Sheet")).model=Object.assign(R.model,{mergeCells:R.model.merges}),k.name="Page "+(1+C);for(y=0;y<h/2;y++)R=v.getWorksheet("Page "+(2*y+1)),j(R,f[y+1]),_(R,f[h-(y+1)]),R=v.getWorksheet("Page "+(2*y+2)),j(R,f[(h-y)%h]),_(R,f[y]);return e.next=20,v.xlsx.writeBuffer();case 20:return e.abrupt("return",e.sent);case 21:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),_={transition:"fade",data:function(){var e,t,r,n,l=this;return{moment:c.a,menu:!1,downloads:[{hasTemplate:!0,isLoading:!1,title:"А3",month:"01",renderer:j,code:"a3",getData:(n=Object(o.a)(regeneratorRuntime.mark((function e(){var t,template;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([l.$store.dispatch("buses/readAll"),l.$store.dispatch("templates/download",{filename:"a3.xlsx"})]);case 2:return t=l.$store.getters["buses/list"],template=l.$store.getters["templates/template"]("a3.xlsx"),e.abrupt("return",{buses:t,template:template});case 5:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},{hasTemplate:!0,isLoading:!1,title:"А4",month:"01",renderer:y,code:"a4",getData:(r=Object(o.a)(regeneratorRuntime.mark((function e(){var t,template;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([l.$store.dispatch("buses/readAll"),l.$store.dispatch("templates/download",{filename:"a4.xlsx"})]);case 2:return t=l.$store.getters["buses/list"],template=l.$store.getters["templates/template"]("a4.xlsx"),e.abrupt("return",{buses:t,template:template});case 5:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{hasTemplate:!0,isLoading:!1,title:"Согласие",month:"01",renderer:C,code:"agreement",getData:(t=Object(o.a)(regeneratorRuntime.mark((function e(){var t,template;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([l.$store.dispatch("drivers/readAll"),l.$store.dispatch("templates/download",{filename:"agreement.xlsx"})]);case 2:return t=l.$store.getters["drivers/list"],template=l.$store.getters["templates/template"]("agreement.xlsx"),e.abrupt("return",{drivers:t,template:template});case 5:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{isLoading:!1,title:"Отчет",dateMenu:!1,date:c()().format("YYYY-MM-DD"),renderer:k,code:"report",getData:(e=Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([l.$store.dispatch("buses/readAll")]);case 2:return t=l.$store.getters["buses/list"],e.abrupt("return",{buses:t,template:null});case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})}],items:[{text:"Январь",value:"01"},{text:"Февраль",value:"02"},{text:"Март",value:"03"},{text:"Апрель",value:"04"},{text:"Май",value:"05"},{text:"Июнь",value:"06"},{text:"Июль",value:"07"},{text:"Август",value:"08"},{text:"Сентябрь",value:"09"},{text:"Октябрь",value:"10"},{text:"Ноябрь",value:"11"},{text:"Декабрь",value:"12"}]}},methods:{get_file:(n=Object(o.a)(regeneratorRuntime.mark((function e(t){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.getData();case 3:return(data=e.sent).date=t.date||"",data.month=t.month||"",e.next=8,t.renderer.render(data);case 8:r=e.sent,m()(new Blob([r]),t.code+".xlsx"),t.isLoading=!1;case 11:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})}},M=r(23),O=r(26),T=r.n(O),S=r(107),D=r(563),$=r(562),B=r(557),E=r(611),Y=r(550),P=r(136),W=r(552),V=r(174),L=r(108),A=r(532),F=r(76),component=Object(M.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:""}},e._l(e.downloads,(function(t,n){return r("v-flex",{key:n,staticClass:"pa-3",attrs:{xs12:"",sm6:"",md4:""}},[r("v-card",[r("v-card-title",{staticClass:"green"},[r("v-icon",{attrs:{dark:""}},[e._v("fa-file-excel")]),e._v(" "),r("span",{staticClass:"ml-3 white--text"},[e._v(e._s(t.title))])],1),e._v(" "),r("v-card-text",{staticClass:"pt-2"},[t.month?r("v-select",{attrs:{items:e.items,label:"Месяц"},model:{value:t.month,callback:function(r){e.$set(t,"month",r)},expression:"download.month"}}):e._e(),e._v(" "),t.date?r("v-menu",{attrs:{"close-on-content-click":!1,"max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on;return[r("v-text-field",e._g({attrs:{value:e.moment(t.date).format("DD/MM/YYYY"),label:"Дата",readonly:""}},o))]}}],null,!0),model:{value:t.dateMenu,callback:function(r){e.$set(t,"dateMenu",r)},expression:"download.dateMenu"}},[e._v(" "),r("v-date-picker",{attrs:{"no-title":""},on:{change:function(e){t.dateMenu=!1}},model:{value:t.date,callback:function(r){e.$set(t,"date",r)},expression:"download.date"}})],1):e._e(),e._v(" "),t.hasTemplate?r("v-file-input",{attrs:{label:"Шаблон"}}):e._e(),e._v(" "),t.hasTemplate?r("v-layout",{attrs:{row:"","justify-space-between":""}},[r("v-flex",[r("v-btn",{attrs:{rounded:"",color:"green",dark:""}},[e._v("Загрузить")])],1),e._v(" "),r("v-flex",[r("v-btn",{attrs:{rounded:"",color:"green",dark:""}},[e._v("Скачать")])],1)],1):e._e()],1),e._v(" "),r("v-card-actions",{staticClass:"pa-0"},[r("v-btn",{staticStyle:{"font-size":"1.4rem","border-top-left-radius":"0","border-top-right-radius":"0"},attrs:{height:"52",block:"",color:"green",dark:""},on:{click:function(r){return e.get_file(t)}}},[t.isLoading?r("v-progress-circular",{attrs:{indeterminate:""}}):r("span",[e._v("Скачать")])],1)],1)],1)],1)})),1)}),[],!1,null,null,null);t.default=component.exports;T()(component,{VBtn:S.a,VCard:D.a,VCardActions:$.a,VCardText:$.b,VCardTitle:$.c,VDatePicker:B.a,VFileInput:E.a,VFlex:Y.a,VIcon:P.a,VLayout:W.a,VMenu:V.a,VProgressCircular:L.a,VSelect:A.a,VTextField:F.a})}}]);