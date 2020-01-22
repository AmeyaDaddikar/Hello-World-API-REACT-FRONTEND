function requestTranslation(input) {

  return fetch(`https://one-page-translator.herokuapp.com/hello?inputMessage=${input}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    redirect: 'follow'
  })
}

export {requestTranslation}
