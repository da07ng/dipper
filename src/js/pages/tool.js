import { config } from '../config/config'

import { portalQueryConfig } from '../portal/config'
import { getPortalSelf } from '../portal/portals'
import { search } from '../portal/search'

import cookie from '../utils/cookie'
import { formatTime, subString } from '../utils/auxiliary'

$(function() {
  $('.tree-list li a').on('click', function(e) {
    e.preventDefault()

    $('.tree-list li').removeClass('active')
    $(e.target).parent().addClass('active')

    let dataType = $(e.target).data('type')
    getResourceList(dataType, 1)
  })
})

let $pagination = $('.pagination')
var defaultOpts = {
  first: '首页',
  prev: '上一页',
  next: '下一页',
  last: '尾页'
}
$pagination.twbsPagination(defaultOpts)

function getResourceList(type, page) {
  getPortalSelf(cookie('dipper_token')).then(response => {
    if (response.ok) {
      response.json().then(json => {
        let portalId = json.id
        let query = `orgid:${portalId} ${portalQueryConfig.viewQueries.web} ${portalQueryConfig.viewQueries.none} ${portalQueryConfig.filterQueries[type].f}`
        let start = page * 9 - 8

        searchResource(type, query, start)
      })
    }
  }).catch(err => {
    console.log(err)
  })
}

function searchResource(type, query, start) {
  search(query, start, 9, 'modified', 'desc', cookie('dipper_token')).then(response => {
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
            getResourceList(type, page)
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

getResourceList('tools-geoprocessing', 1)