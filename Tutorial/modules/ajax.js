class Ajax {
    debugger;
    post(url, callback) {
        // console.log('url:', url);
        let xhr = new XMLHttpRequest()
        // console.log('xhr:', xhr);
        // xhr.open('POST', getUrl(url))
        xhr.open('POST', url)
        xhr.send()

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                const data = JSON.parse(xhr.response)
                callback(data)
                // console.log(data)
            }
        }
    }
}

export const ajax = new Ajax();