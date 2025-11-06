import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export interface IUiInputProps {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value?: readonly string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isShadow?: boolean;
  label?: string;
}
export interface IUiTextareaProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isShadow?: boolean;
  /** Number of rows for vertical height, defaults to 4. */
  rows?: number; 
}