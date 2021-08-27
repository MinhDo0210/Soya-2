/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Simple from 'react-native-vector-icons/SimpleLineIcons';


export default function Login() {
    return (
        <View style={styles.Container}>
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
                        <Simple name="screen-smartphone" size={20} color="#68ac44" />
                        <TextInput
                            placeholder="Số điện thoại"
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.BtnLogin}>
                    <Text style={styles.TxtLogin}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={styles.Dk}>
                    <Text style={styles.TxtDk}>
                        Bằng việc đăng nhập, bạn đã đồng ý với
                        <Text style={{color: '#68ac44', textDecorationLine: 'underline'}}> Điều khoản sử dụng </Text>
                        của Soya Garden
                    </Text>
                </View>
                <TouchableOpacity style={styles.BtnTn}>
                    <Text style={styles.TxtTn}>Trải nghiệm ngay</Text>
                </TouchableOpacity>
                <Text style={{color: 'black', textAlign: 'center', padding: 10,}}>Phiên bản 1.1.4</Text>
            </View>
        </View>
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
        paddingTop: 10,
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
});
