(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{566:function(t,e,r){"use strict";var n=r(2),o=r.n(n),l={props:["value"],data:function(){return{menu:!1}},computed:{formattedDate:function(){return this.value?o()(this.value).format("DD/MM/YYYY"):""}},methods:{changeDate:function(t){this.$emit("input",t),this.menu=!1},nextDay:function(){this.$emit("input",o()(this.value).add(1,"d").format("YYYY-MM-DD"))},prevDay:function(){this.$emit("input",o()(this.value).subtract(1,"d").format("YYYY-MM-DD"))}}},c=r(23),d=r(26),f=r.n(d),v=r(557),h=r(174),m=r(76),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-menu",{attrs:{"close-on-content-click":!1,"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-text-field",t._g({staticClass:"desable-shadow mr-4",staticStyle:{"box-shadow":"none"},attrs:{flat:"",solo:"","hide-details":"",value:t.formattedDate,label:"Date",readonly:""}},n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),r("v-date-picker",{attrs:{value:t.value,"no-title":""},on:{change:t.changeDate}})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VDatePicker:v.a,VMenu:h.a,VTextField:m.a})},577:function(t,e,r){var content=r(594);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("a5c8b314",content,!0,{sourceMap:!1})},593:function(t,e,r){"use strict";var n=r(577);r.n(n).a},594:function(t,e,r){(t.exports=r(12)(!1)).push([t.i,"",""])},615:function(t,e,r){"use strict";r.r(e);r(7),r(6),r(50),r(25),r(27),r(49);var n=r(18),o=r(2),l=r.n(o),c=(r(10),r(8),r(9),r(1)),d={props:["value","items","label"]},f=(r(593),r(23)),v=r(26),h=r.n(v),m=r(624),y=r(580),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-overflow-btn",{staticStyle:{"align-items":"center"},attrs:{label:t.label,editable:"","full-width":"",clearable:"","hide-details":"",items:t.items,value:t.value},on:{input:function(data){t.$emit("input",data)}},scopedSlots:t._u([{key:"selection",fn:function(e){var r=e.item;return[t._t("default",null,{item:r})]}},{key:"item",fn:function(e){var n=e.item;return[r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;return[t._t("default",null,{item:n})]}}],null,!0)},[t._v(" "),r("v-slot",{attrs:{name:"tooltip",item:n}})],1)]}}],null,!0)})}),[],!1,null,null,null),_=component.exports;h()(component,{VOverflowBtn:m.a,VTooltip:y.a});var w=r(182);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var O={"Рабочий":"allDay","Первая см.":"firstSmene","Вторая см.":"secondSmene"},k={components:{OutfitSelect:_},props:["size","way","field","isFiltering"],data:function(){return{}},computed:{date:function(){return this.$store.getters["outfit/date"]},statistic:function(){return this.$store.getters["outfit/statistic"]},item:function(){return this.$store.getters["outfit/item"](this.way._id)},drivers:function(){var t=this,e=this.$store.getters["drivers/list"].map((function(e){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(source,!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({text:e.tabnumber,value:e._id,count:t.count(e._id),borderColor:t.color(e._id)},e)}));e=e.map((function(t){return new w.a(t)}));var r={green:0,yellow:1,red:2};return e=e.sort((function(a,b){return b.count-a.count})).sort((function(a,b){return r[a.borderColor]-r[b.borderColor]})),e=e.filter((function(e){var r=!0;return t.$store.getters["outfit/items"].forEach((function(n){["allDay","firstSmene","secondSmene"].forEach((function(t){e._id==n[t]&&(r=!1)})),e._id==n[t.field]&&n.wayId==t.way._id&&(r=!0)})),t.isFiltering?(O[e.statusesByDate({date:t.date,count:1})[0]]!=t.field&&(r=!1),r):r})),e}},methods:{count:function(t){var e=0;return this.statistic[t]&&this.statistic[t][this.way._id]&&(e=this.statistic[t][this.way._id].count),e},color:function(t){var e=!1,r=!1;return this.statistic[t]&&this.statistic[t][this.way._id]&&(r=this.statistic[t][this.way._id].count,e=this.statistic[t][this.way._id].isKnow),r?"green":e?"yellow":"red"}}},D=r(552),C=Object(f.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("outfit-select",{attrs:{label:""+t.drivers.length,items:t.drivers,value:t.item[t.field]},on:{input:function(data){return t.$store.commit("outfit/set_field_value",{wayId:t.way._id,field:t.field,value:data})}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[r("v-layout",{style:"border-right: 3px solid "+n.borderColor,attrs:{"justify-space-between":"","fill-height":""}},[r("span",[t._v(t._s(n.text))]),t._v(" "),r("span",{staticClass:"pr-2"},[t._v(t._s(n.count))])])]}}])})}),[],!1,null,null,null),$=C.exports;h()(C,{VLayout:D.a});function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var S={components:{OutfitSelect:_},props:["size","way","field","isFiltering"],data:function(){return{}},computed:{statistic:function(){return this.$store.getters["outfit/statistic"]},item:function(){return this.$store.getters["outfit/item"](this.way._id)},buses:function(){var t=this,e=this.$store.getters["buses/list"].map((function(e){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(source,!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({text:e.busnumber,value:e._id,count:t.count(e._id),borderColor:t.color(e._id)},e)})),r={green:0,yellow:1,red:2};return e=e.sort((function(a,b){return b.count-a.count})).sort((function(a,b){return r[a.borderColor]-r[b.borderColor]})),e=e.filter((function(e){var r=!0;return t.$store.getters["outfit/items"].forEach((function(n){e._id==n[t.field]&&n.wayId!=t.way._id&&(r=!1)})),t.isFiltering?(["Ремонт","Долгостой","СВАРЗ"].includes(e.status)&&(r=!1),t.way.capacities.includes(e.capacity)||(r=!1),t.way.colors.includes(e.color)||(r=!1),r):r})),e}},methods:{count:function(t){var e=0;return this.statistic[t]&&this.statistic[t][this.way._id]&&(e=this.statistic[t][this.way._id].count),e},color:function(t){var e=!1,r=!1;return this.statistic[t]&&this.statistic[t][this.way._id]&&(r=this.statistic[t][this.way._id].count,e=this.statistic[t][this.way._id].isKnow),r?"green":e?"yellow":"red"}}},V=Object(f.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("outfit-select",{attrs:{label:""+t.buses.length,items:t.buses,value:t.item[t.field]},on:{input:function(data){return t.$store.commit("outfit/set_field_value",{wayId:t.way._id,field:t.field,value:data})}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[r("v-layout",{style:"border-right: 3px solid "+n.borderColor,attrs:{"justify-space-between":"","fill-height":""}},[r("span",[t._v(t._s(n.text))]),t._v(" "),r("span",{staticClass:"pr-2"},[t._v(t._s(n.count))])])]}}])})}),[],!1,null,null,null),F=V.exports;h()(V,{VLayout:D.a});var P=r(187),W={components:{OutfitDriverSelect:$,OutfitBusSelect:F},props:["way","date","isFiltering"],data:function(){return{}},watch:{},computed:{localWay:function(){return new P.a(this.way)}},methods:{}},R=r(553),Y=r(554),T=r(172),E=Object(f.a)(W,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.localWay.isActive(t.date)?r("v-layout",{attrs:{"align-center":""}},[r("v-row",{staticClass:"px-3"},[r("v-col",{staticClass:"px-0",attrs:{cols:"0",md:"1"}}),t._v(" "),r("v-col",{staticClass:"px-0 align-center",attrs:{cols:"12",md:"2"}},[r("h3",[t._v("Выход "+t._s(t.way.title))])]),t._v(" "),r("v-subheader",{staticClass:"hidden-md-and-up"},[t._v("Автобус")]),t._v(" "),r("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"3"}},[r("outfit-bus-select",{key:t.localWay._id+"1",attrs:{way:t.localWay,field:"bus",isFiltering:t.isFiltering}})],1),t._v(" "),t.localWay.isTwoSmene?t._e():r("v-subheader",{staticClass:"hidden-md-and-up"},[t._v("Первая см.")]),t._v(" "),t.localWay.isTwoSmene?t._e():r("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"3"}},[r("outfit-driver-select",{key:t.localWay._id+"2",attrs:{way:t.localWay,field:"firstSmene",isFiltering:t.isFiltering}})],1),t._v(" "),t.localWay.isTwoSmene?t._e():r("v-subheader",{staticClass:"hidden-md-and-up"},[t._v("Вторая см.")]),t._v(" "),t.localWay.isTwoSmene?t._e():r("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"3"}},[r("outfit-driver-select",{key:t.localWay._id+"3",attrs:{way:t.localWay,field:"secondSmene",isFiltering:t.isFiltering}})],1),t._v(" "),t.localWay.isTwoSmene?r("v-subheader",{staticClass:"hidden-md-and-up"},[t._v("Полный день")]):t._e(),t._v(" "),t.localWay.isTwoSmene?r("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"6"}},[r("outfit-driver-select",{key:t.localWay._id+"4",attrs:{way:t.localWay,field:"allDay",isFiltering:t.isFiltering}})],1):t._e()],1)],1):t._e()}),[],!1,null,null,null),L=E.exports;h()(E,{VCol:R.a,VLayout:D.a,VRow:Y.a,VSubheader:T.a});var M={components:{OutfitWay:L},props:["route","date","isFiltering"],computed:{},methods:{}},A=r(563),B=r(562),I=r(550),z=Object(f.a)(M,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("v-layout",{staticClass:"pl-3",attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",md3:""}},[r("h3",[t._v("Маршрут "+t._s(t.route.title))])]),t._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",attrs:{xs3:""}},[t._v("Автобус")]),t._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",attrs:{xs3:""}},[t._v("Первая смена")]),t._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",attrs:{xs3:""}},[t._v("Вторая смена")])],1)],1),t._v(" "),r("v-card-text",t._l(t.route.ways,(function(e){return r("outfit-way",{key:e._id,attrs:{way:e,date:t.date,isFiltering:t.isFiltering}})})),1)],1)}),[],!1,null,null,null),J=z.exports;h()(z,{VCard:A.a,VCardText:B.b,VCardTitle:B.c,VFlex:I.a,VLayout:D.a});var K,G,H,N,Q={transition:"fade",components:{OutfitRoute:J,MenuDatePicker:r(566).a},data:function(){return{isFiltering:!1,isSaving:!1,isLoading:!1,currentRoute:null,date:l()().format("YYYY-MM-DD")}},watch:{date:(N=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,this.$store.dispatch("outfit/readByDate",{date:e});case 3:this.isLoading=!1;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return N.apply(this,arguments)})},computed:{routes:function(){return this.$store.getters["routes/list"]},isWeekend:function(){return[0,6].includes(l()(this.date).day())}},methods:{save:(H=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isSaving=!0,t.next=3,this.$store.dispatch("outfit/save");case 3:return t.next=5,this.$store.dispatch("outfit/readByDate",{date:this.date});case 5:this.isSaving=!1;case 6:case"end":return t.stop()}}),t,this)}))),function(){return H.apply(this,arguments)}),nextDay:function(){this.$refs.datePicker.nextDay()},update:(G=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,Promise.all([this.$store.dispatch("routes/readAll"),this.$store.dispatch("drivers/readAll"),this.$store.dispatch("buses/readAll"),this.$store.dispatch("outfit/readByDate",{date:this.date})]);case 3:this.isLoading=!1;case 4:case"end":return t.stop()}}),t,this)}))),function(){return G.apply(this,arguments)}),prevDay:function(){this.$refs.datePicker.prevDay()}},mounted:(K=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,Promise.all([this.$store.dispatch("routes/readAll"),this.$store.dispatch("drivers/readAll"),this.$store.dispatch("buses/readAll"),this.$store.dispatch("outfit/readByDate",{date:this.date})]);case 3:this.isLoading=!1;case 4:case"end":return t.stop()}}),t,this)}))),function(){return K.apply(this,arguments)})},U=r(107),X=r(136),Z=r(108),tt=r(549),et=r(558),it=r(613),at=r(625),st=r(623),nt=r(607),ot=Object(f.a)(Q,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:""}},[r("v-card",{staticClass:"mb-3"},[r("v-card-title",{staticClass:"pt-2"},[r("v-flex",{attrs:{xs12:"",sm7:"",md4:""}},[r("v-layout",{attrs:{"align-center":"","justify-end":""}},[r("menu-date-picker",{ref:"datePicker",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),r("v-btn",{attrs:{color:"white",elevation:"1",fab:"",small:""},on:{click:t.prevDay}},[r("v-icon",{attrs:{color:"grey darken-1"}},[t._v("fa-chevron-left")])],1),t._v(" "),r("v-btn",{staticClass:"ml-3",attrs:{color:"white",elevation:"1",fab:"",small:""},on:{click:t.update}},[r("v-icon",{attrs:{color:"grey darken-1"}},[t._v("fa-redo-alt")])],1),t._v(" "),r("v-btn",{staticClass:"ml-3",attrs:{color:"white",elevation:"1",fab:"",small:""},on:{click:t.nextDay}},[r("v-icon",{attrs:{color:"grey darken-1"}},[t._v("fa-chevron-right")])],1)],1)],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-switch",{staticClass:"pr-3",attrs:{inset:"",label:"Фильтр"},model:{value:t.isFiltering,callback:function(e){t.isFiltering=e},expression:"isFiltering"}}),t._v(" "),r("v-btn",{attrs:{dark:"",color:"green lighten-1",loading:t.isSaving},on:{click:t.save}},[t._v("Сохранить")])],1),t._v(" "),r("v-card-title",{staticClass:"pt-2"},[r("v-tabs",{attrs:{centered:""},model:{value:t.currentRoute,callback:function(e){t.currentRoute=e},expression:"currentRoute"}},[t._l(t.routes,(function(e){return[e.hasActiveWays(t.date)?r("v-tab",{key:"tab-"+e._id,attrs:{href:"#"+e._id}},[t._v(t._s(e.title))]):t._e()]}))],2)],1)],1),t._v(" "),t.isLoading?r("v-layout",{attrs:{"justify-center":""}},[r("v-progress-circular",{attrs:{indeterminate:""}})],1):r("v-tabs-items",{model:{value:t.currentRoute,callback:function(e){t.currentRoute=e},expression:"currentRoute"}},[t._l(t.routes,(function(e){return[e.hasActiveWays(t.date)?r("v-tab-item",{key:e._id,attrs:{value:e._id}},[r("outfit-route",{attrs:{route:e,date:t.date,isFiltering:t.isFiltering}})],1):t._e()]}))],2)],1)}),[],!1,null,null,null);e.default=ot.exports;h()(ot,{VBtn:U.a,VCard:A.a,VCardTitle:B.c,VFlex:I.a,VIcon:X.a,VLayout:D.a,VProgressCircular:Z.a,VSpacer:tt.a,VSwitch:et.a,VTab:it.a,VTabItem:at.a,VTabs:st.a,VTabsItems:nt.a})}}]);