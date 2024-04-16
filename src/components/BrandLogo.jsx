import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/logo.png';

export default function BrandLogo({
  withText = true,
  fontSize = 'text-sm',
}) {
  return (
    <Link href="/">
      <div className={`inline-flex gap-1.5 ${fontSize} font-poppins items-end`}>
        <Image
          className=''
          src={Logo} // Path to your image
          alt="Description of the image" // Alternative text
          width={50} // Desired width of the image
          height={50} // Desired height of the image
        />
        {withText && (
          <span className="font-regular tracking-tigh text-slate-200">
            Scheme
            <span className="font-extrabold tracking-wider text-blue-600 ">
              AI
            </span>
          </span>
        )}
      </div>
    </Link>
  )
}
