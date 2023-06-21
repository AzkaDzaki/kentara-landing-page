import Image from "next/image"

export default function HomeHeader() {
  return (
    <section id="home-header" className="bg-grey--light">
      <div className="container mx-auto flex px-5 py-20 lg:flex-row flex-col items-center">
        <div className="lg:w-3/5 w-full flex flex-col items-start text-left justify-between lg:order-1 order-2">
          <h1 className="lg:text-5xl text-3xl mb-4 font-bold lg:leading-tight leading-normal">
            Kembangkan Bisnis Anda dengan Teknologi Invoice Digital dan Pembayaran.
          </h1>
          <p className="text-lg mb-8 leading-relaxed">Kentara membantu usaha trucking anda berkembang dengan sistem<br className="lg:flex hidden" /> perapian data, pembuatan invoice digital, hingga mendapatkan<br className="lg:flex hidden" /> pembayaran lebih cepat.</p>
          <div className="flex lg:flex-row flex-col justify-center lg:gap-8 gap-4 lg:w-auto w-full lg:mb-0">
            <button className="btn-blue text-center bg-black text-white lg:w-48 w-full py-4 focus:ring rounded-full text-lg">Coba Kentara</button>
            <button className=" btn-text py-4">Hubungi Sales</button>
          </div>
        </div>
        <div className="lg:w-2/5 w-full lg:pl-auto lg:pl-8 lg:order-2 order-1">
          <Image
            src="/images/home-header.svg"
            alt="Logo"
            className="dark:invert ml-auto lg:mr-0 mr-auto lg:mb-0 mb-16"
            width={554}
            height={376}
            priority
          />
        </div>
      </div>
    </section>
  )
}
