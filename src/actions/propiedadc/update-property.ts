'use server';

import { IProperty } from "@/interfaces";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface Props {
    data: IProperty
}

export const updateProperty = async ({
    data
}: Props): Promise<{
    message: string;
    status: boolean;
}> => {
    try {

        const { id, title, slug, tipo, price, area, newLng, newLat, descripcion } = data;

        await prisma.propertyc.update({
            data: {
                title,
                slug,
                tipo,
                price,
                area,
                newLat,
                newLng,
                descripcion
            },
            where: {
                id: id
            }
        })

        revalidatePath(`/products/${slug}`);

        return { message: 'ok', status: true }

    } catch (error) {
        console.log(error);
        return { message: 'no se pudo actualizar', status: false }
    }
}