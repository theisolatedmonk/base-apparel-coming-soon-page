import Image from 'next/image'
import logo from '@/images/logo.svg'
import heroMobile from '@/images/hero-mobile.jpg'
import heroDesktop from '@/images/hero-desktop.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
     
<div className="flex">
  <Image src={logo} alt={''}/>
  <div className="flex flex-col">
    <p>Base</p>
    <p>Apprel</p>
  </div>
</div>

<Image src={heroMobile} alt={''}/>
<div className="flex flex-col">
  <p className="">We'Re</p>
  <p className="">COMING SOON</p>
</div>

<p className="">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
<div className=" flex">
  <input type="email"  className=' rounded-lg'/>
</div>
    </main>
  )
}
