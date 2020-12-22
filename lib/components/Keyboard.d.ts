/// <reference types="react" />
import { TextStyle, ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native';
export interface KeyboardItemProps {
    value: string | ImageSourcePropType;
    type?: 'num' | 'image';
    style?: ViewStyle[];
    numStyle?: TextStyle | ImageStyle;
    onPress?: (v?: any) => void;
}
export interface KeyboardProps {
    /** custom data sources,cover the default keyboard */
    dataSources?: (KeyboardItemProps[])[];
    /** handler called when press num text */
    onPress?: (v?: string) => void;
    /** handler called when press delete image */
    onDelete?: () => void;
    /** keyboard style */
    style?: ViewStyle;
    /** row style */
    rowStyle?: ViewStyle;
}
declare const Keyboard: (props: KeyboardProps) => JSX.Element;
export default Keyboard;
