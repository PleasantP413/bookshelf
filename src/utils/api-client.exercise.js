function client(endpoint, customConfig = {}) {

  const config = {method: "GET", ...customConfig,}
  const fullURL = `${process.env.REACT_APP_API_URL}/${endpoint}`

  return window.fetch(fullURL, config)
    .then(async (value) => {
      const data = await value.json()
      if(value.ok){
        return data
      } else{
        return Promise.reject(data)
      }
    })

}

export {client}