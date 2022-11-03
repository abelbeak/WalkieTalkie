import {Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {Stacks} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MovieScreenProps = NativeStackScreenProps<Stacks, 'Login'>;

const Login = ({}: MovieScreenProps) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.logo_wrapper}>
                    <Image style={styles.logo} source={require('../assets/login_logo.png')} />
                </View>
                <View style={styles.button_wrapper}>
                    <TouchableHighlight
                        style={[styles.kakao, styles.login_button]}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => {}}>
                        <Text style={styles.button_font}>카카오 로그인</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[styles.google, styles.login_button]}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => {}}>
                        <Text style={styles.button_font}>Google 계정으로 로그인</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[styles.apple, styles.login_button]}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => {
                            // navigation.navigate('Home');
                        }}>
                        <Text style={[styles.button_font, styles.apple_text]}>Apple로 로그인</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1},
    logo_wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {},
    button_wrapper: {
        height: 160,
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 'auto',
        marginBottom: 74,
    },
    login_button: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    kakao: {
        backgroundColor: '#FEE500',
    },
    google: {
        backgroundColor: '#EBEBEB',
    },
    apple: {
        backgroundColor: '#000000',
    },
    button_font: {
        fontSize: 16,
        fontWeight: '500',
    },
    apple_text: {
        color: '#ffffff',
    },
});

export default Login;
