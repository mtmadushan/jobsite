import type { IUiInputProps } from "./type"

const UiInput = ({label,placeholder,type,value,onChange,isShadow}:IUiInputProps) => {
  return (
    <div className="w-full mt-5">
      <label className="text-sm text-txt-primary font-bold" htmlFor={label}>
        {label}
      </label>
      <input name={label} id={label} className={`w-full outline-none border-none rounded-md px-1 py-2 ${isShadow && 'input-shadow'} text-txt-secondary`} placeholder={placeholder} type={type} value={value} onChange={onChange} />
    </div>
  )
}

export default UiInput
