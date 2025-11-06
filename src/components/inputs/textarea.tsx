import type { IUiTextareaProps } from "./type";

const UiTextarea = ({ label, placeholder, value, onChange, isShadow, rows = 4 }: IUiTextareaProps) => {
  return (
    <div className="w-full mt-5">
      <label className="text-sm text-txt-primary font-bold" htmlFor={label}>
        {label}
      </label>
      <textarea
        name={label}
        id={label}
        className={`w-full outline-none border-none rounded-lg p-5 ${isShadow && 'input-shadow'} text-txt-secondary resize-none`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows} 
      />
    </div>
  )
}

export default UiTextarea