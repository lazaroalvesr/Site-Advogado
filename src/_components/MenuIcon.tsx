import { MenuIconProps } from "@/interfaces/MenuIconInterface"
import Image from "next/image"

export const MenuIcon = ({ src, alt }: MenuIconProps) => {
    return (
        <button className="w-13 h-13 rounded-[10px] flex items-center justify-center bg-[var(--background-accent)]">
            <Image
                src={src}
                alt={alt}
                width="43"
                height="43"
            />
        </button>
    )
}