import axios from '@/api/index'

export const getUserInfo = (data: object) => {
    return axios.request({
        data,
        url: '',
        method: 'post'
    })
}