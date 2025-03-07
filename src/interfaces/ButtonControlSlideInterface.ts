import { ReactNode } from "react";

export interface ButtonControlSlideProps {
    imagePreviewInNext: () => void;
    disableButton: () => boolean;
    ariaLabel: string
    children: ReactNode
}