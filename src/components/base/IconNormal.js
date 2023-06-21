import Image from "next/image"

export default function IconNormal({ src, className }) {
  return (
    <Image
      src={src}
      alt="Logo"
      className={className}
      width={24}
      height={24}
      priority
    />
  )
}