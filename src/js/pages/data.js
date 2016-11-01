import { config } from '../config/config'

import { portalQueryConfig } from '../portal/config'
import { getPortalSelf } from '../portal/portals'
import { search } from '../portal/search'

import cookie from '../utils/cookie'
import { formatTime } from '../utils/auxiliary'

getPortalSelf(cookie('dipper_token')).then(response => {
  if (response.ok) {
    response.json().then(json => {
      let portalId = json.id
      let query = `orgid:${portalId} ${portalQueryConfig.viewQueries.web} ${portalQueryConfig.viewQueries.none} ${portalQueryConfig.filterQueries['maps-webmaps'].f}`

      search(query, '', 9, 'modified', 'desc').then(response => {
        if (response.ok) {
          response.json().then(json => {
            let res = json.results

            showMapList(res)

            // let total = json.total
            // let num = json.num
            // let page = Math.ceil(total/num) ? Math.ceil(total / num) : 1

            $('.pagination').twbsPagination({
              totalPages: Math.ceil(json.total/json.num),
              visiblePages: 5,
              first: '首页',
              prev: '上一页',
              next: '下一页',
              last: '尾页',
              onPageClick: function (event, page) {
                // $('#page-content').text('Page ' + page)
              }
            })
          })
        }
      }).catch(err => {
        console.log(err)
      })
    })
  }
}).catch(err => {
  console.log(err)
})

function showMapList(mapList) {
  let mapListHtml = ''
  for(let i = 0; i < mapList.length; i++) {
    let map = mapList[i]

    let thumbnail = `${config.portal.url}/sharing/rest/content/items/${map.id}/info/${map.thumbnail}`
    if (map.thumbnail === null) {
      thumbnail = 'assets/images/portal/desktopapp.png'
    }

    mapListHtml += `<div class="col-md-4 map">
      <div class="thumbnail">
        <a href="item.html?id=${map.id}" title="${map.title}">
          <img class="map-thumb" src="${thumbnail}" alt="${map.title}" />
          <div class="caption">
            <h3 class="map-title">${map.title}</h3>
            <p class=""map-snippet>${map.snippet === null ? '无描述' : map.snippet}</p>
            <p class="map-author">
              <img title="${map.owner}" src="assets/images/no-user-thumb.jpg" />
              <span class="author-name  text-overflow">${map.owner}</span>
              <span class="pull-right">${formatTime(map.created)}</span>
            </p>
          </div>
        </a>
      </div>
    </div>`
  }

  $('.map-list').html(mapListHtml)
}