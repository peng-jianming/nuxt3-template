export interface IVideoItem {
    video_id: number,
    title: string,
    resource_cover: string,
    resource_url: string,
    video_position: number
}
export interface IGetVideoPreviewResponse {
    happy_list: IVideoItem[],
    expert_list: IVideoItem[],
    method_list: IVideoItem[],

}

export const getVideoPreview = () => {
    return useHttp<IGetVideoPreviewResponse>({
        url: '/diandubi/v1/website/videos/preview',
        method: 'get'
    })
}

export interface IGetVideoListRequest {
    video_position: number,
    title?: string,
    page?: number,
    per_page?: number
}

export interface IGetVideoListResponse {
    list: IVideoItem[],
    total: number
}

export const getVideoList = (params: IGetVideoListRequest) => {
    return useHttp<IGetVideoListResponse>({
        url: '/diandubi/v1/website/videos',
        method: 'get',
        query: params
    })
}
