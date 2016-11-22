import { getResourceList } from '../core/resource'

$(function() {
  $('.data-type li a').on('click', function(e) {
    e.preventDefault()
    $('.pagination').hide()
    $('.loading').show()

    $('.data-type li').removeClass('active')
    $(e.target).parent().addClass('active')

    let dataTypeNode = $(e.target)
    let industryTypeNode = $('.industry-type li.active a')

    let dataType = dataTypeNode.data('type') || 'all'
    let industryType = industryTypeNode.data('industry') || ''

    $('.datatype-name').text('标准分类：' + dataTypeNode.text())
    $('.datatype-filter').data('type', dataType)
    $('.datatype-filter').parent().parent().show();

    getResourceList(dataType, industryType, '', 1)
  })

  $('.industry-type li a').on('click', function(e) {
    e.preventDefault()
    $('.pagination').hide()
    $('.loading').show()

    $('.industry-type li').removeClass('active')
    $(e.target).parent().addClass('active')

    let dataTypeNode = $('.data-type li.active a')
    let industryTypeNode = $(e.target)

    let dataType = dataTypeNode.data('type') || 'all'
    let industryType = industryTypeNode.data('industry') || ''

    $('.industry-name').text('行业分类：' + industryTypeNode.text())
    $('.industry-filter').data('type', industryType)
    $('.industry-filter').parent().parent().show();

    getResourceList(dataType, industryType, '', 1)
  })

  $('.datatype-filter').on('click', function(e) {
    e.preventDefault()
    $('.pagination').hide()
    $('.loading').show()

    $('.data-type li').removeClass('active')
    $('.datatype-name').text('')
    $('.datatype-filter').data('type', '')
    $(e.target).parent().parent().hide();

    let dataType = $(e.target).data('type') || 'all'
    let industryType = $('.industry-filter').data('industry') || ''

    getResourceList(dataType, industryType, '', 1)
  })

  $('.industry-filter').on('click', function(e) {
    e.preventDefault()
    $('.pagination').hide()
    $('.loading').show()

    $('.industry-type li').removeClass('active')
    $('.industry-name').text('')
    $('.industry-filter').data('type', '')
    $(e.target).parent().parent().hide();

    let dataType = $('.datatype-filter').data('type') || 'all'
    let industryType = $(e.target).data('industry') || ''

    getResourceList(dataType, industryType, '', 1)
  })
})

getResourceList('maps-webmaps', '', '', 1)
