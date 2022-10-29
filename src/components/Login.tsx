import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Login = () => {
    return (
        <View>
            <Text>Login</Text>
            <View style={styles.buttons}>
                <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    buttons: {},
});

export default Login;
