(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{565:function(t,e,n){"use strict";n(50);var r,o,l,d,c=n(18),h={data:function(){return{dialog:{isLoading:!1,isOpen:!1,model:{form:{render:function(){return""}}},oldModel:{}}}},computed:{isChanged:function(){return JSON.stringify(this.dialog.model)!==JSON.stringify(this.dialog.oldModel)},dialogTitle:function(){return this.dialog.model._id?"Редактирование записи":"Создание записи "}},methods:{open:(d=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.dialog.isLoading=!0,this.dialog.isSaving=!1,this.dialog.isOpen=!0,this.dialog.oldModel={},!e._id){t.next=10;break}return t.next=7,this.$store.dispatch("".concat(e.type,"/read"),{id:e._id});case 7:this.dialog.model=t.sent,t.next=11;break;case 10:this.dialog.model=e;case 11:Object.assign(this.dialog.oldModel,this.dialog.model),this.dialog.isLoading=!1;case 13:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)}),onClose:function(){this.isChanged?this.dialog.isOpen=!confirm("Close?"):this.dialog.isOpen=!1},save:(l=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.dialog.isSaving=!0,this.dialog.oldModel={},!this.dialog.model._id){t.next=8;break}return t.next=5,this.$store.dispatch("".concat(this.dialog.model.type,"/update"),{updated_item:this.dialog.model});case 5:this.dialog.model=t.sent,t.next=11;break;case 8:return t.next=10,this.$store.dispatch("".concat(this.dialog.model.type,"/create"),{new_item:this.dialog.model});case 10:this.dialog.model=t.sent;case 11:Object.assign(this.dialog.oldModel,this.dialog.model),this.dialog.isSaving=!1;case 13:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)}),saveAndClose:(o=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.save();case 2:this.onClose();case 3:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),remove:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("".concat(this.dialog.model.type,"/remove"),{id:this.dialog.model._id});case 2:this.dialog.isOpen=!1;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}},v=n(23),m=n(26),f=n.n(m),_=n(107),C=n(563),x=n(562),k=n(612),w=n(136),y=n(108),V=n(172),O=n(549),S=n(582),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"900",scrollable:"",persistent:t.isChanged},model:{value:t.dialog.isOpen,callback:function(e){t.$set(t.dialog,"isOpen",e)},expression:"dialog.isOpen"}},[t.dialog.isLoading?n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-text",[t._v("\n      Идет загрузка...\n      "),n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1):n("v-card",[n("v-card-title",{staticClass:"grey lighten-3 elevation-1",staticStyle:{"z-index":"900"},domProps:{textContent:t._s(t.dialogTitle)}}),t._v(" "),n("v-card-text",{staticClass:"pt-3"},[n(t.dialog.model.form,{tag:"component",attrs:{item:t.dialog.model}})],1),t._v(" "),n("v-card-actions",{staticClass:"grey lighten-3 elevation-1"},[this.dialog.model._id?n("v-btn",{staticClass:"ma-3",attrs:{dark:"",color:"red lighten-2"},on:{click:t.remove}},[n("v-icon",{staticClass:"hidden-md-and-up"},[t._v("fa-trash-alt")]),t._v(" "),n("span",{staticClass:"hidden-sm-and-down"},[t._v("Удалить")])],1):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"ma-3",on:{click:t.onClose}},[n("v-icon",{staticClass:"hidden-md-and-up"},[t._v("fa-door-open")]),t._v(" "),n("span",{staticClass:"hidden-sm-and-down"},[t._v("Закрыть")])],1),t._v(" "),[n("v-btn",{staticStyle:{"border-top-right-radius":"0","border-bottom-right-radius":"0"},attrs:{dark:"",color:"green lighten-2"},on:{click:t.save}},[t.dialog.isSaving?n("v-progress-circular",{attrs:{indeterminate:""}}):[n("v-icon",{staticClass:"hidden-md-and-up"},[t._v("fa-save")]),t._v(" "),n("span",{staticClass:"hidden-sm-and-down"},[t._v("Сохранить")])]],2),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"ml-0 hidden-sm-and-down",staticStyle:{"border-top-left-radius":"0","border-bottom-left-radius":"0"},attrs:{dark:"",color:"green lighten-2"},on:{click:t.saveAndClose}},r),[n("v-icon",{attrs:{color:"white"}},[t._v("fa-sign-out-alt")])],1)]}}])},[t._v(" "),n("span",[t._v("Сохранить и выйти")])])]],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VBtn:_.a,VCard:C.a,VCardActions:x.a,VCardText:x.b,VCardTitle:x.c,VDialog:k.a,VIcon:w.a,VProgressCircular:y.a,VProgressLinear:V.a,VSpacer:O.a,VTooltip:S.a})},571:function(t,e,n){"use strict";var r={props:["item","left","right"]},o=n(23),l=n(26),d=n.n(l),c=n(170),h=n(563),v=n(562),m=n(176),f=n(582),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{"content-class":"pa-0",left:t.left,right:t.right,"open-on-hover":"","offset-x":"",disabled:t.$vuetify.breakpoint.xs},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[t._t("default",null,{on:n,item:t.item})]}}],null,!0)},[t._v(" "),n("v-card",{attrs:{"min-width":"500"}},[n("v-card-text",[n("v-input",{attrs:{"error-count":"5",messages:t.item.phones.map((function(t){return t.value}))},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("v-avatar",{attrs:{size:"100",color:"grey"}},[t.item.image?n("img",{attrs:{src:t.item.image}}):t._e()])]},proxy:!0}])},[t._v("\n        "+t._s(t.item.name)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VAvatar:c.a,VCard:h.a,VCardText:v.b,VInput:m.a,VTooltip:f.a})},621:function(t,e,n){"use strict";n.r(e);var r=n(181),o=n(565),l=n(571),d={transition:"fade",components:{AppModal:o.a,DriverMiniCard:l.a},data:function(){return{table:{isLoading:!0,search:"",headers:[{text:"Б.н. автобуса",value:"bus.busnumber"},{text:"Табельный номер",value:"tabnumber"},{text:"Ф.И.О.",value:"name"}]}}},computed:{items:function(){return this.$store.getters["drivers/list"]}},methods:{onNewItem:function(){this.$refs.modal.open(new r.a)},onRowClick:function(t){this.$refs.modal.open(t)}},mounted:function(){var t=this;this.$store.dispatch("drivers/readAll").then((function(){t.table.isLoading=!1}))}},c=n(23),h=n(26),v=n.n(h),m=n(107),f=n(563),_=n(562),C=n(617),x=n(136),k=n(549),w=n(76),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"fade mt-5"},[n("v-card-title",[t._v("\n    Водители\n    "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{label:"Поиск"},model:{value:t.table.search,callback:function(e){t.$set(t.table,"search",e)},expression:"table.search"}}),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",absolute:"",top:"",right:"",color:"green lighten-2"},on:{click:t.onNewItem}},[n("v-icon",[t._v("fa-plus")])],1)],1),t._v(" "),n("v-data-table",{attrs:{"sort-by":"bus.busnumber",loading:t.table.isLoading,headers:t.table.headers,search:t.table.search,items:t.items,"mobile-breakpoint":0,"loading-text":"Loading..."},on:{"click:row":t.onRowClick},scopedSlots:t._u([{key:"item.tabnumber",fn:function(e){var r=e.item;return[n("driver-mini-card",{attrs:{item:r,right:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.on;return[n("span",t._g({},o),[t._v(t._s(r.tabnumber))])]}}],null,!0)})]}}])}),t._v(" "),n("app-modal",{ref:"modal"})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:m.a,VCard:f.a,VCardTitle:_.c,VDataTable:C.a,VIcon:x.a,VSpacer:k.a,VTextField:w.a})}}]);