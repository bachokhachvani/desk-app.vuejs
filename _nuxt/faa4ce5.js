(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{330:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(86).default)("77a620b8",content,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";n(330)},352:function(t,e,n){var o=n(85)(!1);o.push([t.i,".header[data-v-4c1217fc]{text-align:center;font-size:40px;color:#0b0b67;padding-bottom:30px}.content[data-v-4c1217fc]{display:flex;grid-gap:20px;gap:20px;font-size:20px;font-weight:700;justify-content:center}.content p[data-v-4c1217fc]{width:100px;color:#0b0b67}.rentBtn[data-v-4c1217fc]{background-color:#0b0b67;width:200px;height:40px;margin-top:30px;margin-right:30px;color:#f0f8ff;font-weight:800}.rentBtn[data-v-4c1217fc]:disabled{background-color:grey;cursor:not-allowed}.buttonWrapper[data-v-4c1217fc]{display:flex;justify-content:center}.buttonWrapper p[data-v-4c1217fc]{color:#950d06;font-size:20px;font-weight:700}.weekContainer[data-v-4c1217fc]{color:#670f1b;font-weight:800}.btnContainer[data-v-4c1217fc]{display:flex;justify-content:center;grid-gap:30px;gap:30px;margin-right:20px}.btnContainer button[data-v-4c1217fc]{cursor:pointer;border:none;border-radius:50%;background-color:#670f1b;width:30px;height:30px;color:#f0f8ff;font-weight:600;padding:0}.btnContainer button[data-v-4c1217fc]:disabled{background-color:grey;cursor:not-allowed}.weekNumber[data-v-4c1217fc]{text-align:center;margin-top:40px;margin-right:20px}.weekNumber p[data-v-4c1217fc]{text-align:center;font-size:20px}",""]),t.exports=o},363:function(t,e,n){"use strict";n.r(e);n(2),n(1);var o={data:function(){return{deskId:this.$route.params.deskId,weeks:0}},methods:{increase:function(){this.weeks++},decrease:function(){this.weeks--},rentHandler:function(){this.$store.dispatch("rentDeskAction",{id:this.deskId,rentWeeks:this.weeks})}},computed:{weeksData:function(){return this.weeks},deskData:function(){var t=this;return this.$store.getters.deskData.filter((function(e){return e.id==t.deskId}))[0]},mode:function(){return this.$store.getters.mode}}},r=(n(351),n(58)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("div",[e("div",{staticClass:"header"},[e("h3",[t._v("Desk "+t._s(this.deskId)+" Details")])]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("Size:")]),t._v(" "),e("p",[t._v(t._s(t.deskData.size))])]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("Price:")]),t._v(" "),e("p",[t._v(t._s(t.deskData.prize))])]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("Position:")]),t._v(" "),e("p",[t._v(t._s(t.deskData.position))])]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("Is Taken:")]),t._v(" "),e("p",[t._v(t._s(t.deskData.isTaken))])]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("Room:")]),t._v(" "),e("p",[t._v(t._s(t.deskData.roomNumber))])]),t._v(" "),t.deskData.isTaken||"Client"!==t.mode?t._e():e("div",{staticClass:"weekContainer"},[e("div",{staticClass:"weekNumber"},[e("p",[t._v("number of weeks: "+t._s(t.weeksData))])]),t._v(" "),e("div",{staticClass:"btnContainer"},[e("button",{on:{click:t.increase}},[t._v("+")]),t._v(" "),e("button",{attrs:{disabled:0===t.weeksData},on:{click:t.decrease}},[t._v("-")])])]),t._v(" "),e("div",{staticClass:"buttonWrapper"},[!1===t.deskData.isTaken&&"Client"===t.mode?e("button",{staticClass:"rentBtn",attrs:{disabled:0===t.weeksData,type:"button"},on:{click:t.rentHandler}},[t._v("\n        Rent Desk\n      ")]):t._e(),t._v(" "),t.deskData.isTaken?e("p",[t._v("Desk is rented!")]):t._e()])])])}),[],!1,null,"4c1217fc",null);e.default=component.exports}}]);