import { request } from './request'

const chapter_base_url = 'api/containers'

// 获取所有容器
export function getContainers() {
    return request({
        method: 'get',
        url: chapter_base_url
    })
}