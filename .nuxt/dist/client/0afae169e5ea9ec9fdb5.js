(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{566:function(e,t,n){"use strict";var r=n(2),o=n.n(r),l={props:["value"],data:function(){return{menu:!1}},computed:{formattedDate:function(){return this.value?o()(this.value).format("DD/MM/YYYY"):""}},methods:{changeDate:function(e){this.$emit("input",e),this.menu=!1},nextDay:function(){this.$emit("input",o()(this.value).add(1,"d").format("YYYY-MM-DD"))},prevDay:function(){this.$emit("input",o()(this.value).subtract(1,"d").format("YYYY-MM-DD"))}}},c=n(23),v=n(26),d=n.n(v),m=n(557),h=n(174),f=n(76),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"close-on-content-click":!1,"max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-text-field",e._g({staticClass:"desable-shadow mr-4",staticStyle:{"box-shadow":"none"},attrs:{flat:"",solo:"","hide-details":"",value:e.formattedDate,label:"Date",readonly:""}},r))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{attrs:{value:e.value,"no-title":""},on:{change:e.changeDate}})],1)}),[],!1,null,null,null);t.a=component.exports;d()(component,{VDatePicker:m.a,VMenu:h.a,VTextField:f.a})},576:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(25),n(27);var r=n(20),o=n(182),l=function e(t,n){var l=this;Object(r.a)(this,e),this.errors=[],this.workTable=[],this.driverReserveCount=0,this.driverReserveTable=[],this.busReserve=[],this.outDrivers={"Выходной":[],"Больничный":[],"Отпуск":[]},this.outBuses={"Ремонт":[],"СВАРЗ":[]},n.forEach((function(e){var n={"Рабочий":[],"Первая см.":[],"Вторая см.":[]},r=0;e.drivers.forEach((function(e){var c=(e=new o.a(e)).statusesByDate({date:t,count:1,isShort:!1,withExceptions:!0})[0].status;c?["Рабочий","Первая см.","Вторая см."].includes(c)?(r++,n[c].push(e)):l.outDrivers[c].push(e):l.errors.push("У водителя ".concat(e.tabnumber," нет статуса"))})),["Ремонт","СВАРЗ","Долгостой"].includes(e.status)?("Долгостой"==e.status?l.outBuses["Ремонт"].push(e):l.outBuses[e.status].push(e),0!==r&&(l.driverReserveCount+=r,n["Автобус"]=Object.assign({},e),n["Автобус"].busnumber+=" ".concat(e.status),l.driverReserveTable.push(n))):0===r?l.busReserve.push(e):(n["Автобус"]=e,l.workTable.push(n))})),this.workTable=this.workTable.concat(this.busReserve.map((function(e){return{"Автобус":e,"Первая см.":[],"Вторая см.":[],"Рабочий":[]}}))),this.workTable=this.workTable.concat(this.driverReserveTable)}},614:function(e,t,n){"use strict";n.r(t);n(7),n(6),n(50),n(49);var r=n(18),o=n(2),l=n.n(o),c=n(570),v=n.n(c),d={props:["title","loading"]},m=n(23),h=n(26),f=n.n(h),w=n(107),x=n(563),R=n(562),k=n(136),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",{staticClass:"green"},[n("v-icon",{attrs:{dark:""}},[e._v("fa-file-excel")]),e._v(" "),n("span",{staticClass:"ml-3 white--text"},[e._v(e._s(e.title))])],1),e._v(" "),n("v-card-text",{staticClass:"pt-2"},[e._t("default")],2),e._v(" "),n("v-card-actions",{staticClass:"pa-0"},[n("v-btn",{staticStyle:{"font-size":"1.4rem","border-top-left-radius":"0","border-top-right-radius":"0"},attrs:{loading:e.loading,height:"52",block:"",color:"green",dark:""},on:{click:function(t){return e.$emit("download")}}},[n("span",[e._v("Скачать")])])],1)],1)}),[],!1,null,null,null),C=component.exports;f()(component,{VBtn:w.a,VCard:x.a,VCardActions:R.a,VCardText:R.b,VCardTitle:R.c,VIcon:k.a});var y,_,D=n(566),j=n(20),O=n(21),V=n(571),M=n.n(V),$=n(576),L=function(){function e(){Object(j.a)(this,e)}var t;return Object(O.a)(e,null,[{key:"render",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r,o,l,c,i,v,d,m,h,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(f=function(e,t,n,r){var o=n,l=r;e.getRow(o).getCell(l).value="Рабочие",m++;var c=v(e,t.workTable.sort((function(a,b){return a["Автобус"].busnumber-b["Автобус"].busnumber})).slice(0,Math.ceil(t.workTable.length/2)),o,l);return v(e,t.workTable.sort((function(a,b){return a["Автобус"].busnumber-b["Автобус"].busnumber})).slice(Math.ceil(t.workTable.length/2)),o,l+6),c;function v(e,t,n,r){return m=n,l=r,m++,e.getRow(m).getCell(l).value="Автобус",e.getRow(m).getCell(l+2).value="Первая",e.getRow(m).getCell(l+3).value="Вторая",e.getRow(m).getCell(l+4).value="Полный",d=++m,t.forEach((function(t,n){m=d+n,e.getRow(m).getCell(l).value=t["Автобус"].busnumber,e.getRow(m).getCell(l+2).value=t["Первая см."].map((function(e){return e.tabnumber})).join(", "),e.getRow(m).getCell(l+3).value=t["Вторая см."].map((function(e){return e.tabnumber})).join(", "),e.getRow(m).getCell(l+4).value=t["Рабочий"].map((function(e){return e.tabnumber})).join(", ");for(var r=0;r<5;r++)e.getRow(m).getCell(l+r).border={top:{style:"thin"}}})),m}},h=function(e,t,n,r){var o=n,l=0,c=r;for(var v in e.getRow(o).getCell(c).value="Автобусы",e.getRow(o+1).getCell(c).value="Резерв (".concat(t.busReserve.length,")"),l=o+=2,t.busReserve.sort((function(a,b){return a.busnumber-b.busnumber})).forEach((function(t,n){l=o+Math.floor(n/5),e.getRow(l).getCell(c+n%5).value=t.busnumber})),l+=2,t.outBuses)e.getRow(l).getCell(c).value="".concat(v," (").concat(t.outBuses[v].length,")"),o=++l,t.outBuses[v].sort((function(a,b){return a.busnumber-b.busnumber})).forEach((function(t,n){l=o+Math.floor(n/5),e.getRow(l).getCell(c+n%5).value=t.busnumber})),l+=2;for(var d in o=n,c+=5,e.getRow(o).getCell(c).value="Водители",e.getRow(o+1).getCell(c).value="Резерв (".concat(t.driverReserveCount,")"),l=o+=2,e.getRow(o).getCell(c).value="Первая см.",e.getRow(o).getCell(c+2).value="Вторая см.",e.getRow(o).getCell(c+4).value="Полный день",o=++l,t.driverReserveTable.forEach((function(t,n){l=o+n,e.getRow(l).getCell(c).value=t["Первая см."].map((function(e){return e.tabnumber})).join(", "),e.getRow(l).getCell(c+2).value=t["Вторая см."].map((function(e){return e.tabnumber})).join(", "),e.getRow(l).getCell(c+4).value=t["Рабочий"].map((function(e){return e.tabnumber})).join(", ");for(var r=0;r<6;r++)e.getRow(l).getCell(c+r).border={top:{style:"thin"}}})),o=l+=2,t.outDrivers)e.getRow(l).getCell(c).value="".concat(d," (").concat(t.outDrivers[d].length,")"),o=++l,t.outDrivers[d].sort((function(a,b){return a.tabnumber-b.tabnumber})).forEach((function(t,n){l=o+Math.floor(n/6),e.getRow(l).getCell(c+n%6).value=t.tabnumber})),l+=2;return l},n=t.buses,r=t.date,o=new M.a.Workbook,l=o.addWorksheet("Main"),c=new $.a(r,n),i=0;i<11;i++)(v=l.getColumn(i+1)).width=11,v.style={font:{size:14}};return d=1,m=f(l,c,1,1),h(l,c,m+=2,1),e.next=14,o.xlsx.writeBuffer();case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),Y={components:{AppDownload:C,MenuDatePicker:D.a},data:function(){return{date:l()().format("YYYY-MM-DD"),isLoading:!1,renderer:L}},computed:{buses:function(){return this.$store.getters["buses/list"]}},methods:{get_file:(y=Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,Promise.all([this.$store.dispatch("buses/readAll")]);case 3:return e.next=5,this.renderer.render({buses:this.buses,date:this.date});case 5:t=e.sent,v()(new Blob([t]),"Отчет за ".concat(l()(this.date).format("DD-MM-YY"),".xlsx")),this.isLoading=!1;case 8:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)})}},S=Object(m.a)(Y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-download",{attrs:{title:"Отчет",loading:e.isLoading},on:{download:e.get_file}},[n("menu-date-picker",{model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)}),[],!1,null,null,null).exports,F=(n(62),n(39),n(92),n(182)),B=function(){function e(){Object(j.a)(this,e)}var t;return Object(O.a)(e,null,[{key:"render",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,template,r,o,c,v,d,i,m,h,f,w,x,R,k,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(C=function(e,t,n,c){var v=n,d=c;e.getRow(v).getCell(d).value=t.busnumber;var m=[];switch(t.drivers.length){case 1:m=[4];break;case 2:m=[2,6];break;case 3:m=[1,4,7];break;case 4:m=[1,3,5,7]}t.drivers.forEach((function(t,n){if(t.tabnumber){var c=new F.a(t);!function(e,t,n,c){var v=n,d=c;e.getRow(v).getCell(d+3).value=t.shortName,e.getRow(v).getCell(d+4).value=t.tabnumber;for(var m=l()("".concat(o,"-").concat(r),"YYYY-MM").daysInMonth(),h=t.statusesByDate({date:"".concat(o,"-").concat(r,"-01"),count:m,isShort:!0}),f=0;f<m;f++)e.getRow(v).getCell(d+8+f).value=h[f]}(e,c,v+m[n],d)}})),t.way&&(e.getRow(v).getCell(41).value="Выход: ".concat(t.way.route.title,"/").concat(t.way.title),e.getRow(v+2).getCell(41).value="1 смена: ".concat(t.way.times.durationFirstSmene||""),e.getRow(v+2).getCell(44).value="2 смена: ".concat(t.way.times.durationSecondSmene||""),e.getRow(v+3).getCell(41).value="Выезд из парка: ".concat(t.way.times.outPark||""),e.getRow(v+4).getCell(41).value="Время смены: ".concat(t.way.times.change||""),e.getRow(v+5).getCell(41).value="Окончание работы: ".concat(t.way.times.endWork||""),e.getRow(v+7).getCell(41).value="1 смена: ".concat(t.way.times.lunchFirstSmene||""),e.getRow(v+7).getCell(44).value="2 смена: ".concat(t.way.times.lunchSecondSmene||""))},n=t.buses,template=t.template,r=t.month,o="2019",c=(c=Array.from(n)).sort((function(a,b){return a.busnumber-b.busnumber})),v=Math.ceil(c.length/5),d=[],i=0;i<v;i++)for(d.push([]),m=0;m<5;m++)d[i].push(c[5*i+m]||{});return h=new M.a.Workbook,e.next=11,h.xlsx.load(template);case 11:for(f=h.getWorksheet("Page 1"),w=1;w<d.length;w++)(x=h.addWorksheet("Sheet")).model=Object.assign(f.model,{mergeCells:f.model.merges}),x.name="Page "+(1+w);for(R=function(e){(f=h.getWorksheet("Page "+(e+1))).getRow(1).getCell(44).value=e+1,d[e].forEach((function(e,t){e.busnumber&&C(f,e,10+8*t,2)}))},k=0;k<d.length;k++)R(k);return e.next=17,h.xlsx.writeBuffer();case 17:return e.abrupt("return",e.sent);case 18:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),E={components:{AppDownload:C,MenuDatePicker:D.a},data:function(){return{file:null,isLoading:!1,renderer:B,month:"01",items:[{text:"Январь",value:"01"},{text:"Февраль",value:"02"},{text:"Март",value:"03"},{text:"Апрель",value:"04"},{text:"Май",value:"05"},{text:"Июнь",value:"06"},{text:"Июль",value:"07"},{text:"Август",value:"08"},{text:"Сентябрь",value:"09"},{text:"Октябрь",value:"10"},{text:"Ноябрь",value:"11"},{text:"Декабрь",value:"12"}]}},computed:{buses:function(){return this.$store.getters["buses/list"]},template:function(){return this.$store.getters["templates/template"]("templates/a4.xlsx")}},methods:{get_file:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t,n,r=this,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]&&o[0],this.isLoading=!0,e.next=4,Promise.all([this.$store.dispatch("buses/readAll"),this.$store.dispatch("templates/download",{filename:"templates/a4.xlsx"})]);case 4:if(n=null,!t){e.next=9;break}n=this.template,e.next=12;break;case 9:return e.next=11,this.renderer.render({buses:this.buses,template:this.template,month:this.month});case 11:n=e.sent;case 12:v()(new Blob([n]),"Журнал A4 на ".concat(this.items.find((function(e){return e.value==r.month})).text,".xlsx")),this.isLoading=!1;case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),onFileChange:function(e){this.file=e},uploadFile:(_=Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,(t=new FormData).append("template",this.file),e.next=5,this.$axios.post("/api/templates/a4.xlsx",t,{headers:{enctype:"multipart/form-data"}});case 5:e.sent.data,this.isLoading=!1;case 8:case"end":return e.stop()}}),e,this)}))),function(){return _.apply(this,arguments)})}},A=n(553),P=n(612),T=n(552),W=n(554),I=n(532),N=Object(m.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-download",{attrs:{title:"A4",loading:e.isLoading},on:{download:e.get_file}},[n("v-select",{attrs:{items:e.items,label:"Месяц"},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}}),e._v(" "),n("v-file-input",{attrs:{label:"Шаблон"},on:{change:e.onFileChange}}),e._v(" "),n("v-layout",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("v-btn",{attrs:{rounded:"",color:"green",dark:""},on:{click:e.uploadFile}},[e._v("Загрузить")])],1),e._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("v-btn",{attrs:{rounded:"",color:"green",dark:""},on:{click:function(t){return e.get_file(!0)}}},[e._v("Скачать")])],1)],1)],1)],1)}),[],!1,null,null,null),z=N.exports;f()(N,{VBtn:w.a,VCol:A.a,VFileInput:P.a,VLayout:T.a,VRow:W.a,VSelect:I.a});var J=function(){function e(){Object(j.a)(this,e)}var t;return Object(O.a)(e,null,[{key:"render",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,template,r,o,c,v,d,m,i,h,f,w,x,R,k,C,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y=function(e,t){var n=9;t.forEach((function(t){!function(e,t,n,c){var v=n,d=c;if(t.busnumber){var m=[];switch(t.drivers.length){case 1:m=[4];break;case 2:m=[2,6];break;case 3:m=[1,4,7];break;case 4:m=[1,3,5,7]}t.drivers.forEach((function(t,n){for(var c=new F.a(t),h=l()("".concat(o,"-").concat(r),"YYYY-MM").daysInMonth(),f=c.statusesByDate({date:"".concat(o,"-").concat(r,"-13"),count:h-12,isShort:!0}),w=0;w<h-12;w++)e.getRow(v+m[n]).getCell(d+w).value=f[w]})),t.way&&(e.getRow(v).getCell(d+19).value="Выход: ".concat(t.way.route.title,"/").concat(t.way.title),e.getRow(v+2).getCell(d+19).value="1 смена: ".concat(t.way.times.durationFirstSmene||""),e.getRow(v+2).getCell(d+22).value="2 смена: ".concat(t.way.times.durationSecondSmene||""),e.getRow(v+3).getCell(d+19).value="Выезд из парка: ".concat(t.way.times.outPark||""),e.getRow(v+4).getCell(d+19).value="Время смены: ".concat(t.way.times.change||""),e.getRow(v+5).getCell(d+19).value="Окончание работы: ".concat(t.way.times.endWork||""),e.getRow(v+7).getCell(d+19).value="1 смена: ".concat(t.way.times.lunchFirstSmene||""),e.getRow(v+7).getCell(d+22).value="2 смена: ".concat(t.way.times.lunchSecondSmene||""))}}(e,t,n,20),n+=8}))},C=function(e,t){var n=9;t.forEach((function(t){!function(e,t,n,l){var c=n,v=l;if(t.busnumber){e.getRow(c).getCell(v).value=t.busnumber;var d=[];switch(t.drivers.length){case 1:d=[4];break;case 2:d=[2,6];break;case 3:d=[1,4,7];break;case 4:d=[1,3,5,7]}t.drivers.forEach((function(t,n){var l=new F.a(t);!function(e,t,n,l){var c=n,v=l;e.getRow(c).getCell(v+1).value=t.shortName,e.getRow(c).getCell(v+2).value=t.tabnumber;for(var d=t.statusesByDate({date:"".concat(o,"-").concat(r,"-01"),count:12,isShort:!0}),m=0;m<12;m++)e.getRow(c).getCell(v+4+m).value=d[m]}(e,l,c+d[n],v)}))}}(e,t,n,2),n+=8}))},n=t.buses,template=t.template,r=t.month,o="2019",c=(c=Array.from(n)).sort((function(a,b){return a.busnumber-b.busnumber})),v=new M.a.Workbook,e.next=9,v.xlsx.load(template);case 9:for((d=Math.ceil(c.length/4))%2==0&&d++,m=[],i=0;i<d;i++)for(m.push([]),h=0;h<4;h++)m[i].push(c[4*i+h]||{});for(m.unshift([{},{},{},{}]),f=m.length,w=v.getWorksheet("Page 1"),x=1;x<f;x++)(R=v.addWorksheet("Sheet")).model=Object.assign(w.model,{mergeCells:w.model.merges}),R.name="Page "+(1+x);for(k=0;k<f/2;k++)w=v.getWorksheet("Page "+(2*k+1)),C(w,m[k+1]),y(w,m[f-(k+1)]),w=v.getWorksheet("Page "+(2*k+2)),C(w,m[(f-k)%f]),y(w,m[k]);return e.next=20,v.xlsx.writeBuffer();case 20:return e.abrupt("return",e.sent);case 21:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),G={components:{AppDownload:C,MenuDatePicker:D.a},data:function(){return{file:null,isLoading:!1,renderer:J,month:"01",items:[{text:"Январь",value:"01"},{text:"Февраль",value:"02"},{text:"Март",value:"03"},{text:"Апрель",value:"04"},{text:"Май",value:"05"},{text:"Июнь",value:"06"},{text:"Июль",value:"07"},{text:"Август",value:"08"},{text:"Сентябрь",value:"09"},{text:"Октябрь",value:"10"},{text:"Ноябрь",value:"11"},{text:"Декабрь",value:"12"}]}},computed:{buses:function(){return this.$store.getters["buses/list"]},template:function(){return this.$store.getters["templates/template"]("templates/a3.xlsx")}},methods:{get_file:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t,n,r=this,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]&&o[0],this.isLoading=!0,e.next=4,Promise.all([this.$store.dispatch("buses/readAll"),this.$store.dispatch("templates/download",{filename:"templates/a3.xlsx"})]);case 4:if(n=null,!t){e.next=9;break}n=this.template,e.next=12;break;case 9:return e.next=11,this.renderer.render({buses:this.buses,template:this.template,month:this.month});case 11:n=e.sent;case 12:v()(new Blob([n]),"Журнал A3 на ".concat(this.items.find((function(e){return e.value==r.month})).text,".xlsx")),this.isLoading=!1;case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),onFileChange:function(e){this.file=e},uploadFile:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,(t=new FormData).append("template",this.file),e.next=5,this.$axios.post("/api/templates/a3.xlsx",t,{headers:{enctype:"multipart/form-data"}});case 5:n=e.sent,n.data,this.isLoading=!1;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}},H=Object(m.a)(G,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-download",{attrs:{title:"A3",loading:e.isLoading},on:{download:e.get_file}},[n("v-select",{attrs:{items:e.items,label:"Месяц"},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}}),e._v(" "),n("v-file-input",{attrs:{label:"Шаблон"},on:{change:e.onFileChange}}),e._v(" "),n("v-layout",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("v-btn",{attrs:{rounded:"",color:"green",dark:""},on:{click:e.uploadFile}},[e._v("Загрузить")])],1),e._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("v-btn",{attrs:{rounded:"",color:"green",dark:""},on:{click:function(t){return e.get_file(!0)}}},[e._v("Скачать")])],1)],1)],1)],1)}),[],!1,null,null,null),K=H.exports;f()(H,{VBtn:w.a,VCol:A.a,VFileInput:P.a,VLayout:T.a,VRow:W.a,VSelect:I.a});var Q=function(){function e(){Object(j.a)(this,e)}var t;return Object(O.a)(e,null,[{key:"render",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,template,r,o,l,c,v,d,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.drivers,template=t.template,r=t.month,o=new M.a.Workbook,e.next=4,o.xlsx.load(template);case 4:return l=Array.from(n).sort((function(a,b){return a.tabnumber-b.tabnumber})),c=o.getWorksheet("main"),v=["январе","феврале","марте","апреле","мае","июне","июле","фвгусте","сентябре","октябре","ноябре","декабре"],c.getRow(1).getCell(1).value='Администрация Филиала "Юго-Западный", в лице директора  Р.А. Езохова, предлагает нижеперечисленным водителям 13-ой автоколонны выполнять сверхурочную работу за пределами установленной продолжительности рабочего времени (баланса), а так же работу в выходные, праздничные дни в '.concat(v[+r-1]," 2019  года."),d=3,m=0,h=0,l.forEach((function(e){m=2+4*h,c.getRow(d).getCell(m).value=e.tabnumber,m=3+4*h,c.getRow(d).getCell(m).value=e.shortName,51==++d&&(d=3,h++)})),e.next=14,o.xlsx.writeBuffer();case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),U={components:{AppDownload:C,MenuDatePicker:D.a},data:function(){return{file:null,isLoading:!1,renderer:Q,month:"01",items:[{text:"Январь",value:"01"},{text:"Февраль",value:"02"},{text:"Март",value:"03"},{text:"Апрель",value:"04"},{text:"Май",value:"05"},{text:"Июнь",value:"06"},{text:"Июль",value:"07"},{text:"Август",value:"08"},{text:"Сентябрь",value:"09"},{text:"Октябрь",value:"10"},{text:"Ноябрь",value:"11"},{text:"Декабрь",value:"12"}]}},computed:{drivers:function(){return this.$store.getters["drivers/list"]},template:function(){return this.$store.getters["templates/template"]("templates/agreement.xlsx")}},methods:{get_file:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t,n,r=this,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]&&o[0],this.isLoading=!0,e.next=4,Promise.all([this.$store.dispatch("drivers/readAll"),this.$store.dispatch("templates/download",{filename:"templates/agreement.xlsx"})]);case 4:if(n=null,!t){e.next=9;break}n=this.template,e.next=12;break;case 9:return e.next=11,this.renderer.render({drivers:this.drivers,template:this.template,month:this.month});case 11:n=e.sent;case 12:v()(new Blob([n]),"Согласие за ".concat(this.items.find((function(e){return e.value==r.month})).text,".xlsx")),this.isLoading=!1;case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),onFileChange:function(e){this.file=e},uploadFile:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,(t=new FormData).append("template",this.file),e.next=5,this.$axios.post("/api/templates/agreement.xlsx",t,{headers:{enctype:"multipart/form-data"}});case 5:n=e.sent,n.data,this.isLoading=!1;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}},X=Object(m.a)(U,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-download",{attrs:{title:"Согласие",loading:e.isLoading},on:{download:e.get_file}},[n("v-select",{attrs:{items:e.items,label:"Месяц"},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}}),e._v(" "),n("v-file-input",{attrs:{label:"Шаблон"},on:{change:e.onFileChange}}),e._v(" "),n("v-layout",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("v-btn",{attrs:{rounded:"",color:"green",dark:""},on:{click:e.uploadFile}},[e._v("Загрузить")])],1),e._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("v-btn",{attrs:{rounded:"",color:"green",dark:""},on:{click:function(t){return e.get_file(!0)}}},[e._v("Скачать")])],1)],1)],1)],1)}),[],!1,null,null,null),Z=X.exports;f()(X,{VBtn:w.a,VCol:A.a,VFileInput:P.a,VLayout:T.a,VRow:W.a,VSelect:I.a});var ee={transition:"fade",components:{DownloadReport:S,DownloadA4:z,DownloadA3:K,DownloadAgreement:Z}},te=Object(m.a)(ee,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("download-a4")],1),this._v(" "),t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("download-a3")],1),this._v(" "),t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("download-agreement")],1),this._v(" "),t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("download-report")],1)],1)],1)}),[],!1,null,null,null);t.default=te.exports;f()(te,{VCol:A.a,VLayout:T.a,VRow:W.a})}}]);