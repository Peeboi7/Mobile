
import React from 'react';
import { View, StyleSheet, Text, StatusBar, TextInput } from 'react-native';
import Button from '../component/Button';
import R from '../res/R';

interface LogoutProps {
    logout: () => void
}
export default class Home extends React.Component<LogoutProps>{

    render() {
        return (
            <View>
                <Text>Welcome ! </Text>
                <Button
                    title={R.i18n.t('logout')}
                    onPress={this.props.logout}
                />
            </View>
        );
    }
}