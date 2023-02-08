export interface IGetHelpsResponse {
  items: {
    id: number
    title: string
  }[]
  total: number
}
export interface IGetHelpsRequest {
  page?: number
  per_page?: number
  title: string
}

export const getHelps = (params: IGetHelpsRequest) => {
  return useHttp<IGetHelpsResponse>({
    url: '/diandubi/v1/v1_1_0/helps',
    method: 'get',
    query: params,
  })
}

export interface IGetHelpsDetailResponse {
  content: string
  online_time: string
  title: string
}

export const getHelpsDetail = (id: number) => {
  return useHttp<IGetHelpsDetailResponse>({
    url: `/diandubi/v1/helps/${id}`,
    method: 'get',
  })
}
