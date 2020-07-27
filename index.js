import FetchApi from './utils/fetch'

export const requestMultipleUrls = function (data) {
  const asyncDatFetch = data.map(
    async (item) =>
      await FetchApi({
        url: item,
      })
  )
  return Promise.all(asyncDatFetch)
}

export default requestMultipleUrls
