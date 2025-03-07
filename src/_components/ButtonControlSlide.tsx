import { ButtonControlSlideProps } from "@/interfaces/ButtonControlSlideInterface"

export const ButtonControlSlide = ({ disableButton, imagePreviewInNext, children, ariaLabel }: ButtonControlSlideProps) => {
    return (
        <button
            onClick={imagePreviewInNext}
            disabled={disableButton()}
            className={`p-2 rounded-sm border border-[var(--text-main)] h-fit cursor-pointer 
          ${disableButton() ? "opacity-50 cursor-not-allowed" : "hover:bg-[var(--text-main)] hover:text-[var(--text-title)] transition-colors"}
          `}
            aria-label={ariaLabel}>
            {children}
        </button>
    )
}