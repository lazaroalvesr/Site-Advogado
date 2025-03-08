import { PropsServiceItemFooter } from "@/interfaces/ServiceItemFooterInterface"

export const ServiceItemFooter = ({ text, title }: PropsServiceItemFooter) => {
    return (
        <div className="lg:w-[295px]">
            <h4 className="roboto font-semibold text-[var(--text-title)] text-[24px]">{title}</h4>
            <ul className="flex flex-col pt-[35px] gap-4">
                {text.map((item, index) => (
                    <li key={index} className="liFooter roboto text-[16px] text-[var(--text-neutral)]">{item.name}</li>
                ))}
            </ul>
        </div>
    )
}