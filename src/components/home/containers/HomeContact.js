import Image from "next/image"

export default function HomeContact() {
  return (
    <section id="home-contact" className="bg-blue--primary text-white">
      <div className="container mx-auto flex px-5 py-20 lg:flex-row flex-col items-center">
        <div className="lg:w-1/2 lg:max-w-xl max-w-full w-full flex flex-col items-start text-left">
          <h1 className="lg:text-4xl text-2xl mb-4 font-bold leading-normal">
            Siap Bisnis Anda Naik Kelas?</h1>
          <p className="text-lg mb-8 leading-relaxed">Segera cari tahu bagaimana teknologi kami bisa meningkatkan produktivitas dan mengembangkan usaha Anda!</p>
          <div className="flex lg:flex-row flex-col justify-center lg:gap-8 gap-4 lg:w-auto w-full mb-6">
            <button className="btn-white blue--primary text-center lg:w-48 w-full py-4 focus:ring rounded-full text-lg">Coba Kentara</button>
            <button className="py-4">
              Hubungi Sales
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <Image
            src="images/home-contact.svg"
            alt="Logo"
            className="mx-auto"
            width={442}
            height={297}
            priority
          />
        </div>
      </div>
    </section >
  )
}
