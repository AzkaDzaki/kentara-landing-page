import Image from "next/image"
import styles from "@/components/home/styles/HomeDescription.module.css"

export default function () {
  return (
    <section id="home-description">
      <div className="container mx-auto flex px-5 py-10 lg:flex-row flex-col lg:items-center items-start">
        <div className="lg:w-1/2 w-full mx-auto mb-10 lg:mb-0 lg:pl-16 pl-0">
          <h1 className="lg:text-4xl text-2xl font-bold mb-4 max-w-md leading-normal">Invoice Factoring untuk Perusahaan Trucking</h1>
          <p className={`${styles.descriptionContent} text-lg`}>Gunakan invoice yang dibuat menggunakan Kentara untuk mengajukan pendanaan dari rekan pendana yang tergabung di Kentara. Dapatkan pendanaan lebih cepat untuk mengembangkan usaha Anda!</p>
        </div>
        <div className="lg:w-1/2 w-full">
          <Image
            src="/images/home-description.svg"
            alt="Logo"
            className="dark:invert lg:mr-auto lg:ml-0 ml-auto mr-auto"
            width={524}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  )
}