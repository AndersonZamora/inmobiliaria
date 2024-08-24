import Image from "next/image";

interface Props {
    area: string;
    image: string;
    title: string;
    op?: string;
}

export const RenderMedida = ({ area, image, op, title }: Props) => {
    return (
        <>
            {
                area !== '0' && (
                    <div className='text-center'>
                        <Image
                            decoding='async'
                            src={`/imgs/${image}`}
                            height={50}
                            width={70}
                            alt={area}
                            className='lazyloaded'
                        />
                        <br />
                        <p style={{ fontSize: '10px', textAlign: 'center' }}>{title}</p>
                        {area} {op}
                    </div>
                )
            }
        </>
    )
}
