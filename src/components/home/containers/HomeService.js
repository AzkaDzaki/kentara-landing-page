import IconSm from "@/components/base/IconSm"
import Image from "next/image"

export default function HomeService() {
  return (
    <section id="home-service" className="bg-black--primary text-white">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-8 max-w-4xl mx-auto">
          <h1 className="lg:text-4xl text-2xl font-bold mb-4 leading-normal">Kesempatan untuk berkembang</h1>
          <p className="text-lg">Dengan layanan Invoice Factoring, usaha Anda bisa mendapatkan dana lebih cepat sampai dengan 80% dari nilai tagihan kepada customer. Gunakan invoice yang anda buat sebagai dasar untuk mengajukan pendanaan melalui sistem Kentara dengan mudah.</p>
        </div>
        <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:space-y-0 space-y-6">
          <div className="lg:w-1/3 w-full py-8 px-4 bg-black--secondary rounded-2xl">
            <div className="flex lg:flex-row flex-col items-start lg:gap-8 gap-4">
              <IconSm src="/images/home-service-1.svg" />
              <div>
                <h2 className="text-lg font-bold mb-2">Verifikasi Usaha Anda di Kentara</h2>
                <p className="text-lg">Dengan menggunakan semua fitur yang tersedia di Kentara, yang dapat anda gunakan secara mudah</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full py-8 px-4 bg-black--secondary rounded-2xl">
            <div className="flex lg:flex-row flex-col items-start lg:gap-8 gap-4">
              <IconSm src="/images/home-service-2.svg" />
              <div>
                <h2 className="text-lg font-bold mb-2">Terhubung dengan Customer</h2>
                <p className="text-lg">Minta customer anda untuk mengkonfirmasi bahwa invoice anda sudah benar</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full py-8 px-4 bg-black--secondary rounded-2xl">
            <div className="flex lg:flex-row flex-col items-start lg:gap-8 gap-4">
              <IconSm src="/images/home-service-3.svg" />
              <div>
                <h2 className="text-lg font-bold mb-2">Verifikasi Usaha Anda</h2>
                <p className="text-lg">Dengan satu klik, Anda dapat mengajukan pendanaan dengan mudah dan cepat</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}