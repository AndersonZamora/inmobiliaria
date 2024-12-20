import Link from 'next/link';
import { IoLogoWhatsapp, IoPhonePortrait } from 'react-icons/io5';

interface Props {
    message: string;
}

export const MessageLink = ({ message }: Props) => {

    const newMessage = `Hola, quiero más información sobre ${message}`

    return (
       <>
       <p className='flex items-center text-2xl gap-2 mt-2'> <IoPhonePortrait/> 997878631</p>
        <Link
            href={`http://wa.me/51997878631?text=${encodeURIComponent(newMessage)}`}
            className="font-regular relative flex flex-grow gap-3 items-center bg-green-600 text-white p-3 w-fit rounded-r-xl mt-5"
            target="_blank"
        >
            <IoLogoWhatsapp fontSize={25} />
           
            <p>Contáctanos por  Whatsapp</p>
        </Link>
       </>
    )
}
