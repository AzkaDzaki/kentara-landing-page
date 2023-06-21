import Image from "next/image"

export default function IconXs({ src, className }) {
  return (
    <Image
      src={src}
      alt="Logo"
      className={className}
      width={20}
      height={20}
      priority
    />
  )
}