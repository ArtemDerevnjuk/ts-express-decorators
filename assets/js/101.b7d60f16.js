(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{340:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller","aria-hidden":"true"}},[t._v("#")]),t._v(" Controller "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("div",{pre:!0},[t._m(4),t._v(" "),a("div",{pre:!0,attrs:{class:"tip custom-block"}},[a("p",{pre:!0,attrs:{class:"custom-block-title"}},[t._v("TIP")]),t._v(" "),a("p",[t._v("See "),a("router-link",{pre:!0,attrs:{to:"/docs/controllers.html"}},[t._v("Controllers")]),t._v(" section for more details")],1)])]),t._v(" "),t._m(5),a("p",[t._v(":::")])])},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Controller } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/ts-express-decorators/blob/v5.32.2/packages/common/src/mvc/decorators/class/controller.ts#L0-L0"}},[t._v("/packages/common/src/mvc/decorators/class/controller.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"typescript-lang "},[t._v("function "),a("span",{staticClass:"token function"},[t._v("Controller")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("options"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("a",{attrs:{href:"/api/common/mvc/interfaces/PathParamsType.html"}},[a("span",{staticClass:"token"},[t._v("PathParamsType")])]),t._v(" | "),a("a",{attrs:{href:"/api/common/mvc/interfaces/IControllerProvider.html"}},[a("span",{staticClass:"token"},[t._v("IControllerProvider")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" ...children"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("a",{attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{staticClass:"token"},[t._v("Type")])]),t._v("<"),a("span",{staticClass:"token punctuation"},[t._v(";")]),a("span",{staticClass:"token keyword"},[t._v("any")]),t._v(">"),a("span",{staticClass:"token punctuation"},[t._v(";")]),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" Function"),a("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Declare a new controller with his Rest path. His methods annotated will be collected to build the routing list.\nThis routing listing will be built with the "),s("code",[this._v("express.Router")]),this._v(" object.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v(" @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/calendars"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" provide CalendarCtrl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/:id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n     @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NextFunction\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])}],!1,null,null,null);s.default=e.exports}}]);