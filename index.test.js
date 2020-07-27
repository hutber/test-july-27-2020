import ftseFsi from './__mocks__/ftse-fsi.json'
import gbpHkd from './__mocks__/gbp-hkd.json'
import gbpUsd from './__mocks__/gbp-usd.json'

import requestMultipleUrls from './index.js'

const urls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json',
]

const responses = {
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json': ftseFsi,
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json': gbpHkd,
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json': gbpUsd,
}

// alternatives to quick global.fetc = jasmine/nock
global.fetch = (endpoint, key) =>
  Promise.resolve({
    json: () => {
      const currentData = responses[endpoint]
      const responseBody = {
        status: currentData ? 200 : 404,
        body: currentData,
      }
      return Promise.resolve(responseBody)
    },
  })

it('should return the correct number of items', async () => {
  expect.assertions(1)
  const requestedData = await requestMultipleUrls(urls)
  expect(requestedData.length).toBe(3)
})

it('should correct the correct data', async () => {
  const requestedData = await requestMultipleUrls(urls)
  expect.assertions(requestedData.length)
  requestedData.forEach((expected, key) => {
    expect(responses[urls[key]]).toStrictEqual(expected.body)
  })
})

it('should return a 404', async () => {
  expect.assertions(1)
  const requestedData = await requestMultipleUrls(['http://www.asdas21x.com'])
  expect(requestedData[0].status).toBe(404)
})
