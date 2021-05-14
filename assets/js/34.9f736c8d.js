(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{613:function(t,s,o){"use strict";o.r(s);var a=o(39),l=Object(a.a)({},(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("ClientOnly",[o("Common-code-format",[o("div",{staticClass:"component",attrs:{slot:"componentNameTitle"},slot:"componentNameTitle"},[o("header",{staticClass:"component-name"},[t._v("\n      layout布局\n    ")]),t._v(" "),o("p",{staticClass:"component-text"},[t._v("\n      根据 24 分栏，可以简便地布局。\n    ")])]),t._v(" "),o("div",{attrs:{slot:"description"},slot:"description"},[o("header",{staticClass:"vi-description-title"},[t._v("\n      基础布局\n    ")]),t._v("\n    使用单一分栏创建基础的栅格布局。\n  ")]),t._v(" "),o("div",{staticClass:"df-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[o("Layout-df-layout")],1),t._v(" "),o("section",{staticClass:"df-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[o("p",{staticClass:"vi-paraStyle-wrapper"},[t._v("\n      通过 row 和 col 组件，并通过 col 组件的 "),o("span",{staticClass:"vi-paraStyle"},[t._v("span")]),t._v("属性我们就可以自由地组合布局。\n    ")])]),t._v(" "),o("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v('<df-row>\n    <df-col :span="12">\n      <div class="layout-content bg-purple-dark"></div>\n    </df-col>\n    <df-col :span="12">\n      <div class="layout-content bg-purple-light"></div>\n    </df-col>\n</df-row>\n')])])])])],1)],1),t._v(" "),o("ClientOnly",[o("Common-code-format",[o("div",{attrs:{slot:"description"},slot:"description"},[o("header",{staticClass:"vi-description-title"},[t._v("\n      分栏间隔\n    ")]),t._v("\n    分栏之间存在间隔。\n  ")]),t._v(" "),o("div",{staticClass:"vi-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[o("Layout-df-layout-gutter")],1),t._v(" "),o("section",{staticClass:"vi-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[o("p",{staticClass:"vi-paraStyle-wrapper"},[t._v("\n      Row 组件提供"),o("span",{staticClass:"vi-paraStyle"},[t._v("gutter")]),t._v("属性来指定每一栏之间的间隔，默认间隔为 0。\n    ")])]),t._v(" "),o("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v('<df-row :gutter="20">\n  <df-col :span="6">\n    <div class="layout-content bg-purple-dark"></div>\n  </df-col>\n  <df-col :span="6">\n    <div class="layout-content bg-purple-light"></div>\n  </df-col>\n  <df-col :span="6">\n    <div class="layout-content bg-purple-dark"></div>\n  </df-col>\n  <df-col :span="6">\n    <div class="layout-content bg-purple-light"></div>\n  </df-col>\n</df-row>\n')])])])])],1)],1),t._v(" "),o("ClientOnly",[o("Common-code-format",[o("div",{attrs:{slot:"description"},slot:"description"},[o("header",{staticClass:"vi-description-title"},[t._v("\n      分栏偏移\n    ")]),t._v("\n    支持偏移指定的比例。\n  ")]),t._v(" "),o("div",{staticClass:"vi-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[o("Layout-df-layout-offset")],1),t._v(" "),o("section",{staticClass:"vi-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[o("p",{staticClass:"vi-paraStyle-wrapper"},[t._v("\n      通过 col 组件提供"),o("span",{staticClass:"vi-paraStyle"},[t._v("offset")]),t._v("属性可以指定分栏偏移的比例。\n    ")])]),t._v(" "),o("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v('<df-row :gutter="20">\n  <df-col :span="6">\n    <div class="layout-content bg-purple-dark"></div>\n  </df-col>\n  <df-col :span="6" offset="6">\n    <div class="layout-content bg-purple-light"></div>\n  </df-col>\n</df-row>\n<df-row>\n  <df-col :span="6" offset="6">\n    <div class="layout-content bg-purple-dark"></div>\n  </df-col>\n  <df-col :span="6">\n    <div class="layout-content bg-purple-light"></div>\n  </df-col>\n</df-row>\n')])])])])],1)],1),t._v(" "),o("ClientOnly",[o("Common-code-format",[o("div",{attrs:{slot:"description"},slot:"description"},[o("header",{staticClass:"vi-description-title"},[t._v("\n      对齐方式\n    ")]),t._v("\n    通过 flex 布局来对分栏进行灵活的对齐。\n  ")]),t._v(" "),o("div",{staticClass:"vi-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[o("Layout-df-layout-flex")],1),t._v(" "),o("section",{staticClass:"vi-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[o("p",{staticClass:"vi-paraStyle-wrapper"},[t._v("\n      通过"),o("span",{staticClass:"vi-paraStyle"},[t._v("justify")]),t._v("属性来指定"),o("span",{staticClass:"vi-paraStyle"},[t._v("end")]),t._v("，"),o("span",{staticClass:"vi-paraStyle"},[t._v("center")]),t._v("，"),o("span",{staticClass:"vi-paraStyle"},[t._v("between")]),t._v("，"),o("span",{staticClass:"vi-paraStyle"},[t._v("around")]),t._v("其中的值来定义子元素的排版方式，默认值为"),o("span",{staticClass:"vi-paraStyle"},[t._v("start")]),t._v("。\n    ")])]),t._v(" "),o("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v('<df-row :gutter="20" justify="center">\n  <df-col :span="6">\n    <div class="layout-content bg-purple-dark"></div>\n  </df-col>\n  <df-col :span="6">\n    <div class="layout-content bg-purple-dark"></div>\n  </df-col>\n</df-row >\n<df-row justify="end">\n  <df-col :span="6">\n    <div class="layout-content bg-purple-dark"></div>\n  </df-col>\n  <df-col :span="6">\n    <div class="layout-content bg-purple-dark"></div>\n  </df-col>\n</df-row>\n<df-row justify="between">\n  <df-col :span="6">\n    <div class="layout-content bg-purple-dark"></div>\n  </df-col>\n  <df-col :span="6">\n    <div class="layout-content bg-purple-dark"></div>\n  </df-col>\n</df-row>\n<df-row justify="around">\n  <df-col :span="6">\n    <div class="layout-content bg-purple-dark"></div>\n  </df-col>\n  <df-col :span="6">\n    <div class="layout-content bg-purple-dark"></div>\n  </df-col>\n</df-row>\n')])])])])],1)],1),t._v(" "),o("h3",{attrs:{id:"row-attributes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#row-attributes"}},[t._v("#")]),t._v(" Row Attributes")]),t._v(" "),o("ClientOnly",[o("Common-create-form",[o("thead",{staticClass:"formHead",attrs:{slot:"form-header"},slot:"form-header"},[o("tr",{staticClass:"formHeadRow"},[o("th",{staticClass:"formHeadCol"},[t._v("参数")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("说明")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("类型")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("可选值")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("默认值值")])])]),t._v(" "),o("tbody",{staticClass:"formBody",attrs:{slot:"form-body"},slot:"form-body"},[o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("gutter")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("栅格间隔")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("number")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("justify")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("flex 布局下的水平排列方式")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("string")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("end / center / around / between")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("start")])])])])],1),t._v(" "),o("h3",{attrs:{id:"col-attributes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#col-attributes"}},[t._v("#")]),t._v(" Col Attributes")]),t._v(" "),o("ClientOnly",[o("Common-create-form",[o("thead",{staticClass:"formHead",attrs:{slot:"form-header"},slot:"form-header"},[o("tr",{staticClass:"formHeadRow"},[o("th",{staticClass:"formHeadCol"},[t._v("参数")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("说明")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("类型")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("可选值")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("默认值")])])]),t._v(" "),o("tbody",{staticClass:"formBody",attrs:{slot:"form-body"},slot:"form-body"},[o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("span")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("栅格占据的列数")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("number")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("24")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("offset")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("栅格左侧的间隔格数")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("number")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("0")])])])])],1)],1)}),[],!1,null,null,null);s.default=l.exports}}]);