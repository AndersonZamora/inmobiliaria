'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { IProperty } from '@/interfaces';
import { currencyFormat } from '@/utils';

interface Props {
    propiedad: IProperty
}

export const PropertyGridItem = ({ propiedad }: Props) => {

    const [displayImage, setDisplayImage] = useState(propiedad.images[0]);

    return (
        <div className='rounded-md overflow-hidden fade-in'>
            <Link href={`/propiedad/${propiedad.slug}`}>
                <Image
                    src={`/propiedades/${displayImage}`}
                    alt={propiedad.title}
                    className='w-full object-cover rounded'
                    width={500}
                    height={500}
                    onMouseEnter={() => setDisplayImage(propiedad.images[0])}
                    onMouseLeave={() => setDisplayImage(propiedad.images[1])}
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
