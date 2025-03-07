import { PropsLiHeader } from "@/interfaces/LiHeaderInterface"
import Link from "next/link"


export const LiHeader = ({ items }: PropsLiHeader) => {
    return (
        <>
            {items.map((item, index) => (
                <Link
                    className="liHeader roboto text-[20px] lg:font-normal text-[var(--text-title)] "
                    href={item.href}
                    key={index}>
                    {item.name}
                </Link>
            ))}
        </>
    )
}

