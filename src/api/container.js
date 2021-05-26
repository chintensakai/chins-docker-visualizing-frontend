import { request } from './request'

const chapter_base_url = 'api/containers'

// 获取所有容器
export function getContainers() {
    return request({
        method: 'get',
        url: chapter_base_url
    })
}

// 启动容器
export function startContainer(containerId) {
    return request({
        method: 'put',
        url: "api/container/start/" + containerId
    })
}

// 停止容器
export function stopContainer(containerId) {
    return request({
        method: 'put',
        url: "api/container/stop/" + containerId
    })
}