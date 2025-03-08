import { LegalInfoFooterProps } from "@/interfaces/LegalInfoFooterInterface"
import Link from "next/link"

export const LegalInfoFooter = ({ items }: LegalInfoFooterProps) => {
    return (
        <>
            {items.map((item, index) => (
                <div className="w-full justify-between flex lg:flex-row flex-col md:flex-row" key={index}>
                    <p className="roboto text-[12px] text-[var(--text-title)]">{item.owner}</p>

                    <Link href={item.srcAuthor} rel="noopener noreferrer" target="_blank" className="roboto text-[12px] text-[var(--text-title)] lg:pt-0 pt-2 md:pt-0">{item.author}</Link>
                </div>
            ))}
        </>
    )
}