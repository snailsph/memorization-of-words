import axios from "axios";
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded';
export default {
    fetchGet (url,params={}){
        return new Promise((resolve,rejects) => {
            axios.get(url,params).then(res => {
                resolve(res.data);
            }).catch(error => {
                rejects(error)
            })
        })
    },
    fetchPost (url,params={}){
        return new Promise((resolve,rejects) => {
            axios.post(url,params).then(res => {
                resolve(res.data);
            }).catch(error => {
                rejects(error)
            })
        })
    }
}