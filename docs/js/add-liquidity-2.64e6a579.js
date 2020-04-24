(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["add-liquidity-2"],{"3bcb":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"container-sm px-3"},[s("PoolNav",{attrs:{default:1}}),s("Box",[s("label",{staticClass:"d-block"},[t._v("Pool")]),s("ButtonSelectPair",{attrs:{customClass:"h2 d-block"},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}}),t.pair?s("div",[s("label",{staticClass:"d-block"},[t._v("Current pool size")]),s("a",{attrs:{href:"https://testnetexplorer.obyte.org/#"+t.pair.address,target:"_blank"}},[s("Amount",{attrs:{value:t.pair.reserve0,asset:t.pair.asset0}}),t._v(" "),s("Ticker",{attrs:{asset:t.pair.asset0}}),t._v(" + "),s("Amount",{attrs:{value:t.pair.reserve1,asset:t.pair.asset1}}),t._v(" "),s("Ticker",{attrs:{asset:t.pair.asset1}}),s("Icon",{staticClass:"ml-1",attrs:{name:"external-link",size:"18"}})],1)]):t._e(),t.share?s("div",[s("label",{staticClass:"d-block"},[t._v("Your pool share")]),s("span",{staticClass:"text-white"},[t.share>1?s("Pie",{staticClass:"mr-2",attrs:{percent:t.share}}):t._e(),t._v(" "+t._s(t.share)+"% ")],1)]):t._e()],1),t.pair.asset0&&t.pair.reserve0&&t.pair.reserve1?s("Box",{staticClass:"d-flex"},[s("div",{staticClass:"flex-auto"},[s("label",{staticClass:"d-block",attrs:{for:"amount"}},[t._v(" Deposit "),s("LabelBalance",{attrs:{asset:t.asset},on:{select:t.setAmount}})],1),s("InputAmount",{attrs:{id:"amount",asset:t.asset},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),s("div",{staticClass:"text-right mt-4 ml-4"},[s("ButtonSelectToken",{attrs:{default:t.pair.asset0,values:[t.pair.asset0,t.pair.asset1]},model:{value:t.asset,callback:function(e){t.asset=e},expression:"asset"}})],1)]):t._e(),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn-submit px-6 rounded-2 mb-3",attrs:{type:"submit",disabled:!t.asset||!t.amount}},[t._v(" Add liquidity ")])])],1)])},r=[],i=(s("b680"),s("acd8"),s("ac1f"),s("1276"),s("96cf"),s("1da1")),n=s("db87"),u=s("90a9"),o={data:function(){return{id:!1,pair:!1,asset:"",amount:"",share:0}},watch:{id:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,s){var a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e===s){t.next=9;break}return this.amount="",a=this.$store.state.settings.allPairs[e],r=new n["a"](a,e.split("_")),t.next=6,r.init();case 6:i=Object(u["k"])(this.$store.state.auth.balances,r.asset),this.share=parseFloat((100/r.supply*i).toFixed(3)),this.pair=r;case 9:case"end":return t.stop()}}),t,this)})));function e(e,s){return t.apply(this,arguments)}return e}()},methods:{setAmount:function(t){this.amount=t},handleSubmit:function(){var t={mint:"1"},e=this.pair.address;location.href=Object(u["g"])(e,t,this.amount,this.asset)}}},c=o,l=s("2877"),h=Object(l["a"])(c,a,r,!1,null,null,null);e["default"]=h.exports},db87:function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));s("e25e"),s("96cf");var a=s("1da1"),r=s("d4ec"),i=s("bee2"),n=s("90a9"),u=function(){function t(e,s){Object(r["a"])(this,t),this.ready=!1,this.asset0=s[0],this.asset1=s[1],this.address=e}return Object(i["a"])(t,[{key:"init",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["l"])(this.address);case 2:e=t.sent,this.asset=e.asset,this.reserve0=parseInt(e.reserve0),this.reserve1=parseInt(e.reserve1),this.supply=parseInt(e.supply),this.ready=!0;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"hasLiquidity",value:function(){return!(!this.reserve0||!this.reserve1||!this.supply)}},{key:"getAmountBought",value:function(t,e){var s=e===this.asset0?this.reserve0:this.reserve1,a=e===this.asset1?this.reserve0:this.reserve1;return Object(n["i"])(t,s,a)}},{key:"getAmountSold",value:function(t,e){var s=e===this.asset1?this.reserve0:this.reserve1,a=e===this.asset0?this.reserve0:this.reserve1;return Object(n["j"])(t,a,s)}}]),t}()},e25e:function(t,e,s){var a=s("23e7"),r=s("e583");a({global:!0,forced:parseInt!=r},{parseInt:r})},e583:function(t,e,s){var a=s("da84"),r=s("58a8").trim,i=s("5899"),n=a.parseInt,u=/^[+-]?0[Xx]/,o=8!==n(i+"08")||22!==n(i+"0x16");t.exports=o?function(t,e){var s=r(String(t));return n(s,e>>>0||(u.test(s)?16:10))}:n}}]);
//# sourceMappingURL=add-liquidity-2.64e6a579.js.map