import Image from "next/image"

export default function IconLg({ src, className }) {
  return (
    <Image
      src={src}
      alt="Logo"
      className={className}
      width={48}
      height={48}
      priority
    />
  )
}