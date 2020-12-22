import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { constants, warn } from '../util';
const InputView = (props) => {
    let { length = 6, value = '', style, itemStyle, cover = true, coverText = '●', textStyle, borderColor = constants.borderColor, } = props;
    const values = (value || '').toString().split('');
    if (values.length > length) {
        warn(`password value length(${values.length}) greater than input view length(${length})`);
    }
    const passwordItems = [];
    for (let i = 0; i < length; i++) {
        let borderRightWidth = constants.borderWidth;
        if (i === length - 1) {
            borderRightWidth = 0;
        }
        passwordItems.push(<View key={i} style={[styles.itemView, { borderRightWidth, borderRightColor: borderColor }, itemStyle]}>
        <Text style={[styles.text, textStyle]}>
          {values.length > i ? (cover ? coverText : values[i]) : ''}
        </Text>
      </View>);
    }
    return (<View style={[styles.inputView, { width: length * constants.inputItemWidth, borderColor: borderColor }, style]}>
      {passwordItems}
    </View>);
};
const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        borderWidth: constants.borderWidth,
    },
    itemView: {
        height: constants.inputItemHeight,
        width: constants.inputItemWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: '#333333'
    }
});
export default InputView;
