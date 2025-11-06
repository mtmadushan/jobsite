import type { ReactNode } from "react";

export interface IUiButtonProps {
    className?: string;
    textClassName?: string;
    onClick?: () => void;
    disabled?: boolean;
    Icon?: ReactNode;
    label?: string;
}