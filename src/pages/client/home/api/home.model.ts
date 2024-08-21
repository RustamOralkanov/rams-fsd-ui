export interface IHomeBanners {
    banners: IHomeBanner[];
}

export interface IHomeBanner {
    id: number;
    link: string;
    image: string;
    order: number;
    created_at: string;
    updated_at: string;
    mobile: number;
    alias: string;
    info: IHomeInfo;
}

export interface IHomeInfo {
    id: number;
    banner_id: number;
    lang: string;
    title: string;
    text: string;
    created_at: string;
    updated_at: string;
    image: string;
}
