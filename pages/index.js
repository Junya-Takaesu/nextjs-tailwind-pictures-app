import Image from "next/image"
import picture1 from "../public/images/002-901912170017_1.jpg"
import picture2 from "../public/images/600x600.jpg"
import picture3 from "../public/images/chiikawa-usagi.jpg"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-3xl">Tailwind Nextjs App</h1>
      <div className="relative w-32 h-32 my-4 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4">
        <Image
          objectFit="cover"
          src={picture1}
          alt='Picture'
          layout="fill"
          priority
        />
      </div>
      <div className="relative w-32 h-32 my-4 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4">
        <Image
          objectFit="cover"
          src={picture2}
          alt='Picture'
          layout="fill"
          priority
        />
      </div>
      <div className="relative w-32 h-32 my-4 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4">
        <Image
          objectFit="cover"
          src={picture3}
          alt='Picture'
          layout="fill"
          priority
        />
      </div>
    </div>
  )
}
