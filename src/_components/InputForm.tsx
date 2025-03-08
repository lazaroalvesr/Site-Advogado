import { FormInputInterfaceComponents } from "@/interfaces/FormInputInterfaceComponents"

export const InputForm = ({ text, id, name, onChange, value }: FormInputInterfaceComponents) => {
    return (
        <input
            className="roboto font-medium text-md bg-[var(--text-title)] pl-4 text-[var(--text-paragraph)] px-20 py-6 rounded-sm outline-none"
            placeholder={text}
            id={id}
            name={name}
            onChange={(e) => onChange(e)}
            value={value}
            required
        />
    )
}