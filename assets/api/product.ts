export interface IGetParentsGuideListResponse {
    list: {
        id: number
        title: string
        online_at: string
        cover: string
        brand_desc: string
    }[]
    total: number
}

export interface IGetParentsGuideListRequest {
    page?: number
    per_page?: number
    title: string
    show_place: number
}

export const getCategory = () => {
    return useHttp({
        url: '/diandubi/v1/web/category',
        method: 'get'
    })
}

export const getProductList = () => {
    return useHttp({
        url: '/diandubi/v1/web/product/list',
        method: 'get'
    })
}

export const getDiandubaoList = () => {
    return useHttp({
        url: '/diandubi/v1/web/diandubao/list',
        method: 'get'
    })
}
