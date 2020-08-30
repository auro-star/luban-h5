(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{417:function(e,t,s){"use strict";s.r(t);var a=s(44),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"migration-guide-from-v-1-12-0-to-v-1-13-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migration-guide-from-v-1-12-0-to-v-1-13-0"}},[e._v("#")]),e._v(" Migration guide from v.1.12.0 to v.1.13.0")]),e._v(" "),s("p",[e._v("Upgrading your Luban-H5 application to "),s("code",[e._v("v.1.13.0")]),e._v(".")]),e._v(" "),s("p",[e._v("Here are the minor changes:\nremame works table column "),s("code",[e._v("mode")]),e._v(" to "),s("code",[e._v("page_mode")])]),e._v(" "),s("p",[e._v("To upgrade a project to the "),s("code",[e._v("v.1.13.0")]),e._v(" version of Luban-H5 follow the instructions below.")]),e._v(" "),s("h2",{attrs:{id:"steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),s("ol",[s("li",[e._v("choose database and exec the sql")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("MySQL")]),e._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ALTER")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TABLE")]),e._v(" works "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RENAME")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("COLUMN")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("mode")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TO")]),e._v(" page_mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("sqlite")]),e._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sqlite3 luban-h5/back-end/h5-api/.tmp/data.db")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ALTER")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TABLE")]),e._v(" works "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RENAME")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("COLUMN")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("mode")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TO")]),e._v(" page_mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])])]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("update front-end")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# clone the newest code")]),e._v("\n./luban-h5 rebuild_fe\n./luban-h5 restart\n")])])]),s("p",[e._v("feel free open an "),s("a",{attrs:{href:"https://github.com/ly525/luban-h5/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),s("OutboundLink")],1),e._v(" if you have questions about this.")])])}),[],!1,null,null,null);t.default=r.exports}}]);