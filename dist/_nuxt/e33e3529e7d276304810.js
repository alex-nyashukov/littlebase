(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{537:function(t,e,n){"use strict";n(86);var o,r,l,d,c=n(22),h={data:function(){return{dialog:{isLoading:!1,isOpen:!1,model:{form:{render:function(){return""}}},oldModel:{}}}},computed:{isChanged:function(){return JSON.stringify(this.dialog.model)!==JSON.stringify(this.dialog.oldModel)},dialogTitle:function(){return this.dialog.model._id?"Edit item":"New item"}},methods:{open:(d=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.dialog.isLoading=!0,this.dialog.isSaving=!1,this.dialog.isOpen=!0,this.dialog.oldModel={},!e._id){t.next=10;break}return t.next=7,this.$store.dispatch("".concat(e.type,"/read"),{id:e._id});case 7:this.dialog.model=t.sent,t.next=11;break;case 10:this.dialog.model=e;case 11:Object.assign(this.dialog.oldModel,this.dialog.model),this.dialog.isLoading=!1;case 13:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)}),onClose:function(){this.isChanged?this.dialog.isOpen=!confirm("Close?"):this.dialog.isOpen=!1},save:(l=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.dialog.isSaving=!0,this.dialog.oldModel={},!this.dialog.model._id){t.next=8;break}return t.next=5,this.$store.dispatch("".concat(this.dialog.model.type,"/update"),{updated_item:this.dialog.model});case 5:this.dialog.model=t.sent,t.next=11;break;case 8:return t.next=10,this.$store.dispatch("".concat(this.dialog.model.type,"/create"),{new_item:this.dialog.model});case 10:this.dialog.model=t.sent;case 11:Object.assign(this.dialog.oldModel,this.dialog.model),this.dialog.isSaving=!1;case 13:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)}),saveAndClose:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.save();case 2:this.onClose();case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),remove:(o=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("".concat(this.dialog.model.type,"/remove"),{id:this.dialog.model._id});case 2:this.dialog.isOpen=!1;case 3:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})}},m=n(26),v=n(29),f=n.n(v),_=n(97),C=n(538),k=n(536),w=n(566),x=n(125),y=n(98),O=n(155),V=n(529),S=n(567),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"900",scrollable:"",persistent:t.isChanged},model:{value:t.dialog.isOpen,callback:function(e){t.$set(t.dialog,"isOpen",e)},expression:"dialog.isOpen"}},[t.dialog.isLoading?n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-text",[t._v("\n      Please stand by\n      "),n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1):n("v-card",[n("v-card-title",{staticClass:"grey lighten-3 elevation-1",staticStyle:{"z-index":"900"},domProps:{textContent:t._s(t.dialogTitle)}}),t._v(" "),n("v-card-text",{staticClass:"pt-3"},[n(t.dialog.model.form,{tag:"component",attrs:{item:t.dialog.model}})],1),t._v(" "),n("v-card-actions",{staticClass:"grey lighten-3 elevation-1"},[this.dialog.model._id?n("v-btn",{staticClass:"ma-3",attrs:{dark:"",color:"red lighten-2"},on:{click:t.remove}},[n("v-icon",{staticClass:"hidden-md-and-up"},[t._v("fa-trash-alt")]),t._v(" "),n("span",{staticClass:"hidden-sm-and-down"},[t._v("Удалить")])],1):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"ma-3",on:{click:t.onClose}},[n("v-icon",{staticClass:"hidden-md-and-up"},[t._v("fa-door-open")]),t._v(" "),n("span",{staticClass:"hidden-sm-and-down"},[t._v("Закрыть")])],1),t._v(" "),[n("v-btn",{staticStyle:{"border-top-right-radius":"0","border-bottom-right-radius":"0"},attrs:{dark:"",color:"green lighten-2"},on:{click:t.save}},[t.dialog.isSaving?n("v-progress-circular",{attrs:{indeterminate:""}}):[n("v-icon",{staticClass:"hidden-md-and-up"},[t._v("fa-save")]),t._v(" "),n("span",{staticClass:"hidden-sm-and-down"},[t._v("Сохранить")])]],2),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"ml-0 hidden-sm-and-down",staticStyle:{"border-top-left-radius":"0","border-bottom-left-radius":"0"},attrs:{dark:"",color:"green lighten-2"},on:{click:t.saveAndClose}},o),[n("v-icon",{attrs:{color:"white"}},[t._v("fa-sign-out-alt")])],1)]}}])},[t._v(" "),n("span",[t._v("Save and close")])])]],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VBtn:_.a,VCard:C.a,VCardActions:k.a,VCardText:k.b,VCardTitle:k.c,VDialog:w.a,VIcon:x.a,VProgressCircular:y.a,VProgressLinear:O.a,VSpacer:V.a,VTooltip:S.a})},572:function(t,e,n){"use strict";n.r(e);var o=n(344),r={transition:"fade",components:{AppModal:n(537).a},data:function(){return{table:{isLoading:!0,search:"",headers:[{text:"Busnumber",value:"busnumber"},{text:"Mark",value:"mark"},{text:"Color",value:"color"},{text:"Capacity",value:"capacity"}]}}},computed:{items:function(){return this.$store.getters["buses/list"]}},methods:{onNewItem:function(){this.$refs.modal.open(new o.a)},onRowClick:function(t){this.$refs.modal.open(t)}},mounted:function(){var t=this;this.$store.dispatch("buses/readAll").then((function(){t.table.isLoading=!1}))}},l=n(26),d=n(29),c=n.n(d),h=n(97),m=n(538),v=n(536),f=n(568),_=n(125),C=n(529),k=n(75),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mt-5"},[n("v-card-title",[t._v("\n    Buses\n    "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{label:"Search"},model:{value:t.table.search,callback:function(e){t.$set(t.table,"search",e)},expression:"table.search"}}),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",absolute:"",top:"",right:"",color:"green lighten-2"},on:{click:t.onNewItem}},[n("v-icon",[t._v("fa-plus")])],1)],1),t._v(" "),n("v-data-table",{attrs:{loading:t.table.isLoading,headers:t.table.headers,search:t.table.search,items:t.items,"mobile-breakpoint":0,"loading-text":"Loading..."},on:{"click:row":t.onRowClick}}),t._v(" "),n("app-modal",{ref:"modal"})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VCard:m.a,VCardTitle:v.c,VDataTable:f.a,VIcon:_.a,VSpacer:C.a,VTextField:k.a})}}]);