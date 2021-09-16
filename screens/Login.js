/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Simple from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';

import {login} from '../services/Api';

import { useSelector, useDispatch } from 'react-redux';

const {height, width} = Dimensions.get('window');

export default function Login({navigation}) {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState();
    const [isVisible, setIsVisible] = useState(false);

    const onChangePhone = val => setPhone(val);
    const onChangeCode = val => setCode(val);
    const onCloseModal = () => setIsVisible(false);

    const onVerifyPhone = async () => {
        try {
            const response = await login({phone: phone});
            console.log('rs', response.data.data); // data tu api tra ve
            setIsVisible(true); // // hien thi modal nhap code len
        }
        catch (error) {
            console.error(error.response);
        }
    };

    const onVerifyCode = async () => {
        try {
            const response = await login({phone: phone, otp: code});
            console.log('rs', response.data); // data tu api tra ve
            setIsVisible(false); // an modal nhap code di
            // save lai token
            navigation.navigate('Info');
        }
        catch (error) {
            console.error(error.response);
        }
    };

    const dispatch = useDispatch();

    const onSend = () => {
        dispatch(
            {type: 'SEND_PHONE', data: phone},
        );
    };

    return (
        <LinearGradient colors={['white', '#e6fcbb']} style={styles.Container}>
            <View style={styles.Banner}>
                <Image
                    source={require('../assets/images/banner.png')}
                    style={{
                        width: '85%',
                        height: 150,
                        resizeMode: 'contain',
                    }}
                />
            </View>
            <View style={{marginTop: 30}}>
                <TouchableOpacity style={styles.BtnFb}>
                    <FontAwesome name="facebook" size={20} color="white" />
                    <Text style={styles.TxtFb}>Đăng nhập với facebook</Text>
                </TouchableOpacity>
                <View style={styles.LogPhone}>
                    <Text style={{color: 'gray'}}>Hoặc đăng nhập bằng</Text>
                    <View style={styles.Phone}>
                        <Simple name="screen-smartphone" size={20} color="#026609" />
                        <TextInput
                            placeholder="Số điện thoại"
                            keyboardType = "numeric"
                            onChangeText={onChangePhone}
                            value={phone}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.BtnLogin}
                    onPress={onVerifyPhone}
                >
                    <Text style={styles.TxtLogin}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={styles.Dk}>
                    <Text style={styles.TxtDk}>
                        Bằng việc đăng nhập, bạn đã đồng ý với
                        <Text style={{color: '#026609', textDecorationLine: 'underline'}}> Điều khoản sử dụng </Text>
                        của Soya Garden
                    </Text>
                </View>
                <TouchableOpacity style={styles.BtnTn}>
                    <Text style={styles.TxtTn}>Trải nghiệm ngay</Text>
                </TouchableOpacity>
                <Text style={{color: 'black', textAlign: 'center', padding: 10}}>Phiên bản 1.1.4</Text>
            </View>
            <Modal
                testID={'modal'}
                isVisible={isVisible}
                onSwipeComplete={onCloseModal}
                swipeDirection={['up', 'left', 'right', 'down']}
                style={{justifyContent: 'flex-end', margin: 0}}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.closeBtn} onPress={onCloseModal}>
                        <Ionicons name="close" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.TxtCode}>Nhập mã xác thực OTP</Text>
                    <Text style={styles.TxtCode}>đến {phone}</Text>
                    <TextInput
                        style={{
                            height: 45,
                            borderBottomWidth: 1,
                            borderBottomColor: '#D8D8D8',
                            borderRadius: 5,
                            marginTop: 20,
                            width: '100%',
                        }}
                        placeholder="Mã xác thực"
                        onChangeText={onChangeCode}
                        value={code}
                        textAlign="center"
                        keyboardType = "numeric"
                    />
                    <TouchableOpacity
                        onPress={onVerifyCode}
                        style={styles.BtnSendCode}>
                        <Text style={styles.TxtSendCode}>
                            Send Code
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
    },
    Banner: {
        alignItems: 'center',
        paddingTop: 50,
        padding: 20,
    },
    BtnFb: {
        height: 45,
        backgroundColor: '#345182',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 7,
    },
    TxtFb: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    LogPhone: {
        alignItems: 'center',
        padding: 20,
        width: '100%',
    },
    Phone: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#D8D8D8',
        marginTop: 20,
        paddingLeft: 110,
    },
    BtnLogin: {
        alignItems: 'center',
        height: 45,
        backgroundColor: '#fed734',
        justifyContent: 'center',
        borderRadius: 7,
    },
    TxtLogin: {
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    Dk: {
        flexDirection: 'row',
        height: 40,
        width: '100%',
        marginTop: 15,
    },
    TxtDk: {
        textAlign: 'center',
    },
    BtnTn: {
        alignItems: 'center',
        height: 45,
        marginTop: 20,
        backgroundColor: 'white',
        borderColor: '#fed734',
        borderWidth: 1.5,
        justifyContent: 'center',
        borderRadius: 7,
    },
    TxtTn: {
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        height: height - 50,
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    closeBtn: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    TxtCode: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#68ac44',
    },
    BtnSendCode: {
        width: '100%',
        alignItems: 'center',
        height: 45,
        marginTop: 20,
        backgroundColor: '#fed734',
        justifyContent: 'center',
        borderRadius: 7,
    },
    TxtSendCode: {
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
    },
});
