import Image from 'next/image';
import IconXs from '../base/IconXs';

export default function Footer() {
  return (
    <footer id='footer' className='bg-black--primary'>
      <div className="container px-5 py-20 mx-auto flex md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:mt-0 mt-10 text-white">
          <div className="md:w-1/3 w-full">
            <a>
              <Image
                src="/images/logo-white.svg"
                alt="Logo"
                className="dark:invert mb-4"
                width={185}
                height={32}
                priority
              />
            </a>
            <p className='text-base lg:mb-6 mb-10 max-w-xs'>Membantu anda menjadi pengendali usaha yang berkembang pesat.</p>
            <p className='text-base lg:flex hidden'>©2023 Kentara</p>
          </div>
          <div className="md:w-1/3 w-full md:pl-12 lg:mb-0 mb-10">
            <h2 className="font-bold text-lg mb-4">Menjadi Partner Kentara</h2>
            <nav className="list-none">
              <li className="mb-4">
                <a>Trucking</a>
              </li>
              <li className="mb-4">
                <a>Forwarding & 3PL</a>
              </li>
              <li className="mb-4">
                <a>Lembaga Jasa Keuangan</a>
              </li>
            </nav>
          </div>
          <div className="md:w-1/3 w-full md:pl-12 lg:mb-0 mb-10">
            <h2 className="font-bold text-lg mb-4">Kontak Kami</h2>
            <nav className="list-none mb-10">
              <li className="mb-4 flex gap-3">
                <IconXs src="images/phone.svg" />
                <a>+62811234567890</a>
              </li>
              <li className="mb-4 flex gap-3">
                <IconXs src="images/email.svg" />
                <a>contact@kentara.io</a>
              </li>
            </nav>
          </div>
          <p className='text-base lg:hidden flex'>©2023 Kentara</p>
        </div>
      </div>
    </footer>
  );
}