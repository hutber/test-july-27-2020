# July 27th JS Test

## Install

```javascript
$ npm install @hutber/requestMultipleUrls
```
## Useage

```javascript
import requestMultipleUrls from '@hutber/requestMultipleUrls'
import { requestMultipleUrls } from '@hutber/requestMultipleUrls'

const urls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json',
]

//promise/then
requestMultipleUrls(urls).then(urlContent => {
   //... do something with urlContents
}).catch().finally()

//es6
async function xx (){
  const urlContents = await requestMultipleUrls(urls)
  //... do something with urlContents
}

```

## Why

I enjoy tests when they are short and sweet, and here is another test to demonstrate in a quick way where I am in my coding journey


## How to contribute

This project is using [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) with [commitizen](https://github.com/commitizen/cz-cli) to then be used with symatic release

Commit using terminal with the command `npm run commit` and you will be presented with the below menu, which will then run all local tests on the staged files

```bash
hutber@hutber:/var/www/tests/test-july-27-2020$ npm run commit 

> test_july_27_2020@1.0.0 commit /var/www/tests/test-july-27-2020
> npx git-cz

cz-cli@4.1.2, cz-conventional-changelog@3.2.0

? Select the type of change that you're committing: (Use arrow keys)
❯ feat:     A new feature 
  fix:      A bug fix 
  docs:     Documentation only changes 
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) 
  refactor: A code change that neither fixes a bug nor adds a feature 
  perf:     A code change that improves performance 
  test:     Adding missing tests or correcting existing tests 
(Move up and down to reveal more choices)

```
