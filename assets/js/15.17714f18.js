(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{328:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"涉及需要分表的count操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#涉及需要分表的count操作"}},[t._v("#")]),t._v(" 涉及需要分表的count操作")]),t._v(" "),s("p",[t._v("代码内，执行的sql：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("distinct")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" buyUserCount "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" orders o "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" user_child uc "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" user_addr ua "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ua"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pay_time"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v("? "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pay_time"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v("?\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("实际执行（当查询不涉及分表字段，定位不出实际需要查哪张表，shardingsphere会查询所有分表）：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTINCT")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id buyUserCount "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" orders2019 o "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" user_child uc "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" user_addr ua "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ua"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pay_time"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v("? "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pay_time"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v("?\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTINCT")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id buyUserCount "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" orders2019 o "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" user_child uc "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" user_addr ua "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ua"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pay_time"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v("? "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pay_time"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v("?\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("以上查询结果为多个user_id的集合，shardingsphere回合并这些集合，返回String类型的数量，当数量为0的时候返回null")]),t._v(" "),s("p",[t._v("鉴于以上分析，使用count查询时，无法使用((Number) sqlQuery.uniqueResult()).intValue()返回int数量。需要改为： Object retNum = sqlQuery.uniqueResult(); return retNum == null ? 0 : Integer.parseInt(retNum.toString());")]),t._v(" "),s("h2",{attrs:{id:"resultset与model的映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resultset与model的映射"}},[t._v("#")]),t._v(" resultSet与model的映射")]),t._v(" "),s("p",[t._v("model类型需要和数据库字段类型对应，否则会出现异常，如：当数据库为varchar类型，model为int类型的时候，分表查询时会出现类型转换异常，但是当涉及分表字段，定位出准确表名的时候又不会报错")]),t._v(" "),s("h2",{attrs:{id:"使用group-by函数时-会被自动加上order-by"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用group-by函数时-会被自动加上order-by"}},[t._v("#")]),t._v(" 使用group by函数时，会被自动加上order by")]),t._v(" "),s("p",[t._v("order by的内容与group by 后的内容相同")]),t._v(" "),s("h2",{attrs:{id:"使用逻辑表名来明确列所属表-且sql内包含group-by语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用逻辑表名来明确列所属表-且sql内包含group-by语句"}},[t._v("#")]),t._v(" 使用逻辑表名来明确列所属表，且sql内包含group by语句")]),t._v(" "),s("p",[t._v("不使用逻辑表名来明确列所属表，以下sql为例，orders为逻辑表名（sql内使用的的表名），实际查询的表为orders2019和orders2020")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_id activityId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id actItemId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title actTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" orderNums "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("? "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expires_at"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("? "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("上述sql使用逻辑表名明确列的归属，经过shardingsphere的处理后变成以下两个sql，由于被加上order by，且orders没被替换为实际的表名，导致sql报错")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("rders2019"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_id activityId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id actItemId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title actTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" orderNums "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" orders2019"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orders2019"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" orders2019"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("? "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expires_at"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("? "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" orders2019"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" orders2020"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_id activityId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id actItemId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title actTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" orderNums "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" orders2020"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orders2020"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" orders2020"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("? "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expires_at"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("? "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" orders2020"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ASC")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("以上错误只需要给逻辑表名添加上别名即可，可以是符合语法的任何别名")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_id activityId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id actItemId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title actTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" orderNums "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" orders orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("? "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expires_at"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("? "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("act_item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("act_item_id\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"数据库的表字段名不能为channel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库的表字段名不能为channel"}},[t._v("#")]),t._v(" 数据库的表字段名不能为channel")]),t._v(" "),s("p",[t._v("疑似shardingsphere的关键词，带有channel字段名的sql语句不能被正确解析。")])])}),[],!1,null,null,null);s.default=e.exports}}]);