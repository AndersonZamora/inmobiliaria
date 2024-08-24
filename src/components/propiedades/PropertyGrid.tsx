import type { IProperty } from '@/interfaces'
import { PropertyGridItem } from './PropertyGridItem'

interface Props {
    propiedades: IProperty[]
}

export const PropertyGrid = ({ propiedades }: Props) => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10'>
            {
                propiedades.map(product => (
                    <PropertyGridItem
                        key={product.slug}
                        propiedad={product}
                    />
                ))
            }
        </div>
    )
}
