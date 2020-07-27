import errorHandling from './errorHandling'

const whenMatchedForceAPIBodyToBeObject = [404]

export default async function FetchApi({ body = {}, method = 'GET', headers = {}, url }) {
  try {
    // Build up the object that is passed to fetch api
    const fetchObject = {
      url: `${url}`,
      fetchApiProperties: {
        method,
        mode: 'cors',
        headers: {
          ...headers,
        },
      },
    }
    if (method !== 'GET') fetchObject.fetchApiProperties.body = JSON.stringify(body)

    // Make API call
    const response = await fetch(fetchObject.url, fetchObject.fetchApiProperties)

    // Safely handle any requests that aren't in json so we don't get caught in a promise hole
    const responseBody = whenMatchedForceAPIBodyToBeObject.includes(response.status) ? {} : await response.json()

    const responseObject = {
      status: response.status,
      headers: response.headers ? response.headers : null,
      body: responseBody,
    }
    return responseObject.body
  } catch (error) {
    return errorHandling(error)
  }
}
