interface IProperty {

    title: string;
    dormitorio: string;
    banio: string;
    piso: string;
    estado: boolean;
    destacado: boolean;
    opotunidad: boolean;
    price: number;
    cambio: string;
    area: string;
    contruida: string;
    estaciona: string;
    mediosb: string;
    tipo: string;
    descripcion: string;
    lvideo: string;
    newLat: string;
    newLng: string;
    images: string[];
    slug: string;
    tags: string[];
}

interface SeedData {
    // products: SeedProduct[],
    propiedades: IProperty[]

}

export const initialData: SeedData = {
    propiedades: [
        {
            title: "Proyecto Laguna San Nicolás",
            dormitorio: "-",
            banio: "-",
            piso: "-",
            estado: true,
            destacado: true,
            opotunidad: true,
            price: 5000,
            cambio: "Soles",
            area: "1000",
            contruida: "-",
            estaciona: "-",
            mediosb: "-",
            tipo: "Terreno",
            descripcion: `{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Inmobiliaria"}]}]}`,
            lvideo: "no",
            newLat: "-7.234192641927465",
            newLng: "-78.33654853138974",
            images: ["laguna-01.jpg ", "laguna-02.jpg", "laguna-03.jpg", "laguna-04.jpg", "laguna-05.jpg"],
            slug: "proyecto_laguna_san_nicolas",
            tags: [],

        }
    ]
}