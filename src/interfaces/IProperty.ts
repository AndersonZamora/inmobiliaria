export interface IProperty {
    id: string;
    title: string;
    dormitorio?: string | null;
    banio?: string | null;
    piso?: string | null;
    estado?: boolean | null;
    destacado?: boolean | null;
    opotunidad?: boolean | null;
    price: number;
    cambio: string;
    area: string;
    contruida?: string | null;
    estaciona?: string | null;
    mediosb?: string | null;
    tipo: string;
    descripcion: string;
    lvideo?: string | null;
    newLat: string;
    newLng: string;
    images: string[];
    slug: string;
    tags: string[];
}
