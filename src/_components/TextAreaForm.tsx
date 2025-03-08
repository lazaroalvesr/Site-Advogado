import { FormTextareaInterfaceComponents } from "@/interfaces/FormTextareaInterfaceComponents"

export const TextAreaForm = ({ text, id, name, onChange, value }: FormTextareaInterfaceComponents) => {
    return (
        <textarea
            className="roboto font-medium flex-1 w-full bg-[var(--text-title)] text-md px-4 lg:py-4 py-16 text-[var(--text-paragraph)] h-56 rounded-sm resize-none outline-none"
            placeholder={text}
            id={id}
            name={name}
            onChange={onChange}
            value={value}
            required
            style={{ 
                paddingTop: '16px',
            }}
        />
    )
}