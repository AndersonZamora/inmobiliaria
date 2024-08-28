export const revalidate = 28800;

import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/actions";
import { DestockSlideShow, MapComponent, MessageLink, MobileSlideshow, RenderContent, RenderMedida, RenderOption } from "@/components";
import { titleFont } from "@/config/fonts";
import { currencyFormat } from "@/utils";

interface Props {
    params: {
        slug: string;
    },
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    const slug = params.slug

    const product = await getProductBySlug(slug)

    const descriptionObj = product?.descripcion ? JSON.parse(product.descripcion) : null;

    let descriptionText = ''

    if (descriptionObj && descriptionObj.type === 'doc') {
        descriptionText = descriptionObj.content
            .map((node: any) => {
                if (node.type === 'paragraph' && node.content) {
                    return node.content
                        .map((childNode: any) => childNode.text)
                        .join(' ');
                }
                return '';
            })
            .join(' ');
    }


    return {
        title: product?.title ?? 'Producto',
        description: descriptionText ?? '',
        openGraph: {
            title: product?.title ?? 'Producto',
            description: descriptionText ?? '',
            images: [
                {
                    url: `/propiedades/${product?.images[0]}`,
                    width: '800',
                    height: '600',
                }
            ],
            authors: 'CinCout Technology',
            emails: 'cincout.technology@gmail.com'
        },
    }
}


export default async function getPropertySlugPage({ params }: Props) {

    const { slug } = params;

    const propiedad = await getProductBySlug(slug);

    if (!propiedad) {
        notFound();
    }

    return (
        <>
            <div className="px-0 mt-6 mb-5 grid grid-cols-1 md:grid-cols-4 gap-3">

                <div className="col-span-1 sm:col-span-2 md:col-span-2 hidden md:block">
                    <DestockSlideShow images={propiedad.images} title={propiedad.title} />
                    <br />
                    <MapComponent lat={+propiedad.newLat} lng={+propiedad.newLng} />
                </div>
                <div className="col-span-1 sm:col-span-2 md:col-span-2 block md:hidden">
                    <MobileSlideshow images={propiedad.images} title={propiedad.title} />
                </div>
                <div className="col-span-1 sm:col-span-1 md:col-span-2 px-5">
                    <div className="border-b border-gray-200 pb-6">
                        <p className={`${titleFont.className} text-sm leading-none text-gray-600`}>
                            {propiedad.tipo}
                        </p>
                        <h1 className={`${titleFont.className} lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800  mt-2`}>
                            {propiedad.title} - {currencyFormat(propiedad.price)}
                        </h1>
                    </div>

                    <p className="font-regular relative w-52 mt-4  rounded-r-2xl bg-gradient-to-tr from-blue-600 to-blue-400 text-xl p-2 text-white">
                        Características
                    </p>
                    <div className=" flex flex-grow gap-5 mt-5">
                        {propiedad.area !== '-' && (<RenderMedida area={`${propiedad.area}`} image='area.svg' op='m²' title='Área total' />)}
                        {propiedad.contruida !== '-' && (<RenderMedida area={`${propiedad.contruida}`} image='escala.svg' op='m²' title='Área contruida' />)}
                        {propiedad.banio !== '-' && (<RenderMedida area={`${propiedad.banio}`} image='bano.svg' title='Baños' />)}
                        {propiedad.mediosb !== '-' && (<RenderMedida area={`${propiedad.mediosb}`} image='sanitario.svg' title='Medios baños' />)}
                        {propiedad.estaciona !== '-' && (<RenderOption area={`${propiedad.estaciona}`} image='coche.svg' title='Estacionamiento' />)}
                        {propiedad.dormitorio !== '-' && (<RenderMedida area={`${propiedad.dormitorio}`} image='dormitorio.svg' title='Dormitorios' />)}
                        {propiedad.piso !== '-' && (<RenderMedida area={`${propiedad.piso}`} image='piso.svg' title='Pisos' />)}
                    </div>
                    <p className="font-regular relative w-52 mt-4  rounded-r-2xl bg-gradient-to-tr from-blue-600 to-blue-400 text-xl p-2 text-white">                        Descripción
                    </p>
                    <div className="mt-5">
                        <RenderContent data={propiedad.descripcion} />
                        <MessageLink message={`el ${propiedad.title}  https://inmobiliaria-cajamarca.vercel.app/propiedad/${slug}`} />
                    </div>
                </div>

            </div>
            <div className="px-0 block md:hidden">
                <MapComponent lat={+propiedad.newLat} lng={+propiedad.newLng} />
            </div>
        </>
    )
}