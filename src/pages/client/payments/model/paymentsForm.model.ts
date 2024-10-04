export interface PaymentsForm {
    success: boolean;
    message: string;
    data: Data;
}

export interface Data {
    id: number;
    slug: string;
    items: unknown[];
    title: string;
    subtitle: string;
    btn_label: string;
    fields: Field[];
    image: string;
}

export interface Field {
    label: string;
    name: string;
    value?: string;
    sliderMin?: string;
    sliderMax?: string;
}
