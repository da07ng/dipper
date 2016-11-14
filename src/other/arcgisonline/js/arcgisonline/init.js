// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/init",["dijit","dojo","dojox","dojo/require!dojo/DeferredList"],function(l,a,k){a.provide("arcgisonline.init");a.require("dojo.DeferredList");a.mixin(arcgisonline.init,{labels:null,feeds:[],currentFeed:null,allSSL:!1,isOrg:!1,isSingleTenant:!1,settings:null,galleryNodeMap:{},loadLabels:function(){var b=arcgisonline.init;b.labels=a.i18n.getLocalization("arcgisonline","arcgisonline").common;a.mixin(b.labels,a.i18n.getLocalization("arcgisonline","arcgisonline").homePage);a.attr("viewerLink",
"innerHTML",b.labels.viewerLink);a.attr("viewerDescription","innerHTML",b.labels.viewerDescription);a.attr("signUpLink","innerHTML",b.labels.signUpLink);a.attr("signUpDescription","innerHTML",b.labels.signUpDescription);a.attr("featuredVideosLink","innerHTML",b.labels.featuredVideosLink);a.attr("featuredVideosDescription","innerHTML",b.labels.featuredVideosDescription);a.attr("lnkExplore","innerHTML",b.labels.explorerLink);a.attr("pExplore","innerHTML",b.labels.explorerDescription);a.attr("signUpImg",
"alt",b.labels.signUpLink);a.attr("signUpImg","title",b.labels.signUpLink);a.attr("mapImg","alt",b.labels.viewerLink);a.attr("mapImg","title",b.labels.viewerLink);a.attr("developersImg","alt",b.labels.explorerLink);a.attr("developersImg","title",b.labels.explorerLink);a.attr("videosImg","alt",b.labels.featuredVideosLink);a.attr("videosImg","title",b.labels.featuredVideosLink)},initialize:function(){var b=arcgisonline.init;esri.i18nBundle=a.i18n.getLocalization("arcgisonline","arcgisonline");b.loadLabels();
a.byId("logoImg")&&a.attr("logoImg","src",arcgisonline.sharing.util.relativeToExplicitUrl("images/logo-pod.jpg"));var e=arcgisonline.sharing.dijit.HelpManager.prototype.statics.getInstance();a.connect(e,"onLoad",a.hitch(this,function(){a.byId("featuredVideosLink").href=e.getHelpUrl("120000461")}));b.isSingleTenant=void 0!==esriGeowConfig.isMultiTenant&&null!==esriGeowConfig.isMultiTenant&&!1===esriGeowConfig.isMultiTenant;var d=arcgisonline.sharing.util.getUser();if(b.isSingleTenant||d&&d.accountId)b.isOrg=
!0,(d=a.byId("headerTitle"))&&d.parentNode.removeChild(d);arcgisonline.sharing.geow.Account.getSelf(a.hitch(b,arcgisonline.init.initPage),a.hitch(arcgisonline.init,arcgisonline.init.initPage))},overrideSettings:function(b){var e=arcgisonline.init;e.settings=b;e.isPortal=arcgisonline.sharing.util.isPortal();if(e.settings.id&&0<e.settings.id.length){e.isOrg=!0;var d=a.byId("headerTitle");d&&d.parentNode.removeChild(d)}e.isPortal&&e.getFederatedServers();b.allSSL&&(e.allSSL=b.allSSL);b.portalName&&(esriGeowConfig.portalName=
b.portalName);b.portalHostname&&(esriGeowConfig.portalHostname=b.portalHostname);b.portalHeaderImage&&(esriGeowConfig.portalHeaderImage=b.portalHeaderImage);b.homePageFeaturedContent?esriGeowConfig.homePageFeaturedContent=b.homePageFeaturedContent:e.isOrg&&(esriGeowConfig.homePageFeaturedContent=null);esri.isDefined(b.homePageFeaturedContentCount)&&(esriGeowConfig.homePageFeaturedContentCount=b.homePageFeaturedContentCount);if(b.rotatorPanels)if(e.isOrg){esriGeowConfig.rotatorPanels=b.rotatorPanels;
for(var d=esriGeowConfig.rotatorPanels,c,f,g,h=0;h<d.length;h++)c=d[h],e.isPortal&&("7443"===location.port&&-1===esriGeowConfig.self.portalHostname.indexOf(":7443"))&&(f=RegExp(esriGeowConfig.self.portalHostname,"gi"),f.test(c.innerHTML)&&(g=esriGeowConfig.self.portalHostname.split("/"),g[0]+=":7443",g[1]="arcgis",c.innerHTML=c.innerHTML.replace(f,g.join("/")))),d[h].innerHTML=c.innerHTML.replace(/CDN_SERVER/gi,esriGeowConfig.cdnServerUrl)}else a.create("div",{id:"homeCalciteBanner"},a.byId("matrixLayout")),
a.addClass(a.byId("details"),"calcite_home calcite_home_details"),a.addClass(a.byId("matrixLayout"),"calcite_home calcite_home_matrixLayout"),a.addClass(a.byId("homeCalciteBanner"),"calcite_home calcite_home_banner"),a.addClass(a.byId("featuredMaps"),"calcite_home calcite_home_featuredMaps"),a.addClass(a.byId("bottomContent"),"calcite_home calcite_home_bottomContent");else e.isOrg&&(esriGeowConfig.rotatorPanels=null);e=b.showHomePageDescription;esriGeowConfig.showHomePageDescription=void 0!==e&&null!==
e?b.showHomePageDescription:!1},getFederatedServers:function(){var b=arcgisonline.sharing.util.getUser();!esriGeowConfig.federatedServers&&b&&arcgisonline.sharing.util.request({url:esriGeowConfig.restBaseUrl+"portals/"+esriGeowConfig.self.id+"/servers"}).then(a.hitch(this,function(a){esriGeowConfig.federatedServers=a.servers}))},initOrganization:function(){var b=arcgisonline.init;esri.hide(a.byId("bottomSection"));if(esriGeowConfig.explorerOnline){var e="http://developers.arcgis.com",d=b.labels.explorerLink,
c=b.labels.explorerDescription;b.isSingleTenant&&(e=esriGeowConfig.explorerOnline,d=b.labels.explorerLinkPortal,c=b.labels.explorerDescriptionPortal);a.create("div",{id:"appOrgDiv",innerHTML:'\x3ch2 id\x3d"h2Explore"\x3e\x3ca id\x3d"lnkExplore" class\x3d"explorerLink" href\x3d"'+e+'" target\x3d"_blank" \x3e'+d+'\x3c/a\x3e\x3c/h2\x3e\x3cp id\x3d"pExplore"\x3e'+c+"\x3c/p\x3e"},a.byId("topRow2"))}var e=b.settings.name,d=b.settings.description,c=esriGeowConfig.showHomePageDescription,c=void 0!==c&&null!==
c&&!1===c?!1:!0,f=esri.isDefined(d)&&"\x3cbr\x3e"!==d&&"\x3cbr/\x3e"!==d&&"\x3cbr /\x3e"!==d&&""!==d;if(f&&c)a.attr(a.byId("orgDetails"),"innerHTML",d),esri.show(a.byId("organizationSection"));else if(arcgisonline.sharing.util.isPortal()&&!f&&!c){var g=esriGeowConfig.self.helpBase.replace("/website/","/admin/"),g=b.settings.allSSL?arcgisonline.sharing.util.getSecureUrl(g):arcgisonline.sharing.util.getHttpUrl(g);esri.request({url:g+"cxhelp.js"}).then(a.hitch(this,function(d){d='\x3cspan class\x3d"esriItemLinks"\x3e\x3ca href\x3d"'+
(g+d.m["120000837"])+'" target\x3d"_blank"\x3e';a.attr(a.byId("orgDetails"),"innerHTML",esri.substitute({linkStart:d,linkEnd:"\x3c/a\x3e\x3c/span\x3e"},b.labels.portalDefaultDesc));esri.show(a.byId("organizationSection"))}))}d=(d=arcgisonline.sharing.util.getToken())?"?token\x3d"+d:"";c=b.settings.backgroundImage;esri.isDefined(c)?"none"!==c?0===c.indexOf("images/")?a.query("body").addClass("defaultBackground"):(c=esriGeowConfig.restBaseUrl+"portals/self/resources/"+c+d,f=a.query("body.esri")[0],
a.style(f,"backgroundImage","url('"+c+"')"),a.style(f,"backgroundPosition","top center"),a.style(f,"backgroundRepeat","repeat-x")):a.query("body").addClass("calciteBackground"):a.query("body").addClass("calciteBackground");if(esriGeowConfig.rotatorPanels){a.addClass(a.byId("matrixLayout"),"matrixLayoutShort");a.addClass(a.byId("details"),"detailsShort");e=arcgisonline.sharing.util.getToken();c=esriGeowConfig.rotatorPanels;for(f=0;f<c.length;f++)d=c[f],d.id&&(d.innerHTML=b.allSSL||b.isPortal&&"https:"===
location.protocol?d.innerHTML.replace("http:","https:"):d.innerHTML.replace("https:","http:")),c[f].innerHTML=d.innerHTML.replace(/CDN_SERVER/gi,esriGeowConfig.cdnServerUrl),c[f].innerHTML=d.innerHTML.replace("SECURITY_TOKEN",e?e:"");b.createRotator(c)}else c=esriGeowConfig.portalHeaderImage?esriGeowConfig.portalHeaderImage:arcgisonline.sharing.util.relativeToExplicitUrl("images/organizationSplash.jpg"),a.create("img",{id:"headerImage",src:c},a.byId("matrixLayout")),a.addClass(a.byId("headerImage"),
"portalImage"),c=a.create("div",{id:"logoDisplay"},a.byId("matrixLayout")),f="",b.settings&&b.settings.thumbnail&&(f=esriGeowConfig.restBaseUrl+"portals/self/resources/"+b.settings.thumbnail+d,a.create("img",{src:f,alt:e},c)),a.create("span",{innerHTML:e},c),a.addClass(a.byId("matrixLayout"),"matrixLayoutShort"),a.addClass(a.byId("details"),"detailsShort")},initPage:function(b,e){var d=arcgisonline.init;b&&(!b.code&&!b.message)&&d.overrideSettings(b);if(d.isOrg)document.title=d.settings.name;else if(document.title=
esriGeowConfig.portalName||d.labels.arcgis,a.query("body").addClass("defaultBackground"),esriGeowConfig.portalHeaderImage){var c=a.byId("headerTitle");c&&c.parentNode.removeChild(c);a.create("img",{id:"headerImage",src:esriGeowConfig.portalHeaderImage},a.byId("matrixLayout"));a.addClass(a.byId("headerImage"),"portalImage")}else d.createRotator(esriGeowConfig.rotatorPanels);c="";(c=arcgisonline.sharing.util.getUser())&&!c.accountId?(a.attr("signUpLink","innerHTML",d.labels.readyToUse),a.attr("signUpDescription",
"innerHTML",d.labels.readyToUseDescription),a.query("#signUpLink").attr("href","../features/apps/index.html")):(-1===esriGeowConfig.signin.indexOf("http")?(c=esriGeowConfig.baseUrl+esriGeowConfig.signin,!1!==esriGeowConfig.useSSL&&(c=c.replace("http:","https:"))):c=esriGeowConfig.signin,a.query("#signUpLink").attr("href",c));esriGeowConfig.explorerOnline?a.query(".explorerLink").attr("href","http://developers.arcgis.com"):(a.style(a.byId("bottom3Grid"),"display","none"),a.removeClass(a.byId("bottomRow2"),
"middle"),a.addClass(a.byId("bottomRow2"),"last"),a.addClass(a.byId("bottom2Grid"),"grid_6"),a.addClass(a.byId("bottom1Grid"),"grid_6"));a.style("page-border","visibility","visible");esriGeowConfig.homePageFeaturedContent?d.getGroup(esriGeowConfig.homePageFeaturedContent):esri.hide(a.byId("featuredMaps"));d.isOrg?d.initOrganization():d.initGoogleAPI()},createRotator:function(b){var e=new k.widget.AutoRotator({transition:"dojox.widget.rotator.crossFade",duration:1E4,panes:b,autoStart:!0,pauseOnManualChange:!0,
cycles:12,suspendOnHover:!0},a.byId("imgRotator"));new k.widget.rotator.Controller({rotator:e,commands:"#"},a.byId("categories"));b&&1===b.length&&a.style("categories","display","none")},initGoogleAPI:function(){var a=document.createElement("script");a.src=location.protocol+"//www.google.com/jsapi?key\x3dABQIAAAAmO-VQth3Y6KB46-ZxGr_nBSQ8kgDO2SNhVovJIFNetyD-K9YDhTGHU-P9PYC3aMlIhJ1u_jDcPv_Jw\x26callback\x3darcgisonline.init.initFeed";a.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(a)},
initFeed:function(){google.load("feeds","1",{callback:arcgisonline.init.LoadDynamicFeed})},LoadDynamicFeed:function(){var a=arcgisonline.init;if(!a.isOrg){var e=new google.feeds.Feed("http://feeds.feedburner.com/arcgiscomnewsfeed");e.setNumEntries(50);e.load(a.formatFeedCallback)}},formatFeedCallback:function(b){var e=arcgisonline.init;b.error||(a.forEach(b.feed.entries,function(b){var c=a.date.locale.format(new Date(b.publishedDate),{selector:"date",formatLength:"medium"});e.feeds.push("\x3cdiv\x3e\x3ch2 class\x3d'ellipsis'\x3e\x3ca href\x3d'"+
b.link+"'\x3e"+b.title+"\x3c/a\x3e\x3c/h2\x3e\x3c/div\x3e\x3cdiv style\x3d'padding-bottom:4px;' id\x3d'date'\x3e"+c+"\x3c/div\x3e\x3cdiv class\x3d'feedSnippet'\x3e"+b.contentSnippet+"\x3c/div\x3e")}),e.currentFeed=0)},getNextFeed:function(){var b=arcgisonline.init;-1<=b.currentFeed&&b.currentFeed<b.feeds.length-1?(b.currentFeed+=1,a.byId("feeds").innerHTML=b.feeds[b.currentFeed]):(b.currentFeed=-1,b.getNextFeed())},getPreviousFeed:function(){var b=arcgisonline.init;b.currentFeed<=b.feeds.length&&
0<b.currentFeed?(b.currentFeed-=1,a.byId("feeds").innerHTML=b.feeds[b.currentFeed]):(b.currentFeed=b.feeds.length,b.getPreviousFeed())},getNextElementSibling:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(;a.nextSibling;){if(1===a.nextSibling.nodeType)return a.nextSibling;a=a.nextSibling}},getGroup:function(b){b={q:b,f:"json",ts:(new Date).getTime()};arcgisonline.sharing.util.request({url:esriGeowConfig.restBaseUrl+"community/groups",content:b}).then(a.hitch(arcgisonline.init,
arcgisonline.init.getGroupContent),a.hitch(arcgisonline.init,arcgisonline.init.getGroupContent))},getGroupContent:function(b){if(!b||!b.results||!b.results[0])console.log("unable to fetch group",arguments),esri.hide(a.byId("featuredMaps"));else{for(var e=0,d=b.results[e];b.results.length>e+1&&!(-1<b.query.indexOf('"'+d.title+'"'));)e++,d=b.results[e];a.byId("galleryTitle").innerHTML=d.title;0===esriGeowConfig.homePageFeaturedContentCount?this.showAllGroupItems(d):(e={q:"group:"+d.id+' -(type:"Code Attachment" OR type:"Windows Viewer Add In" OR type:"Windows Viewer Configuration")',
f:"json",num:esriGeowConfig.homePageFeaturedContentCount,sortField:d.sortField?d.sortField:"modified",sortOrder:d.sortOrder?d.sortOrder:"desc",ts:(new Date).getTime()},arcgisonline.sharing.util.request({url:esriGeowConfig.restBaseUrl+"search",content:e}).then(a.hitch(arcgisonline.init,arcgisonline.init.createGallery),function(a){console.log("unable to fetch group content",arguments)}))}},showAllGroupItems:function(b){var e={q:"group:"+b.id+' -(type:"Code Attachment" OR type:"Windows Viewer Add In" OR type:"Windows Viewer Configuration")',
f:"json",num:100,sortField:b.sortField?b.sortField:"modified",sortOrder:b.sortOrder?b.sortOrder:"desc",ts:(new Date).getTime()};arcgisonline.sharing.util.request({url:esriGeowConfig.restBaseUrl+"search",content:e}).then(a.hitch(this,function(b){var c={results:b.results},f=0,f=0;if(0<b.nextStart){var f=b.total-b.results.length,f=Math.ceil(f/100),g=[];b=b.nextStart;for(var h=0;h<f;h++)e.start=b+100*h,g.push(arcgisonline.sharing.util.request({url:esriGeowConfig.restBaseUrl+"search",content:e}));(new a.DeferredList(g)).then(a.hitch(this,
function(b){a.forEach(b,a.hitch(this,function(a){a[1]&&a[1].results&&(c.results=c.results.concat(a[1].results))}));this.createGallery(c)}),a.hitch(this,function(a){console.log("error fetching further group content",a);this.createGallery(c)}))}else this.createGallery(c)}),function(a){console.log("unable to fetch group content",arguments)})},createGallery:function(b,e){var d=b.results,c=new arcgisonline.sharing.dijit.Gallery({nodesPerPage:4,showThumbnailInDetails:!1,showToolTip:!1,showPageControls:!1,
fadeOutOtherNodes:!0,noResultsMessage:"\x3cp class\x3d'esriItemLinks'\x3e\x3cspan\x3e"+arcgisonline.init.labels.noGalleryItems+"\x3c/span\x3e\x3c/p\x3e"},"gallery");a.connect(c,"onContentChange",function(){d.length<=c.nodesPerPage&&(esriGeowConfig.isRightToLeft?(a.removeClass("next","prevButtonEnabled"),a.addClass("next","prevButtonDisabled")):(a.removeClass("next","nextButtonEnabled"),a.addClass("next","nextButtonDisabled")))});c.set("items",d);esriGeowConfig.isRightToLeft?(a.connect(a.byId("prev"),
"onclick",c,c.nextPage),a.connect(a.byId("next"),"onclick",c,c.prevPage),a.removeClass("next","nextButtonEnabled"),a.addClass("next","nextButtonDisabled")):(a.connect(a.byId("prev"),"onclick",c,c.prevPage),a.connect(a.byId("next"),"onclick",c,c.nextPage),a.removeClass("prev","prevButtonEnabled"),a.addClass("prev","prevButtonDisabled"));a.connect(c,"onPageChange",function(b){arcgisonline.init.galleryNodeMap={};esriGeowConfig.isRightToLeft?(1===b?(a.removeClass("next","nextButtonEnabled"),a.addClass("next",
"nextButtonDisabled")):(a.removeClass("next","nextButtonDisabled"),a.addClass("next","nextButtonEnabled")),b===c.pageCount?(a.removeClass("prev","prevButtonEnabled"),a.addClass("prev","prevuttonDisabled")):(a.removeClass("prev","prevButtonDisabled"),a.addClass("prev","prevButtonEnabled"))):(1===b?(a.removeClass("prev","prevButtonEnabled"),a.addClass("prev","prevButtonDisabled")):(a.removeClass("prev","prevButtonDisabled"),a.addClass("prev","prevButtonEnabled")),b===c.pageCount?(a.removeClass("next",
"nextButtonEnabled"),a.addClass("next","nextButtonDisabled")):(a.removeClass("next","nextButtonDisabled"),a.addClass("next","nextButtonEnabled")))});a.connect(c,"onNodeMouseEnter",function(b,c){var d=arcgisonline.init;a.query("a",b.currentTarget).forEach(function(b){if(!d.galleryNodeMap[c.id]){var e=arcgisonline.sharing.util.getHomePageGalleryLinkInfo(c),f=!1;if(e.href&&(-1<e.href.toLowerCase().indexOf("javascript")&&c.url)&&("Web Mapping Application"===c.type||"Mobile Application"===c.type||"Document Link"===
c.type))e.href=c.url,f=!0;"CityEngine Web Scene"===c.type&&(f=!0);e&&e.href&&"JavaScript:void(0)"===e.href&&e.onclick?a.connect(b,"onclick",e.onclick):a.attr(b,"href",e.href);a.attr(b,"target",f?"_blank":"");d.galleryNodeMap[c.id]=!0}})})}})});