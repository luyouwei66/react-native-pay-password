import React from 'react';
import { Modal, TouchableOpacity, StyleSheet } from 'react-native';
import InputView from './InputView';
import Keyboard from './Keyboard';
const PasswordInput = React.forwardRef((props, ref) => {
    const { onDone, clear = true, inputViewProps = {}, keyboardProps = {}, } = props;
    const [password, setPassword] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const combineText = (text) => {
        const len = inputViewProps.length || 6;
        let nextPassword = password + text;
        if (nextPassword.length <= len) {
            setPassword(nextPassword);
            if (nextPassword.length === len) {
                onDone && onDone(nextPassword);
                hide();
            }
        }
    };
    const onDelete = () => {
        setPassword(password.substring(0, password.length - 1));
    };
    const show = () => {
        if (clear && password) {
            setPassword('');
        }
        setVisible(true);
    };
    const hide = () => {
        setVisible(!visible);
    };
    React.useImperativeHandle(ref, () => {
        return {
            show: show,
            hide: hide,
        };
    });
    return (<>
      <TouchableOpacity onPress={show} activeOpacity={0.8}>
        <InputView {...inputViewProps} value={password}/>
      </TouchableOpacity>
      <Modal animationType={'slide'} visible={visible} onRequestClose={hide} transparent={true}>
        <TouchableOpacity style={styles.container} activeOpacity={1} onPress={hide}>
          <Keyboard {...keyboardProps} onPress={combineText} onDelete={onDelete}/>
        </TouchableOpacity>
      </Modal>
    </>);
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
});
export default PasswordInput;
