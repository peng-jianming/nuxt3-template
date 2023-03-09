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

declare enum parentingEnums {
    'yjcz' = '"育"见成长',
    'yjyl' = '"育"教于乐',
    'yjmj' = '"育"见名家',
    'yeyf' = '"育"儿有方',
}