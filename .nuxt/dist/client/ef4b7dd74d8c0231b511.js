(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{316:function(e,t,n){"use strict";n(66);var o,r,l,d=n(16),c={data:function(){return{dialog:{isLoading:!1,isOpen:!1,model:{form:{render:function(){return""}}},oldModel:{}}}},computed:{isChanged:function(){return JSON.stringify(this.dialog.model)!==JSON.stringify(this.dialog.oldModel)},dialogTitle:function(){return this.dialog.model.id?"Edit item":"New item"}},methods:{open:(l=Object(d.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.dialog.isLoading=!0,this.dialog.isOpen=!0,!t.id){e.next=8;break}return e.next=5,this.$store.dispatch("".concat(t.type,"/read"),{id:t.id});case 5:this.dialog.model=e.sent,e.next=9;break;case 8:this.dialog.model=t;case 9:Object.assign(this.dialog.oldModel,this.dialog.model),this.dialog.isLoading=!1;case 11:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)}),onClose:function(){this.isChanged?this.dialog.isOpen=!confirm("Close?"):this.dialog.isOpen=!1},save:(r=Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.dialog.model.id){e.next=5;break}return e.next=3,this.$store.dispatch("".concat(this.dialog.model.type,"/update"),{updated_item:this.dialog.model});case 3:e.next=8;break;case 5:return e.next=7,this.$store.dispatch("".concat(this.dialog.model.type,"/create"),{new_item:this.dialog.model});case 7:this.dialog.model=e.sent;case 8:Object.assign(this.dialog.oldModel,this.dialog.model);case 9:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),remove:(o=Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("".concat(this.dialog.model.type,"/remove"),{id:this.dialog.model.id});case 2:this.dialog.isOpen=!1;case 3:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})}},h=n(32),m=n(38),v=n.n(m),f=n(133),x=n(317),k=n(312),_=n(360),w=n(118),C=n(361),component=Object(h.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"900",persistent:e.isChanged},model:{value:e.dialog.isOpen,callback:function(t){e.$set(e.dialog,"isOpen",t)},expression:"dialog.isOpen"}},[e.dialog.isLoading?n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-text",[e._v("\n      Please stand by\n      "),n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1):n("v-card",[n("v-card-title",{domProps:{textContent:e._s(e.dialogTitle)}}),e._v(" "),n("v-card-text",[n(e.dialog.model.form,{tag:"component",attrs:{item:e.dialog.model}})],1),e._v(" "),n("v-card-actions",[this.dialog.model.id?n("v-btn",{staticClass:"ma-3",attrs:{dark:"",color:"red lighten-2"},on:{click:e.remove}},[e._v("Удалить")]):e._e(),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"ma-3",on:{click:e.onClose}},[e._v("Закрыть")]),e._v(" "),n("v-btn",{staticClass:"ma-3",attrs:{dark:"",color:"green lighten-2"},on:{click:e.save}},[e._v("Сохранить")])],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;v()(component,{VBtn:f.a,VCard:x.a,VCardActions:k.a,VCardText:k.b,VCardTitle:k.c,VDialog:_.a,VProgressLinear:w.a,VSpacer:C.a})},366:function(e,t,n){"use strict";n.r(t);var o=n(167),r={components:{AppModal:n(316).a},data:function(){return{table:{isLoading:!0,search:"",headers:[{text:"Tabnumber",value:"tabnumber"},{text:"Busnumber"},{text:"Name"}]}}},computed:{items:function(){return this.$store.getters["drivers/list"]}},methods:{onNewItem:function(){this.$refs.modal.open(new o.a)},onRowClick:function(e){this.$refs.modal.open(e)}},mounted:function(){var e=this;this.$store.dispatch("drivers/readAll").then((function(){e.table.isLoading=!1}))}},l=n(32),d=n(38),c=n.n(d),h=n(133),m=n(317),v=n(312),f=n(362),x=n(115),k=n(361),_=n(299),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mt-5"},[n("v-card-title",[e._v("\n    Drivers\n    "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{label:"Search"},model:{value:e.table.search,callback:function(t){e.$set(e.table,"search",t)},expression:"table.search"}}),e._v(" "),n("v-btn",{attrs:{fab:"",dark:"",absolute:"",top:"",right:"",color:"green lighten-2"},on:{click:e.onNewItem}},[n("v-icon",[e._v("fa-plus")])],1)],1),e._v(" "),n("v-data-table",{attrs:{loading:e.table.isLoading,headers:e.table.headers,search:e.table.search,items:e.items,"mobile-breakpoint":0,"loading-text":"Loading..."},on:{"click:row":e.onRowClick}}),e._v(" "),n("app-modal",{ref:"modal"})],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:h.a,VCard:m.a,VCardTitle:v.c,VDataTable:f.a,VIcon:x.a,VSpacer:k.a,VTextField:_.a})}}]);