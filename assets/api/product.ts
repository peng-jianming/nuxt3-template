export enum CategoryEnums {
  PRODUCT = 'product',
  DIANDUBAO = 'diandubao',
}
export interface IGetCategoryResponse {
  type: CategoryEnums
  id: number
  title: string
  child: IGetCategoryResponse[]
}

export const getCategory = () => {
  return useHttp<IGetCategoryResponse>({
    url: '/diandubi/v1/web/category',
    method: 'get',
  })
}

export interface IGetProductListRequest {
  type: number
  keywords: string
  page?: number
  per_page?: number
}

export const getProductList = (params: IGetProductListRequest) => {
  return useHttp({
    url: '/diandubi/v1/web/product/list',
    method: 'get',
    query: params,
  })
}

export interface IGetDiandubaoListRequest {
  type: number
  keywords: string
  page?: number
  per_page?: number
}

export const getDiandubaoList = (params: IGetDiandubaoListRequest) => {
  return useHttp({
    url: '/diandubi/v1/web/diandubao/list',
    method: 'get',
    query: params,
  })
}

export const getBooksDetail = (id: number) => {
  return useHttp({
    url: `/diandubi/v1/books/${id}`,
    method: 'get',
  })
}

export const getProductDetail = (id: number) => {
  return useHttp({
    url: `/diandubi/v1/product/detail/${id}`,
    method: 'get',
  })
}
