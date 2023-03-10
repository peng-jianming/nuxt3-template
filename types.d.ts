declare interface Window {
    AMap: any
}

declare interface IBreadcrumbItem {
    title: string,
    link?: string
}

declare interface IMenu {
    label: string,
    link: string,
    children?: IMenu[],
    external?: boolean,
    isShowMobile?: boolean
}
