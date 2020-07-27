const apiGenric = {
  bad: 'Sorry an error has occurred',
}
const apiGlobalErrors = {
  error404: 'Sorry a 404 has occurred',
}

export default (request) => {
  const error = {
    status: '',
    message: '',
    messageType: '',
  }

  const getErrorFromJSON = apiGenric[`error${request.status}`]

  if (getErrorFromJSON) {
    error.message = getErrorFromJSON
  } else {
    const getErrorType = String(request.status).charAt(0)

    switch (getErrorType) {
      case '4':
        error.status = request.status
        error.message = apiGlobalErrors.error4
        break
      default:
        error.status = 0
        error.message = 'Something really really went wrong'
        return
    }
  }

  // Check
  if (error.message) {
    return error.message
  }

  return request
}
