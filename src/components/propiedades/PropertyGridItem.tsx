
import Image from 'next/image';
import Link from 'next/link';
import type { IProperty } from '@/interfaces';
import { currencyFormat } from '@/utils';

interface Props {
    propiedad: IProperty
}

export const PropertyGridItem = ({ propiedad }: Props) => {

    return (
        <div className='rounded-md overflow-hidden fade-in'>
            <Link href={`/propiedad/${propiedad.slug}`} className='h-3'>
                <Image
                    src={`/propiedades/${propiedad.images[0]}`}
                    alt={propiedad.title}
                    className='w-full object-cover rounded'
                    width={500}
                    height={500}
                />
            </Link>

            <div className='p-4 flex flex-col'>
                <Link
                    className='hover:text-blue-600'
                    href={`/propiedad/${propiedad.slug}`}
                >
                    {propiedad.title}
                </Link>
                <span className='font-bold'>{currencyFormat(propiedad.price)}</span>
            </div>
        </div>
    )
}
