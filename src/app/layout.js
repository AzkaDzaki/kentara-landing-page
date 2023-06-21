import './globals.css'
import { Golos_Text } from 'next/font/google'
import NavbarComp from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'

const golosText = Golos_Text({ subsets: ['latin'] })

export const metadata = {
  title: 'Kentara.io',
  description: 'Kembangkan Bisnis Anda dengan Teknologi Invoice Digital dan Pembayaran ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${golosText.className} relative`}>
        <NavbarComp />
        {children}
        <Footer />
      </body>
    </html>
  )
}
