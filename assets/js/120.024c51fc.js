(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{359:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" Options "),e("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"symbol-info"},[e("table",{staticClass:"is-full-width"},[e("tbody",[e("tr",[e("th",[t._v("Module")]),e("td",[e("div",{staticClass:"lang-typescript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Options } "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),e("tr",[e("th",[t._v("Source")]),e("td",[e("a",{attrs:{href:"https://github.com/TypedProject/ts-express-decorators/blob/v5.32.2/packages/common/src/mvc/decorators/method/route.ts#L0-L0"}},[t._v("/packages/common/src/mvc/decorators/method/route.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"typescript-lang "},[t._v("function "),e("span",{staticClass:"token function"},[t._v("Options")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("path?"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("string")]),t._v(" | RegExp | "),e("span",{staticClass:"token keyword"},[t._v("any")]),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" ...args"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("any")]),e("span",{staticClass:"token punctuation"},[t._v("[")]),e("span",{staticClass:"token punctuation"},[t._v("]")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" Function"),e("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("This method is just like the "),s("code",[this._v("router.METHOD()")]),this._v(" methods, except that it matches all HTTP methods (verbs).")]),this._v(" "),s("p",[this._v("This method is extremely useful for mapping “global” logic for specific path prefixes or arbitrary matches.\nFor example, if you placed the following route at the top of all other route definitions, it would require that\nall routes from that point on would require authentication, and automatically load a user.\nKeep in mind that these callbacks do not have to act as end points; loadUser can perform a task, then call next()\nto continue matching subsequent routes.")])])}],!1,null,null,null);s.default=n.exports}}]);