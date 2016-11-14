import { config } from '../config/config'

import { getItem, getItemData } from '../portal/content/items'

import cookie from '../utils/cookie'
import { formatTime,getQueryString } from '../utils/auxiliary'

let itemid = getQueryString('id')

getItemInfo(itemid)

function getItemInfo(itemid) {
  let token = cookie('dipper_token')
  if (token === undefined) {
    return
  }

  getItem(itemid, token).then(response => {
    if (response.ok) {
      response.json().then(json => {
        $('.item-title').text(json.title)
        $('.item-abstract').text(json.snippet||'')
        $('.item-type').text(json.type)
        $('#itemAuthor').text(json.owner)
        $('#itemModify').text(formatTime(json.modified))
        $('.item-item-description-text').text(json.description)
        $('.open-in-webmap').attr('href', `map.html?webmap=${json.id}`)

        let tags = json.tags
        let tagHtml = '<span>标签：</span>'
        for(let i = 0; i < tags.length; i++) {
          tagHtml += `<a class="item-attr-list" href="javascript:void(0);">${tags[i]}</a>`
        }
        $('.item-attr-tags').html(tagHtml)
      })
    }
  }).catch(err => {
    console.log(err)
  })

  getItemData(itemid, token).then(response => {
    if (response.ok) {
      response.json().then(json => {
        let baseMap = json.baseMap
        let baseMapLayers = baseMap.baseMapLayers
        let operationalLayers = json.operationalLayers

        let layerDataHtml = ''
        layerDataHtml += `<span>${baseMap.title}：</span>`

        for(let i = 0; i < baseMapLayers.length; i++) {
          let baseMapLayer = baseMapLayers[i]

          layerDataHtml += `<a href="${baseMapLayer.url}">${baseMapLayer.url}</a>`
        }

        for(let j = 0; j < operationalLayers.length; j++) {
          let operationalLayer = operationalLayers[j]

          layerDataHtml += `<span>${operationalLayer.title}：</span>
          <a href="${operationalLayer.url}">${operationalLayer.url}</a>`
        }

        $('.item-layer').html(layerDataHtml)
      })
    }
  }).catch(err => {
    console.log(err)
  })
}
