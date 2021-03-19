import axiosClient from './axiosClient'

const songApi = {
    getAll: (params) => {
        const url = '/node-list-song'
        return axiosClient.get(url, { params, baseURL: 'https://demo7080721.mockable.io/' })
    },
}

export default songApi
