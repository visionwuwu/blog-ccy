(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{577:function(t,e,n){"use strict";n.r(e);n(104),n(12),n(24);var u={name:"CountUp",props:{startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimalPlaces:{type:Number,default:0},duration:{type:Number,default:2},delay:{type:Number,default:0}},mounted:function(){this.init()},data:function(){return{counter:null}},methods:{init:function(){var t=this;n.e(68).then(n.bind(null,565)).then((function(e){t.$nextTick((function(n){t.counter=new e.CountUp(t.$refs.countUp,t.endVal,{startVal:t.startVal,decimalPlaces:t.decimalPlaces,duration:t.duration}),setTimeout((function(e){t.counter.start()}),t.delay)}))}))}},beforeDestroy:function(){this.counter.reset(),this.counter=null}},r=n(3),a=Object(r.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ClientOnly",[this._t("before"),this._v(" "),e("span",{ref:"countUp"})],2)],1)}),[],!1,null,null,null);e.default=a.exports}}]);