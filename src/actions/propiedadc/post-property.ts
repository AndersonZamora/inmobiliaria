'use server';

import { IProperty } from "@/interfaces";
import prisma from "@/lib/prisma";
import { revalidatePath } from 'next/cache';

interface Props {
    data: IProperty
}

export const postProperty = async ({
    data
}: Props): Promise<{
    message: string;
    status: boolean;
}> => {
    try {

        const { title, slug, tipo, price, area, newLng, newLat, descripcion, images, lvideo,tags } = data;

        await prisma.propertyc.create({
            data: {
                title,
                slug,
                tipo,
                price: +price,
                area,
                newLat,
                newLng,
                descripcion,
                images,
                lvideo,
                tags
            }
        })

        revalidatePath(`/products/${slug}`);

        return { message: 'ok', status: true }
    } catch (error) {
        console.log(error);
        return { message: 'no se pudo registrar', status: false }
    }
}