import { request } from './request'

export function getHomeData() {
    return request({
        url: '/json/home.json'
    })
}

export function getHomeGoods(sort, page) {
    return request({
        url:'/json/home-goods/' + sort + '-page' + page + '.json'
    })
}