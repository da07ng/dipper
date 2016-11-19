import { config } from '../config/config'

import { portalQueryConfig } from '../portal/config'
import { getPortalSelf } from '../portal/portals'
import { getContent } from '../portal/content/users'
import { groupSearch } from '../portal/community/groups'

import cookie from '../utils/cookie'
import { formatTime, subString } from '../utils/auxiliary'

const PAGESIZE = 9

// $(function() {
let $pagination = $('.pagination')
var defaultOpts = {
  first: '首页',
  prev: '上一页',
  next: '下一页',
  last: '尾页'
}
$pagination.twbsPagination(defaultOpts)
// })

getResourceList('/', 1)

function getResourceList(folder, page) {
  let token = cookie('dipper_token')
  if (token === undefined) {
    window.location.href='signin.html'
    return 
  }

  getPortalSelf(token).then(response => {
    if (response.ok) {
      response.json().then(json => {
        if (json.error) {
          if (json.error.code === 498) {
            window.location.href='signin.html'
          }
          return
        }

        let username = json.user.username
        let start = page * PAGESIZE - (PAGESIZE - 1)

        getContent(username, folder, start, PAGESIZE, token).then(response => {
          if (response.ok) {
            response.json().then(json => {
              $('.loading').hide()
              if (json.error) {
                return
              }

              if (folder === '/') {
                let folders = json.folders
                let folderHtml ='<li class="active"><a href="#" data-folderid="/">根目录</a></li>'
                for (let i = 0; i < folders.length; i++) {
                  let folder = folders[i]
                  folderHtml += `<li><a href="#" data-folderid="${folder.id}">${folder.title}</a></li>`
                }
                $('.folder-type .tree-list').html(folderHtml)
                $('.folder-type .tree-list a').on('click', function(e) {
                  e.preventDefault()
                  $('.pagination').hide()
                  $('.loading').show()

                  $('.folder-type .tree-list li').removeClass('active')
                  $(e.target).parent().addClass('active')

                  let dataFolderid = $(e.target).data('folderid')
                  getResourceList(dataFolderid, 1)
                })
              }

              let items = json.items
              if (items.length === 0) {
                $('.resource-list').html('')
                $('.pagination').hide()
                return
              }
              showResourceList('tool', items)
              $('.pagination').show()

              let totalPages = Math.ceil(json.total / PAGESIZE)
              let currentPage = $pagination.twbsPagination('getCurrentPage')
              $pagination.twbsPagination('destroy')
              $pagination.twbsPagination($.extend({}, defaultOpts, {
                startPage: currentPage,
                totalPages: totalPages,
                initiateStartPageClick: false,
                onPageClick: function (event, page) {
                  getResourceList(folder, page)
                }
              }))
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
    switch (type) {
      case 'tools-geoprocessing':
      case 'tools-geometric':
        openUrl = resource.url;
        detailUrl = `${detailUrl}&type=tool`
        break;
      case 'maps-webmaps':
        openUrl = `webmap/viewer.html?webmap=${resource.id}`;
        detailUrl = `${detailUrl}&type=webmap`
        break;
      default:
        openUrl = `webmap/viewer.html?layers=${resource.id}`;
        detailUrl = `${detailUrl}&type=layer`
        break;
    }

    resourceListHtml += `<div class="col-md-4 resource">
      <div class="thumbnail">
        <a href="${detailUrl}" title="${resource.title}" target="_blank">
          <input data-index="0" class="select-item" name="select-item" type="checkbox" value="${resource.id}">
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
                <a href="${openUrl}" title="在地图查看器中打开" target="_blank">打开</a>
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

  $('#select-all').on('click', function() {
    if ($(this).is(':checked')) {
      $('.select-item').prop('checked', true)
    } else {
      $('.select-item').prop('checked', false)
    }
  })

  $('.share-item').on('click', function(e) {
    let selectItems = $("input[name='select-item']:checked")

    if (selectItems.length === 0) {
      $('#shareModal .modal-body').html('温馨提示, 请先选择要分享的内容信息')
    } else {
      getPublicGroupList(1)
    }
  })
}

function getPublicGroupList(page) {
  let orgid = window.dipper.orgid
  let token = cookie('dipper_token')
  if (token === undefined) {
    return 
  }

  let query = 'ispublic:true'
  let start = page * PAGESIZE - (PAGESIZE - 1)

  if (orgid !== undefined) {
    query = `${query} orgid:${orgid}`

    queryGroup(query, start)
  } else {
    getPortalSelf(token).then(response => {
      if (response.ok) {
        response.json().then(json => {
          query = `${query} orgid:${json.id}`

          queryGroup(query, start)
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

function queryGroup(query, start) {
  groupSearch(query, start, PAGESIZE, 'created', 'desc', cookie('dipper_token')).then(response => {
    if (response.ok) {
      response.json().then(json => {
        if (json.error) {
          if (json.error.code === 498) {
            window.location.href='signin.html'
          }
          return
        }

        let publicGroups = json.results
        let publicGroupHtml = `<div class="checkbox">
            <label><input type="checkbox" value="">公共</label>
          </div>
          <div class="checkbox">
            <label><input type="checkbox" value="">江西水利公共服务平台</label>
          </div>
          <div class="checkbox">
            <label><input type="checkbox" value="">以下群组</label>
          </div>
          <div style="padding-left: 30px;">`

        for (let i = 0; i < publicGroups.length; i++) {
          publicGroupHtml += `<div class="checkbox">
              <label><input type="checkbox" value="${publicGroups[i].id}">${publicGroups[i].title}</label>
            </div>`
        }
        publicGroupHtml += `</div>`

        $('#shareModal .modal-body').html(publicGroupHtml)
      })
    }
  }).catch(err => {
    console.log(err)
  })
}