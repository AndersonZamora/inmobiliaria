'use server';

import prisma from "@/lib/prisma"
import { IProperty } from "@/interfaces";

export const getProductBySlug = async (slug: string): Promise<IProperty | null> => {

    try {

        const propiedad = await prisma.propertyc.findFirst({
            where: {
                slug: slug
            }
        });

        if (!propiedad) return null;

        return propiedad;

    } catch (error) {
        throw new Error('Error no existe el producto')
    }
}