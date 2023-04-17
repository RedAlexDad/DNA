const groupId = 219772698
const accessToken = 'vk1.a.2y1ZYQCLpBlc9kFjyjzQejABxUsK38EQnNzxxzzAmGU-K0E56nS76sJcG3ieVytUTxF_D8LVJLIX8j7ZhWJS55Lk8gieqNQpRPttEarBkQCc6eMWqUp710sAbS4b_avhu_d4eylmer356uJI352SwoaQfgdYfHe-ZEUV81b5xNvG1qzlXQazuEsfePK7DsON8n0d9G8FMkv73LKGMchEdQ'
const version = '5.131'

class Urls {
    constructor() {
        this.url = 'https://api.vk.com/method'
        this.commonInfo = `access_token=${accessToken}&v=${version}`
    }

    getUserInfo(userId) {
        return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig, city&${this.commonInfo}`
    }

    getGroupMembers(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&fields=photo_400_orig, city&${this.commonInfo}`
    }

    getGroupID(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&${this.commonInfo}`
    }
}

class Ajax {
    debugger;
    post(url, callback) {
        console.log('url:', url);
        let xhr = new XMLHttpRequest()
        console.log('xhr:', xhr);
        xhr.open('POST', url)
        xhr.send()

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                const data = JSON.parse(xhr.response)
                callback(data)
                console.log(data)
            }
        }
    }
}