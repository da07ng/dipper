import { getResourceList } from '../core/resource'

$(function() {
  $('.data-type li a').on('click', function(e) {
    e.preventDefault()

    $('.data-type li').removeClass('active')
    $(e.target).parent().addClass('active')

    let dataType = $(e.target).data('type')
    let industryType = $('.industry-type li.active a').data('industry') || ''
    getResourceList(dataType, industryType, '', 1)
  })

  $('.industry-type li a').on('click', function(e) {
    e.preventDefault()

    $('.industry-type li').removeClass('active')
    $(e.target).parent().addClass('active')

    let dataType = $('.data-type li.active a').data('type') || ''
    let industryType = $(e.target).data('industry')
    getResourceList(dataType, industryType, '', 1)
  })
})


getResourceList('maps-webmaps', '', '', 1)
