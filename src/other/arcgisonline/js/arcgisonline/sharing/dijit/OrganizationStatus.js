// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/sharing/dijit/OrganizationStatus",["dijit","dojo","dojox","dojo/i18n!arcgisonline/nls/arcgisonline","dojo/require!dijit/_Widget,dijit/_Templated,dijit/layout/ContentPane,dojo/DeferredList,dojox/lang/functional,dojo/store/Observable,dojo/store/Memory,dojox/charting/StoreSeries,dijit/form/DateTextBox,dgrid/OnDemandGrid,dgrid/Keyboard,dgrid/extensions/ColumnResizer,dgrid/editor,dojo/on,arcgisonline/sharing/util,arcgisonline/sharing/geow/Account,arcgisonline/sharing/dijit/dialog/GeneralDlg,arcgisonline/sharing/dijit/dialog/_UsageDlgMixin"],
function(k,b,m){b.provide("arcgisonline.sharing.dijit.OrganizationStatus");b.require("dijit._Widget");b.require("dijit._Templated");b.require("dijit.layout.ContentPane");b.require("dojo.DeferredList");b.require("dojox.lang.functional");b.require("dojo.store.Observable");b.require("dojo.store.Memory");b.require("dojox.charting.StoreSeries");b.require("dijit.form.DateTextBox");b.require("dgrid.OnDemandGrid");b.require("dgrid.Keyboard");b.require("dgrid.extensions.ColumnResizer");b.require("dgrid.editor");
b.require("dojo.on");b.require("arcgisonline.sharing.util");b.require("arcgisonline.sharing.geow.Account");b.require("arcgisonline.sharing.dijit.dialog.GeneralDlg");b.require("arcgisonline.sharing.dijit.dialog._UsageDlgMixin");b.requireLocalization("arcgisonline","arcgisonline");b.declare("arcgisonline.sharing.dijit.OrganizationStatus",[k._Widget,k._Templated,arcgisonline.sharing.dijit.dialog._UsageDlgMixin],{widgetsInTemplate:!0,templateString:'\x3cdiv dojoAttachPoint\x3d"containerNode" class\x3d"esriItemLinks" style\x3d"width:100%;height:100%;min-height:600px;"\x3e\r\n  \x3cdiv class\x3d"organizationInfo esriFloatLeading"\x3e\r\n      \x3c!--\x3cspan class\x3d"thumbnail esriFloatLeading"\x3e\x3cimg dojoAttachPoint\x3d"_thumbnail" class\x3d"groupThumbnail" /\x3e\x3c/span\x3e--\x3e\r\n      \x3c!--\x3ch1 style\x3d"line-height: 2.9em;" dojoAttachPoint\x3d"_title"\x3e\x3c/h1\x3e\x3cspan class\x3d"state esriLeadingMargin05" dojoAttachPoint\x3d"_state"\x3e${i18n.usage.trial}\x3c/span\x3e--\x3e\r\n      \x3ca class\x3d"helpLink" target\x3d"_blank"\x3e${i18n.learnMore}\x3c/a\x3e\r\n      \x3cul dojoAttachPoint\x3d"_creditsSummary" class\x3d"container_creditsSummary"\x3e\x3c/ul\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"organizationStatus esriFloatLeading esriLeadingMargin0" dojoAttachPoint\x3d"_status"\x3e\r\n    \x3c!--\x3cbutton dojoAttachPoint\x3d\'_showStatistics\' style\x3d"display:\'\';" class\x3d"showStatisticsBtn" dojoType\x3d"dijit.form.Button" type\x3d"button"\x3e${i18n.showStatisticsBtn}\x3c/button\x3e--\x3e\r\n    \x3c!--\x3clabel class\x3d"showStatisticsBtn" style\x3d"display:\'\';"\x3e${i18n.forLbl}\x3c/label\x3e--\x3e\r\n    \x3clabel for\x3d"selectDateRange" class\x3d"showStatisticsLbl"\x3e${i18n.showStatistics}\x3c/label\x3e\r\n    \x3cspan dojoAttachPoint\x3d\'_selectDate\'\x3e\x3c/span\x3e\r\n    \x3cdiv class\x3d\'customdate esriLeadingMargin2\' style\x3d"display:none;"\x3e\r\n      \x3clabel class\x3d"esriLeadingMargin1" for\x3d"customStart"\x3e${i18n.customStart}\x3c/label\x3e\r\n      \x3cspan style\x3d"width:150px;" dojoType\x3d"dijit.form.DateTextBox" dojoAttachPoint\x3d\'_customStart\'\x3e\x3c/span\x3e\r\n      \x3clabel class\x3d"esriLeadingMargin1" for\x3d"customEnd"\x3e${i18n.customEnd}\x3c/label\x3e\r\n      \x3cspan style\x3d"width:150px;" dojoType\x3d"dijit.form.DateTextBox" dojoAttachPoint\x3d\'_customEnd\'\x3e\x3c/span\x3e\r\n      \x3c!--\x3cbutton dojoAttachPoint\x3d\'_customDate\' dojoType\x3d"dijit.form.Button" type\x3d"button" style\x3d"display:none;"\x3e${i18n.showReport}\x3c/button\x3e--\x3e\r\n    \x3c/div\x3e\r\n    \x3cspan dojoAttachPoint\x3d"spinnerNode" class\x3d"pleaseWaitImg"\x3e\x3c/span\x3e\r\n    \x3cdiv class\x3d"organizationGraphs" style\x3d"display:none;"\x3e\r\n      \x3cfieldset\x3e\r\n        \x3clegend class\x3d"esriLeadingMargin1 esriTrailingMargin1" dojoAttachPoint\x3d\'_creditUsage\'\x3e\x3c/legend\x3e\r\n        \x3cdiv class\x3d"organizationCredits"\x3e\r\n          \x3cdiv class\x3d"piechart esriFloatLeading"\x3e\r\n            \x3cdiv class\x3d"nodata nodatapie esriFloatLeading esriLeadingMargin7"\x3e${i18n.nodata}\x3c/div\x3e\r\n            \x3cdiv class\x3d"graph creditGraph" dojoAttachPoint\x3d"_creditsGraph"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"creditGraph instruction esriFloatLeading esriLeadingMargin4"\x3e${i18n.instruction}\x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"table esriTrailingMargin4" dojoAttachPoint\x3d"_creditsTable"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/fieldset\x3e\r\n      \x3cfieldset class\x3d"organizationDetails" style\x3d"display:none;"\x3e\r\n        \x3clegend class\x3d"esriLeadingMargin1 esriTrailingMargin1" dojoAttachPoint\x3d\'_creditDetailsLbl\'\x3e\x3c/legend\x3e\r\n        \x3cdiv style\x3d"margin:10px;"\x3e\r\n          \x3cdiv class\x3d"filter" style\x3d"display:none;"\x3e\r\n\t        \x3cdiv dojoAttachPoint\x3d"_creditSelect"\x3e\r\n              \x3clabel for\x3d"selectCredit"\x3e${i18n.showLbl}\x3c/label\x3e\r\n              \x3cspan dojoAttachPoint\x3d\'_selectCredit\'\x3e\x3c/span\x3e\r\n\t        \x3c/div\x3e\r\n\t        \x3cdiv dojoAttachPoint\x3d"_deomgmapsTaskSelect"\x3e\r\n              \x3clabel id\x3d"forTaskLbl" for\x3d"selectTask"\x3e${i18n.forLbl}\x3c/label\x3e\r\n              \x3cspan dojoAttachPoint\x3d\'_selectTask\'\x3e\x3c/span\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv dojoAttachPoint\x3d"_storageTaskSelect"\x3e\r\n            \x3clabel id\x3d"forTaskLbl" for\x3d"selectTask"\x3e${i18n.forLbl}\x3c/label\x3e\r\n            \x3cspan dojoAttachPoint\x3d\'_storageTask\'\x3e\x3c/span\x3e\r\n          \x3c/div\x3e\r\n\t      \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"organizationCredits"\x3e\r\n          \x3cdiv class\x3d"esriFloatLeading" style\x3d"width:50%;"\x3e\r\n            \x3cdiv dir\x3d\'ltr\' class\x3d"graph esriFloatLeading" dojoAttachPoint\x3d"_detailsGraph"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"esriFloatLeading" dojoAttachPoint\x3d"_lineLegend"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriFloatTrailing details"\x3e\r\n            \x3cdiv class\x3d"grid esriLeadingMargin0 esriTrailingMargin4"  dojoAttachPoint\x3d"_detailsTable"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"detailssum esriLeadingMargin0 esriLeadingMargin05"\x3e\r\n              \x3cinput name\x3d"check" type\x3d"checkbox" style\x3d"vertical-align:bottom" checked disabled\x3d\'true\'/\x3e\r\n              \x3clabel id\x3d"_sum" dojoAttachPoint\x3d"_detailsSum" for\x3d"check"\x3e${i18n.totalcredits}\x3c/label\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/fieldset\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
baseClass:"esriOrganizationStatus",noThumbnail:"images/group-no-image.png",_util:arcgisonline.sharing.util,_acct:arcgisonline.sharing.geow.Account,postMixInProperties:function(){this.inherited(arguments);this.i18n=b.mixin({},b.i18n.getLocalization("arcgisonline","arcgisonline").common);b.mixin(this.i18n,b.i18n.getLocalization("arcgisonline","arcgisonline").usageDlg);b.mixin(this.i18n,b.i18n.getLocalization("arcgisonline","arcgisonline").organizationStatus);this.noThumbnail=this._util.relativeToExplicitUrl(this.noThumbnail)},
startup:function(){this._util.requireAuthentication()&&(this._user=this._util.getUser(),!this._user||!this._user.accountId?window.location="error.html?c\x3d"+(!this._user?"AccessDeniedOrganization":"InvalidOrganization"):(this._errorDlg=arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance(),this._svcUrl=esriGeowConfig.restBaseUrl+(esriGeowConfig.restBaseUrl.lastIndexOf("/")===esriGeowConfig.restBaseUrl.length-1?"":"/"),this._accountsUri=this._svcUrl+"portals/",this._searchUrl=
this._svcUrl+"search/",this._requestParams={f:"json",token:this._user.token},this._usageParams={vars:"credits,bw,num,stg",groupBy:"stype,etype,task"},this._prepareStores(),this._initHelpMgr(),this._loadData()))},destroy:function(){b.forEach(this._connects,b.disconnect);this._selectDate.destroy();this._selectCredit.destroy();this._selectTask.destroy();this._storageTask.destroy();this._lineChart.destroy();this._selectDate=this._selectCredit=this._selectTask=this._storageTask=this._lineChart=void 0},
_prepareStores:function(){this.inherited(arguments);this._creditCategories=[{id:"stg_tiles",value:{id:"stg_tiles",f:"stg_gbyte",fill:"#5B7F00",categ:this.i18n.stg_tiles,y:0,units:0}},{id:"stg_features",value:{id:"stg_features",f:"stg_gbyte",fill:"#4CFF00",categ:this.i18n.stg_features,y:0,units:0}},{id:"stg_portal",value:{id:"stg_portal",f:"stg_mbyte",fill:"#B6FF00",categ:this.i18n.stg_portal,y:0,units:0}},{id:"svcusg_elevanalysis",value:{id:"svcusg_elevanalysis",f:"num_analysis",fill:"#800080",categ:this.i18n.svcusg_elevanalysis,
y:0,units:0}},{id:"tilegencnt_tiles",value:{id:"tilegencnt_tiles",f:"num_tiles",fill:"#FFD800",categ:this.i18n.tilegencnt_tiles,y:0,units:0}},{id:"svcusg_routing",value:{id:"svcusg_routing",f:"num_routes",fill:"#90D1E9",categ:this.i18n.svcusg_routing,y:0,units:0}},{id:"svcusg_demogmaps",value:{id:"svcusg_demogmaps",f:"num_maps",fill:"#FF6A00",categ:this.i18n.svcusg_demogmaps,y:0,units:0}},{id:"svcusg_geotrigger",value:{id:"svcusg_geotrigger",f:"num_events",fill:"#73ABD4",categ:this.i18n.svcusg_geotrigger,
y:0,units:0}},{id:"svcusg_geoenrich",value:{id:"svcusg_geoenrich",f:"num_cost",fill:"#395FA9",categ:this.i18n.svcusg_geoenrich,y:0,units:0}},{id:"svcusg_spanalysis",value:{id:"svcusg_spanalysis",f:"num_analysis",fill:"#ADF8FF",categ:this.i18n.svcusg_spanalysis,y:0,units:0}},{id:"geocodecnt_geocode",value:{id:"geocodecnt_geocode",f:"num_locations",fill:"#00137F",categ:this.i18n.geocodecnt_geocode,y:0,units:0}},{id:"svcusg_tiles",value:{id:"svcusg_tiles",f:"bw_bwgbyte",fill:"red",categ:this.i18n.svcusg_tiles,
y:0,units:0}},{id:"svcusg_features",value:{id:"svcusg_features",f:"bw_bwgbyte",fill:"#FFA700",categ:this.i18n.svcusg_features,y:0,units:0}}];this._creditStore=new b.store.Observable(new b.store.Memory({data:{identifier:"id",items:this._creditCategories}}));this._observeHandle=this._creditStore.query().observe(b.hitch(this,function(a){b.query("."+a.id).attr("innerHTML",a.value.y);b.query("."+a.id+"_u").attr("innerHTML",esri.substitute(a.value,this.i18n[a.value.f.split("_")[1]]))}),!0);this._aggregateCategories=
{nasimpleroute:{stype:"routing",filters:"num,credits",label:this.i18n.rtsimple},natsproute:{stype:"routing",filters:"num,credits",label:this.i18n.rtoptimized},nacfroute:{stype:"routing",filters:"num,credits",label:this.i18n.rtclosestfacility},naservicearea:{stype:"routing",filters:"num,credits",label:this.i18n.rtsvcareas},navrproute:{stype:"routing",filters:"num,credits",label:this.i18n.rtmultivehicle}};this._detailCategories="svcusg_features svcusg_tiles tilegencnt_tiles svcusg_routing svcusg_geoenrich svcusg_spanalysis svcusg_elevanalysis svcusg_demogmaps svcusg_geotrigger".split(" ");
var a=this.i18n.spatialAnalysisTasks;this._spanalysisTasks={AggregatePoints:a.aggregatePoints,FindHotSpots:a.findHotSpots,CreateBuffers:a.createBuffers,CreateDriveTimeAreas:a.createDriveTimeAreas,DissolveBoundaries:a.dissolveBoundaries,MergeLayers:a.mergeLayers,SummarizeWithin:a.summarizeWithin,SummarizeNearby:a.summarizeNearby,EnrichLayer:a.enrichLayer,OverlayLayers:a.overlayLayers,ExtractData:a.extractData,FindNearest:a.findNearest,FindExistingLocations:a.findExistingLocations,DeriveNewLocations:a.deriveNewLocations,
FindSimilarLocations:a.findSimilarLocations,CalculateDensity:a.calculateDensity,InterpolatePoints:a.interpolatePoints,PlanRoutes:a.planRoutes};a=this.i18n.elevAnalysisTasks;this._elevanalysisTasks={Profile:a.profile,SummarizeElevation:a.summarizeElevation,Viewshed:a.viewShed,Watershed:a.waterShed,TraceDownstream:a.traceDownStream};this._geoenrichTasks={display:"Infographic",report:"Report",geoenrich:"Data Enrichment"};this._demomapsTasks={infographic:"Map Queries","export":"Map Draws"};this._creditDetailsStore.put({id:this.i18n.all,
visible:!0,all:!0});this._observeHandle1=this._creditDetailsStore.query().observe(b.hitch(this,function(){this._updateLineChart(this._lineChart,this._lineLegend)}),!0)},onDateRangeChange:function(a,c){var d;"custom"!==a?(this._dateQuery=this._getDateQuery(a),c||this._query(this._dateQuery)):(d=new Date(this._dateQuery.startTime+6E4*(new Date).getTimezoneOffset()),0!=d.getMinutes()&&0!=d.getHours()&&0!=d.getSeconds()?(d=Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()+2),this._customStart.set("value",
new Date(d),!c)):this._customStart.set("value",d,!c),this._customEnd.set("value",new Date(this._dateQuery.endTime+6E4*(new Date).getTimezoneOffset()-1),!c));b.query(".customdate").style("display","custom"===a?"inline-block":"none")},onCustomDateClick:function(a){var b=new Date(this._customStart.get("value")),d=new Date(this._customEnd.get("value")),b=Date.UTC(b.getFullYear(),b.getMonth(),b.getDate()),d=Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()),d=d+864E5;5184E6<d-b&&("s"===a?(d=b+5184E6,this._customEnd.set("value",
new Date(d),!0)):"e"===a&&(b=d-5184E6,this._customStart.set("value",new Date(b),!0)));this._dateQuery={startTime:b,endTime:d,period:"1d"};this._dateQuery.startTime>this._dateQuery.endTime?this._showError({message:this.i18n.invalidDateRange}):this._dateQuery.endTime<=this._dateQuery.startTime?this._showError({message:this.i18n.invalidDateRange}):this._query(this._dateQuery)},onCreditFilterChange:function(a){var c=this._selectCredit.options,d=this._selectCredit.get("displayedValue"),e=this._creditDetailsStore.get(this.i18n.all)||
{},e="bw"===a?this._formatBytes("mbyte",e[a+"_total"]):e[a+"_total"];"num"===a?b.attr(this._detailsSum,"innerHTML",esri.substitute({type:d,totalCredits:b.number.format(e,{places:2})},"${type}: ${totalCredits}")):b.attr(this._detailsSum,"innerHTML",esri.substitute({totalCredits:b.number.format(e,{places:2})},this.i18n["total"+a]));this._updateLineChart(this._lineChart,this._lineLegend);b.forEach(c,b.hitch(this,function(b){this._grid.styleColumn(b.value+"_total","display: none;");b.value===a&&this._grid.sort(a+
"_total","desc")}));this._grid.styleColumn(a+"_total","display:table-cell;");this._grid.refresh()},onTaskFilterChange:function(){var a;"demogmaps"===this.stype?"export"===this._selectTask.get("value")?a=this._drawItems:"infographic"===this._selectTask.get("value")&&(a=this._queryItems):"features"===this.stype&&(a="file"===this._storageTask.get("value")?this._fileItems:this._dbItems);this._convertResultToDataStore(a);this.onCreditFilterChange(this._selectCredit.get("value"))},onCreditCategoryClick:function(a){var c=
"none",d="900",e=this._detailCategories,g=a.split("_")[1];b.style(this.spinnerNode,"display","inline-block");b.query(".hide").forEach(esri.hide);this._selectedCategory=a;this._resetLineChart(this._lineChart);b.attr(this._creditDetailsLbl,"innerHTML",this.i18n[a]);-1!==b.indexOf(e,a)&&(c="block",d="400");return this._queryDetails(a,this._dateQuery).then(b.hitch(this,function(){b.query("."+g).style("display","inline-block");b.query(".organizationDetails").forEach(esri.show);b.query(".details").style("display",
c);b.style(this.spinnerNode,"display","none");9>b.isIE?this._lineChart.resize({w:d,h:"375"}):this._lineChart.resize({w:d});this._setFilterOptions(a);this.onCreditFilterChange(this._selectCredit.get("value"))}))},onShowStatistics:function(){this._dateQuery.startTime>this._dateQuery.endTime?this._showError({message:this.i18n.invalidDateRange}):this._dateQuery.endTime<this._dateQuery.startTime?this._showError({message:this.i18n.invalidDateRange}):(b.style(this.spinnerNode,"display","inline-block"),this._queryDate(this._dateQuery).then(b.hitch(this,
function(){b.query(".organizationGraphs").style("display","block");this._createPieChart();var a=this._getTotalCredits();b.attr(this._creditUsage,"innerHTML",esri.substitute({org:this._organization.name,totalCredits:a},this.i18n.creditUsage));b.query(".creditssum").attr("innerHTML",esri.substitute({total:a},this.i18n.total));this._selectedFilter=this._selectedServices=null;b.style(this.spinnerNode,"display","none")})))},_query:function(a){var c=0;b.style(this.spinnerNode,"display","inline-block");
b.query(".organizationDetails").forEach(esri.hide);return this._queryDate(a).then(b.hitch(this,function(){b.style(this.spinnerNode,"display","none");c=this._getTotalCredits();b.attr(this._creditUsage,"innerHTML",esri.substitute({org:this._organization.name,totalCredits:c},this.i18n.creditUsage));b.query(".creditssum").attr("innerHTML",esri.substitute({total:c},this.i18n.total))}))},_queryDetails:function(a,c){var d=-1<c.period.indexOf("d")?"1d":"1h",e=b.mixin([],this._creditFilters),g={etype:a.split("_")[0],
stype:this._aggregateCategories[a.split("_")[1]]&&this._aggregateCategories[a.split("_")[1]].stype||a.split("_")[1],vars:e.join(","),period:d},h;this.stype=g.stype;switch(this.stype){case "demogmaps":g.groupby="stype,etype,name,task";break;case "spanalysis":case "elevanalysis":case "geoenrich":g.groupby="stype,etype,task";break;case "geotrigger":g.groupby="stype,etype,name,deviceid"}if("svcusg"===g.etype&&("tiles"===g.stype||"features"===g.stype))g.groupby="stype,etype,name";return this._fetchCredits(c,
g).then(b.hitch(this,function(a){var c=-1,d=-1,e,f;this._drawItems=[];this._queryItems=[];this._dbItems=[];this._fileItems=[];for(e=a.length-1;0<=e;e--)f=a[e],"routing"===this.stype&&((h=this._aggregateCategories[f.stype])?b.mixin(f,{name:h.label,stype:"routing"}):a.splice(e,1)),"geoenrich"===this.stype&&("geoenrich"===f.task?c=e:f.task||(d=e,f.task="geoenrich"),f.name=this._geoenrichTasks[f.task]),"spanalysis"===this.stype&&(f.name=this._spanalysisTasks[f.task]),"elevanalysis"===this.stype&&(f.name=
this._elevanalysisTasks[f.task]),"demogmaps"===this.stype&&("export"===f.task?this._drawItems.push(f):"infographic"===f.task&&this._queryItems.push(f)),"stg_features"===this._selectedCategory&&(b.forEach(f.stg,b.hitch(this,function(a){a[1]=this._toFormat("gbyte",Number(a[1]))})),!f.task||"db"===f.task?this._dbItems.push(f):"file"===f.task&&this._fileItems.push(f)),"geotrigger"===this.stype&&(f.name=this.i18n.deviceId+": "+f.deviceId);"geoenrich"===this.stype&&(-1!==c&&-1!==d)&&(a.push(this._combineItems([a[c],
a[d]])),e=c>=d?d:c,a.splice(c>=d?c:d,1),a.splice(e,1));"demogmaps"===this.stype?a="export"===this._selectTask.get("value")?this._drawItems:"infographic"===this._selectTask.get("value")?this._queryItems:this._drawItems:"stg_features"===this._selectedCategory&&(a="file"===this._selectTask.get("value")?this._fileItems:this._dbItems);this._selectedFilter=null;if("svcusg"===g.etype&&("tiles"===g.stype||"features"===g.stype))this._selectedFilter="num";this._convertResultToDataStore(a);return!0}))},_convertResultToDataStore:function(a){a=
b.clone(a);var c=b.mixin([],this._creditFilters),d;this._creditDetailsStore.setData([{id:this.i18n.all,visible:!0,all:!0}]);var e=this._creditDetailsStore.get(this.i18n.all);this._creditDetails=b.mixin({},a&&a.length?a[0]:{});!a||0===a.length?this._postProcessItem(e,this._creditFilters):a&&1===a.length&&!a[0].name&&!a[0].task?(this._item=a[0],this._postProcessItem(this._item,c)):(this._creditDetailsStore.setData([{id:this.i18n.all,visible:!0,all:!0}]),b.forEach(c,function(a){e[a]=[]}),b.forEach(a,
b.hitch(this,function(a){d=this._postProcessItem(a,this._creditFilters);b.forEach(c,b.hitch(this,function(a){b.forEach(d[a],b.hitch(this,function(b,c){e[a][c]=(e[a][c]||0)+d[a][c]}));e[a+"_total"]=m.lang.functional.reduce(e[a],"+")}))})),this._creditDetailsStore.put(e))},_combineItems:function(a){if(a&&0!==a.length){var c,d=a[0],e;b.forEach(a,function(a,h){if(0<h)for(e in a)if(a.hasOwnProperty(e)&&b.isArray(a[e]))for(c=0;c<a[e].length;c++)d[e][c][1]=(parseFloat(d[e][c][1])+parseFloat(a[e][c][1])).toString()});
return d}},_queryDate:function(a){var c,d,e,g,h,k,l;return this._fetchCredits(a,this._usageParams).then(b.hitch(this,function(a){this._creditStore.query({}).forEach(b.hitch(this,function(a){b.mixin(a.value,{y:0,units:0,unitNum:0});this._creditStore.put(a)}));b.forEach(a,b.hitch(this,function(a){l=a.stype;this._aggregateCategories[a.stype]&&(l=this._aggregateCategories[a.stype].stype,a.name=this._aggregateCategories[a.stype].label,this._aggregateCategories[l]&&this._aggregateCategories[l].length?this._aggregateCategories[l].push(a):
this._aggregateCategories[l]=[a],b.forEach(this._aggregateCategories[a.stype].filters.split(","),b.hitch(this,function(b){this._aggregateCategories[a.stype][b]=this._sumCredits(a[b])})));if(c=this._creditStore.get(a.etype+"_"+l))h=c.value.f.split("_")[0],g=c.value.f.split("_")[1],g=-1===g.indexOf("byte")?"num":g,e=this._sumCredits(a[h]),e=("stg"===h&&1<a[h].length?e/(a[h].length-1):e)+Number(c.value.unitNum||0),d=this._toFormat(g,e),k=this._sumCredits(a.credits)+(c.value.y||0),b.mixin(c.value,{y:parseInt(k,
10)}),b.mixin(c.value,{units:d,unitNum:e}),this._creditStore.put(c)}));return!0}))},_findMostConsumed:function(){var a=null;this._creditStore.query(function(b){a=a&&a.value&&a.value.y&&a.value.y>b.value.y?a:b});return a},_sumCredits:function(a){a=b.map(a||[],b.hitch(this,function(a){return Number(a[1]||0)}));return parseInt(b.number.round(m.lang.functional.reduce(a,"+")||0,0),10)},_loadData:function(){this._acct.getSelf(b.hitch(this,function(a){this._organization=a;esriGeowConfig.userRole&&!esriGeowConfig.userRole.isAdmin()&&
(window.location="error.html?c\x3dAccessDeniedResource");return new b.DeferredList([this._fetchActiveUserCount().then(b.hitch(this,function(a){this._organization.activeUsers=a;this._buildPage()})),this._fetchUrls().then(b.hitch(this,function(a){this._accountUrls=b.mixin(this._getDefaultAccountUrls(),a&&a.urls||{});b.forEach(["http","https"],b.hitch(this,function(a){b.forEach(this._accountUrls.tiles[a],b.hitch(this,function(b,c){-1<b.indexOf("tiles")&&(this._accountUrls.tiles[a][c]+="/tiles")}))}));
return this._accountUrls}))])}),b.hitch(this,function(a){this._showError(a);throw a;}))},_fetchItem:function(a,b){var d={q:this._getServiceUrls(a,b).join(" OR ")};return this._request(this._searchUrl,d)},_getServiceUrls:function(a,c){var d=[],e=-1!==c.indexOf("Feature")?"features":"tiles",g={accountid:this._organization.id,name:a,type:c};b.forEach(["http","https"],b.hitch(this,function(a){b.forEach(this._accountUrls[e][a],b.hitch(this,function(c){d.push(esri.substitute(b.mixin(g,{protocol:a,server:c}),
'url:"${protocol}://${server}/${accountid}/arcgis/rest/services/${name}/${type}"'))}))}));return d},_fetchActiveUserCount:function(){return this._request(this._accountsUri+this._organization.id+"/users",{num:1}).then(b.hitch(this,function(a){return a&&a.total||0}))},_fetchCredits:function(a,c){var d=!1;c&&(c.stype&&this._aggregateCategories[c.stype]&&this._aggregateCategories[c.stype].length)&&(delete c.stype,c.groupBy="stype, etype",d=!0);var e=b.mixin(b.mixin({},a),c);return this._request(this._usageUrl,
e).then(b.hitch(this,function(a){return d?b.filter(a&&a.data,b.hitch(this,function(a){return this._aggregateCategories[a.stype]})):a&&a.data||[]}))},_fetchUrls:function(){return this._request(this._accountsUri+this._organization.id+"/urls")},_buildPage:function(){this._readCookie();this._createOrgDetails(this._organization);this._createTopDiv();this._createBottomDiv();this._dateQuery=this._dateQuery||this._getDateQuery(this._dateQueryIdx);this.onShowStatistics()},_createOrgDetails:function(a){if(a){this._usageUrl=
this._accountsUri+a.id+"/usage";this._thumbnailURL=a.thumbnail?this._accountsUri+"/self/resources/"+a.thumbnail+"?token\x3d"+this._user.token:this.noThumbnail;this._subscriptionInfo=this._organization.subscriptionInfo;this._organization=b.mixin(a,{maxUsers:-1===this._subscriptionInfo.maxUsers?this.i18n.unlimited:this._subscriptionInfo.maxUsers});this._organization.availableCredits=this._formatNumber(this._subscriptionInfo.availableCredits);this._organization.created=b.date.locale.format(new Date(this._organization.created),
{selector:"date",formatLength:"medium"});this._organization.expDate=b.date.locale.format(new Date(this._subscriptionInfo.expDate),{selector:"date",formatLength:"medium"});var c='\x3cli class\x3d"first esriBorderRight1"\x3e\x3cspan class\x3d"label"\x3e${createdLbl}\x3c/span\x3e\x3cspan class\x3d"value"\x3e${created}\x3c/span\x3e\x3c/li\x3e'+(this._subscriptionInfo.state&&"active"===this._subscriptionInfo.state.toLowerCase()&&this._subscriptionInfo.type&&"trial developer"===this._subscriptionInfo.type.toLowerCase()?
"":'\x3cli class\x3d"esriBorderRight1"\x3e\x3cspan class\x3d"label"\x3e${expiresLbl}\x3c/span\x3e\x3cspan class\x3d"value"\x3e${expDate}\x3c/span\x3e\x3c/li\x3e')+'\x3cli class\x3d"esriBorderRight1"\x3e\x3cspan class\x3d"label"\x3e${membersLbl}\x3c/span\x3e\x3cspan class\x3d"value"\x3e${activeUsers}${ofLbl}${maxUsers}\x3c/span\x3e\x3c/li\x3e\x3cli class\x3d"last"\x3e\x3cspan class\x3d"label"\x3e${availableCreditsLbl}\x3c/span\x3e\x3cspan class\x3d"value"\x3e${availableCredits}\x3c/span\x3e\x3c/li\x3e',
d='\x3cimg src\x3d"'+(esriGeowConfig.allSSL?this._thumbnailURL.replace("http:/","https:/"):this._thumbnailURL)+'" align\x3d"center" class\x3d"groupThumbnail"/\x3e ',d=d+a.name;b.place(d,"orgTitle","first");b.attr(this._creditsSummary,"innerHTML",esri.substitute(b.mixin(b.mixin({},this.i18n.usage),this._organization),c));b.attr(b.byId("_state"),"innerHTML",this.i18n.usage.trial);b.style(b.byId("_state"),"display",this._subscriptionInfo.type&&("trial"===this._subscriptionInfo.type.toLowerCase()||"trial press"===
this._subscriptionInfo.type.toLowerCase())?"inline-block":"none")}},_createTopDiv:function(){this._createCreditsTable();this._prepareDateQueries(this._organization.created);this._selectDate=new k.form.Select({style:"width:150px;",options:this._dateQueriesStore.data},this._selectDate);this._selectDate._onChangeActive=!1;this._selectDate.set("value",this._dateQueryIdx||"last24hours",!0);this._selectDate._onChangeActive=!0;this._creditFilters=b.map(this._creditFilterOptions,"return item.value");this._connects.push(b.connect(this._selectDate,
"onChange",this,"onDateRangeChange"));this._connects.push(b.connect(this._customStart,"onChange",b.hitch(this,this.onCustomDateClick,"s")));this._connects.push(b.connect(this._customEnd,"onChange",b.hitch(this,this.onCustomDateClick,"e")));this._connects.push(b.connect(window,"onbeforeunload",this,"_writeCookie"))},_createBottomDiv:function(){this._selectCredit=new k.form.Select({style:"width:150px;",options:this._creditFilterOptions},this._selectCredit);this._selectTask=new k.form.Select({style:"width:150px;",
options:[{label:"Map Draws",value:"export"},{label:"Map Queries",value:"infographic"}]},this._selectTask);this._storageTask=new k.form.Select({style:"width:150px;",options:[{label:this.i18n.task_db,value:"db"},{label:this.i18n.task_file,value:"file"}]},this._storageTask);this._createLineChart(this._detailsGraph);this._createDetailsTable();b.attr(this._creditDetailsLbl,"innerHTML",this.i18n.stg_tiles);b.query(".details").style("display","none");this._lineChart.resize({w:"900"});this._connects.push(b.on(this._selectCredit,
"change",b.hitch(this,"onCreditFilterChange")));this._connects.push(b.on(this._selectTask,"change",b.hitch(this,"onTaskFilterChange")));this._connects.push(b.on(this._storageTask,"change",b.hitch(this,"onTaskFilterChange")))},_createPieChart:function(){this._creditChart||(this._creditChart=new m.charting.Chart2D(this._creditsGraph),this._creditChart.addPlot("default",{type:"Pie",radius:160,font:"normal 10pt Verdana",fontColor:"#fff",labelOffset:45}),this._creditChart.addSeries("Categories",new m.charting.StoreSeries(this._creditStore,
{},"value")),new m.charting.action2d.Tooltip(this._creditChart,"default",{text:b.hitch(this,function(a){a=a.run&&a.run.data&&a.run.data[a.index];return a.categ+": \x3ci\x3e"+a.y+" "+this.i18n.credits+"\x3c/i\x3e"})}),new m.charting.action2d.MoveSlice(this._creditChart,"default"),this._creditChart.render(),this._creditChart.connectToPlot("default",b.hitch(this,function(a){var c=a.type;"onclick"===c?(a=a.run.data[a.index]&&a.run.data[a.index].id,this.onCreditCategoryClick(a)):"onmouseover"===c?b.style(this.domNode,
"cursor","pointer"):"onmouseout"===c&&b.style(this.domNode,"cursor","default")})))},_createCreditsTable:function(){var a;a="\x3ctable class\x3d'creditsTable esriFloatTrailing' cellspacing\x3d3 cellpadding\x3d3 border\x3d0\x3e"+('\x3ctr\x3e\x3ctd colspan\x3d"2"\x3e\x3c/td\x3e\x3ctd class\x3d"colhead esriAlignTrailing"\x3e'+this.i18n.units+'\x3c/td\x3e\x3ctd class\x3d"colhead esriAlignTrailing"\x3e'+this.i18n.credits+"\x3c/td\x3e\x3c/tr\x3e");a+=this._createCategory(this.i18n.storage,["stg_tiles","stg_features",
"stg_portal"]);a+=this._createCategory(this.i18n.analytics,"geocodecnt_geocode svcusg_geoenrich svcusg_geotrigger svcusg_routing svcusg_spanalysis svcusg_elevanalysis".split(" "));a+=this._createCategory(this.i18n.premium,["svcusg_demogmaps"]);a+=this._createCategory(this.i18n.published,["svcusg_tiles","svcusg_features","tilegencnt_tiles"]);a+="\x3ctr\x3e\x3ctd class\x3d'creditssum esriAlignTrailing' colspan\x3d4 height\x3d50\x3e"+esri.substitute({total:0},this.i18n.total)+"\x3c/tr\x3e";b.attr(this._creditsTable,
"innerHTML",a+"\x3c/table\x3e");b.query(".catlink").connect("onclick",this,b.hitch(this,function(a){a.preventDefault();this._selectedCategory=a.currentTarget.hash.substring(1);this.onCreditCategoryClick(this._selectedCategory)}))},_createCategory:function(a,c){var d="\x3ctr\x3e\x3ctd class\x3d'categ' colspan\x3d3 height\x3d40\x3e"+a+"\x3c/td\x3e\x3c/tr\x3e";b.forEach(c,b.hitch(this,function(a){d+=esri.substitute(b.mixin({id:a},this._creditStore.get(a).value),"\x3ctr class\x3d'categRow'\x3e\x3ctd class\x3d'chip' style\x3d'background-color:${fill}'\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x3ca class\x3d'catlink' href\x3d'#${id}'\x3e${categ}\x3c/a\x3e\x3c/td\x3e\x3ctd class\x3d'esriAlignTrailing ${id}_u'\x3e${units}\x3c/td\x3e\x3ctd class\x3d'${id} esriAlignTrailing'\x3e${y}\x3c/td\x3e\x3c/tr\x3e")}));
return d},_createDetailsTable:function(){var a={visible:dgrid.editor({label:" ",autoSave:!0,sortable:!1},"checkbox"),name:{label:this.i18n.itemName,formatter:b.hitch(this,"_toLink")},num_total:{label:this.i18n.num},credits_total:{label:this.i18n.credits},bw_total:{label:this.i18n.bw,formatter:b.hitch(this,"_toFormat","mbyte")}};this._grid=new (b.declare([dgrid.OnDemandGrid,dgrid.extensions.ColumnResizer,dgrid.Keyboard]))({store:this._creditDetailsStore,columns:a,sort:"num_total",query:function(a){return!!a.name}},
b.create("div",{},this._detailsTable));this._grid.styleColumn("num_total","display: none;");this._grid.styleColumn("bw_total","display: none;");this._grid.on(".dgrid-cell:click",b.hitch(this,function(a){a=this._grid.cell(a);if("name"===a.column.field&&a.row&&a.row.data){var d=a.row.data,e;d.stype&&(!this._aggregateCategories[d.stype]&&"geoenrich"!==this.stype&&"spanalysis"!==this.stype&&"elevanalysis"!==this.stype&&"demogmaps"!==this.stype&&"geotrigger"!==this.stype)&&this._fetchItem(d.name,-1!==
this._selectedCategory.indexOf("_features")?"FeatureServer":"MapServer").then(b.hitch(this,function(a){a&&(a.results&&a.results.length)&&(e=b.filter(a.results,b.hitch(this,function(a){if(a&&(a.title===d.name||a.title===this._convertUnderscores(d.name))||a.name===d.name||a.name===this._convertUnderscores(d.name))return a})));!e||!e.length?this._showError({message:this.i18n.serviceNotFound}):window.location="item.html?id\x3d"+e[0].id}))}}))},_convertUnderscores:function(a){return a?a.replace(/_/g," "):
a},_setFilterOptions:function(a){var c=this._getCreditLabel(a);this._selectCredit.set("options",this._creditFilterOptions);this._selectCredit.removeOption("stg");this._selectCredit.removeOption("bw");"stg_features"===a?(this._selectCredit.removeOption("num"),this._selectCredit.addOption(this._creditFilterOptions[3])):("svcusg_tiles"===a||"svcusg_features"===a)&&this._selectCredit.addOption(this._creditFilterOptions[2]);this._creditFilterOptions[1].label=c;this._grid.column("num_total").label=c;this._grid.setColumns(this._grid.columns);
this._selectCredit.set("value",this._selectedFilter||"credits");b.query(".filter").style("display",-1!==this._selectedCategory.indexOf("stg")?"none":"block");"demogmaps"===this.stype?(b.style(this._creditSelect,"display",""),b.style(this._creditSelect,"float","left"),b.style(this._deomgmapsTaskSelect,"display","block"),b.style(this._storageTaskSelect,"display","none")):"stg_features"===a?(b.query(".filter").style("display","block"),b.style(this._deomgmapsTaskSelect,"display","none"),b.style(this._creditSelect,
"display",""),b.style(this._creditSelect,"float","left"),b.style(this._storageTaskSelect,"display","block")):(b.style(this._deomgmapsTaskSelect,"display","none"),b.style(this._storageTaskSelect,"display","none"),b.style(this._creditSelect,"display",""),b.style(this._creditSelect,"float","none"))},_getCreditLabel:function(a){a=this._creditStore.get(a);return this.i18n["num_"+a.value.f.split("_")[1]]||this.i18n.num},_updateLineChart:function(a,b){this._updateLineChartY(a);this._updateLineChartX(a);
this._lineChart.setSeriesOrder(this._seriesOrder);b.series=a.series;a.render();b.refresh()},_updateLineChartY:function(a){var c,d=this._selectCredit.get("value");this._creditDetailsStore.query(b.hitch(this,function(e){e.visible?(c=this._getYAxis(e.id,d),e.id===this.i18n.all&&a.addAxis("y",{min:c.min,max:c.max,vertical:!0}),a.getSeries(e.id)?a.updateSeries(e.id,c.data):(a.addSeries(e.id,c.data,e.id===this.i18n.all?{stroke:{color:"black"},fill:"black"}:{}),this._seriesOrder.unshift(e.id))):(a.removeSeries(e.id),
e=b.indexOf(this._seriesOrder,e.id),-1!==e&&this._seriesOrder.splice(e,1))}))},_updateLineChartX:function(a){var b=this._getXAxis(this._dateQuery);a.addAxis("x",{min:b.min,max:b.max,labels:b.data||[]})},_getTotalCredits:function(){var a=0;this._creditStore.query().forEach(function(b){a+=b.value.y||0});b.query(".nodatapie").style("display",a?"none":"block");b.query(".creditGraph").style("display",a?"block":"none");return this._formatNumber(a)},_readCookie:function(){this._dateQueryIdx=(this._cookie=
(this._cookie=this._util.getCookie("ESRI_Content"))&&this._cookie.organizationStatus)&&this._cookie.dateQuery||"last24hours";"custom"===this._dateQueryIdx&&(this._cookie.startTime&&this._cookie.endTime&&this._cookie.period?(this._dateQuery={startTime:this._cookie.startTime,endTime:this._cookie.endTime,period:this._cookie.period},this.onDateRangeChange(this._dateQueryIdx,!0)):this._dateQueryIdx="last24hours");this._selectedCategory=this._cookie&&this._cookie.category||this._findMostConsumed().value.id;
this._selectedFilter=this._cookie&&this._cookie.filter||"credits";this._selectedServices=this._cookie&&this._cookie.services&&this._cookie.services.split(",")||null},_writeCookie:function(){var a=this._creditDetailsStore.query({visible:!0}).map(function(a){return a.id}),c=this._selectDate.get("value");this._cookie=(this._cookie=this._util.getCookie("ESRI_Content"))||{};this._cookie.organizationStatus={dateQuery:c,category:this._selectedCategory,filter:this._selectCredit.get("value"),services:a.join(",")};
"custom"===c&&(this._cookie.organizationStatus=b.mixin(this._cookie.organizationStatus,this._dateQuery));b.cookie("ESRI_Content",b.json.stringify(this._cookie),{path:"/"})},_toLink:function(a){var b=this._selectedCategory&&this._selectedCategory.split("_")[1]||"";return!this._aggregateCategories[b]&&"geoenrich"!==this.stype&&"spanalysis"!==this.stype&&"elevanalysis"!==this.stype&&"demogmaps"!==this.stype&&"geotrigger"!==this.stype?"\x3ca onclick\x3d'return false;' href\x3d'#'\x3e"+a+"\x3c/a\x3e":
a},_initHelpMgr:function(){var a=arcgisonline.sharing.dijit.HelpManager.prototype.statics.getInstance(),c=setInterval(b.hitch(this,function(){if(a.isLoaded()){clearInterval(c);var d=a.getHelpUrl("120000503");b.query(".helpLink").attr("href",d)}}),200)},_getDefaultAccountUrls:function(){var a=esriGeowConfig.portalHostname,b="",d={features:{http:[],https:[]},tiles:{http:[],https:[]}};-1!==a.indexOf("dev")?b="dev":-1!==a.indexOf("qa")&&(b="qa");d.features.http.push("services"+b+".arcgis.com");d.features.https.push("services"+
b+".arcgis.com");d.tiles.http.push("tiles"+b+".arcgis.com");d.tiles.https.push("tiles"+b+".arcgis.com");return d},_request:function(a,c){var d=b.mixin(c||{},this._requestParams);return this._util.request({url:a,content:d}).then(b.hitch(this,function(a){return a.error?this._showError(a.error):a}),b.hitch(this,function(a){this._showError(a);throw Error();}))},_showError:function(a){a=a.error||a||{};a.code=a.code||0;a=b.mixin(b.mixin({},this.i18n.errors.error),a);this._errorDlg.show(a)}})});