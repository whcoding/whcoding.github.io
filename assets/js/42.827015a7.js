(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{356:function(s,a,t){"use strict";t.r(a);var e=t(7),l=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"mysql-binlog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-binlog"}},[s._v("#")]),s._v(" mysql binlog")]),s._v(" "),a("h3",{attrs:{id:"binlog-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binlog-常用命令"}},[s._v("#")]),s._v(" binlog 常用命令")]),s._v(" "),a("ol",[a("li",[s._v("查看是否开启")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("show variables like 'log_%'; \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("查看当前使用的biglog 日志")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("show master status;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("查看全部biglog日志")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("show master LOGS;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("刷新 binlog 日志. 产生一个新的文件")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("flush logs;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("重置(清空)所有 binlog 日志")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("reset master;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"开启binlog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启binlog"}},[s._v("#")]),s._v(" 开启binlog")]),s._v(" "),a("ul",[a("li",[s._v("在my.cnf中加入")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nserver_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nlog_bin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /var/log/mysql/mysql-bin.log\nexpire_logs_days "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nmax_binlog_size  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 100M\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);a.default=l.exports}}]);