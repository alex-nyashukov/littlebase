(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{568:function(t,e,n){"use strict";var r=n(2),o=n.n(r),c={props:["value"],data:function(){return{menu:!1}},computed:{formattedDate:function(){return this.value?o()(this.value).format("DD/MM/YYYY"):""}},methods:{changeDate:function(t){this.$emit("input",t),this.menu=!1},nextDay:function(){this.$emit("input",o()(this.value).add(1,"d").format("YYYY-MM-DD"))},prevDay:function(){this.$emit("input",o()(this.value).subtract(1,"d").format("YYYY-MM-DD"))}}},l=n(23),d=n(26),f=n.n(d),v=n(557),m=n(175),h=n(77),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-text-field",t._g({staticClass:"desable-shadow mr-4",staticStyle:{"box-shadow":"none"},attrs:{flat:"",solo:"","hide-details":"",value:t.formattedDate,label:"Date",readonly:""}},r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-date-picker",{attrs:{value:t.value,"no-title":""},on:{change:t.changeDate}})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VDatePicker:v.a,VMenu:m.a,VTextField:h.a})},571:function(t,e,n){"use strict";var r={props:["item","left","right"]},o=n(23),c=n(26),l=n.n(c),d=n(170),f=n(563),v=n(562),m=n(176),h=n(582),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{"content-class":"pa-0",left:t.left,right:t.right,"open-on-hover":"","offset-x":"",disabled:t.$vuetify.breakpoint.xs},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[t._t("default",null,{on:n,item:t.item})]}}],null,!0)},[t._v(" "),n("v-card",{attrs:{"min-width":"500"}},[n("v-card-text",[n("v-input",{attrs:{"error-count":"5",messages:t.item.phones.map((function(t){return t.value}))},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("v-avatar",{attrs:{size:"100",color:"grey"}},[t.item.image?n("img",{attrs:{src:t.item.image}}):t._e()])]},proxy:!0}])},[t._v("\n        "+t._s(t.item.name)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VAvatar:d.a,VCard:f.a,VCardText:v.b,VInput:m.a,VTooltip:h.a})},578:function(t,e,n){var content=n(597);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("a5c8b314",content,!0,{sourceMap:!1})},596:function(t,e,n){"use strict";var r=n(578);n.n(r).a},597:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,"",""])},615:function(t,e,n){"use strict";n.r(e);n(10),n(8),n(9),n(7),n(6),n(112),n(46),n(80),n(55),n(32),n(24),n(27);var r=n(0),o=(n(49),n(18)),c=n(2),l=n.n(c),d=n(165),f=n(564),v=n.n(f),m=n(183),h={props:["value","items","label"]},_=(n(596),n(23)),y=n(26),w=n.n(y),x=n(624),k=n(582),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-overflow-btn",{staticStyle:{"align-items":"center"},attrs:{label:t.label,editable:"","full-width":"",clearable:"","hide-details":"",items:t.items,value:t.value},on:{input:function(data){t.$emit("input",data)}},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item;return[t._t("default",null,{item:n})]}},{key:"item",fn:function(e){var r=e.item;return[n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;return[t._t("default",null,{item:r})]}}],null,!0)},[t._v(" "),n("v-slot",{attrs:{name:"tooltip",item:r}})],1)]}}],null,!0)})}),[],!1,null,null,null),O=component.exports;w()(component,{VOverflowBtn:x.a,VTooltip:k.a});var S=n(571),$=n(180);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var D={"Рабочий":"allDay","Первая см.":"firstSmene","Вторая см.":"secondSmene"},j={components:{OutfitSelect:O,DriverMiniCard:S.a},props:["size","way","field","isFiltering"],data:function(){return{}},computed:{date:function(){return this.$store.getters["outfit/date"]},statistic:function(){return this.$store.getters["outfit/statistic"]},item:function(){return this.$store.getters["outfit/item"](this.way._id)},ways:function(){return this.$store.getters["ways/list"]},item_bus:function(){return this.$store.getters["outfit/item_bus"](this.way._id)},drivers:function(){var t=this,e=this.$store.getters["drivers/list"].map((function(e){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({text:e.tabnumber,value:e._id,count:t.count(e._id),borderColor:t.color(e._id)},e)}));e=e.map((function(t){return new $.a(t)}));var n={green:0,yellow:1,red:2};return e=e.sort((function(a,b){return b.count-a.count})).sort((function(a,b){return n[a.borderColor]-n[b.borderColor]})),e=e.filter((function(e){var n=!0;t.$store.getters["outfit/items"].forEach((function(r){["allDay","firstSmene","secondSmene"].forEach((function(n){if(e._id==r[n]){var o=t.ways.find((function(t){return t._id==r.wayId}));o&&(e.text=e.text+" ("+o.route.title+"/"+o.title+")")}})),e._id==r[t.field]&&r.wayId==t.way._id&&(n=!0)}));var r=e.statusesByDate({date:t.date,count:1,withExceptions:!0})[0];return["Больничный","Отпуск","Выходной"].includes(r.status)&&(e.text+=" ("+r.status+")"),t.isFiltering?(D[r.status]==t.field||["Больничный","Отпуск","Выходной"].includes(r.status)||(n=!1),n):n})),e}},methods:{count:function(t){var e=0;return this.statistic[t]&&this.statistic[t][this.way._id]&&(e=this.statistic[t][this.way._id].count),e},color:function(t){var e=!1,n=!1;return this.statistic[t]&&this.statistic[t][this.way._id]&&(n=this.statistic[t][this.way._id].count,e=this.statistic[t][this.way._id].isKnow),n?"green":e?"yellow":"red"}}},V=n(136),W=n(552),P=Object(_.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("outfit-select",{attrs:{label:""+t.drivers.length,items:t.drivers,value:t.item[t.field]},on:{input:function(data){return t.$store.commit("outfit/set_field_value",{wayId:t.way._id,field:t.field,value:data})}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[n("v-layout",{style:"border-right: 3px solid "+r.borderColor,attrs:{"justify-space-between":"","fill-height":""}},[n("driver-mini-card",{attrs:{item:r,left:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.on;return[n("span",t._g({},o),[n("v-icon",{attrs:{"x-small":""}},[t._v(t._s(t.item_bus==r.bus._id?"fa-check":"fa-times"))]),t._v("\n            "+t._s(r.text)+"\n          ")],1)]}}],null,!0)}),t._v(" "),n("span",{staticClass:"pr-2"},[t._v(t._s(r.count))])],1)]}}])})}),[],!1,null,null,null),R=P.exports;w()(P,{VIcon:V.a,VLayout:W.a});function F(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var A={components:{OutfitSelect:O},props:["size","way","field","isFiltering"],data:function(){return{}},computed:{statistic:function(){return this.$store.getters["outfit/statistic"]},item:function(){return this.$store.getters["outfit/item"](this.way._id)},buses:function(){var t=this,e=this.$store.getters["buses/list"].map((function(e){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):F(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({text:e.busnumber,value:e._id,count:t.count(e._id),borderColor:t.color(e._id)},e)})),n={green:0,yellow:1,red:2};return e=e.sort((function(a,b){return b.count-a.count})).sort((function(a,b){return n[a.borderColor]-n[b.borderColor]})),e=e.filter((function(e){var n=!0;return t.$store.getters["outfit/items"].forEach((function(r){e._id==r[t.field]&&r.wayId!=t.way._id&&(n=!1)})),t.isFiltering?(["Ремонт","Долгостой","СВАРЗ"].includes(e.status)&&(n=!1),t.way.capacities.includes(e.capacity)||(n=!1),t.way.colors.includes(e.color)||(n=!1),n):n})),e}},methods:{count:function(t){var e=0;return this.statistic[t]&&this.statistic[t][this.way._id]&&(e=this.statistic[t][this.way._id].count),e},color:function(t){var e=!1,n=!1;return this.statistic[t]&&this.statistic[t][this.way._id]&&(n=this.statistic[t][this.way._id].count,e=this.statistic[t][this.way._id].isKnow),n?"green":e?"yellow":"red"}}},E=Object(_.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("outfit-select",{attrs:{label:""+t.buses.length,items:t.buses,value:t.item[t.field]},on:{input:function(data){return t.$store.commit("outfit/set_field_value",{wayId:t.way._id,field:t.field,value:data})}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[n("v-layout",{style:"border-right: 3px solid "+r.borderColor,attrs:{"justify-space-between":"","fill-height":""}},[n("span",[t._v(t._s(r.text))]),t._v(" "),n("span",{staticClass:"pr-2"},[t._v(t._s(r.count))])])]}}])})}),[],!1,null,null,null),I=E.exports;w()(E,{VLayout:W.a});var T={components:{OutfitDriverSelect:R,OutfitBusSelect:I},props:["way","date","isFiltering","isActive"],data:function(){return{}},watch:{},computed:{localWay:function(){return new m.a(this.way)}},methods:{}},L=n(553),Y=n(554),M=n(173),B=Object(_.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.localWay.isActive(t.date)?n("v-layout",{attrs:{"align-center":""}},[n("v-row",{staticClass:"px-3"},[n("v-col",{staticClass:"px-0",attrs:{cols:"0",md:"1"}}),t._v(" "),n("v-col",{staticClass:"px-0 align-center",attrs:{cols:"12",md:"2"}},[n("h3",{class:t.isActive?"black--text":""},[t._v("Выход "+t._s(t.way.title))])]),t._v(" "),n("v-subheader",{staticClass:"hidden-md-and-up"},[t._v("Автобус")]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"3"}},[n("outfit-bus-select",{key:t.localWay._id+"1",attrs:{way:t.localWay,field:"bus",isFiltering:t.isFiltering}})],1),t._v(" "),t.localWay.isTwoSmene?t._e():n("v-subheader",{staticClass:"hidden-md-and-up"},[t._v("Первая см.")]),t._v(" "),t.localWay.isTwoSmene?t._e():n("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"3"}},[n("outfit-driver-select",{key:t.localWay._id+"2",attrs:{way:t.localWay,field:"firstSmene",isFiltering:t.isFiltering}})],1),t._v(" "),t.localWay.isTwoSmene?t._e():n("v-subheader",{staticClass:"hidden-md-and-up"},[t._v("Вторая см.")]),t._v(" "),t.localWay.isTwoSmene?t._e():n("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"3"}},[n("outfit-driver-select",{key:t.localWay._id+"3",attrs:{way:t.localWay,field:"secondSmene",isFiltering:t.isFiltering}})],1),t._v(" "),t.localWay.isTwoSmene?n("v-subheader",{staticClass:"hidden-md-and-up"},[t._v("Полный день")]):t._e(),t._v(" "),t.localWay.isTwoSmene?n("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"6"}},[n("outfit-driver-select",{key:t.localWay._id+"4",attrs:{way:t.localWay,field:"allDay",isFiltering:t.isFiltering}})],1):t._e()],1)],1):t._e()}),[],!1,null,null,null),z=B.exports;w()(B,{VCol:L.a,VLayout:W.a,VRow:Y.a,VSubheader:M.a});var J={components:{OutfitWay:z},props:["route","date","isFiltering","activeWay"],computed:{localWays:function(){return Array.from(this.route.ways).sort((function(a,b){return a.title.slice(1)!=b.title.slice(1)?a.title.slice(1)<b.title.slice(1)?-1:1:0}))}},methods:{}},K=n(563),G=n(562),H=n(550),N=Object(_.a)(J,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[n("v-layout",{staticClass:"pl-3",attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("h3",[t._v("Маршрут "+t._s(t.route.title))])]),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{xs3:""}},[t._v("Автобус")]),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{xs3:""}},[t._v("Первая смена")]),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{xs3:""}},[t._v("Вторая смена")])],1)],1),t._v(" "),n("v-card-text",t._l(t.localWays,(function(e){return n("outfit-way",{key:e._id,attrs:{way:e,date:t.date,isFiltering:t.isFiltering,isActive:t.activeWay&&t.activeWay._id==e._id}})})),1)],1)}),[],!1,null,null,null),Q=N.exports;w()(N,{VCard:K.a,VCardText:G.b,VCardTitle:G.c,VFlex:H.a,VLayout:W.a});var U=n(568);n(369),n(41);function X(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var Z,tt,et,it,nt,at={transition:"fade",mixins:[{data:function(){return{micro:!1}},created:function(){var t=this;if(annyang){var e={"выход *way":function(e){t.set_active_way(e)},"автобус *busnumber":function(e){t.set_bus(e)},"первая смена *tabnumber":function(e){t.set_driver("firstSmene",e)},"вторая смена *tabnumber":function(e){t.set_driver("secondSmene",e)},"полный день *tabnumber":function(e){t.set_driver("allDay",e)},"сохранить наряд":function(){t.save()},"маршрут *routetitle":function(e){t.change_route(e)}};annyang.addCommands(e),annyang.setLanguage("ru")}},beforeDestroy:function(){annyang.abort()},watch:{currentRoute:function(){this.activeWay=null},micro:function(t){t?annyang.start():annyang.abort()}},methods:{change_route:function(t){var e=this.routes.find((function(e){return e.title==t.replace(/\s/g,"")}));e&&e.hasActiveWays(this.date)?(this.currentRoute=e._id,this.snackbar.text="Выбран маршрут ".concat(e.title),this.snackbar.isOpen=!0):(this.snackbar.text="Маршрут ".concat(t.replace(/\s/g,"")," не найден"),this.snackbar.isOpen=!0)},set_active_way:function(t){var e=this,n=this.routes.find((function(t){return t._id==e.currentRoute})).ways.find((function(n){return n.title==t.replace(/\s/g,"")&&new m.a(n).isActive(e.date)}));n?(this.snackbar.text="Выбран выход ".concat(n.title),this.snackbar.isOpen=!0,this.activeWay=n):(this.snackbar.text="Выход ".concat(t.replace(/\s/g,"")," не найден"),this.snackbar.isOpen=!0)},set_bus:function(t){var e=this.buses.find((function(e){return e.busnumber==t.replace(/\s/g,"").padStart(6,"0")}));e&&this.activeWay?(this.$store.commit("outfit/set_field_value",{wayId:this.activeWay._id,field:"bus",value:e._id}),this.snackbar.text="Автобус ".concat(e.busnumber.replace(/\s/g,"")," установлен"),this.snackbar.isOpen=!0):(this.snackbar.text="Автобус ".concat(t.replace(/\s/g,"").padStart(6,"0")," не найден"),this.snackbar.isOpen=!0)},set_driver:function(t,e){var n=this.drivers.find((function(t){return t.tabnumber==e.replace(/\s/g,"")}));n&&this.activeWay?this.activeWay.isTwoSmene&&"allDay"==t||!this.activeWay.isTwoSmene&&["firstSmene","secondSmene"].includes(t)?(this.$store.commit("outfit/set_field_value",{wayId:this.activeWay._id,field:t,value:n._id}),this.snackbar.text="Водитель ".concat(n.tabnumber.replace(/\s/g,"")," установлен"),this.snackbar.isOpen=!0):(this.snackbar.text="Выход не соответствует запросу",this.snackbar.isOpen=!0):(this.snackbar.text="Водитель ".concat(e.replace(/\s/g,"")," не найден"),this.snackbar.isOpen=!0)}}}],components:{OutfitRoute:Q,MenuDatePicker:U.a},data:function(){return{activeWay:"",snackbar:{isOpen:!1,text:""},isFiltering:!1,isSaving:!1,isLoading:!1,currentRoute:null,date:l()().format("YYYY-MM-DD")}},watch:{date:(nt=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,this.$store.dispatch("outfit/readByDate",{date:e});case 3:this.isLoading=!1;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return nt.apply(this,arguments)})},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?X(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):X(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)({buses:"buses/list",items:"outfit/items",drivers:"drivers/list",routes:"routes/list",ways:"ways/list",statistic:"outfit/statistic"}),{isWeekend:function(){return[0,6].includes(l()(this.date).day())}}),methods:{onFileChange:(it=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c,l=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.target.files&&e.target.files.length&&(n=e.target.files[0],r=null,(c=new FileReader).onload=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.target.result,n=new v.a.Workbook,t.next=4,n.xlsx.load(r);case 4:o=n.getWorksheet(1),l.parse_outfit_excel(o),l.$refs.file.value=null;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c.readAsArrayBuffer(n));case 1:case"end":return t.stop()}}),t)}))),function(t){return it.apply(this,arguments)}),parse_outfit_excel:function(t){for(var e=this,n=10,r=4,o=3,c="",l=null,d=null;;)if(89==n&&(n=10,r=17,o=4),c=t.getRow(n).getCell(r).value){if(c.includes("Маршрут"))!function(){var t=(c=c.trim()).split(" ").slice(-1);l=e.routes.find((function(n){return n.title==t&&n.hasActiveWays(e.date)}))}();else{if(c.includes("Резерв"))break;if("continue"===function(){if(!l)return n++,"continue";var f=(c=c.trim()).split(" ")[0];if(!(d=l.ways.find((function(t){return t.title==f&&new m.a(t).isActive(e.date)}))))return n++,"continue";var v=t.getRow(n).getCell(r+1).value,h=(v=v&&(""+v).slice(0,6))&&e.buses.find((function(t){return t.busnumber==v})),_=t.getRow(n).getCell(r+o).value,y=(_=_&&(""+_).slice(-4))&&e.drivers.find((function(t){return t.tabnumber==_})),w=t.getRow(n).getCell(r+7).value;w=w&&(""+w).slice(-4);var x=_&&e.drivers.find((function(t){return t.tabnumber==w}));e.$store.commit("outfit/set_field_value",{wayId:d._id,field:"bus",value:h&&h._id}),d.isTwoSmene?e.$store.commit("outfit/set_field_value",{wayId:d._id,field:"allDay",value:y&&y._id}):(e.$store.commit("outfit/set_field_value",{wayId:d._id,field:"firstSmene",value:y&&y._id}),e.$store.commit("outfit/set_field_value",{wayId:d._id,field:"secondSmene",value:x&&x._id}))}())continue}n++}else n++},clear_route:function(){var t=this;this.$store.commit("outfit/clear_ways",{ways:this.routes.find((function(e){return e._id==t.currentRoute})).ways.map((function(t){return t._id}))})},auto:function(){var t=this,e={firstSmene:[],secondSmene:[],allDay:[]};this.drivers.forEach((function(n){switch(n.statusesByDate({date:t.date,count:1,withExceptions:!0})[0]){case"Рабочий":e.allDay.push(n);break;case"Первая см.":e.firstSmene.push(n);break;case"Вторая см.":e.secondSmene.push(n)}})),this.$store.commit("outfit/clear_items"),this.ways.forEach((function(n){if(n.isActive(t.date)){var r=Array.from(t.buses).filter((function(t){return n.capacities.includes(t.capacity)}));(n.isTwoSmene?["allDay"]:["firstSmene","secondSmene"]).forEach((function(r){var o=e[r].filter((function(e){return t.statistic[e._id]&&t.statistic[e._id][n._id]})).map((function(e){return{id:e._id,count:t.statistic[e._id][n._id].count}})).reduce((function(p,t){return p.count<t.count?t:p}),{id:null,count:0});e[r].splice(e[r].findIndex((function(t){return t._id==o.id})),1),t.$store.commit("outfit/set_field_value",{wayId:n._id,field:r,value:o.id})}));var o=r.filter((function(e){return t.statistic[e._id]&&t.statistic[e._id][n._id]})).map((function(e){return{id:e._id,count:t.statistic[e._id][n._id].count}})).reduce((function(p,t){return p.count<t.count?t:p}),{id:null,count:0});r.splice(r.findIndex((function(t){return t._id==o.id})),1),t.$store.commit("outfit/set_field_value",{wayId:n._id,field:"bus",value:o.id})}}))},save:(et=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isSaving=!0,t.next=3,this.$store.dispatch("outfit/save");case 3:return t.next=5,this.$store.dispatch("outfit/readByDate",{date:this.date});case 5:this.isSaving=!1;case 6:case"end":return t.stop()}}),t,this)}))),function(){return et.apply(this,arguments)}),nextDay:function(){this.$refs.datePicker.nextDay()},update:(tt=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,Promise.all([this.$store.dispatch("ways/readAll"),this.$store.dispatch("routes/readAll"),this.$store.dispatch("drivers/readAll"),this.$store.dispatch("buses/readAll"),this.$store.dispatch("outfit/readByDate",{date:this.date})]);case 3:this.isLoading=!1;case 4:case"end":return t.stop()}}),t,this)}))),function(){return tt.apply(this,arguments)}),prevDay:function(){this.$refs.datePicker.prevDay()}},mounted:(Z=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,Promise.all([this.$store.dispatch("ways/readAll"),this.$store.dispatch("routes/readAll"),this.$store.dispatch("drivers/readAll"),this.$store.dispatch("buses/readAll"),this.$store.dispatch("outfit/readByDate",{date:this.date})]);case 3:this.isLoading=!1;case 4:case"end":return t.stop()}}),t,this)}))),function(){return Z.apply(this,arguments)})},st=n(107),ot=n(168),ct=n(109),ut=n(76),lt=n(175),ft=n(108),vt=n(602),mt=n(549),pt=n(558),ht=n(613),_t=n(625),yt=n(623),bt=n(609),gt=Object(_.a)(at,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:""}},[n("v-snackbar",{attrs:{timeout:3e3,top:"",right:"",color:"green lighten-1"},model:{value:t.snackbar.isOpen,callback:function(e){t.$set(t.snackbar,"isOpen",e)},expression:"snackbar.isOpen"}},[t._v("\n    "+t._s(t.snackbar.text)+"\n  ")]),t._v(" "),n("v-card",{staticClass:"mb-3"},[n("v-card-title",{staticClass:"pt-2"},[n("v-flex",{attrs:{xs12:"",sm7:"",md4:""}},[n("v-layout",{attrs:{"align-center":"","justify-end":""}},[n("menu-date-picker",{ref:"datePicker",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),n("v-btn",{attrs:{color:"white",elevation:"1",fab:"",small:""},on:{click:t.prevDay}},[n("v-icon",{attrs:{color:"grey darken-1"}},[t._v("fa-chevron-left")])],1),t._v(" "),n("v-btn",{staticClass:"ml-3",attrs:{color:"white",elevation:"1",fab:"",small:""},on:{click:t.update}},[n("v-icon",{attrs:{color:"grey darken-1"}},[t._v("fa-redo-alt")])],1),t._v(" "),n("v-btn",{staticClass:"ml-3",attrs:{color:"white",elevation:"1",fab:"",small:""},on:{click:t.nextDay}},[n("v-icon",{attrs:{color:"grey darken-1"}},[t._v("fa-chevron-right")])],1)],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{dark:"",color:"green lighten-1",loading:t.isSaving},on:{click:t.save}},[t._v("Сохранить")])],1),t._v(" "),n("v-card-title",{staticClass:"pt-2"},[n("v-menu",{attrs:{"offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"mr-3",attrs:{text:""}},r),[t._v("Очистить")])]}}])},[t._v(" "),n("v-list",[n("v-list-item",{on:{click:t.clear_route}},[n("v-list-item-content",[t._v("Маршрут")])],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.$store.commit("outfit/clear_items")}}},[n("v-list-item-content",[t._v("Наряд")])],1)],1)],1),t._v(" "),n("v-menu",{attrs:{"offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"mr-3",attrs:{text:""}},r),[t._v("Заполнить")])]}}])},[t._v(" "),n("v-list",[n("v-list-item",{on:{click:t.auto}},[n("v-list-item-content",[t._v("Авто")])],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.$refs.file.click()}}},[n("v-list-item-content",[t._v("Из файла")]),t._v(" "),n("input",{ref:"file",staticClass:"d-none",attrs:{type:"file",id:"file"},on:{input:t.onFileChange}})],1)],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-switch",{staticClass:"pr-3",attrs:{inset:"",label:"Фильтр"},model:{value:t.isFiltering,callback:function(e){t.isFiltering=e},expression:"isFiltering"}}),t._v(" "),n("v-switch",{attrs:{inset:"",label:"Микрофон"},model:{value:t.micro,callback:function(e){t.micro=e},expression:"micro"}})],1),t._v(" "),n("v-card-title",{staticClass:"pt-2"},[n("v-tabs",{attrs:{centered:""},model:{value:t.currentRoute,callback:function(e){t.currentRoute=e},expression:"currentRoute"}},[t._l(t.routes,(function(e){return[e.hasActiveWays(t.date)?n("v-tab",{key:"tab-"+e._id,attrs:{href:"#"+e._id}},[t._v(t._s(e.title))]):t._e()]}))],2)],1)],1),t._v(" "),t.isLoading?n("v-layout",{attrs:{"justify-center":""}},[n("v-progress-circular",{attrs:{indeterminate:""}})],1):n("v-tabs-items",{model:{value:t.currentRoute,callback:function(e){t.currentRoute=e},expression:"currentRoute"}},[t._l(t.routes,(function(e){return[e.hasActiveWays(t.date)?n("v-tab-item",{key:e._id,attrs:{value:e._id}},[n("outfit-route",{attrs:{route:e,date:t.date,isFiltering:t.isFiltering,activeWay:t.activeWay}})],1):t._e()]}))],2)],1)}),[],!1,null,null,null);e.default=gt.exports;w()(gt,{VBtn:st.a,VCard:K.a,VCardTitle:G.c,VFlex:H.a,VIcon:V.a,VLayout:W.a,VList:ot.a,VListItem:ct.a,VListItemContent:ut.a,VMenu:lt.a,VProgressCircular:ft.a,VSnackbar:vt.a,VSpacer:mt.a,VSwitch:pt.a,VTab:ht.a,VTabItem:_t.a,VTabs:yt.a,VTabsItems:bt.a})}}]);