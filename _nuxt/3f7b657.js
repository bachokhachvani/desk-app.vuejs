(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{326:function(e,t,r){var content=r(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(86).default)("c8b8f19a",content,!0,{sourceMap:!1})},343:function(e,t,r){"use strict";r(326)},344:function(e,t,r){var o=r(85)(!1);o.push([e.i,".main[data-v-2e54564c]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:10%}.main h3[data-v-2e54564c]{text-align:center;margin-bottom:30px;color:#2b429d}.main form[data-v-2e54564c]{display:flex;flex-direction:column;grid-gap:20px;gap:20px}.main form div[data-v-2e54564c]{display:flex;justify-content:space-between}.main button[data-v-2e54564c]{background-color:#2b429d;border-radius:8px;color:#fff;border:none;height:30px;cursor:pointer}input[data-v-2e54564c],label[data-v-2e54564c]{width:100px}label[data-v-2e54564c]{color:#2b429d;margin-right:20px;font-weight:600}",""]),e.exports=o},359:function(e,t,r){"use strict";r.r(t);r(26),r(37);var o=r(32),n=r(134),l=r(133),d={name:"Register",data:function(){return{name:"",email:"",password:""}},computed:{},methods:{submitHandler:function(){var e=JSON.parse(localStorage.getItem("users"))||Object(o.a)(l.userData);e.push(new n.default(this.name,this.email,this.password)),localStorage.setItem("users",JSON.stringify(e)),this.$store.dispatch("getUpdatedUsersAfterRegister",{users:e}),this.$router.push("/login")}}},m=(r(343),r(58)),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"main"},[t("div",[t("h3",[e._v("Register")]),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.submitHandler.apply(null,arguments)}}},[t("div",[t("label",{attrs:{for:"name"}},[e._v("Name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),t("div",[t("label",{attrs:{for:"email"}},[e._v("Email")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.email,expression:"email",modifiers:{trim:!0}}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),t("div",[t("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.password,expression:"password",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),t("button",[e._v("Register")])])])])}),[],!1,null,"2e54564c",null);t.default=component.exports}}]);