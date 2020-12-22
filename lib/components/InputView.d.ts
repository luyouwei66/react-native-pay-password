/// <reference types="react" />
import { ViewStyle, TextStyle } from 'react-native';
export interface InputViewProps {
    /** password length */
    length?: number;
    /** password value */
    value?: string | number;
    /** cover */
    cover?: boolean;
    /** password cover text */
    coverText?: string;
    /** input view style */
    style?: ViewStyle;
    /** input item style */
    itemStyle?: ViewStyle;
    /** password text style */
    textStyle?: TextStyle;
    /** border color */
    borderColor?: ViewStyle['borderColor'];
}
declare const InputView: (props: InputViewProps) => JSX.Element;
export default InputView;
