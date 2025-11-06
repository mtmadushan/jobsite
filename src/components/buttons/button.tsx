import type { IUiButtonProps } from "./type"

const UiButton = ({className,textClassName,onClick,disabled,Icon,label}:IUiButtonProps) => {
  return (
    <button className={`w-full py-3 flex items-center gap-4 justify-center rounded-md ${className ? className : 'bg-btn-primary'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={onClick} disabled={disabled}>
        {Icon && Icon}
        <p className={textClassName}>{label?.toUpperCase()}</p>
    </button>
  )
}

export default UiButton
