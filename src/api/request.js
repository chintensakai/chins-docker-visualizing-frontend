import axios from 'axios'
import store from '../store'

export function request(config) {
    // 1. 创建axios实例
    const instance = axios.create({
        baseURL: "http://localhost:9281",
        timeout: 5000,
        headers: {
            'content-type': 'application/json'
        }
    })

    // 2. axios拦截器
    instance.interceptors.request.use(config => {
        if (store.state.token) {
            config.headers['Authorization'] = store.state.token;
        }
        return config
    }, err => {
        console.log("err ===> " + err)
    })

    instance.interceptors.response.use(res => {
        if (res.data.status != 200) {
            console.log()
        }
        return res.data
    }, err => {
        console.log(err)
    })

    // 3. 发送真正的请求，返回的是Promise，直接then()就可以
    return instance(config)
}