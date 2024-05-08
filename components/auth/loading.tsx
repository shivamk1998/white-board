import Image from 'next/image';
import LoadingImage from "../.././public/logoipsum-223.svg"

export const Loading=()=> {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <Image src={LoadingImage} alt='Loading' width={100} height={100} className='animate-pulse duration-700'/>
    </div>
  )
}

