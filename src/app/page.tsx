import Image from 'next/image'
import logo from '@/images/logo.svg'
import heroMobile from '@/images/hero-mobile.jpg'
import heroDesktop from '@/images/hero-desktop.jpg'
import error from '@/images/icon-error.svg'
import arrow from '@/images/icon-arrow.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white font-JosefinSans">
     
<div className="flex  items-start justify-start w-full p-8">
  <Image src={logo} alt={''} className=''/>

</div>

<Image src={heroMobile} alt={''}/>
<div className="flex flex-col">
  <p className="">We'Re</p>
  <p className="">COMING SOON</p>
</div>

<p className="">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
<div className=" flex border-2 rounded-full">
  <input type="email" placeholder='Email Address' className='  px-4 outline-none text-black
   rounded-full'/>
<div className="bg-[hsl(0,93%,68%)] px-6 py-2 rounded-full">  <Image src={arrow} alt={''} className=''/></div>

</div>
    </main>
  )
}
