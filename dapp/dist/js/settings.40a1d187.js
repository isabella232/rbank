(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"269e":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"d-flex justify-center text-center"},[t._v("Current Markets")]),r("div",{staticClass:"d-flex justify-center"},[r("v-card",{attrs:{width:"70%"}},[r("v-list",[r("v-list-item",[r("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Symbol")]),r("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Asset")]),r("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Borrows")]),r("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Supplies")]),r("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Price")]),r("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Current Cash")]),r("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Base borrow rate")])],1),t._l(t.marketAddresses,(function(t,e){return r("market-list-item",{key:"market-list-item-"+e,attrs:{marketAddress:t}})}))],2)],1)],1)])},s=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list-item",{on:{click:function(e){return t.setMarket(t.marketAddress)}}},[r("v-list-item-title",{staticClass:"text-left"},[r("v-list-item-action",[r("v-icon",[t._v("local_convenience_store")])],1),t._v(" "+t._s(t.tokenSymbol)+" ")],1),r("v-list-item-title",{staticClass:"text-center"},[t._v(" "+t._s(t.tokenName)+" ")]),r("v-list-item-title",{staticClass:"text-center"},[t._v(" "+t._s(t.marketTotalBorrows)+" ")]),r("v-list-item-title",{staticClass:"text-center"},[t._v(" "+t._s(t.marketTotalSupply)+" ")]),r("v-list-item-title",{staticClass:"text-center"},[t._v(" "+t._s(t.price)+" ")]),r("v-list-item-title",{staticClass:"text-center"},[t._v(" "+t._s(t.cash)+" ")]),r("v-list-item-title",{staticClass:"text-center"},[t._v(" "+t._s(t.baseBorrowRate)+" ")])],1)},i=[],o=(r("d3b7"),r("3ca3"),r("ddb0"),r("3835")),l=r("4220"),c=r("8cc6"),u=r("0514"),d={name:"MarketListItem",props:{marketAddress:{type:String,required:!0}},data:function(){return{controller:null,market:null,marketTotalSupply:null,marketTotalBorrows:null,tokenName:null,tokenSymbol:null,price:null,cash:null,baseBorrowRate:null}},methods:{setMarket:function(t){this.$router.push({name:"Market",params:{id:t}})}},created:function(){var t=this;this.controller=new l["a"],this.market=new c["a"](this.marketAddress),this.market.eventualTotalSupply.then((function(e){t.marketTotalSupply=e})),this.market.eventualTotalBorrows.then((function(e){t.marketTotalBorrows=e})),this.market.eventualTokenAddress.then((function(t){var e=new u["a"](t);return[e.eventualName,e.eventualSymbol]})).then((function(t){return Promise.all(t)})).then((function(e){var r=Object(o["a"])(e,2),a=r[0],s=r[1];t.tokenName=a,t.tokenSymbol=s})),this.market.eventualCash.then((function(e){return t.cash=e})),this.market.eventualBaseBorrowRate.then((function(e){return t.baseBorrowRate=e})),this.controller.getPrice(this.marketAddress).then((function(e){t.price=e}))}},m=d,h=r("2877"),f=r("6544"),v=r.n(f),k=r("132d"),p=r("da13"),b=r("1800"),w=r("5d23"),_=Object(h["a"])(m,n,i,!1,null,null,null),g=_.exports;v()(_,{VIcon:k["a"],VListItem:p["a"],VListItemAction:b["a"],VListItemTitle:w["c"]});var C={name:"MarketsList",props:{marketAddresses:{type:Array,default:function(){return[]}}},components:{MarketListItem:g}},B=C,x=r("b0af"),A=r("8860"),y=Object(h["a"])(B,a,s,!1,null,null,null);e["a"]=y.exports;v()(y,{VCard:x["a"],VList:A["a"],VListItem:p["a"],VListItemSubtitle:w["b"]})},"26d3":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"settings"},[r("h1",[t._v("Settings")]),r("controller-form"),r("market-form",{on:{marketCreated:t.loadMarkets}}),r("markets-list",{attrs:{marketAddresses:t.marketAddresses}})],1)},s=[],n=r("5530"),i=r("2f62"),o=r("4220"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",[r("h2",[t._v("Controller data")])]),r("v-row",[r("v-col",{staticClass:"mx-5",attrs:{cols:"5"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":!0}},[r("v-row",[r("v-text-field",{attrs:{label:"Liquidation Factor",type:"number"},model:{value:t.liquidationFactor,callback:function(e){t.liquidationFactor=e},expression:"liquidationFactor"}})],1),r("v-row",[r("v-btn",{staticClass:"success",on:{click:t.setLiquidationFactor}},[t._v(" Set Liquidation ")])],1)],1)],1),r("v-col",{staticClass:"mx-5",attrs:{cols:"5"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":!0}},[r("v-row",[r("v-text-field",{attrs:{label:"Collateral Factor",type:"number"},model:{value:t.collateralFactor,callback:function(e){t.collateralFactor=e},expression:"collateralFactor"}})],1),r("v-row",[r("v-btn",{staticClass:"success",on:{click:t.setCollateralFactor}},[t._v(" Set Collateral ")])],1)],1)],1)],1)],1)},c=[],u={name:"ControllerForm",data:function(){return{controller:null,collateralFactor:null,liquidationFactor:null}},computed:Object(n["a"])({},Object(i["d"])({account:function(t){return t.Session.account}})),methods:{setCollateralFactor:function(){this.controller.setCollateralFactor(this.account,this.collateralFactor)},setLiquidationFactor:function(){this.controller.setLiquidationFactor(this.account,this.liquidationFactor)}},created:function(){var t=this;this.controller=new o["a"],this.controller.eventualCollateralFactor.then((function(e){t.collateralFactor=e})),this.controller.eventualLiquidationFactor.then((function(e){t.liquidationFactor=e}))}},d=u,m=r("2877"),h=r("6544"),f=r.n(h),v=r("8336"),k=r("62ad"),p=r("a523"),b=r("4bd4"),w=r("0fd9"),_=r("8654"),g=Object(m["a"])(d,l,c,!1,null,null,null),C=g.exports;f()(g,{VBtn:v["a"],VCol:k["a"],VContainer:p["a"],VForm:b["a"],VRow:w["a"],VTextField:_["a"]});var B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"MarketForm"},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("h2",[t._v("Add a new Market")])]),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":!0}},[r("v-text-field",{attrs:{label:"Token Base Address",rules:[t.rules.requiredAddress,t.rules.address],type:"string",required:""},model:{value:t.tokenAddress,callback:function(e){t.tokenAddress=e},expression:"tokenAddress"}}),r("v-text-field",{attrs:{label:"Market Base Borrow Rate",rules:[t.rules.requiredRate],type:"number",required:""},model:{value:t.marketBaseBorrowRate,callback:function(e){t.marketBaseBorrowRate=e},expression:"marketBaseBorrowRate"}}),r("v-btn",{attrs:{disabled:!t.validForm,color:"success"},on:{click:t.createMarket}},[t._v(" Create Market ")])],1)],1)],1),r("v-snackbar",{attrs:{timeout:3e3},model:{value:t.flag,callback:function(e){t.flag=e},expression:"flag"}},[t._v(" "+t._s(t.error)+" "),r("v-btn",{attrs:{color:"red",text:""},on:{click:t.reset}},[t._v(" Close ")])],1)],1)],1)},x=[],A=(r("96cf"),r("1da1")),y=r("8cc6"),F={name:"MarketForm",data:function(){var t=this;return{controller:null,tokenAddress:null,marketBaseBorrowRate:null,validForm:!1,error:null,flag:!1,emptyAddress:"0x0000000000000000000000000000000000000000",rules:{requiredAddress:function(){return!!t.tokenAddress||"Required."},requiredRate:function(){return!!t.marketBaseBorrowRate||"Required."},address:function(){return/^0x[a-fA-F0-9]{40}$/.test(t.tokenAddress)||"Not a valid address"}}}},computed:Object(n["a"])({},Object(i["d"])({account:function(t){return t.Session.account}})),methods:{getMarketByToken:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.flag=!1,e.next=3,t.controller.getMarketByToken(t.tokenAddress).then((function(e){e!==t.emptyAddress&&(t.error="There is already a market ".concat(e," for the token address entered"),t.flag=!0)}));case 3:return e.abrupt("return",t.flag);case 4:case"end":return e.stop()}}),e)})))()},createMarket:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getMarketByToken();case 2:t.flag||t.tokenAddress===t.emptyAddress||y["a"].deploy(t.account,t.tokenAddress,t.marketBaseBorrowRate).then((function(e){var r=new y["a"](e);return r.setController(t.account,t.controller.address),t.controller.addMarket(t.account,e)})).then((function(){t.reset(),t.$emit("marketCreated")})),setTimeout((function(){t.reset()}),3e3);case 4:case"end":return e.stop()}}),e)})))()},isValidForm:function(){this.validForm="string"!==typeof this.rules.requiredAddress()&&"string"!==typeof this.rules.address()&&"string"!==typeof this.rules.requiredRate()},reset:function(){this.$refs.form.reset(),this.flag=!1}},watch:{tokenAddress:function(){this.isValidForm()},marketBaseBorrowRate:function(){this.isValidForm()}},created:function(){this.controller=new o["a"]}},V=F,T=(r("a9e3"),r("ca71"),r("a9ad")),O=r("f2e7"),M=r("fe6c"),j=r("58df"),q=r("d9bd"),R=Object(j["a"])(T["a"],O["a"],Object(M["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(q["d"])("auto-height",this)},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper",attrs:{role:"alert"}}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}}),$=Object(m["a"])(V,B,x,!1,null,null,null),S=$.exports;f()($,{VBtn:v["a"],VCol:k["a"],VContainer:p["a"],VForm:b["a"],VRow:w["a"],VSnackbar:R,VTextField:_["a"]});var L=r("269e"),E={name:"Settings",data:function(){return{controller:null,marketAddresses:[]}},computed:Object(n["a"])({},Object(i["d"])({isOwner:function(t){return t.Session.isOwner}}),{pageHeight:function(){return document.body.scrollHeight}}),watch:{isOwner:function(t){t||this.$router.push({name:"Home"})},marketAddresses:function(){this.$vuetify.goTo(this.pageHeight)}},methods:{loadMarkets:function(){var t=this;this.controller.eventualMarketAddresses.then((function(e){t.marketAddresses=e}))}},components:{ControllerForm:C,MarketForm:S,MarketsList:L["a"]},created:function(){this.controller=new o["a"],this.loadMarkets()}},I=E,z=Object(m["a"])(I,a,s,!1,null,null,null);e["default"]=z.exports},"4bd4":function(t,e,r){"use strict";r("4de4"),r("7db0"),r("4160"),r("caad"),r("07ac"),r("2532"),r("159b");var a=r("5530"),s=r("58df"),n=r("7e2b"),i=r("3206");e["a"]=Object(s["a"])(n["a"],Object(i["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=r(t)))})):a.valid=r(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},ca71:function(t,e,r){}}]);
//# sourceMappingURL=settings.40a1d187.js.map