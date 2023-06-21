import Image from "next/image"
import styles from '@/components/home/styles/HomeProduct.module.css'
import IconSm from "@/components/base/IconSm"

export default function HomeProduct() {
  return (
    <section id="home-product">
      <div className="container px-5 py-20 pt-10 pb-20 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:order-1 order-2">
          <Image
            src="/images/home-product.svg"
            alt="Logo"
            className="dark:invert mb-6"
            width={416}
            height={393}
            priority
          />
        </div>
        <div className={`${styles.productContent} lg:w-1/2 w-full lg:mb-0 mb-10 lg:order-2 order-1`}>
          <h1 className="lg:text-4xl text-2xl font-bold mb-8 leading-normal">Tingkatkan Produktivitas Usaha Anda</h1>
          <div className=" flex flex-col gap-8">
            <div className="flex lg:flex-row flex-col gap-4 items-start">
              <IconSm src="images/home-product-1.svg" />
              <div>
                <h2 className="text-lg font-bold mb-2">Dokumen Pendukung untuk Penagihan</h2>
                <p className="text-base">Unduh dengan mudah dokumen pendukung sebagai syarat penagihan secara mudah.</p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-4 items-start">
              <IconSm src="images/home-product-2.svg" />
              <div>
                <h2 className="text-lg font-bold mb-2">Kelola Penagihan</h2>
                <p className="text-base">Awasi dengan mudah status penagihan anda kepada semua konsumen.</p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-4 items-start">
              <IconSm src="images/home-product-3.svg" />
              <div>
                <h2 className="text-lg font-bold mb-2">Periksa status pembayaran dan keuangan</h2>
                <p className="text-base">Lihat semua status pembayaran dari customer dan pendanaan dari rekan pendana di Kentara.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}