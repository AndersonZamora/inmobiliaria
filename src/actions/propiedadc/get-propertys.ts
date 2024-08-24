'use server';

import { IProperty } from "@/interfaces";
import prisma from "@/lib/prisma";

interface Props {
    page?: number;
    take?: number;
    category?: string
}

export const getPropertys = async ({
    page = 1,
    take = 12,
    category
}: Props) => {
    try {

        if (isNaN(Number(page))) page = 1;
        if (page < 1) page = 1;

        const products = await prisma.propertyc.findMany({
            take: take,
            skip: (page - 1) * take,

            where: {
                tipo: category
            }
        })

        const totalCount = await prisma.propertyc.count({
            where: {
                tipo: category
            }
        });


        const totalPages = Math.ceil(totalCount / take);

        const fillProducts: IProperty[] = []

        products.map(p => {
            const som = fillProducts.some(a => a.id !== p.id);
            if (!som) {
                fillProducts.push(p)
            }
        })

        return {
            currentPage: page,
            totalPages: totalPages,
            propiedades: fillProducts
        }
    } catch (error) {
        throw new Error('No se pudo cargar las propiedades')
    }
}