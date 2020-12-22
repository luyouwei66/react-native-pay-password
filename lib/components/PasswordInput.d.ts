import React from 'react';
import { InputViewProps } from './InputView';
import { KeyboardProps } from './Keyboard';
export interface PasswordInputProps {
    /** clear password value when press the password input */
    clear?: boolean;
    /** handler called when input done */
    onDone?: (value: string) => void;
    /** password input function component props */
    inputViewProps?: Partial<InputViewProps>;
    /** keyborad function component props */
    keyboardProps?: Partial<KeyboardProps>;
}
export interface PasswordInputRef {
    show: () => void;
    hide: () => void;
}
declare const PasswordInput: React.ForwardRefExoticComponent<PasswordInputProps & React.RefAttributes<PasswordInputRef>>;
export default PasswordInput;
