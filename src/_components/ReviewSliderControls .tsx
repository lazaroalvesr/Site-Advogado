import { ReviewSliderControlsProps } from "@/interfaces/ReviewSliderControlsProps";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ButtonControlSlide } from "./ButtonControlSlide";

export const ReviewSilderControls = ({ nextSlide, prevSlide, disableNext, disablePrev }: ReviewSliderControlsProps) => {
  return (
    <div className="flex justify-between lg:w-[1044px] items-center lg:gap-0 gap-5 md:gap-0">
      <ButtonControlSlide
        imagePreviewInNext={prevSlide}
        disableButton={() => !!disablePrev}
        ariaLabel="Slide anterior"
        children={<ArrowLeft className="w-5 h-5" />}
      />
      <Link
        href="/"
        className="roboto cursor-pointer lg:w-64 w-52 h-12 md:w-60 md:h-12 items-center justify-center 
                 flex  bg-[var(--background-secondary)]  lg:text-[18px] text-[14px] uppercase md:text-[16px] text-[var(--text-title)] rounded-sm">
        Ver mais comentários
      </Link>
      <ButtonControlSlide
        imagePreviewInNext={nextSlide}
        disableButton={() => !!disableNext}
        ariaLabel="Próximo slide"
        children={<ArrowRight className="w-5 h-5" />}
      />
    </div>
  )
}