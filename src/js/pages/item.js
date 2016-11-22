import { config } from '../config/config'

import { getItem, getItemData } from '../portal/content/items'

import cookie from '../utils/cookie'
import { formatTime, subString, getQueryString } from '../utils/auxiliary'

let itemid = getQueryString('id')
let itemtype = getQueryString('type')

if (itemtype !== 'tool') {
  $('.page-data').addClass('active')
} else {
  $('.page-tool').addClass('active')
}

getItemInfo(itemid)

function getItemInfo(itemid) {
  let token = cookie('dipper_token')

  getItem(itemid, cookie('dipper_token')).then(response => {
    if (response.ok) {
      response.json().then(json => {
        $('.loading').hide()
        if (json.error) {
          return
        }

        $('.item-title').text(json.title)

        let itemContentHtml = `<div class="item-overview">
        </div>
        <div class="item-info">
          <div class="item-description item-block">
          </div>
          <div class="item-authority item-block">
          </div>
          <div class="item-layers item-block">
          </div>
          <div class="item-attrbutes item-block">
          </div>
        </div>`

        let thumbnail = `${config.portal.url}/sharing/rest/content/items/${json.id}/info/${json.thumbnail}`
        if (token !== undefined) {
          thumbnail = `${thumbnail}?token=${token}`
        }
        if (json.thumbnail === null) {
          thumbnail = 'assets/images/portal/desktopapp.png'
        }

        let openUrl = ''
        switch (itemtype) {
          case 'tool':
            openUrl = json.url;
            break;
          case 'webmap':
            openUrl = `webmap/viewer.html?webmap=${json.id}`;
            break;
          default:
            openUrl = `webmap/viewer.html?layers=${json.id}`;
            break;
        }

        let overviewHtml = `<div class="media">
          <div class="media-left media-top">
            <img src="${thumbnail}" class="media-object" alt="" width="202px" height="135px" />
          </div>
          <div class="media-body">
            <h3 class="item-title">${json.title}</h3>
            <p class="item-abstract">${subString(json.snippet||'', 110)}</p>
            <p class="item-credit">
              <span class="item-type">${json.type}</span>
              <span class="item-author">作者：<a id="itemAuthor">${json.owner}</a></span>
              <span class="item-modify">创建时间：<span id="itemModify">${formatTime(json.created)}</span>
            </p>
            <p class="item-rating">
              <span name="stars-ratings" class="glyphicon glyphicon-star glyphicon-gray" style="margin-right:1px"></span>
              <span name="stars-ratings" class="glyphicon glyphicon-star glyphicon-gray" style="margin-right:1px"></span>
              <span name="stars-ratings" class="glyphicon glyphicon-star glyphicon-gray" style="margin-right:1px"></span>
              <span name="stars-ratings" class="glyphicon glyphicon-star glyphicon-gray" style="margin-right:1px"></span>
              <span name="stars-ratings" class="glyphicon glyphicon-star glyphicon-gray" style="margin-right:1px"></span>
              <span class="item-rating-text">（${json.numRatings}次评级）</span>
            </p>
          </div>
        </div>
        <div class="item-operation btn-group">
          <button id="options" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">打开 <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="${openUrl}">打开</a></li>
            <li><a href="#">下载</a></li>
          </ul>
        </div>`

        let descriptionHtml = `<h4>描述</h4>
          <p class="item-description-text">${json.description || ''}</p>`

        let authorityHtml = `<h4>访问和限制</h4>
          <p class="item-authority-text">${json.licenseInfo || ''}</p>`

        let layersHtml = `<h4>地图内容</h4>
          <div class="item-baselayer">
            <div class="list">基础底图</div>
            <div class="baselayer-list">
            </div>
          </div>
          <div class="item-businesslayer">
            <div class="list">业务图层</div>
            <ul class="operationallayer-list">
            </li>
          </div>`

        let attrbutesHtml = `<h4>属性信息</h4>
          <p class="item-attr-info item-atrr-content">
          </p>
          <p class="item-attr-tags">
          </p>
          <p class="item-attr-info">
            <span>制作单位：</span>
            <a class="item-org" href="javascript:void(0);">${json.accessInformation || ''}</a>
          </p>
          <p class="item-attr-info">
            <span>大小：</span>
            <span class="">${json.size}KB</span>
          </p>`

        if (json.extent.length !== 0) {
          attrbutesHtml = `${attrbutesHtml}<p class="item-attr-info">
            <span>范围：</span>
            <span class="item-attr-list">${json.extent[0][0]}, </span>
            <span class="item-attr-list">${json.extent[0][1]}, </span>
            <span class="item-attr-list">${json.extent[1][0]}, </span>
            <span class="item-attr-list">${json.extent[1][1]}</span>
          </p>`
        }

        $('.item-content').html(itemContentHtml)
        $('.item-overview').html(overviewHtml)
        $('.item-description').html(descriptionHtml)
        $('.item-authority').html(authorityHtml)
        $('.item-attrbutes').html(attrbutesHtml)
          // $('.item-abstract').text(subString(json.snippet||'', 110))
          // $('.item-type').text(json.type)
          // $('#itemAuthor').text(json.owner)
          // $('#itemModify').text(formatTime(json.modified))
          // $('.item-description-text').html($.parseHTML(json.description))
          // $('.open-in-webmap').attr('href', `webmap/viewer.html?webmap=${json.id}`)
          // $('.item-authority-text').html($.parseHTML(json.licenseInfo))

        // let tags = json.tags
        // let tagHtml = '<span>标签：</span>'
        // for(let i = 0; i < tags.length; i++) {
        //   tagHtml += `<a class="item-attr-list" href="javascript:void(0);">${tags[i]}</a>`
        // }
        // $('.item-attr-tags').html(tagHtml)

        if (itemtype === 'webmap') {
          $('.item-layers').html(layersHtml)

          getItemData(itemid, token).then(response => {
            if (response.ok) {
              response.json().then(json => {
                let baseMap = json.baseMap
                let baseMapLayers = baseMap.baseMapLayers
                let operationalLayers = json.operationalLayers

                let baseLayerHtml = `<p class="layer-title">${baseMap.title}：</p>`
                for (let i = 0; i < baseMapLayers.length; i++) {
                  let baseMapLayer = baseMapLayers[i]
                  let visibility = baseMapLayer.visibility ? '可见' : '隐藏'

                  baseLayerHtml += `<div class="attr-line"><span>类型：</span><span>${baseMapLayer.layerType}</span></div>
                      <div class="attr-line"><span>可见性：</span><span>${visibility}</span></div>
                      <div class="attr-line"><span>URL：</span><a href="${baseMapLayer.url}" target="_blank">${baseMapLayer.url}</a></div>`
                }
                $('.baselayer-list').html(baseLayerHtml)

                let operationallayerHtml = ''
                for (let j = 0; j < operationalLayers.length; j++) {
                  let operationalLayer = operationalLayers[j]

                  operationallayerHtml += `<li><p class="layer-title">${operationalLayer.title}</p>
                      <div class="attr-line"><span class="">类型：</span><span class="">${operationalLayer.layerType}</span></div>
                      <div class="attr-line"><span class="">可见性：</span><span class="">${operationalLayer.visibility ? '可见' : '隐藏'}</span></div>
                      <p class="attr-line"><span class="">URL：</span><a href="${operationalLayer.url}" target="_blank">${operationalLayer.url}</a></p></li>`
                }
                $('.operationallayer-list').html(operationallayerHtml)
              })
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          let apiUrlHtml = `<h4>ArcGIS Web API REST 连接</h4><p class="layer-title"><a href="${json.url || '#'}" target="_blank">${json.url || ''}</a></p>`
          $('.item-layers').html(apiUrlHtml)
        }
      })
    }
  }).catch(err => {
    console.log(err)
  })
}
