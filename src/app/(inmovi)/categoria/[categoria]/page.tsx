import { getPropertys } from "@/actions";
import { Pagination, PropertyGrid, Title } from "@/components";
import { notFound } from "next/navigation";

export const revalidate = 28800;

interface Props {
    params: {
        categoria: string
    },
    searchParams: {
        page?: string
    }
}

export default async function CategoryPage({ params, searchParams }: Props) {

    const { categoria } = params;

    const page = searchParams.page ? parseInt(searchParams.page) : 1;

    const { propiedades, totalPages } = await getPropertys({
        page,
        category: categoria
    });

    if (propiedades.length === 0) {
        notFound()
    }

    const labels: Record<string, string> = {
        'lotes': 'lotes',
        'departamentos': 'departamentos',
    }

    return (
        <>

            <Title
                title={`Totodos nuestros ${labels[categoria]}`}
                className="mb-2"
            />
            <PropertyGrid propiedades={propiedades} />
            <Pagination totalPages={totalPages} />
        </>
    );
}