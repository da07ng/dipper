/*
 * @Author: Esri
 * @Date:   2016-05-17 18:34:48
 * @Last Modified by:   Esri
 * @Last Modified time: 2016-08-31 15:04:02
 */

define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/template_data_resource_catalog.html",
    "dojo/text!./templates/template_data_resource_filter_item.html",
    "dojo/on",
    "dojo/aspect",
    "dojo/dom",
    "dojo/dom-construct",
    "dojo/keys",
    "dojo/request",
    "mapwidgets/TreeNodeUtils",
    "dojo/store/Memory",
    "dijit/tree/ObjectStoreModel",
    "mapwidgets/StyledTree",
], function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template, itemTemplate, on, aspect, dom, domConstruct, keys, request, TreeNodeUtils, Memory, ObjectStoreModel, Tree) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {

        queryParams: ' type:"Web Map" OR type: "Feature Service" OR type: "Map Service" NOT type:"Web Map Application" NOT owner:{esrh TO esri_zzzzz}',
        util: null,
        templateString: template,

        /**
         * 查询结果总数
         * @type {Number}
         */
        searchResult: 0,

        /**
         * 当前显示的条目数
         * @type {Number}
         */
        displayResult: 10,

        /**
         * 查询结果集
         * @type {[type]}
         */
        searchResultData: null,

        startup: function() {
            this.inherited(arguments);

            this.loadConnections();
            this.init();
        },

        loadConnections: function() {
            on(dom.byId('data-res-filter-more'), 'click', dojo.hitch(this, function() {

                var curr = this.displayResult;
                if (this.displayResult + 10 < this.searchResult) {
                    this.displayResult += 10;
                } else {
                    this.displayResult = this.searchResult;
                }

                this._refreshSearchResultText();
                this._appendSearchResult(curr, this.displayResult);
            }));
            aspect.after(dijit.byId('leftDataResContentPane'), 'resize', dojo.hitch(this, this.adjustHeight));
        },

        adjustHeight: function() {
            this.searchContainer.resize();
            this.contentPaneContainer.resize();
        },

        init: function() {
            this._initUtil();
            this._initTree();
        },

        _initUtil: function() {
            this.util = new TreeNodeUtils();
            if (!mapwidgets.utils) mapwidgets.utils = this.util;
        },

        _initTree: function() {

            this.util.loadTagTreeDataSource('1000')
                .then(dojo.hitch(this, function(resp) {
                    if (resp.result && resp.code === '200') {

                        mapwidgets.utils.hydata = dojo.json.parse(resp.data);

                        var model = new ObjectStoreModel({
                            store: new Memory({
                                idProperty: 'code',
                                data: [{
                                    code: 'HY',
                                    children: mapwidgets.utils.hydata
                                }],
                                getChildren: function(object) {
                                    return object.children || [];
                                }
                            })
                        });

                        var tree = new Tree({
                            model: model,
                            showRoot: false,
                            openOnClick: true,
                            style: 'margin-bottom: 20px;',
                            onOpen: this._lazyLoadTreeItems
                        });
                        tree.placeAt(this._cataDiv);
                        tree.startup();
                    }
                }));
        },

        _lazyLoadTreeItems: function(item, node) {
            if (!(item.children && item.children.length)) {
                node.loadLabledLayers();
            }
        },

        _filterInputKeyUp: function(e) {
            switch (e.keyCode) {
                case keys.ENTER:
                    this._filterDataResource();
            }
        },

        _filterDataResource: function() {
            var keyword = this._filterInput.get('value');
            if (!keyword) return;

            var searchUrl = window.esriGeowConfig.restBaseUrl + 'search';
            if (configOptions) {
                if (-1 == searchUrl.indexOf(location.host)) {
                    searchUrl = configOptions.proxyUrl + '?' + searchUrl;
                }
            }

            request.post(searchUrl, {
                data: {
                    num: 100,
                    q: keyword + this.queryParams,
                    f: 'json',
                    token: arcgisonline.sharing.util.getToken()
                },
                timeout: 10000,
                handleAs: 'json',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(dojo.hitch(this, function(resp) {

                this._rootStackContainer.selectChild(this._resultStack);
                this._clearResult();

                this.searchResultData = resp.results;
                this.searchResult = resp.total;
                if (resp.total > 10) {
                    this.displayResult = 10;
                    dojo.style(dom.byId('data-res-filter-more'), 'display', '');
                } else {
                    this.displayResult = resp.total;
                    dojo.style(dom.byId('data-res-filter-more'), 'display', 'none');
                }

                this._refreshSearchResultText();
                this._appendSearchResult(0, this.displayResult);
            }));
        },

        _refreshSearchResultText: function() {
            dom.byId('data-res-filter-title').innerHTML = '共搜索到 ' + this.searchResult + ' 条结果，以下为前 ' + this.displayResult + ' 条：';
        },

        _appendSearchResult: function(start, end) {
            var d, i;
            for (i = start; i < end; i++) {
                d = this.searchResultData[i];
                this._setAddLayerText(d);
                this._addIconClass(d);
                domConstruct.create('li', {
                    innerHTML: dojo.string.substitute(itemTemplate, d)
                }, this._filterResultList);
            }
        },

        _closeResultStack: function() {
            this._rootStackContainer.selectChild(this._treeStack);
        },

        _clearResult: function() {
            this._filterResultList.innerHTML = '';
        },

        _setAddLayerText: function(searchItem) {
            if (searchItem.type == 'Web Map' || searchItem.type == 'Web Map Application') {
                searchItem.addLayer_class = 'filter-item-view';
            } else {
                searchItem.addLayer_class = 'filter-item-add';
            }
        },

        _addIconClass: function(searchItem) {
            var iconClass = '';

            switch (searchItem.type) {
                case 'Web Map':
                case 'Web Mapping Application':
                    iconClass = 'fa fa-globe';
                    break;
                case 'Map Service':
                    iconClass = 'fa fa-globe';
                    break;
                case 'Feature Service':
                    iconClass = 'fa fa-map-marker';
                    break;
                case 'Image Service':
                    iconClass = 'fa fa-picture-o';
                    break;
                case 'Vector Tile Service':
                    iconClass = 'fa fa-map-o';
                    break;
                case 'WMS':
                    iconClass = 'fa fa-server';
                    break;
            }
            searchItem.esri_icon = iconClass;
        }
    });
});
