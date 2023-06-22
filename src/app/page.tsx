import Image from 'next/image'
import logo from '@/images/logo.svg'
import heroMobile from '@/images/hero-mobile.jpg'
import heroDesktop from '@/images/hero-desktop.jpg'
import error from '@/images/icon-error.svg'
import arrow from '@/images/icon-arrow.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white font-JosefinSans text-[16px]">
     
<div className="flex  items-start justify-start w-full p-8">
  <Image src={logo} alt={''} className=''/>

</div>

<Image src={heroMobile} alt={''}/>
<div className="flex flex-col justify-center w-full items-center">
  <p className="text-[hsl(0,36%,70%)] text-3xl">We'Re</p>
  <p className="text-[hsl(0,6%,24%)] text-3xl bg-red-600 w-[50%]textcenter text-center">COMING SOON</p>
</div>

<p className="text-[hsl(0,36%,70%)] text-center">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
<div className=" flex border-2 border-[hsl(0,36%,70%)] rounded-full">
  <input type="email" placeholder='Email Address' className='  px-4 outline-none
   rounded-full text-[hsl(0,36%,70%)] '/>
<button className="bg-[hsl(0,93%,68%)] px-6 py-2 rounded-full">  <Image src={arrow} alt={''} className=''/></button>

</div>
    </main>
  )
}
