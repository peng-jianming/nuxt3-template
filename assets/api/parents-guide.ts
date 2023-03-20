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

export const getParentsGuideList = (params: IGetParentsGuideListRequest) => {
  return useHttp<IGetParentsGuideListResponse>({
    url: '/diandubi/v1/brand/list',
    method: 'get',
    query: params,
  })
}

export interface IGetParentsGuideDetailRequest {
  show_place: number
}

export interface IGetParentsGuideDetailResponse {
  title: string
  online_at: string
  brand_desc: string
  seo_title: string
  seo_keywords: string
  seo_description: string
}

export const getParentsGuideDetail = (id: number, params: IGetParentsGuideDetailRequest) => {
  return useHttp<IGetParentsGuideDetailResponse>({
    url: `/diandubi/v1/brand/detail/${id}`,
    method: 'get',
    query: params,
  })
}
