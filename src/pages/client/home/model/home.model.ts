export interface HomeBanners {
    success: boolean;
    message: string;
    data: Data;
}

interface Data {
    id: number;
    slug: string;
    items: Banners[];
}

export interface Banners {
    id: number;
    order: number;
    date?: string;
    complex_id?: string;
    alias: string;
    is_mobile: number;
    tag: string;
    title: string;
    images: string;
    subtitle: string;
}
