import { ContactItemFooterProps } from "@/interfaces/ContactItemFooterInterface"
import Image from "next/image"
import Link from "next/link"

export const ContactItemFooter = ({ title, items }: ContactItemFooterProps) => {
    return (
        <div className="lg:w-[330px]">
            <h4 className="roboto font-semibold text-[var(--text-title)] text-[24px]">{title}</h4>
            <div className="flex flex-col gap-4 pt-[35px] md:w-[394px] lg:w-[300px]">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={32}
                            height={32}
                        />
                        <Link href={item.href} rel="noopener noreferrer" target="_blank" className="roboto text-[16px] text-[var(--text-neutral)]">{item.text}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}