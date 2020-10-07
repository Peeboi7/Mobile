import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import R from '../res/R';

interface ButtonProps {
    onPress: () => void
    title: string
}

export default class Button extends React.Component<ButtonProps> {

    render() {
        return (
            < TouchableHighlight style={styles.button} onPress={this.props.onPress} >
                <Text style={styles.texte}>{this.props.title}</Text>
            </TouchableHighlight >
        )
    }
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: R.colors.gold,
        borderRadius: 30,
        padding: 20,
    },
    texte: {
        fontSize: 30
    }

});