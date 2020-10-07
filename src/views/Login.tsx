
import React from 'react';
import { View, StyleSheet, Text, StatusBar, TextInput } from 'react-native';
import Button from '../component/Button';
import R from '../res/R';

interface LoginProps {
    login: () => void
}

export default class Login extends React.Component<LoginProps> {

    render() {
        return (
            <View>
                <Text>Login </Text>
                <Button
                    title={R.i18n.t('login')}
                    onPress={this.props.login}
                />
            </View>
        );
    }
}