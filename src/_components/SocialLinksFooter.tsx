import { SocialLinksFooterProps } from "@/interfaces/SocialLinksFooterInterface"
import Image from "next/image"
import Link from "next/link"

export const SocialLinksFooter = ({ title, items }: SocialLinksFooterProps) => {
    return (
        <div className="lg:w-[170px]">
            <h4 className="roboto font-semibold text-[var(--text-title)] text-[24px]">{title}</h4>
            <div className="flex gap-3 pt-[35px]">
                {items.map((item, index) => (
                    <Link key={index} href={item.href}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={26}
                            height={26}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}