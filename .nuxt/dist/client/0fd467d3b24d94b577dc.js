(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{572:function(t,e,r){var content=r(590);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("a5c8b314",content,!0,{sourceMap:!1})},589:function(t,e,r){"use strict";var n=r(572);r.n(n).a},590:function(t,e,r){(t.exports=r(12)(!1)).push([t.i,"",""])},611:function(t,e,r){"use strict";r.r(e);r(7),r(6),r(50),r(25),r(27),r(49);var n=r(18),o=r(2),c=r.n(o),l=(r(10),r(8),r(9),r(1)),d={props:["value","items"]},f=(r(589),r(23)),v=r(26),y=r.n(v),h=r(621),m=r(574),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-overflow-btn",{staticStyle:{"align-items":"center"},attrs:{editable:"","full-width":"",clearable:"","hide-details":"",items:t.items,value:t.value},on:{input:function(data){t.$emit("input",data)}},scopedSlots:t._u([{key:"selection",fn:function(e){var r=e.item;return[t._t("default",null,{item:r})]}},{key:"item",fn:function(e){var n=e.item;return[r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;return[t._t("default",null,{item:n})]}}],null,!0)},[t._v(" "),r("v-slot",{attrs:{name:"tooltip",item:n}})],1)]}}],null,!0)})}),[],!1,null,null,null),_=component.exports;function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}y()(component,{VOverflowBtn:h.a,VTooltip:m.a});var x={components:{OutfitSelect:_},props:["size","way","field"],data:function(){return{}},computed:{statistic:function(){return this.$store.getters["outfit/statistic"]},item:function(){return this.$store.getters["outfit/item"](this.way._id)},drivers:function(){var t=this,e=this.$store.getters["drivers/list"].map((function(e){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(source,!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({text:e.tabnumber,value:e._id,count:t.count(e._id),borderColor:t.color(e._id)},e)})),r={green:0,yellow:1,red:2};return e=e.sort((function(a,b){return b.count-a.count})).sort((function(a,b){return r[a.borderColor]-r[b.borderColor]})),e=e.filter((function(e){var r=!0;return t.$store.getters["outfit/items"].forEach((function(n){["allDay","firstSmene","secondSmene"].forEach((function(t){e._id==n[t]&&(r=!1)})),e._id==n[t.field]&&n.wayId==t.way._id&&(r=!0)})),r})),e}},methods:{count:function(t){var e=0;return this.statistic[t]&&this.statistic[t][this.way._id]&&(e=this.statistic[t][this.way._id].count),e},color:function(t){var e=!1,r=!1;return this.statistic[t]&&this.statistic[t][this.way._id]&&(r=this.statistic[t][this.way._id].count,e=this.statistic[t][this.way._id].isKnow),r?"green":e?"yellow":"red"}}},O=r(548),k=r(550),D=Object(f.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",{attrs:{xs3:1===t.size,xs6:2===t.size}},[r("outfit-select",{attrs:{items:t.drivers,value:t.item[t.field]},on:{input:function(data){return t.$store.commit("outfit/set_field_value",{wayId:t.way._id,field:t.field,value:data})}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[r("v-layout",{style:"border-right: 3px solid "+n.borderColor,attrs:{"justify-space-between":"","fill-height":""}},[r("span",[t._v(t._s(n.text))]),t._v(" "),r("span",{staticClass:"pr-2"},[t._v(t._s(n.count))])])]}}])})],1)}),[],!1,null,null,null),j=D.exports;y()(D,{VFlex:O.a,VLayout:k.a});function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var V={components:{OutfitSelect:_},props:["size","way","field"],data:function(){return{}},computed:{statistic:function(){return this.$store.getters["outfit/statistic"]},item:function(){return this.$store.getters["outfit/item"](this.way._id)},buses:function(){var t=this,e=this.$store.getters["buses/list"].map((function(e){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(source,!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({text:e.busnumber,value:e._id,count:t.count(e._id),borderColor:t.color(e._id)},e)})),r={green:0,yellow:1,red:2};return e=e.sort((function(a,b){return b.count-a.count})).sort((function(a,b){return r[a.borderColor]-r[b.borderColor]})),e=e.filter((function(e){var r=!0;return t.$store.getters["outfit/items"].forEach((function(n){e._id==n[t.field]&&n.wayId!=t.way._id&&(r=!1)})),r})),e}},methods:{count:function(t){var e=0;return this.statistic[t]&&this.statistic[t][this.way._id]&&(e=this.statistic[t][this.way._id].count),e},color:function(t){var e=!1,r=!1;return this.statistic[t]&&this.statistic[t][this.way._id]&&(r=this.statistic[t][this.way._id].count,e=this.statistic[t][this.way._id].isKnow),r?"green":e?"yellow":"red"}}},S=Object(f.a)(V,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",{attrs:{xs3:1===t.size,xs6:2===t.size}},[r("outfit-select",{attrs:{items:t.buses,value:t.item[t.field]},on:{input:function(data){return t.$store.commit("outfit/set_field_value",{wayId:t.way._id,field:t.field,value:data})}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[r("v-layout",{style:"border-right: 3px solid "+n.borderColor,attrs:{"justify-space-between":"","fill-height":""}},[r("span",[t._v(t._s(n.text))]),t._v(" "),r("span",{staticClass:"pr-2"},[t._v(t._s(n.count))])])]}}])})],1)}),[],!1,null,null,null),C=S.exports;y()(S,{VFlex:O.a,VLayout:k.a});var P=r(186),W={components:{OutfitDriverSelect:j,OutfitBusSelect:C},props:["way","date"],data:function(){return{}},watch:{},computed:{localWay:function(){return new P.a(this.way)}},methods:{}},Y=r(547),E=Object(f.a)(W,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.localWay.isActive(t.date)?r("v-layout",{attrs:{"align-center":""}},[r("v-spacer"),t._v(" "),r("v-flex",{attrs:{xs2:""}},[t._v("Выход "+t._s(t.way.title))]),t._v(" "),r("outfit-bus-select",{key:t.localWay._id+"1",attrs:{size:1,way:t.localWay,field:"bus"}}),t._v(" "),t.localWay.isTwoSmene?t._e():r("outfit-driver-select",{key:t.localWay._id+"2",attrs:{size:1,way:t.localWay,field:"firstSmene"}}),t._v(" "),t.localWay.isTwoSmene?t._e():r("outfit-driver-select",{key:t.localWay._id+"3",attrs:{size:1,way:t.localWay,field:"secondSmene"}}),t._v(" "),t.localWay.isTwoSmene?r("outfit-driver-select",{key:t.localWay._id+"4",attrs:{size:2,way:t.localWay,field:"allDay"}}):t._e()],1):t._e()}),[],!1,null,null,null),R=E.exports;y()(E,{VFlex:O.a,VLayout:k.a,VSpacer:Y.a});var T={components:{OutfitWay:R},props:["route","date"],computed:{},methods:{}},L=r(561),M=r(560),z=Object(f.a)(T,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("v-layout",{staticClass:"pl-3",attrs:{row:""}},[r("v-flex",{attrs:{xs3:""}},[r("h3",[t._v("Маршрут "+t._s(t.route.title))])]),t._v(" "),r("v-flex",{attrs:{xs3:""}},[t._v("Автобус")]),t._v(" "),r("v-flex",{attrs:{xs3:""}},[t._v("Первая смена")]),t._v(" "),r("v-flex",{attrs:{xs3:""}},[t._v("Вторая смена")])],1)],1),t._v(" "),r("v-card-text",t._l(t.route.ways,(function(e){return r("outfit-way",{key:e._id,attrs:{way:e,date:t.date}})})),1)],1)}),[],!1,null,null,null),A=z.exports;y()(z,{VCard:L.a,VCardText:M.b,VCardTitle:M.c,VFlex:O.a,VLayout:k.a});var I={props:["value"],data:function(){return{menu:!1}},computed:{formattedDate:function(){return this.value?c()(this.value).format("DD/MM/YYYY"):""}},methods:{changeDate:function(t){this.$emit("input",t),this.menu=!1},nextDay:function(){this.$emit("input",c()(this.value).add(1,"d").format("YYYY-MM-DD"))},prevDay:function(){this.$emit("input",c()(this.value).subtract(1,"d").format("YYYY-MM-DD"))}}},F=r(555),B=r(173),J=r(76),K=Object(f.a)(I,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-menu",{attrs:{"close-on-content-click":!1,"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({staticClass:"desable-shadow mr-4",staticStyle:{"box-shadow":"none"},attrs:{flat:"",solo:"","hide-details":"",value:t.formattedDate,label:"Date",readonly:""}},n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),r("v-date-picker",{attrs:{value:t.value,"no-title":""},on:{change:t.changeDate}})],1)}),[],!1,null,null,null),G=K.exports;y()(K,{VDatePicker:F.a,VMenu:B.a,VTextField:J.a});var H,N,Q={transition:"fade",components:{OutfitRoute:A,MenuDatePicker:G},data:function(){return{isLoading:!1,currentRoute:null,date:c()().format("YYYY-MM-DD")}},watch:{date:(N=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,this.$store.dispatch("outfit/readByDate",{date:e});case 3:this.isLoading=!1;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return N.apply(this,arguments)})},computed:{routes:function(){return this.$store.getters["routes/list"]},isWeekend:function(){return[0,6].includes(c()(this.date).day())}},methods:{save:function(){this.$store.dispatch("outfit/save")},nextDay:function(){this.$refs.datePicker.nextDay()},update:function(){this.$store.dispatch("buses/readAll")},prevDay:function(){this.$refs.datePicker.prevDay()}},mounted:(H=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,Promise.all([this.$store.dispatch("routes/readAll"),this.$store.dispatch("drivers/readAll"),this.$store.dispatch("buses/readAll"),this.$store.dispatch("outfit/readByDate",{date:this.date})]);case 3:this.isLoading=!1;case 4:case"end":return t.stop()}}),t,this)}))),function(){return H.apply(this,arguments)})},U=r(107),X=r(136),Z=r(108),tt=r(610),et=r(622),at=r(620),it=r(603),nt=Object(f.a)(Q,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:""}},[r("v-card",{staticClass:"mb-3"},[r("v-card-title",{staticClass:"pt-2"},[r("v-flex",{attrs:{xs12:"",sm7:"",md4:""}},[r("v-layout",{attrs:{"align-center":"","justify-end":""}},[r("menu-date-picker",{ref:"datePicker",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),r("v-btn",{attrs:{color:"white",elevation:"1",fab:"",small:""},on:{click:t.prevDay}},[r("v-icon",{attrs:{color:"grey darken-1"}},[t._v("fa-chevron-left")])],1),t._v(" "),r("v-btn",{staticClass:"ml-3",attrs:{color:"white",elevation:"1",fab:"",small:""},on:{click:t.update}},[r("v-icon",{attrs:{color:"grey darken-1"}},[t._v("fa-redo-alt")])],1),t._v(" "),r("v-btn",{staticClass:"ml-3",attrs:{color:"white",elevation:"1",fab:"",small:""},on:{click:t.nextDay}},[r("v-icon",{attrs:{color:"grey darken-1"}},[t._v("fa-chevron-right")])],1)],1)],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{dark:"",color:"green lighten-1"},on:{click:t.save}},[t._v("Сохранить")])],1),t._v(" "),r("v-card-title",{staticClass:"pt-2"},[r("v-tabs",{attrs:{centered:""},model:{value:t.currentRoute,callback:function(e){t.currentRoute=e},expression:"currentRoute"}},[t._l(t.routes,(function(e){return[e.hasActiveWays(t.date)?r("v-tab",{key:"tab-"+e._id,attrs:{href:"#"+e._id}},[t._v(t._s(e.title))]):t._e()]}))],2)],1)],1),t._v(" "),t.isLoading?r("v-layout",{attrs:{"justify-center":""}},[r("v-progress-circular",{attrs:{indeterminate:""}})],1):r("v-tabs-items",{model:{value:t.currentRoute,callback:function(e){t.currentRoute=e},expression:"currentRoute"}},[t._l(t.routes,(function(e){return[e.hasActiveWays(t.date)?r("v-tab-item",{key:e._id,attrs:{value:e._id}},[r("outfit-route",{attrs:{route:e,date:t.date}})],1):t._e()]}))],2)],1)}),[],!1,null,null,null);e.default=nt.exports;y()(nt,{VBtn:U.a,VCard:L.a,VCardTitle:M.c,VFlex:O.a,VIcon:X.a,VLayout:k.a,VProgressCircular:Z.a,VSpacer:Y.a,VTab:tt.a,VTabItem:et.a,VTabs:at.a,VTabsItems:it.a})}}]);