export default (method, url, data, expectedStatus) => {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
    xhr.send(JSON.stringify(data))
    xhr.addEventListener("load", function() {
      if (this.status === expectedStatus) {
        resolve(xhr.response)
      } else {
        reject({
          status: this.status,
          error: xhr.response,
        })
      }
    })
    xhr.addEventListener("error", function() {
      reject({
        status: this.status,
        error: xhr.response,
      })
    })
  })
}
