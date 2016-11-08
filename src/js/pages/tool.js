import { getResourceList } from '../core/resource'

getResourceList('tools-geoprocessing', 1)

$(function() {
  $('.tree-list li a').on('click', function(e) {
    e.preventDefault()

    let dataType = $(e.target).data('type')
    getResourceList(dataType, 1)
  })
})