export const revalidate = 28800;

import { getPropertys } from "@/actions";
import { Pagination, PropertyGrid, Title } from "@/components";

interface Props {
  searchParams: {
    page?: string
  }
}


export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { propiedades, totalPages } = await getPropertys({ page });


  return (
    <div className="px-5">
      <Title
        title={"Propiedades"}
        subtitle="Los mejores precios de Cajamarca"
        className="mb-2"
      />

      <PropertyGrid propiedades={propiedades} />

      <Pagination totalPages={totalPages} />
    </div>
  );
}
