import { PropsImage } from "@/interfaces/CustomImage"
import Image from "next/image"
import Link from "next/link"

export const SocialIcons = ({ items }: PropsImage) => {

    return (
        <>
            {items.map((item, index) => (
                <Link key={index} href={item.linkUrl}>
                    <Image
                        src={item.src}
                        alt={item.alt}
                        width={20}
                        height={20}
                    />
                </Link>
            ))}
        </>

    )
}