(window.webpackJsonp=window.webpackJsonp||[]).push([[622],{867:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("Badge",{attrs:{text:"beta",type:"warn"}}),s._v(" "),a("Banner",{attrs:{src:"https://ajv.js.org/images/ajv_logo.png",href:"https://ajv.js.org/",height:"100"}}),s._v(" "),a("p",[s._v("This tutorials show you, how you can validate your data with decorators.")]),s._v(" "),a("p",[s._v("Validation feature use "),a("a",{attrs:{href:"https://github.com/epoberezkin/ajv",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ajv"),a("OutboundLink")],1),s._v("\nand "),a("a",{attrs:{href:"http://json-schema.org/latest/json-schema-validation.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("json-schema"),a("OutboundLink")],1),s._v(" to perform the model validation.")]),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("Before using the validation decorators, we need to install the "),a("a",{attrs:{href:"https://www.npmjs.com/package/ajv",target:"_blank",rel:"noopener noreferrer"}},[s._v("ajv"),a("OutboundLink")],1),s._v(" module.")]),s._v(" "),s._m(2),a("p",[s._v("Then import "),a("code",[s._v("@tsed/ajv")]),s._v(" in your "),a("router-link",{attrs:{to:"/api/common/server/components/ServerLoader.html"}},[s._v("ServerLoader")]),s._v(":")],1),s._v(" "),s._m(3),a("p",[s._v("The AJV module allows a few settings to be added through the ServerSettings (all are optional):")]),s._v(" "),s._m(4),s._v(" "),a("p",[s._v("The error message could be changed like:")]),s._v(" "),s._m(5),s._m(6),s._v(" "),a("p",[s._v("Ts.ED given some decorators to write your validation model:")]),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),a("p",[s._v("A model can used on a method controller along with "),a("router-link",{attrs:{to:"/api/common/filters/decorators/BodyParams.html"}},[s._v("@BodyParams")]),s._v(" or other decorators, and will\nbe validated by Ajv.")],1),s._v(" "),s._m(10),s._m(11),s._v(" "),s._m(12),s._v(" "),a("p",[s._v("When a validation error occur, AJV generate an errors list with a full description like this:")]),s._v(" "),s._m(13),a("p",[s._v("This information can be retrieved in the response headers:")]),s._v(" "),s._m(14)],1)},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"ajv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ajv","aria-hidden":"true"}},[this._v("#")]),this._v(" AJV")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" --save ajv\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ServerLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ServerSettings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/common"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/ajv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import ajv ts.ed module")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ServerSettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rootDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" __dirname\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServerLoader")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[t("em",[this._v("options")]),this._v(", are AJV specific options passed directly to the AJV constructor,")]),this._v(" "),t("li",[t("em",[this._v("errorFormat")]),this._v(", can be used to alter the output produced by the AjvService.")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ServerLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ServerSettings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/common"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/ajv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import ajv ts.ed module")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ServerSettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rootDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" __dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     ajv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("errorFormat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("`At ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("modelName"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dataPath"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v(", value '")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("verbose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServerLoader")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"decorators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decorators","aria-hidden":"true"}},[this._v("#")]),this._v(" Decorators")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",{staticClass:"api-list"},[a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;AllowTypes;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-AllowTypes",attrs:{href:"#/api/common/jsonschema/allowtypes",title:"AllowTypes"}},[a("span",{staticClass:"symbol decorator"}),s._v("AllowTypes")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Default;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Default",attrs:{href:"#/api/common/jsonschema/default",title:"Default"}},[a("span",{staticClass:"symbol decorator"}),s._v("Default")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Email;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Email",attrs:{href:"#/api/common/jsonschema/email",title:"Email"}},[a("span",{staticClass:"symbol decorator"}),s._v("Email")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Enum;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Enum",attrs:{href:"#/api/common/jsonschema/enum",title:"Enum"}},[a("span",{staticClass:"symbol decorator"}),s._v("Enum")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;ExclusiveMaximum;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-ExclusiveMaximum",attrs:{href:"#/api/common/jsonschema/exclusivemaximum",title:"ExclusiveMaximum"}},[a("span",{staticClass:"symbol decorator"}),s._v("ExclusiveMaximum")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;ExclusiveMinimum;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-ExclusiveMinimum",attrs:{href:"#/api/common/jsonschema/exclusiveminimum",title:"ExclusiveMinimum"}},[a("span",{staticClass:"symbol decorator"}),s._v("ExclusiveMinimum")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Format;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Format",attrs:{href:"#/api/common/jsonschema/format",title:"Format"}},[a("span",{staticClass:"symbol decorator"}),s._v("Format")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MaxItems;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MaxItems",attrs:{href:"#/api/common/jsonschema/maxitems",title:"MaxItems"}},[a("span",{staticClass:"symbol decorator"}),s._v("MaxItems")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MaxLength;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MaxLength",attrs:{href:"#/api/common/jsonschema/maxlength",title:"MaxLength"}},[a("span",{staticClass:"symbol decorator"}),s._v("MaxLength")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MaxProperties;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MaxProperties",attrs:{href:"#/api/common/jsonschema/maxproperties",title:"MaxProperties"}},[a("span",{staticClass:"symbol decorator"}),s._v("MaxProperties")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Maximum;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Maximum",attrs:{href:"#/api/common/jsonschema/maximum",title:"Maximum"}},[a("span",{staticClass:"symbol decorator"}),s._v("Maximum")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MinItems;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MinItems",attrs:{href:"#/api/common/jsonschema/minitems",title:"MinItems"}},[a("span",{staticClass:"symbol decorator"}),s._v("MinItems")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MinLength;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MinLength",attrs:{href:"#/api/common/jsonschema/minlength",title:"MinLength"}},[a("span",{staticClass:"symbol decorator"}),s._v("MinLength")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MinProperties;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MinProperties",attrs:{href:"#/api/common/jsonschema/minproperties",title:"MinProperties"}},[a("span",{staticClass:"symbol decorator"}),s._v("MinProperties")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Minimum;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Minimum",attrs:{href:"#/api/common/jsonschema/minimum",title:"Minimum"}},[a("span",{staticClass:"symbol decorator"}),s._v("Minimum")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MultipleOf;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MultipleOf",attrs:{href:"#/api/common/jsonschema/multipleof",title:"MultipleOf"}},[a("span",{staticClass:"symbol decorator"}),s._v("MultipleOf")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Pattern;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Pattern",attrs:{href:"#/api/common/jsonschema/pattern",title:"Pattern"}},[a("span",{staticClass:"symbol decorator"}),s._v("Pattern")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Schema;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Schema",attrs:{href:"#/api/common/jsonschema/schema",title:"Schema"}},[a("span",{staticClass:"symbol decorator"}),s._v("Schema")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Title;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Title",attrs:{href:"#/api/common/jsonschema/title",title:"Title"}},[a("span",{staticClass:"symbol decorator"}),s._v("Title")])]),a("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;UniqueItems;decorator;@;false;false;false;false"}},[a("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-UniqueItems",attrs:{href:"#/api/common/jsonschema/uniqueitems",title:"UniqueItems"}},[a("span",{staticClass:"symbol decorator"}),s._v("UniqueItems")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"model-validation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#model-validation","aria-hidden":"true"}},[this._v("#")]),this._v(" Model validation")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Required"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MaxLength"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MinLength"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Minimum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Maximum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Enum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Pattern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/common"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CalendarModel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("MaxLength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("MinLength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Minimum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Maximum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    rating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or date-time, etc...")]),s._v("\n    createDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/hello/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    customInput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Enum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    customInput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("All validation decorators are compatible with the Swagger documentation.")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"validation-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validation-error","aria-hidden":"true"}},[this._v("#")]),this._v(" Validation error")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keyword"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"minLength"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dataPath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"schemaPath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#/properties/password/minLength"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"should NOT be shorter than 6 characters"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"modelName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' connection: keep-alive\n content-length: 18\n content-type: text/html; charset=utf-8\n date: Wed, 16 May 2018 07:32:23 GMT\n errors: [{"keyword": "minLength","dataPath": ".password", "schemaPath": "#/properties/password/minLength", "params": {"limit": 6}, "message": "should NOT be shorter than 6 characters", "modelName": "User"}]\n etag: W/"12-Bpa0T7/lBA6+IACzRWwBc4S6NUY"\n vary: Accept-Encoding\n x-powered-by: Express\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])}],!1,null,null,null);t.default=n.exports}}]);