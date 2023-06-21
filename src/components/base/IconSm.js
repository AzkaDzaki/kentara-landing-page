import Image from "next/image"

export default function IconSm({ src, className }) {
  return (
    <Image
      src={src}
      alt="Logo"
      className={className}
      width={40}
      height={40}
      priority
    />
  )
}