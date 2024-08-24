'use server';


import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface Props {
    id: string
}

export const deleteProperty = async ({
    id
}: Props): Promise<{
    message: string;
    status: boolean;
}> => {
    try {

        await prisma.propertyc.delete({
            where: {
                id: id
            }
        })

        revalidatePath(`/products`);

        return { message: 'ok', status: true }
    } catch (error) {
        console.log(error);
        return { message: 'no se pudo actualizar', status: false }
    }
}