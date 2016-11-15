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
  let query =`${portalQueryConfig.viewQueries.web} ${portalQueryConfig.viewQueries.none}`

  if (type !== 'all') {
    query = `${query} ${portalQueryConfig.filterQueries[type].f}`
  }

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
        let res = json.results
        if (res.length === 0) {
          $('.resource-list').html('')
          $('.pagination').hide()

          return
        }

        showResourceList(res)
        $('.pagination').show()

        let totalPages = Math.ceil(json.total / json.num)
        let currentPage = $pagination.twbsPagination('getCurrentPage')
        $pagination.twbsPagination('destroy')
        $pagination.twbsPagination($.extend({}, defaultOpts, {
          startPage: currentPage,
          totalPages: totalPages,
          initiateStartPageClick: false,
          onPageClick: function (event, page) {
            getResourceList(type, tag, keyword, page)
          }
        }))
      })
    }
  }).catch(err => {
    console.log(err)
  })
}

function showResourceList(resourceList) {
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

    resourceListHtml += `<div class="col-md-4 resource">
      <div class="thumbnail">
        <a href="item.html?id=${resource.id}" title="${resource.title}">
          <img class="resource-thumb" src="${thumbnail}" alt="${resource.title}" />
          <div class="caption">
            <h3 class="resource-title">${resource.title}</h3>
            <p class="resource-snippet">${resource.snippet === null ? '无描述' : subString(resource.snippet, 80)}</p>
            <p class="resource-author">
              <img title="${resource.owner}" src="assets/images/no-user-thumb.jpg" />
              <span class="author-name  text-overflow">${resource.owner}</span>
              <span class="pull-right">${formatTime(resource.created)}</span>
            </p>
          </div>
        </a>
      </div>
    </div>`
  }

  $('.resource-list').html(resourceListHtml)
}

export { getResourceList }
