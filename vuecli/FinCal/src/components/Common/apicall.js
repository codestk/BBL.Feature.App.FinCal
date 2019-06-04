import axios from 'axios';
export default {
    post(endpoint, service, body, key) {
        return axios({
            method: 'post',
            url: endpoint + service,
            data: body,
            headers: { 'Content-Type': 'application/json', 'Ocp-Apim-Subscription-Key': key }
        })

        // async / await version (postPost() becomes async postPost())
        //
        // try {
        //   await axios.post(`http://jsonplaceholder.typicode.com/posts`, {
        //     body: this.postBody
        //   })
        // } catch (e) {
        //   this.errors.push(e)
        // }
    },

    get(endpoint, service, body, key) {
        return axios({
            method: 'get',
            url: endpoint + service,
            data: body,
            headers: { 'Content-Type': 'application/json', 'Ocp-Apim-Subscription-Key': key }
        })

        // async / await version (postPost() becomes async postPost())
        //
        // try {
        //   await axios.post(`http://jsonplaceholder.typicode.com/posts`, {
        //     body: this.postBody
        //   })
        // } catch (e) {
        //   this.errors.push(e)
        // }
    }
}