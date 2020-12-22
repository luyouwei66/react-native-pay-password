import React from 'react';
import { TextProps } from 'react-native';
import { InputViewProps } from './InputView';
import { KeyboardProps } from './Keyboard';
export interface PasswordModalProps {
    /** clear password value when press the password input */
    clear?: boolean;
    /** handler called when input done */
    onDone?: (value: string) => void;
    /** modal backdrop */
    backdrop?: boolean;
    /** modal title */
    title?: string;
    /** custom header */
    header?: React.ReactNode;
    /** tip */
    tip?: string;
    /** tip props */
    tipProps?: TextProps;
    /** password input function component props */
    inputViewProps?: Partial<InputViewProps>;
    /** keyborad function component props */
    keyboardProps?: Partial<KeyboardProps>;
}
export interface PasswordModalRef {
    show: () => void;
    hide: () => void;
}
declare const PasswordModal: React.ForwardRefExoticComponent<PasswordModalProps & React.RefAttributes<PasswordModalRef>>;
export default PasswordModal;
