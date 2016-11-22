import { config } from '../config/config'

import { portalQueryConfig } from '../portal/config'
import { getPortalSelf } from '../portal/portals'
import { search } from '../portal/search'

import cookie from '../utils/cookie'
import { formatTime, subString } from '../utils/auxiliary'

const PAGESIZE = 9

let $pagination = $('.pagination')
let defaultOpts = {
  first: '首页',
  prev: '上一页',
  next: '下一页',
  last: '尾页'
}
$pagination.twbsPagination(defaultOpts)

/**
 * Get resource from Portal.
 * @param  {string} type    [description]
 * @return {string} tag     [description]
 * @return {string} keyword [description]
 * @return {int}    page    [description]
 */
function getResourceList(type, tag, keyword, page) {
  let orgid = window.dipper.orgid
  let query =`${portalQueryConfig.viewQueries.web} ${portalQueryConfig.viewQueries.none} ${portalQueryConfig.filterQueries[type].f}`

  if (tag !== '' || keyword !== '') {
    if (tag !== '') {
      query = `tags:${tag} ${query}`
    } else {
      query = `${keyword} ${query}`
    }

    let start = page * PAGESIZE - (PAGESIZE - 1)

    searchResource(type, tag, keyword, query, start)
  } else {
    let start = page * PAGESIZE - (PAGESIZE - 1)

    if (orgid !== undefined) {
      query = `orgid:${orgid} ${query}`

      searchResource(type, tag, keyword, query, start)
    } else {
      getPortalSelf(cookie('dipper_token')).then(response => {
        if (response.ok) {
          response.json().then(json => {
            query = `orgid:${json.id} ${query}`

            searchResource(type, tag, keyword, query, start)
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

function searchResource(type, tag, keyword, query, start) {
  search(query, start, PAGESIZE, 'modified', 'desc', cookie('dipper_token')).then(response => {
    if (response.ok) {
      response.json().then(json => {
        $('.loading').hide()
        if (json.error) {
          return
        }

        let res = json.results
        if (res.length === 0) {
          $('.resource-list').html('')
          $('.pagination').hide()

          return
        }

        showResourceList(type, res)
        $('.pagination').show()

        let totalPages = Math.ceil(json.total / PAGESIZE)
        let currentPage = start === 1 ? 1 : $pagination.twbsPagination('getCurrentPage')
        $pagination.twbsPagination('destroy')
        $pagination.twbsPagination($.extend({}, defaultOpts, {
          startPage: currentPage,
          totalPages: totalPages,
          initiateStartPageClick: false,
          onPageClick: function (event, page) {
            $('.loading').show()
            getResourceList(type, tag, keyword, page)
          }
        }))
      })
    }
  }).catch(err => {
    console.log(err)
  })
}

function showResourceList(type, resourceList) {
  let token = cookie('dipper_token')

  let resourceListHtml = ''
  for(let i = 0; i < resourceList.length; i++) {
    let resource = resourceList[i]

    let thumbnail = `${config.portal.url}/sharing/rest/content/items/${resource.id}/info/${resource.thumbnail}`
    if (token !== undefined) {
      thumbnail = `${thumbnail}?token=${token}`
    }

    if (resource.thumbnail === null) {
      thumbnail = 'assets/images/portal/desktopapp.png'
    }

    let openUrl = ''
    let detailUrl = `item.html?id=${resource.id}`
    switch(resource.type) {
      case 'Web Map':
        openUrl = `webmap/viewer.html?webmap=${resource.id}`;
        detailUrl = `${detailUrl}&type=webmap`
        break;
      case 'Geoprocessing Service':
      case 'Geometry Service':
      case 'Network Analysis Service':
        openUrl = resource.url;
        detailUrl = `${detailUrl}&type=tool`
        break;
      case 'Feature Service':
      case 'Image Service':
      case 'Map Service':
      case 'Stream Service':
      case 'WMS':
        openUrl = `webmap/viewer.html?layers=${resource.id}`;
        detailUrl = `${detailUrl}&type=layer`
        break;
      case 'Service Definition':
        openUrl = `${config.portal.url}/sharing/rest/content/items/${resource.id}/data?token=${token}`;
        detailUrl = `${detailUrl}&type=layer`
        break;
      default:
        openUrl = resource.url || '#';
        detailUrl = `${detailUrl}&type=layer`
        break;
    }

    resourceListHtml += `<div class="col-md-4 resource">
      <div class="thumbnail">
        <a href="${detailUrl}" title="${resource.title}" target="_blank">
          <img class="resource-thumb" src="${thumbnail}" alt="${resource.title}" />
        </a>
        <div class="caption">
          <p class="author-info">
            <span class="author-name text-overflow"></span>
            <span class="comment-count pull-right"><span class="glyphicon glyphicon-comment" aria-hidden="true"></span> ${resource.numComments}</span>
            <span class="view-count pull-right"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> ${resource.numViews}</span>
          </p>
          <a href="${detailUrl}" title="${resource.title}" target="_blank">
            <h3 class="resource-title">${resource.title}</h3>
          </a>
          <p class="resource-rating">
            <span class="glyphicon glyphicon-star glyphicon-gray"></span>
            <span class="glyphicon glyphicon-star glyphicon-gray"></span>
            <span class="glyphicon glyphicon-star glyphicon-gray"></span>
            <span class="glyphicon glyphicon-star glyphicon-gray"></span>
            <span class="glyphicon glyphicon-star glyphicon-gray"></span>
            <span class="resource-rating-info"> ( ${resource.numRatings} 次评级 )</span>
          </p>
          <p class="resource-snippet">${resource.snippet === null ? '无描述' : subString(resource.snippet, 80)}</p>
          <div class="resource-author">
            <img title="${resource.owner}" src="assets/images/no-user-thumb.jpg" />
            <span class="author-name  text-overflow">${resource.owner}</span>
            <span class="pull-right">${formatTime(resource.created)}</span>
          </div>
          <div class="resource-operation">
            <div class="container-fluid">
              <div class="col-md-6" style="border-right: solid 1px #ddd;">
                <a href="${openUrl}" title="打开" target="_blank">打开</a>
              </div>
              <div class="col-md-6" >
                <a href="${detailUrl}" title="查看详情" target="_blank">详情</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
  }

  $('.resource-list').html(resourceListHtml)
}

export { getResourceList }
