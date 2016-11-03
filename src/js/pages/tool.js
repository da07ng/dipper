import { getResourceList } from '../core/resource'

getResourceList('tools-geoprocessing', 1)

$(function() {
  $('#tools-geoprocessing').on('click', function() {
    getResourceList('tools-geoprocessing', 1)
  })

  $('#tools-geometric').on('click', function() {
    getResourceList('tools-geometric', 1)
  })
})