(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{532:function(t,e,o){"use strict";o(86);var n,r,l,d,c=o(22),h={data:function(){return{dialog:{isLoading:!1,isOpen:!1,model:{form:{render:function(){return""}}},oldModel:{}}}},computed:{isChanged:function(){return JSON.stringify(this.dialog.model)!==JSON.stringify(this.dialog.oldModel)},dialogTitle:function(){return this.dialog.model._id?"Edit item":"New item"}},methods:{open:(d=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.dialog.isLoading=!0,this.dialog.isOpen=!0,this.dialog.oldModel={},!e._id){t.next=9;break}return t.next=6,this.$store.dispatch("".concat(e.type,"/read"),{id:e._id});case 6:this.dialog.model=t.sent,t.next=10;break;case 9:this.dialog.model=e;case 10:console.log(this.dialog.model),Object.assign(this.dialog.oldModel,this.dialog.model),this.dialog.isLoading=!1;case 13:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)}),onClose:function(){this.isChanged?this.dialog.isOpen=!confirm("Close?"):this.dialog.isOpen=!1},save:(l=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.dialog.oldModel={},!this.dialog.model._id){t.next=7;break}return t.next=4,this.$store.dispatch("".concat(this.dialog.model.type,"/update"),{updated_item:this.dialog.model});case 4:this.dialog.model=t.sent,t.next=10;break;case 7:return t.next=9,this.$store.dispatch("".concat(this.dialog.model.type,"/create"),{new_item:this.dialog.model});case 9:this.dialog.model=t.sent;case 10:Object.assign(this.dialog.oldModel,this.dialog.model);case 11:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)}),saveAndClose:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.save();case 2:this.onClose();case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),remove:(n=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("".concat(this.dialog.model.type,"/remove"),{id:this.dialog.model._id});case 2:this.dialog.isOpen=!1;case 3:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},m=o(26),v=o(29),f=o.n(v),_=o(99),k=o(538),w=o(531),x=o(557),C=o(124),y=o(154),O=o(523),V=o(558),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{width:"900",scrollable:"",persistent:t.isChanged},model:{value:t.dialog.isOpen,callback:function(e){t.$set(t.dialog,"isOpen",e)},expression:"dialog.isOpen"}},[t.dialog.isLoading?o("v-card",{attrs:{color:"primary",dark:""}},[o("v-card-text",[t._v("\n      Please stand by\n      "),o("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1):o("v-card",[o("v-card-title",{domProps:{textContent:t._s(t.dialogTitle)}}),t._v(" "),o("v-card-text",[o(t.dialog.model.form,{tag:"component",attrs:{item:t.dialog.model}})],1),t._v(" "),o("v-card-actions",[this.dialog.model._id?o("v-btn",{staticClass:"ma-3",attrs:{dark:"",color:"red lighten-2"},on:{click:t.remove}},[t._v("Удалить")]):t._e(),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"ma-3",on:{click:t.onClose}},[t._v("Закрыть")]),t._v(" "),[o("v-btn",{staticStyle:{"border-top-right-radius":"0","border-bottom-right-radius":"0"},attrs:{dark:"",color:"green lighten-2"},on:{click:t.save}},[t._v("Сохранить")]),t._v(" "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({staticClass:"ml-0",staticStyle:{"border-top-left-radius":"0","border-bottom-left-radius":"0"},attrs:{dark:"",color:"green lighten-2"},on:{click:t.saveAndClose}},n),[o("v-icon",{attrs:{color:"white"}},[t._v("fa-sign-out-alt")])],1)]}}])},[t._v(" "),o("span",[t._v("Save and close")])])]],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VBtn:_.a,VCard:k.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VDialog:x.a,VIcon:C.a,VProgressLinear:y.a,VSpacer:O.a,VTooltip:V.a})},562:function(t,e,o){"use strict";o.r(e);var n=o(340),r={components:{AppModal:o(532).a},data:function(){return{table:{isLoading:!0,search:"",headers:[{text:"Title",value:"title"},{text:"Ways",value:"ways"}]}}},computed:{items:function(){return this.$store.getters["routes/list"]}},methods:{onNewItem:function(){this.$refs.modal.open(new n.a)},onRowClick:function(t){this.$refs.modal.open(t)}},mounted:function(){var t=this;this.$store.dispatch("routes/readAll").then((function(){t.table.isLoading=!1}))}},l=o(26),d=o(29),c=o.n(d),h=o(99),m=o(538),v=o(531),f=o(155),_=o(559),k=o(124),w=o(523),x=o(75),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mt-5"},[o("v-card-title",[t._v("\n    Routes\n    "),o("v-spacer"),t._v(" "),o("v-text-field",{attrs:{label:"Search"},model:{value:t.table.search,callback:function(e){t.$set(t.table,"search",e)},expression:"table.search"}}),t._v(" "),o("v-btn",{attrs:{fab:"",dark:"",absolute:"",top:"",right:"",color:"green lighten-2"},on:{click:t.onNewItem}},[o("v-icon",[t._v("fa-plus")])],1)],1),t._v(" "),o("v-data-table",{attrs:{loading:t.table.isLoading,headers:t.table.headers,search:t.table.search,items:t.items,"mobile-breakpoint":0,"loading-text":"Loading..."},on:{"click:row":t.onRowClick},scopedSlots:t._u([{key:"item.ways",fn:function(e){var n=e.value;return t._l(n,(function(e){return o("v-chip",{key:e._id},[t._v(t._s(e.title))])}))}}])}),t._v(" "),o("app-modal",{ref:"modal"})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VCard:m.a,VCardTitle:v.c,VChip:f.a,VDataTable:_.a,VIcon:k.a,VSpacer:w.a,VTextField:x.a})}}]);