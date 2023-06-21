import IconLg from "@/components/base/IconLg";

export default function HomeFeature() {
  return (
    <section id="home-feature">
      <div className="container px-5 py-20 pb-8 mx-auto">
        <div className="lg:text-center text-left lg:mb-16 mb-10">
          <h1 className="lg:text-4xl text-2xl font-bold leading-normal">Atur Keuangan Secara Pintar</h1>
        </div>
        <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:space-y-0 space-y-6">
          <div className="w-full lg:max-w-full max-w-xs ">
            <div className="mb-4">
              <IconLg src="/images/home-feature-1.svg" />
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Atur Data Penjualan</h2>
              <p className="text-base">Catat kegiatan penjualan untuk memudahkan pengaturan unit</p>
            </div>
          </div>
          <div className="w-full lg:max-w-full max-w-xs ">
            <div className="mb-4">
              <IconLg src="/images/home-feature-2.svg" />
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Buat Invoice Digital</h2>
              <p className="text-base">Gunakan fitur invoice digital untuk penagihan kepada customer</p>
            </div>
          </div>
          <div className="w-full lg:max-w-full max-w-xs ">
            <div className="mb-4">
              <IconLg src="/images/home-feature-3.svg" />
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Rangkuman Kesehatan Keuangan</h2>
              <p className="text-base">Dapatkan rangkuman keadaan keuangan usaha anda secara berkala</p>
            </div>
          </div>
          <div className="w-full lg:max-w-full max-w-xs ">
            <div className="mb-4">
              <IconLg src="/images/home-feature-4.svg" />
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Akses Pendanaan Modal Kerja</h2>
              <p className="text-base">Dapatkan dana modal kerja yang membantu usaha anda berkembang</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}