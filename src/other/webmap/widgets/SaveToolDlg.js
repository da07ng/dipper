/*
 * @Author: Esri
 * @Date:   2016-05-04 11:08:25
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-09-10 16:47:14
 */

define([
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/dom-style",
    "mapwidgets/HySelectTree",
    "dojo/store/Memory",
    "dijit/tree/ObjectStoreModel",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/template_tool_save.html",
    "mapwidgets/_StyledCheckboxTreeNode"
], function(declare, dom, domStyle, Tree, Memory, ObjectStoreModel, TemplatedMixin, _WidgetsInTemplateMixin, template) {
    return declare('mapwidgets.SaveToolDlg', [arcgisonline.sharing.dijit.dialog.SaveWebMapDlg, TemplatedMixin, _WidgetsInTemplateMixin], {

        _hasLevel2Bz: false,
        _hasLevel2Hy: false,
        _level1BzValue: null,
        _level2BzValue: null,
        _level1HyValue: null,
        _level2HyValue: null,

        _mockData: [{
            "name": "公安",
            "type": "1",
            "count": null,
            "description": "公安",
            "children": [{
                "name": "视频点",
                "type": "1",
                "count": null,
                "description": "视频点",
                "children": [],
                "code": "1175",
                "ord": "129",
                "pcode": "1146"
            }, {
                "name": "卡口点",
                "type": "1",
                "count": null,
                "description": "卡口点",
                "children": [],
                "code": "1176",
                "ord": "130",
                "pcode": "1146"
            }, {
                "name": "消防设施",
                "type": "1",
                "count": null,
                "description": "消防设施",
                "children": [],
                "code": "1177",
                "ord": "131",
                "pcode": "1146"
            }, {
                "name": "监控电子眼",
                "type": "1",
                "count": null,
                "description": "监控电子眼",
                "children": [],
                "code": "1178",
                "ord": "132",
                "pcode": "1146"
            }, {
                "name": "治安岗亭",
                "type": "1",
                "count": null,
                "description": "治安岗亭",
                "children": [],
                "code": "1325",
                "ord": "278",
                "pcode": "1146"
            }],
            "code": "1146",
            "ord": "98",
            "pcode": "1000"
        }, {
            "name": "机构编制",
            "type": "1",
            "count": null,
            "description": "机构编制",
            "children": [{
                "name": "事业单位",
                "type": "1",
                "count": null,
                "description": "事业单位",
                "children": [{
                    "name": "政府直属事业单位",
                    "type": "1",
                    "count": null,
                    "description": "政府直属事业单位\n",
                    "children": [{
                        "name": "派出所",
                        "type": "1",
                        "count": null,
                        "description": "派出所",
                        "children": [],
                        "code": "1181",
                        "ord": "135",
                        "pcode": "1180"
                    }],
                    "code": "1180",
                    "ord": "134",
                    "pcode": "1179"
                }],
                "code": "1179",
                "ord": "133",
                "pcode": "1153"
            }, {
                "name": "政府机关",
                "type": "1",
                "count": null,
                "description": "政府机关",
                "children": [],
                "code": "1324",
                "ord": "277",
                "pcode": "1153"
            }],
            "code": "1153",
            "ord": "99",
            "pcode": "1000"
        }, {
            "name": "发展和改革",
            "type": "1",
            "count": null,
            "description": "发展和改革",
            "children": [{
                "name": "发展规划",
                "type": "1",
                "count": null,
                "description": "发展规划",
                "children": [{
                    "name": "主体功能区划",
                    "type": "1",
                    "count": null,
                    "description": "主体功能区划",
                    "children": [],
                    "code": "1183",
                    "ord": "137",
                    "pcode": "1182"
                }, {
                    "name": "区域发展规划",
                    "type": "1",
                    "count": null,
                    "description": "区域发展规划",
                    "children": [],
                    "code": "1184",
                    "ord": "138",
                    "pcode": "1182"
                }, {
                    "name": "产业布局",
                    "type": "1",
                    "count": null,
                    "description": "产业布局",
                    "children": [],
                    "code": "1185",
                    "ord": "139",
                    "pcode": "1182"
                }],
                "code": "1182",
                "ord": "136",
                "pcode": "1164"
            }, {
                "name": "产业区块",
                "type": "1",
                "count": null,
                "description": "产业区块",
                "children": [{
                    "name": "产业基地",
                    "type": "1",
                    "count": null,
                    "description": "产业基地",
                    "children": [],
                    "code": "1187",
                    "ord": "141",
                    "pcode": "1186"
                }, {
                    "name": "产业信息园",
                    "type": "1",
                    "count": null,
                    "description": "产业信息园",
                    "children": [],
                    "code": "1188",
                    "ord": "142",
                    "pcode": "1186"
                }],
                "code": "1186",
                "ord": "140",
                "pcode": "1164"
            }, {
                "name": "能源设施",
                "type": "1",
                "count": null,
                "description": "能源设施",
                "children": [{
                    "name": "火力发电站",
                    "type": "1",
                    "count": null,
                    "description": "火力发电站",
                    "children": [],
                    "code": "1190",
                    "ord": "144",
                    "pcode": "1189"
                }, {
                    "name": "水利发电站",
                    "type": "1",
                    "count": null,
                    "description": "水利发电站",
                    "children": [],
                    "code": "1191",
                    "ord": "145",
                    "pcode": "1189"
                }],
                "code": "1189",
                "ord": "143",
                "pcode": "1164"
            }],
            "code": "1164",
            "ord": "100",
            "pcode": "1000"
        }, {
            "name": "经济和信息化",
            "type": "1",
            "count": null,
            "description": "经济和信息化",
            "children": [{
                "name": "产业区块",
                "type": "1",
                "count": null,
                "description": "产业区块",
                "children": [{
                    "name": "产业示范基地",
                    "type": "1",
                    "count": null,
                    "description": "产业示范基地",
                    "children": [],
                    "code": "1193",
                    "ord": "147",
                    "pcode": "1192"
                }, {
                    "name": "工业园区",
                    "type": "1",
                    "count": null,
                    "description": "工业园区",
                    "children": [],
                    "code": "1194",
                    "ord": "148",
                    "pcode": "1192"
                }, {
                    "name": "高新技术园区",
                    "type": "1",
                    "count": null,
                    "description": "高新技术园区",
                    "children": [],
                    "code": "1195",
                    "ord": "149",
                    "pcode": "1192"
                }],
                "code": "1192",
                "ord": "146",
                "pcode": "1154"
            }],
            "code": "1154",
            "ord": "101",
            "pcode": "1000"
        }, {
            "name": "国土资源",
            "type": "1",
            "count": null,
            "description": "国土资源",
            "children": [{
                "name": "地质监测",
                "type": "1",
                "count": null,
                "description": "地质监测",
                "children": [],
                "code": "1196",
                "ord": "150",
                "pcode": "1147"
            }, {
                "name": "地质灾害",
                "type": "1",
                "count": null,
                "description": "地质灾害",
                "children": [],
                "code": "1197",
                "ord": "151",
                "pcode": "1147"
            }, {
                "name": "矿产资源",
                "type": "1",
                "count": null,
                "description": "矿产资源",
                "children": [{
                    "name": "矿产资源规划",
                    "type": "1",
                    "count": null,
                    "description": "矿产资源规划",
                    "children": [],
                    "code": "1199",
                    "ord": "153",
                    "pcode": "1198"
                }, {
                    "name": "矿业权",
                    "type": "1",
                    "count": null,
                    "description": "矿业权",
                    "children": [],
                    "code": "1200",
                    "ord": "154",
                    "pcode": "1198"
                }],
                "code": "1198",
                "ord": "152",
                "pcode": "1147"
            }, {
                "name": "土地资源",
                "type": "1",
                "count": null,
                "description": "土地资源",
                "children": [{
                    "name": "储备地块",
                    "type": "1",
                    "count": null,
                    "description": "储备地块",
                    "children": [],
                    "code": "1202",
                    "ord": "156",
                    "pcode": "1201"
                }, {
                    "name": "城镇地籍",
                    "type": "1",
                    "count": null,
                    "description": "城镇地籍",
                    "children": [],
                    "code": "1203",
                    "ord": "157",
                    "pcode": "1201"
                }, {
                    "name": "基本农田",
                    "type": "1",
                    "count": null,
                    "description": "基本农田",
                    "children": [{
                        "name": "2009年",
                        "type": "1",
                        "count": null,
                        "description": "2009年",
                        "children": [],
                        "code": "1333",
                        "ord": "286",
                        "pcode": "1204"
                    }, {
                        "name": "2010年",
                        "type": "1",
                        "count": null,
                        "description": "2010年",
                        "children": [],
                        "code": "1334",
                        "ord": "287",
                        "pcode": "1204"
                    }, {
                        "name": "2011年",
                        "type": "1",
                        "count": null,
                        "description": "2011年",
                        "children": [],
                        "code": "1335",
                        "ord": "288",
                        "pcode": "1204"
                    }, {
                        "name": "2012年",
                        "type": "1",
                        "count": null,
                        "description": "2012年",
                        "children": [],
                        "code": "1336",
                        "ord": "289",
                        "pcode": "1204"
                    }, {
                        "name": "2013年",
                        "type": "1",
                        "count": null,
                        "description": "2013年",
                        "children": [],
                        "code": "1337",
                        "ord": "290",
                        "pcode": "1204"
                    }, {
                        "name": "2014年",
                        "type": "1",
                        "count": null,
                        "description": "2014年",
                        "children": [],
                        "code": "1338",
                        "ord": "291",
                        "pcode": "1204"
                    }],
                    "code": "1204",
                    "ord": "158",
                    "pcode": "1201"
                }, {
                    "name": "土地供应",
                    "type": "1",
                    "count": null,
                    "description": "土地供应",
                    "children": [],
                    "code": "1205",
                    "ord": "159",
                    "pcode": "1201"
                }, {
                    "name": "建设用地",
                    "type": "1",
                    "count": null,
                    "description": "建设用地",
                    "children": [],
                    "code": "1206",
                    "ord": "160",
                    "pcode": "1201"
                }, {
                    "name": "基准地价",
                    "type": "1",
                    "count": null,
                    "description": "基准地价",
                    "children": [],
                    "code": "1207",
                    "ord": "161",
                    "pcode": "1201"
                }, {
                    "name": "土地利用现状",
                    "type": "1",
                    "count": null,
                    "description": "土地利用现状",
                    "children": [{
                        "name": "2009年",
                        "type": "1",
                        "count": null,
                        "description": "2009年",
                        "children": [],
                        "code": "1339",
                        "ord": "292",
                        "pcode": "1208"
                    }, {
                        "name": "2010年",
                        "type": "1",
                        "count": null,
                        "description": "2010年",
                        "children": [],
                        "code": "1340",
                        "ord": "293",
                        "pcode": "1208"
                    }, {
                        "name": "2011年",
                        "type": "1",
                        "count": null,
                        "description": "2011年",
                        "children": [],
                        "code": "1341",
                        "ord": "294",
                        "pcode": "1208"
                    }, {
                        "name": "2012年",
                        "type": "1",
                        "count": null,
                        "description": "2012年",
                        "children": [],
                        "code": "1342",
                        "ord": "295",
                        "pcode": "1208"
                    }, {
                        "name": "2013年",
                        "type": "1",
                        "count": null,
                        "description": "2013年",
                        "children": [],
                        "code": "1343",
                        "ord": "296",
                        "pcode": "1208"
                    }, {
                        "name": "2014年",
                        "type": "1",
                        "count": null,
                        "description": "2014年",
                        "children": [],
                        "code": "1344",
                        "ord": "297",
                        "pcode": "1208"
                    }],
                    "code": "1208",
                    "ord": "162",
                    "pcode": "1201"
                }, {
                    "name": "储备土地计划",
                    "type": "1",
                    "count": null,
                    "description": "储备土地计划",
                    "children": [],
                    "code": "1209",
                    "ord": "163",
                    "pcode": "1201"
                }],
                "code": "1201",
                "ord": "155",
                "pcode": "1147"
            }, {
                "name": "国土资源规划",
                "type": "1",
                "count": null,
                "description": "国土资源规划",
                "children": [{
                    "name": "土地规划",
                    "type": "1",
                    "count": null,
                    "description": "土地规划",
                    "children": [{
                        "name": "2010年",
                        "type": "1",
                        "count": null,
                        "description": "2010年",
                        "children": [],
                        "code": "1345",
                        "ord": "298",
                        "pcode": "1211"
                    }, {
                        "name": "2013年",
                        "type": "1",
                        "count": null,
                        "description": "2013年",
                        "children": [],
                        "code": "1346",
                        "ord": "299",
                        "pcode": "1211"
                    }, {
                        "name": "2014年",
                        "type": "1",
                        "count": null,
                        "description": "2014年",
                        "children": [],
                        "code": "1347",
                        "ord": "300",
                        "pcode": "1211"
                    }],
                    "code": "1211",
                    "ord": "165",
                    "pcode": "1210"
                }, {
                    "name": "城乡规划",
                    "type": "1",
                    "count": null,
                    "description": "城乡规划",
                    "children": [],
                    "code": "1212",
                    "ord": "166",
                    "pcode": "1210"
                }, {
                    "name": "城市规划",
                    "type": "1",
                    "count": null,
                    "description": "城市规划",
                    "children": [],
                    "code": "1213",
                    "ord": "167",
                    "pcode": "1210"
                }],
                "code": "1210",
                "ord": "164",
                "pcode": "1147"
            }, {
                "name": "地质环境规划",
                "type": "1",
                "count": null,
                "description": "地质环境规划",
                "children": [],
                "code": "1214",
                "ord": "168",
                "pcode": "1147"
            }],
            "code": "1147",
            "ord": "102",
            "pcode": "1000"
        }, {
            "name": "水利",
            "type": "1",
            "count": null,
            "description": "水利",
            "children": [{
                "name": "水文站",
                "type": "1",
                "count": null,
                "description": "水文站",
                "children": [],
                "code": "1215",
                "ord": "169",
                "pcode": "1159"
            }, {
                "name": "水利工程设施",
                "type": "1",
                "count": null,
                "description": "水利工程设施",
                "children": [],
                "code": "1216",
                "ord": "170",
                "pcode": "1159"
            }, {
                "name": "滩涂围垦资源",
                "type": "1",
                "count": null,
                "description": "滩涂围垦资源",
                "children": [],
                "code": "1217",
                "ord": "171",
                "pcode": "1159"
            }, {
                "name": "水资源信息",
                "type": "1",
                "count": null,
                "description": "水资源信息",
                "children": [],
                "code": "1218",
                "ord": "172",
                "pcode": "1159"
            }, {
                "name": "水利规划",
                "type": "1",
                "count": null,
                "description": "水利规划",
                "children": [],
                "code": "1219",
                "ord": "173",
                "pcode": "1159"
            }, {
                "name": "其它",
                "type": "1",
                "count": null,
                "description": "其它",
                "children": [],
                "code": "1328",
                "ord": "281",
                "pcode": "1159"
            }],
            "code": "1159",
            "ord": "103",
            "pcode": "1000"
        }, {
            "name": "海洋与渔业",
            "type": "1",
            "count": null,
            "description": "海洋与渔业",
            "children": [{
                "name": "渔港",
                "type": "1",
                "count": null,
                "description": "渔港",
                "children": [],
                "code": "1221",
                "ord": "175",
                "pcode": "1165"
            }, {
                "name": "渔场",
                "type": "1",
                "count": null,
                "description": "渔场",
                "children": [],
                "code": "1222",
                "ord": "176",
                "pcode": "1165"
            }, {
                "name": "海洋环保",
                "type": "1",
                "count": null,
                "description": "海洋环保",
                "children": [],
                "code": "1223",
                "ord": "177",
                "pcode": "1165"
            }, {
                "name": "海洋行政区域界线",
                "type": "1",
                "count": null,
                "description": "海洋行政区域界线",
                "children": [],
                "code": "1224",
                "ord": "178",
                "pcode": "1165"
            }, {
                "name": "海洋与渔业规划",
                "type": "1",
                "count": null,
                "description": "海洋与渔业规划",
                "children": [],
                "code": "1225",
                "ord": "179",
                "pcode": "1165"
            }],
            "code": "1165",
            "ord": "104",
            "pcode": "1000"
        }, {
            "name": "电力",
            "type": "1",
            "count": null,
            "description": "电力",
            "children": [{
                "name": "输配变电设施",
                "type": "1",
                "count": null,
                "description": "输配变电设施",
                "children": [],
                "code": "1226",
                "ord": "180",
                "pcode": "1145"
            }, {
                "name": "电力发展规划",
                "type": "1",
                "count": null,
                "description": "电力发展规划",
                "children": [],
                "code": "1227",
                "ord": "181",
                "pcode": "1145"
            }],
            "code": "1145",
            "ord": "105",
            "pcode": "1000"
        }, {
            "name": "教育",
            "type": "1",
            "count": null,
            "description": "教育",
            "children": [{
                "name": "教育机构",
                "type": "1",
                "count": null,
                "description": "教育机构",
                "children": [{
                    "name": "大学",
                    "type": "1",
                    "count": null,
                    "description": "大学",
                    "children": [],
                    "code": "1229",
                    "ord": "183",
                    "pcode": "1228"
                }, {
                    "name": "中学",
                    "type": "1",
                    "count": null,
                    "description": "中学",
                    "children": [],
                    "code": "1230",
                    "ord": "184",
                    "pcode": "1228"
                }, {
                    "name": "小学",
                    "type": "1",
                    "count": null,
                    "description": "小学",
                    "children": [],
                    "code": "1231",
                    "ord": "185",
                    "pcode": "1228"
                }, {
                    "name": "幼儿园",
                    "type": "1",
                    "count": null,
                    "description": "幼儿园",
                    "children": [],
                    "code": "1232",
                    "ord": "186",
                    "pcode": "1228"
                }, {
                    "name": "其它",
                    "type": "1",
                    "count": null,
                    "description": "其它",
                    "children": [],
                    "code": "1326",
                    "ord": "279",
                    "pcode": "1228"
                }],
                "code": "1228",
                "ord": "182",
                "pcode": "1151"
            }, {
                "name": "培训机构",
                "type": "1",
                "count": null,
                "description": "培训机构",
                "children": [{
                    "name": "夜校",
                    "type": "1",
                    "count": null,
                    "description": "夜校",
                    "children": [],
                    "code": "1234",
                    "ord": "188",
                    "pcode": "1233"
                }, {
                    "name": "专业培训",
                    "type": "1",
                    "count": null,
                    "description": "专业培训",
                    "children": [],
                    "code": "1235",
                    "ord": "189",
                    "pcode": "1233"
                }, {
                    "name": "高新技术研究机构",
                    "type": "1",
                    "count": null,
                    "description": "高新技术研究机构\n",
                    "children": [],
                    "code": "1236",
                    "ord": "190",
                    "pcode": "1233"
                }],
                "code": "1233",
                "ord": "187",
                "pcode": "1151"
            }],
            "code": "1151",
            "ord": "106",
            "pcode": "1000"
        }, {
            "name": "交通运输",
            "type": "1",
            "count": null,
            "description": "交通运输",
            "children": [{
                "name": "公路及附属设施",
                "type": "1",
                "count": null,
                "description": "公路及附属设施",
                "children": [{
                    "name": "车站",
                    "type": "1",
                    "count": null,
                    "description": "车站",
                    "children": [],
                    "code": "1238",
                    "ord": "192",
                    "pcode": "1237"
                }, {
                    "name": "公交站台",
                    "type": "1",
                    "count": null,
                    "description": "公交站台",
                    "children": [],
                    "code": "1239",
                    "ord": "193",
                    "pcode": "1237"
                }, {
                    "name": "国道",
                    "type": "1",
                    "count": null,
                    "description": "国道",
                    "children": [],
                    "code": "1240",
                    "ord": "194",
                    "pcode": "1237"
                }, {
                    "name": "省道",
                    "type": "1",
                    "count": null,
                    "description": "省道",
                    "children": [],
                    "code": "1241",
                    "ord": "195",
                    "pcode": "1237"
                }, {
                    "name": "县道",
                    "type": "1",
                    "count": null,
                    "description": "县道",
                    "children": [],
                    "code": "1242",
                    "ord": "196",
                    "pcode": "1237"
                }, {
                    "name": "乡道",
                    "type": "1",
                    "count": null,
                    "description": "乡道",
                    "children": [],
                    "code": "1243",
                    "ord": "196",
                    "pcode": "1237"
                }, {
                    "name": "路名牌",
                    "type": "1",
                    "count": null,
                    "description": "路名牌",
                    "children": [],
                    "code": "1244",
                    "ord": "197",
                    "pcode": "1237"
                }, {
                    "name": "路灯",
                    "type": "1",
                    "count": null,
                    "description": "路灯",
                    "children": [],
                    "code": "1245",
                    "ord": "198",
                    "pcode": "1237"
                }, {
                    "name": "停车场",
                    "type": "1",
                    "count": null,
                    "description": "停车场",
                    "children": [],
                    "code": "1246",
                    "ord": "199",
                    "pcode": "1237"
                }, {
                    "name": "加油站",
                    "type": "1",
                    "count": null,
                    "description": "加油站",
                    "children": [],
                    "code": "1247",
                    "ord": "200",
                    "pcode": "1237"
                }, {
                    "name": "其它",
                    "type": "1",
                    "count": null,
                    "description": "其它",
                    "children": [],
                    "code": "1323",
                    "ord": "276",
                    "pcode": "1237"
                }],
                "code": "1237",
                "ord": "191",
                "pcode": "1148"
            }, {
                "name": "水路及附属设施",
                "type": "1",
                "count": null,
                "description": "水路及附属设施",
                "children": [],
                "code": "1248",
                "ord": "201",
                "pcode": "1148"
            }, {
                "name": "铁路及附属设施",
                "type": "1",
                "count": null,
                "description": "铁路及附属设施",
                "children": [{
                    "name": "标准铁轨路",
                    "type": "1",
                    "count": null,
                    "description": "标准铁轨路",
                    "children": [],
                    "code": "1250",
                    "ord": "203",
                    "pcode": "1249"
                }, {
                    "name": "窄轨铁路",
                    "type": "1",
                    "count": null,
                    "description": "窄轨铁路",
                    "children": [],
                    "code": "1251",
                    "ord": "204",
                    "pcode": "1249"
                }],
                "code": "1249",
                "ord": "202",
                "pcode": "1148"
            }, {
                "name": "航空及附属设施",
                "type": "1",
                "count": null,
                "description": "航空及附属设施",
                "children": [],
                "code": "1252",
                "ord": "205",
                "pcode": "1148"
            }, {
                "name": "港口码头",
                "type": "1",
                "count": null,
                "description": "港口码头",
                "children": [],
                "code": "1253",
                "ord": "206",
                "pcode": "1148"
            }, {
                "name": "交通规划",
                "type": "1",
                "count": null,
                "description": "交通规划",
                "children": [],
                "code": "1254",
                "ord": "207",
                "pcode": "1148"
            }],
            "code": "1148",
            "ord": "107",
            "pcode": "1000"
        }, {
            "name": "通信",
            "type": "1",
            "count": null,
            "description": "通信",
            "children": [{
                "name": "通信运营企业",
                "type": "1",
                "count": null,
                "description": "通信运营企业",
                "children": [],
                "code": "1255",
                "ord": "208",
                "pcode": "1160"
            }, {
                "name": "通信基站",
                "type": "1",
                "count": null,
                "description": "通信基站",
                "children": [],
                "code": "1256",
                "ord": "209",
                "pcode": "1160"
            }, {
                "name": "通信缆线",
                "type": "1",
                "count": null,
                "description": "通信缆线",
                "children": [],
                "code": "1257",
                "ord": "210",
                "pcode": "1160"
            }, {
                "name": "其它",
                "type": "1",
                "count": null,
                "description": "其它",
                "children": [],
                "code": "1330",
                "ord": "283",
                "pcode": "1160"
            }],
            "code": "1160",
            "ord": "108",
            "pcode": "1000"
        }, {
            "name": "邮政",
            "type": "1",
            "count": null,
            "description": "邮政",
            "children": [{
                "name": "邮政营业网点",
                "type": "1",
                "count": null,
                "description": "邮政营业网点",
                "children": [],
                "code": "1258",
                "ord": "211",
                "pcode": "1161"
            }, {
                "name": "邮局",
                "type": "1",
                "count": null,
                "description": "邮局",
                "children": [],
                "code": "1259",
                "ord": "212",
                "pcode": "1161"
            }, {
                "name": "邮筒",
                "type": "1",
                "count": null,
                "description": "邮筒",
                "children": [],
                "code": "1331",
                "ord": "284",
                "pcode": "1161"
            }],
            "code": "1161",
            "ord": "109",
            "pcode": "1000"
        }, {
            "name": "住房和城乡建设",
            "type": "1",
            "count": null,
            "description": "住房和城乡建设",
            "children": [{
                "name": "市政基础设施",
                "type": "1",
                "count": null,
                "description": "市政基础设施",
                "children": [{
                    "name": "公厕",
                    "type": "1",
                    "count": null,
                    "description": "公厕",
                    "children": [],
                    "code": "1261",
                    "ord": "214",
                    "pcode": "1260"
                }, {
                    "name": "历史街区",
                    "type": "1",
                    "count": null,
                    "description": "历史街区",
                    "children": [],
                    "code": "1262",
                    "ord": "215",
                    "pcode": "1260"
                }, {
                    "name": "其它",
                    "type": "1",
                    "count": null,
                    "description": "其它",
                    "children": [],
                    "code": "1332",
                    "ord": "285",
                    "pcode": "1260"
                }],
                "code": "1260",
                "ord": "213",
                "pcode": "1163"
            }, {
                "name": "园林绿化及附属设施",
                "type": "1",
                "count": null,
                "description": "园林绿化及附属设施",
                "children": [],
                "code": "1263",
                "ord": "216",
                "pcode": "1163"
            }, {
                "name": "城市地下管线及附属设施",
                "type": "1",
                "count": null,
                "description": "城市地下管线及附属设施",
                "children": [],
                "code": "1264",
                "ord": "217",
                "pcode": "1163"
            }, {
                "name": "房地产",
                "type": "1",
                "count": null,
                "description": "房地产",
                "children": [],
                "code": "1265",
                "ord": "218",
                "pcode": "1163"
            }, {
                "name": "城乡规划",
                "type": "1",
                "count": null,
                "description": "城乡规划",
                "children": [],
                "code": "1266",
                "ord": "219",
                "pcode": "1163"
            }],
            "code": "1163",
            "ord": "110",
            "pcode": "1000"
        }, {
            "name": "环境保护",
            "type": "1",
            "count": null,
            "description": "环境保护",
            "children": [{
                "name": "环境监测机构",
                "type": "1",
                "count": null,
                "description": "环境监测机构",
                "children": [],
                "code": "1267",
                "ord": "220",
                "pcode": "1152"
            }, {
                "name": "污染源",
                "type": "1",
                "count": null,
                "description": "污染源",
                "children": [],
                "code": "1268",
                "ord": "221",
                "pcode": "1152"
            }, {
                "name": "绿色环保单位",
                "type": "1",
                "count": null,
                "description": "绿色环保单位",
                "children": [],
                "code": "1269",
                "ord": "222",
                "pcode": "1152"
            }, {
                "name": "环境功能区划",
                "type": "1",
                "count": null,
                "description": "环境功能区划",
                "children": [],
                "code": "1270",
                "ord": "223",
                "pcode": "1152"
            }, {
                "name": "环境保护规划",
                "type": "1",
                "count": null,
                "description": "环境保护规划",
                "children": [],
                "code": "1271",
                "ord": "224",
                "pcode": "1152"
            }],
            "code": "1152",
            "ord": "111",
            "pcode": "1000"
        }, {
            "name": "农业",
            "type": "1",
            "count": null,
            "description": "农业",
            "children": [{
                "name": "农产品基地",
                "type": "1",
                "count": null,
                "description": "农产品基地",
                "children": [],
                "code": "1272",
                "ord": "225",
                "pcode": "1166"
            }, {
                "name": "标准农田",
                "type": "1",
                "count": null,
                "description": "标准农田",
                "children": [],
                "code": "1273",
                "ord": "226",
                "pcode": "1166"
            }],
            "code": "1166",
            "ord": "112",
            "pcode": "1000"
        }, {
            "name": "林业",
            "type": "1",
            "count": null,
            "description": "林业",
            "children": [{
                "name": "林场",
                "type": "1",
                "count": null,
                "description": "林场",
                "children": [],
                "code": "1274",
                "ord": "227",
                "pcode": "1149"
            }, {
                "name": "森林资源",
                "type": "1",
                "count": null,
                "description": "森林资源",
                "children": [],
                "code": "1275",
                "ord": "228",
                "pcode": "1149"
            }, {
                "name": "湿地资源",
                "type": "1",
                "count": null,
                "description": "湿地资源",
                "children": [],
                "code": "1276",
                "ord": "229",
                "pcode": "1149"
            }, {
                "name": "野生动物资源",
                "type": "1",
                "count": null,
                "description": "野生动物资源",
                "children": [],
                "code": "1277",
                "ord": "230",
                "pcode": "1149"
            }, {
                "name": "野生植物资源",
                "type": "1",
                "count": null,
                "description": "野生植物资源",
                "children": [],
                "code": "1278",
                "ord": "231",
                "pcode": "1149"
            }, {
                "name": "森林旅游资源",
                "type": "1",
                "count": null,
                "description": "森林旅游资源",
                "children": [],
                "code": "1279",
                "ord": "232",
                "pcode": "1149"
            }, {
                "name": "古树名木",
                "type": "1",
                "count": null,
                "description": "古树名木",
                "children": [],
                "code": "1280",
                "ord": "233",
                "pcode": "1149"
            }],
            "code": "1149",
            "ord": "113",
            "pcode": "1000"
        }, {
            "name": "商务",
            "type": "1",
            "count": null,
            "description": "商业",
            "children": [{
                "name": "开发区",
                "type": "1",
                "count": null,
                "description": "开发区",
                "children": [],
                "code": "1281",
                "ord": "234",
                "pcode": "1158"
            }, {
                "name": "其它",
                "type": "1",
                "count": null,
                "description": "其它",
                "children": [],
                "code": "1329",
                "ord": "282",
                "pcode": "1158"
            }],
            "code": "1158",
            "ord": "114",
            "pcode": "1000"
        }, {
            "name": "旅游",
            "type": "1",
            "count": null,
            "description": "旅游",
            "children": [{
                "name": "旅游景点",
                "type": "1",
                "count": null,
                "description": "旅游景点",
                "children": [],
                "code": "1282",
                "ord": "235",
                "pcode": "1150"
            }, {
                "name": "旅游饭店",
                "type": "1",
                "count": null,
                "description": "旅游饭店",
                "children": [],
                "code": "1283",
                "ord": "236",
                "pcode": "1150"
            }, {
                "name": "旅游公共服务设施",
                "type": "1",
                "count": null,
                "description": "旅游公共服务设施",
                "children": [],
                "code": "1284",
                "ord": "237",
                "pcode": "1150"
            }, {
                "name": "宾馆酒店",
                "type": "1",
                "count": null,
                "description": "宾馆酒店",
                "children": [],
                "code": "1285",
                "ord": "238",
                "pcode": "1150"
            }],
            "code": "1150",
            "ord": "115",
            "pcode": "1000"
        }, {
            "name": "气象",
            "type": "1",
            "count": null,
            "description": "气象",
            "children": [{
                "name": "气象台站",
                "type": "1",
                "count": null,
                "description": "气象台站",
                "children": [],
                "code": "1286",
                "ord": "239",
                "pcode": "1157"
            }, {
                "name": "气候资料",
                "type": "1",
                "count": null,
                "description": "气候资料",
                "children": [],
                "code": "1287",
                "ord": "240",
                "pcode": "1157"
            }, {
                "name": "历史台风数据",
                "type": "1",
                "count": null,
                "description": "历史台风数据",
                "children": [],
                "code": "1288",
                "ord": "241",
                "pcode": "1157"
            }],
            "code": "1157",
            "ord": "116",
            "pcode": "1000"
        }, {
            "name": "测绘与地理信息",
            "type": "1",
            "count": null,
            "description": "测绘与地理信息",
            "children": [{
                "name": "遥感影像资料",
                "type": "1",
                "count": null,
                "description": "遥感影像资料",
                "children": [],
                "code": "1289",
                "ord": "242",
                "pcode": "1144"
            }, {
                "name": "基础地理数据",
                "type": "1",
                "count": null,
                "description": "基础地理数据",
                "children": [{
                    "name": "基站点",
                    "type": "1",
                    "count": null,
                    "description": "基站点",
                    "children": [],
                    "code": "1291",
                    "ord": "244",
                    "pcode": "1290"
                }],
                "code": "1290",
                "ord": "243",
                "pcode": "1144"
            }, {
                "name": "海洋测绘数据",
                "type": "1",
                "count": null,
                "description": "海洋测绘数据",
                "children": [],
                "code": "1292",
                "ord": "245",
                "pcode": "1144"
            }, {
                "name": "基础测绘产品",
                "type": "1",
                "count": null,
                "description": "基础测绘产品",
                "children": [],
                "code": "1293",
                "ord": "246",
                "pcode": "1144"
            }],
            "code": "1144",
            "ord": "117",
            "pcode": "1000"
        }, {
            "name": "地震",
            "type": "1",
            "count": null,
            "description": "地震",
            "children": [{
                "name": "地震监测设施",
                "type": "1",
                "count": null,
                "description": "地震监测设施",
                "children": [],
                "code": "1294",
                "ord": "247",
                "pcode": "1167"
            }, {
                "name": "历史地震数据",
                "type": "1",
                "count": null,
                "description": "历史地震数据",
                "children": [],
                "code": "1295",
                "ord": "248",
                "pcode": "1167"
            }, {
                "name": "重大危险源",
                "type": "1",
                "count": null,
                "description": "重大危险源",
                "children": [],
                "code": "1296",
                "ord": "249",
                "pcode": "1167"
            }, {
                "name": "科学技术和地震",
                "type": "1",
                "count": null,
                "description": "科学技术和地震",
                "children": [],
                "code": "1297",
                "ord": "250",
                "pcode": "1167"
            }],
            "code": "1167",
            "ord": "118",
            "pcode": "1000"
        }, {
            "name": "外事",
            "type": "1",
            "count": null,
            "description": "外事",
            "children": [{
                "name": "国际组织",
                "type": "1",
                "count": null,
                "description": "国际组织",
                "children": [],
                "code": "1298",
                "ord": "251",
                "pcode": "1168"
            }],
            "code": "1168",
            "ord": "119",
            "pcode": "1000"
        }, {
            "name": "安全生产监督管理",
            "type": "1",
            "count": null,
            "description": "安全生产监督管理",
            "children": [{
                "name": "危险源",
                "type": "1",
                "count": null,
                "description": "危险源",
                "children": [],
                "code": "1299",
                "ord": "252",
                "pcode": "1143"
            }],
            "code": "1143",
            "ord": "120",
            "pcode": "1000"
        }, {
            "name": "科学技术",
            "type": "1",
            "count": null,
            "description": "科学技术",
            "children": [{
                "name": "高新技术研究机构",
                "type": "1",
                "count": null,
                "description": "高新技术研究机构",
                "children": [],
                "code": "1300",
                "ord": "253",
                "pcode": "1169"
            }, {
                "name": "高新技术园区",
                "type": "1",
                "count": null,
                "description": "高新技术园区",
                "children": [],
                "code": "1301",
                "ord": "254",
                "pcode": "1169"
            }, {
                "name": "高新技术企业",
                "type": "1",
                "count": null,
                "description": "高新技术企业",
                "children": [],
                "code": "1302",
                "ord": "255",
                "pcode": "1169"
            }, {
                "name": "科学观测站",
                "type": "1",
                "count": null,
                "description": "科学观测站",
                "children": [{
                    "name": "卫星地面站",
                    "type": "1",
                    "count": null,
                    "description": "卫星地面站",
                    "children": [],
                    "code": "1304",
                    "ord": "257",
                    "pcode": "1303"
                }, {
                    "name": "科学试验站",
                    "type": "1",
                    "count": null,
                    "description": "科学试验站",
                    "children": [],
                    "code": "1305",
                    "ord": "258",
                    "pcode": "1303"
                }],
                "code": "1303",
                "ord": "256",
                "pcode": "1169"
            }],
            "code": "1169",
            "ord": "121",
            "pcode": "1000"
        }, {
            "name": "文化",
            "type": "1",
            "count": null,
            "description": "文化",
            "children": [{
                "name": "文化活动场所",
                "type": "1",
                "count": null,
                "description": "文化活动场所",
                "children": [],
                "code": "1306",
                "ord": "259",
                "pcode": "1170"
            }, {
                "name": "物质文化遗产",
                "type": "1",
                "count": null,
                "description": "物质文化遗产",
                "children": [],
                "code": "1307",
                "ord": "260",
                "pcode": "1170"
            }, {
                "name": "非物质文化遗产",
                "type": "1",
                "count": null,
                "description": "非物质文化遗产",
                "children": [],
                "code": "1308",
                "ord": "261",
                "pcode": "1170"
            }],
            "code": "1170",
            "ord": "122",
            "pcode": "1000"
        }, {
            "name": "广播电影电视",
            "type": "1",
            "count": null,
            "description": "广播电影电视",
            "children": [{
                "name": "广播电视台",
                "type": "1",
                "count": null,
                "description": "广播电视台",
                "children": [],
                "code": "1309",
                "ord": "262",
                "pcode": "1171"
            }, {
                "name": "广播电视发射台",
                "type": "1",
                "count": null,
                "description": "广播电视发射台",
                "children": [],
                "code": "1310",
                "ord": "263",
                "pcode": "1171"
            }, {
                "name": "有线电视传输设施",
                "type": "1",
                "count": null,
                "description": "有线电视传输设施",
                "children": [],
                "code": "1311",
                "ord": "264",
                "pcode": "1171"
            }],
            "code": "1171",
            "ord": "123",
            "pcode": "1000"
        }, {
            "name": "卫生",
            "type": "1",
            "count": null,
            "description": "卫生",
            "children": [{
                "name": "医疗卫生机构",
                "type": "1",
                "count": null,
                "description": "医疗卫生机构",
                "children": [],
                "code": "1312",
                "ord": "265",
                "pcode": "1162"
            }],
            "code": "1162",
            "ord": "124",
            "pcode": "1000"
        }, {
            "name": "新闻出版",
            "type": "1",
            "count": null,
            "description": "新闻出版",
            "children": [{
                "name": "新闻出版机构",
                "type": "1",
                "count": null,
                "description": "新闻出版机构",
                "children": [],
                "code": "1313",
                "ord": "266",
                "pcode": "1172"
            }],
            "code": "1172",
            "ord": "125",
            "pcode": "1000"
        }, {
            "name": "体育",
            "type": "1",
            "count": null,
            "description": "体育",
            "children": [{
                "name": "体育场馆",
                "type": "1",
                "count": null,
                "description": "体育场馆",
                "children": [],
                "code": "1314",
                "ord": "267",
                "pcode": "1173"
            }, {
                "name": "体育训练基地",
                "type": "1",
                "count": null,
                "description": "体育训练基地",
                "children": [],
                "code": "1315",
                "ord": "268",
                "pcode": "1173"
            }],
            "code": "1173",
            "ord": "126",
            "pcode": "1000"
        }, {
            "name": "民政",
            "type": "1",
            "count": null,
            "description": "民政",
            "children": [{
                "name": "救灾救济机构",
                "type": "1",
                "count": null,
                "description": "救灾救济机构",
                "children": [],
                "code": "1316",
                "ord": "269",
                "pcode": "1155"
            }, {
                "name": "社会事务机构",
                "type": "1",
                "count": null,
                "description": "社会事务机构",
                "children": [],
                "code": "1317",
                "ord": "270",
                "pcode": "1155"
            }, {
                "name": "社会福利机构",
                "type": "1",
                "count": null,
                "description": "社会福利机构",
                "children": [],
                "code": "1318",
                "ord": "271",
                "pcode": "1155"
            }, {
                "name": "民间组织",
                "type": "1",
                "count": null,
                "description": "民间组织",
                "children": [],
                "code": "1319",
                "ord": "272",
                "pcode": "1155"
            }, {
                "name": "陆域行政区界线",
                "type": "1",
                "count": null,
                "description": "陆域行政区界线",
                "children": [],
                "code": "1320",
                "ord": "273",
                "pcode": "1155"
            }, {
                "name": "行政区划地名",
                "type": "1",
                "count": null,
                "description": "行政区划地名",
                "children": [],
                "code": "1321",
                "ord": "274",
                "pcode": "1155"
            }, {
                "name": "城镇综合单元",
                "type": "1",
                "count": null,
                "description": "城镇综合单元",
                "children": [],
                "code": "1327",
                "ord": "280",
                "pcode": "1155"
            }],
            "code": "1155",
            "ord": "127",
            "pcode": "1000"
        }, {
            "name": "民族宗教事务",
            "type": "1",
            "count": null,
            "description": "民族宗教事务",
            "children": [{
                "name": "民族宗教机构",
                "type": "1",
                "count": null,
                "description": "民族宗教机构",
                "children": [],
                "code": "1322",
                "ord": "275",
                "pcode": "1174"
            }],
            "code": "1174",
            "ord": "128",
            "pcode": "1000"
        }],

        templateString: template,

        statics: {
            /**
             * Singleton
             * @type {mapwidgets.ShareToolDlg}
             */
            _instance: null,


            getInstance: function() {
                if (!this._instance) {
                    this._instance = new mapwidgets.SaveToolDlg();
                }
                return this._instance;
            }
        },

        postCreate: function() {
            if (!this.init) {
                this.getFolders();
                this._initHySelector();
                this._initBzSelector();
                this.init = true;
            }
        },

        // onHySelectorChanged: function() {
        //     var item = this.hySelec_lvl1.get('item');

        //     // Reset the sub value when top selection changed
        //     this._level2HyValue = null;
        //     this._hasLevel2Hy = false;
        //     this.hySelec_lvl2.set('value', null);

        //     if (item) {
        //         if (dojo.isArray(item.code)) {
        //             this._level1HyValue = item.code[0];
        //         }

        //         //  移除二级菜单
        //         // if (item.children && item.children.length) {
        //         //     this._hasLevel2Hy = true;
        //         //     var store = new dojo.data.ItemFileReadStore({
        //         //         hierarchical: false,
        //         //         data: {
        //         //             items: item.children,
        //         //             label: 'name',
        //         //             identifier: 'code'
        //         //         }
        //         //     });
        //         //     this.hySelec_lvl2.set('store', store);
        //         //     domStyle.set(dom.byId('hySelectorContainer2'), 'display', 'block');
        //         // } else {
        //         //     domStyle.set(dom.byId('hySelectorContainer2'), 'display', 'none');
        //         // }
        //     }
        // },

        onHy2SelectorChanged: function() {
            var item = this.hySelec_lvl2.get('item');
            if (item) {
                if (dojo.isArray(item.code)) {
                    this._level2HyValue = item.code[0];
                }
            }
        },

        onBzSelectorChanged: function() {
            var item = this.bzSelec_lvl1.get('item');

            // Reset the sub value when top selection changed
            this._level2BzValue = null;
            this._hasLevel2Bz = false;
            this.bzSelec_lvl2.set('value', null);

            if (item) {
                if (dojo.isArray(item.code)) {
                    this._level1BzValue = item.code[0];
                }

                // 移除二级菜单
                // if (item.children && item.children.length) {
                //     this._hasLevel2Bz = true;
                //     var store = new dojo.data.ItemFileReadStore({
                //         hierarchical: false,
                //         data: {
                //             items: item.children,
                //             label: 'name',
                //             identifier: 'code'
                //         }
                //     });
                //     this.bzSelec_lvl2.set('store', store);
                //     domStyle.set(dom.byId('bzSelectorContainer2'), 'display', 'block');
                // } else {
                //     domStyle.set(dom.byId('bzSelectorContainer2'), 'display', 'none');
                // }
            }
        },

        onBz2SelectorChanged: function() {
            var item = this.bzSelec_lvl2.get('item');
            if (item) {
                if (dojo.isArray(item.code)) {
                    this._level2BzValue = item.code[0];
                }
            }
        },

        _initBzSelector: function() {
            var store;
            if (mapwidgets.utils.bzdata) {
                store = new dojo.data.ItemFileReadStore({
                    hierarchical: false,
                    data: {
                        label: 'name',
                        identifier: 'code',
                        items: mapwidgets.utils.bzdata
                    }
                });
                this.bzSelec_lvl1.set('store', store);
            } else {
                mapwidgets.utils.loadTagTreeDataSource('1001').then(dojo.hitch(this, function(resp) {
                    if (resp.result && resp.code === '200') {
                        mapwidgets.utils.bzdata = dojo.json.parse(resp.data);
                        store = new dojo.data.ItemFileReadStore({
                            hierarchical: false,
                            data: {
                                label: 'name',
                                identifier: 'code',
                                items: mapwidgets.utils.bzdata
                            }
                        });
                        this.bzSelec_lvl1.set('store', store);
                    }
                }));
            }
        },

        _initHySelector: function() {
            var model = new ObjectStoreModel({
                store: new Memory({
                    idProperty: 'code',
                    getChildren: function(object) {
                        return object.children || [];
                    },
                    data: [{
                        code: 'HY',
                        // TODO: mock data
                        // items: mapwidgets.utils.hydata
                        children: this._mockData
                    }],
                })
            });

            this.hySelec_lvl1 = new Tree({
                model: model,
                showRoot: false,
                openOnClick: true,
                style: 'max-height: 300px;',
                class: 'saveToolDlg-hytree',
                getIconClass: function(item, opened) {
                    return (!item || this.model.mayHaveChildren(item)) ? (opened ? "dijitTreeExpandoOpened" : "dijitTreeExpandoClosed") : "dijitTreeExpandoLeaf";
                }
            });
            this.hySelec_lvl1.placeAt(this.hyTreeContainer);
            this.hySelec_lvl1.startup();
        },

        onHyDropDownClosed: function() {
            this._level2HyValue = null;
            this._hasLevel2Hy = false;
            this.hySelec_lvl2.set('value', null);

            var si = this.hySelec_lvl1.selectedItems;
            if (si && si.length > 0) {
                var hy = si[0];

                if (hy.children && hy.children.length > 0) {
                    this.hyDropDown.set('label', '请选择行业分类');
                    this._level1HyValue = '';
                } else {
                    this.hyDropDown.set('label', hy.name);
                    var hyPath = this.hySelec_lvl1.path.slice(1);
                    for (var i = 0; i < hyPath.length; i++) {
                        if (this._level1HyValue) {
                            this._level1HyValue += ',';
                        }

                        this._level1HyValue = hyPath[i].code;
                    }
                }
            }
        },

        saveWebMap: function(extent) {
            var webmapText = arcgisonline.map.storage.buildWebMapText(),
                currUser = arcgisonline.sharing.util.getUser(),
                webmapTitle = dojo.trim(this._webMapTitleInput.get("value")),
                saveFileName = this.toFileCharacters(webmapTitle) + "_" + (new Date()).getTime(),
                inputTags = [],
                generalDlg,
                webmapSummary,
                webmapTypeKeywords,
                webmapSaveFolder;

            // if (this._level1BzValue) {
            //     inputTags.push(this._level1BzValue);
            // }

            if (this._level1HyValue) {
                inputTags.push(this._level1HyValue);
            }

            // if (this._hasLevel2Bz) {
            //     inputTags.push(this._level2BzValue);
            // }

            if (this._hasLevel2Hy) {
                inputTags.push(this._level2HyValue);
            }
            // TODO:
            // inputTags = this._webMapTagsInput.get("value");
            //
            // init the inputTags value (inputTags)

            if (!webmapTitle || !webmapTitle.length || webmapTitle === this.defaultTextTitle) {
                this._webMapFolderSelect.focus();
                generalDlg = arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();
                if (!inputTags || 0 === inputTags.length) {
                    generalDlg.show({
                        title: this.i18n.errorTitle,
                        message: this.i18n.error.provideTitleAndTags
                    });
                } else {
                    generalDlg.show({
                        title: this.i18n.errorTitle,
                        message: this.i18n.error.provideTitle
                    });
                }
                this._saveMapBtn.set("disabled", false);
                this._cancelBtn.set("disabled", false);
                dojo.style(this._waitingDiv, "display", "none");
            } else if (-1 < webmapTitle.indexOf("\x3c") || -1 < webmapTitle.indexOf("\x3e")) {
                this._webMapFolderSelect.focus();
                generalDlg = arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();
                generalDlg.show({
                    title: this.i18n.errorTitle,
                    message: this.i18n.error.specialCharaters
                });
                this._saveMapBtn.set("disabled", false);
                this._cancelBtn.set("disabled", false);
                dojo.style(this._waitingDiv, "display", "none");
            } else if (-1 < dojo.indexOf(this.allItemNames, webmapTitle.toLowerCase())) {
                this._webMapFolderSelect.focus();
                generalDlg = arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();
                generalDlg.show({
                    title: this.i18n.errorTitle,
                    message: dojo.string.substitute(this.i18n.error.mapTitleExists, [webmapTitle])
                });
                this._saveMapBtn.set("disabled", false);
                this._cancelBtn.set("disabled", false);
                dojo.style(this._waitingDiv, "display", "none");
                // } else if (!inputTags || 0 === inputTags.length) {
                //     this._webMapFolderSelect.focus();
                //     generalDlg = arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();
                //     generalDlg.show({ title: this.i18n.errorTitle, message: this.i18n.error.provideTags });
                //     this._saveMapBtn.set("disabled", false);
                //     this._cancelBtn.set("disabled", false);
                //     dojo.style(this._waitingDiv, "display", "none");
                // } else if (!this._level1BzValue) {
                //     generalDlg = arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();
                //     generalDlg.show({
                //         title: this.i18n.errorTitle,
                //         message: '请指定地图所属的一级标准'
                //     });
                //     this._saveMapBtn.set("disabled", false);
                //     this._cancelBtn.set("disabled", false);
                //     dojo.style(this._waitingDiv, "display", "none");
            } else if (!this._level1HyValue) {
                generalDlg = arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();
                generalDlg.show({
                    title: this.i18n.errorTitle,
                    message: '请指定地图所属的行业分类'
                });
                this._saveMapBtn.set("disabled", false);
                this._cancelBtn.set("disabled", false);
                dojo.style(this._waitingDiv, "display", "none");
                // } else if (this._hasLevel2Bz && !this._level2BzValue) {
                //     generalDlg = arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();
                //     generalDlg.show({
                //         title: this.i18n.errorTitle,
                //         message: '请指定地图所属的二级标准'
                //     });
                //     this._saveMapBtn.set("disabled", false);
                //     this._cancelBtn.set("disabled", false);
                //     dojo.style(this._waitingDiv, "display", "none");
                // } else if (this._hasLevel2Hy && !this._level2HyValue) {
                //     generalDlg = arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();
                //     generalDlg.show({
                //         title: this.i18n.errorTitle,
                //         message: '请指定地图所属的二级行业'
                //     });
                //     this._saveMapBtn.set("disabled", false);
                //     this._cancelBtn.set("disabled", false);
                //     dojo.style(this._waitingDiv, "display", "none");
            } else {
                webmapSummary = this._webMapSummaryInput.get("value");
                if (webmapSummary == this.defaultTextSummary) {
                    webmapSummary = "";
                    this._webMapSummaryInput.set("value", "");
                    dojo.style(this._webMapSummaryInput.domNode, "color", "#000000");
                }

                webmapTypeKeywords = "Web Map,Explorer Web Map,Map,Online Map,ArcGIS Online";
                if (arcgisonline.map.save_open.webMapItemCard && arcgisonline.map.save_open.webMapItemCard.typeKeywords) {
                    webmapTypeKeywords = arcgisonline.map.save_open.webMapItemCard.typeKeywords.toString();
                }
                webmapTypeKeywords = arcgisonline.map.main.adjustWebMapTypeKeywords(webmapTypeKeywords);
                var webmapForSave = {
                    item: saveFileName,
                    title: webmapTitle,
                    tags: inputTags.join(',') + ',智能地图,1001', // TODO:  this._webMapTagsInput.get("value"),
                    snippet: webmapSummary,
                    description: this._webMapDescriptionInput.get("value"),
                    accessInformation: this._webMapAccessInput.get("value"),
                    licenseInfo: this._webMapLicenseInput.get("value"),
                    extent: extent,
                    text: dojo.json.stringify(webmapText),
                    type: "Web Map",
                    typeKeywords: webmapTypeKeywords,
                    overwrite: false
                };
                webmapSaveFolder = this._webMapFolderSelect.item;
                if (webmapSaveFolder) {
                    this.folderId = this._webMapFolderSelect.store.getValue(webmapSaveFolder, "id");
                } else {
                    var webmapFolderValue = this._webMapFolderSelect.get("value");
                    dojo.forEach(this.foldersJson, function(a, b) {
                        if (a.title == webmapFolderValue) {
                            this.folderId = a.id;
                        }
                    }, this);
                }
                currUser = arcgisonline.sharing.util.getUser();
                var postUrl = esriGeowConfig.restBaseUrl + "content/users/" + currUser.email;
                if (esri.isDefined(this.folderId) && this.folderId.length) {
                    postUrl += "/" + this.folderId;
                }
                arcgisonline.sharing.util.postJsonCheckProxy(webmapForSave, postUrl + "/addItem", dojo.hitch(this, function(b, d) {
                    if (b.success) {
                        arcgisonline.map.save_open.openedWebMap = webmapText;
                        dojo.publish("onWebMapSave", [
                            b.id,
                            currUser.email,
                            saveFileName,
                            saveFileName,
                            webmapTitle,
                            this._webMapDescriptionInput.get("value"),
                            this._webMapTagsInput.get("value").split(","),
                            this._webMapSummaryInput.get("value"),
                            null,
                            this._webMapAccessInput.get("value"),
                            this._webMapLicenseInput.get("value"),
                            this.folderId,
                            webmapTypeKeywords.split(",")
                        ]);
                        arcgisonline.map.role.updateUIAfterSaveAs();
                        if (this.savedHandler) {
                            this.savedHandler(b.id);
                        }
                        arcgisonline.map.thumbnail.buildThumbnailURLFromMap(dojo.hitch(this, function(b) {
                            var c = esriGeowConfig.restBaseUrl + "content/users/" + currUser.email;
                            if (esri.isDefined(this.folderId) && this.folderId.length) {
                                c += "/" + this.folderId;
                            }
                            c += "/items/" + arcgisonline.map.save_open.webMapInfo.id + "/update";
                            arcgisonline.sharing.util.postJsonCheckProxy({
                                thumbnailURL: b
                            }, c, dojo.hitch(this, function(a) {
                                if (arcgisonline.map.save_open.webMapInfo) {
                                    arcgisonline.map.save_open.webMapInfo.thumbnail = "thumbnail/ago_downloaded.png";
                                }
                            }));
                        }));
                        this._saveWebMapDialog.hide();
                    }
                }), dojo.hitch(this, function(b, c) {
                    var dialog = arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance();
                    if (409 == b.code) {
                        this._webMapFolderSelect.focus();
                        dialog.show({
                            title: this.i18n.errorTitle,
                            message: dojo.string.substitute(this.i18n.error.mapTitleExists, [webmapTitle])
                        });
                    } else {
                        this._webMapFolderSelect.focus();
                        dialog.show({
                            title: this.i18n.errorTitle,
                            message: a.string.substitute(this.i18n.error.requestFailed, [webmapTitle, b.message])
                        });
                    }
                    this._saveMapBtn.set("disabled", false);
                    this._cancelBtn.set("disabled", false);
                    dojo.style(this._waitingDiv, "display", "none");
                    if (this.errorHandler) {
                        this.errorHandler(b);
                    }
                }));
            }
        }
    });
});
