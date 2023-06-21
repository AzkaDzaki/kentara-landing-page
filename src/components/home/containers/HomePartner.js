import IconXs from "@/components/base/IconXs";

export default function HomePartner() {
  return (
    <section id="home-partner">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-2/6 w-full lg:mb-0 mb-8">
            <h1 className="lg:text-4xl text-2xl font-bold mb-4 leading-normal">Menjadi Partner Kentara</h1>
            <p className="text-lg">Tidak hanya trucking company, Kentara juga menyediakan layanan untuk berbagai jenis perusahaan lainnya.</p>
          </div>
          <div className="lg:w-4/6 w-full lg:pl-8">
            <div className="flex lg:flex-row flex-col lg:gap-8">
              <div className="lg:mb-0 mb-4">
                <div className="lg:mb-8 mb-4">
                  <p className="text-lg font-bold mb-2">Trucking</p>
                  <p className="text-base mb-2">Membantu perusahaan dengan teknologi invoice digital dan pembayaran</p>
                  <p className="blue--primary text-base flex items-center gap-2 cursor-pointer">Coba Kentara<span><IconXs src="images/arrow-right-blue.svg" /></span></p>
                </div>
                <div>
                  <p className="text-lg font-bold mb-2">Lembaga Jasa Keuangan</p>
                  <p className="text-base mb-2">Mengoptimalkan kolaborasi antar LJK dan UMKM  di industri transportasi dengan teknologi</p>
                  <p className="blue--primary text-base flex items-center gap-2 cursor-pointer">Pelajari Lebih Lanjut<span><IconXs src="images/arrow-right-blue.svg" /></span></p>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold mb-2">3PL & Forwarding</p>
                <p className="text-base mb-2">Membantu untuk mengatur keuangan dan menjaga relasi baik dengan rekan bisnis</p>
                <p className="blue--primary text-base flex items-center gap-2 cursor-pointer">Pelajari Lebih Lanjut<span><IconXs src="images/arrow-right-blue.svg" /></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}