/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

export default function Info({navigation}) {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');

    const onSend = (item) => {
        navigation.navigate('Trang chủ');
        dispatch(
            {type: 'SEND_NAME', data: name},
        );
    };

    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Bổ sung thông tin tài khoản</Text>
            <View style={styles.Content}>
                <View style={styles.Info}>
                    <Text style={styles.Txt}>Họ và tên</Text>
                    <TextInput
                        placeholder="Nhập Tên"
                        onChangeText={setName}
                        style={styles.TxtInput}
                    />
                </View>
                <View style={styles.Info}>
                    <Text style={styles.Txt}>Email</Text>
                    <TextInput
                        placeholder="Nhập Email"
                        onChangeText={setEmail}
                        style={styles.TxtInput}
                    />
                </View>
                <View style={styles.Info}>
                    <Text style={styles.Txt}>Ngày sinh</Text>
                    <TextInput
                        placeholder="Nhập ngày sinh"
                        onChangeText={setDate}
                        style={styles.TxtInput}
                    />
                </View>
                <View style={styles.Info}>
                    <Text style={styles.Txt}>Địa chỉ</Text>
                    <TextInput
                        placeholder="Nhập địa chỉ"
                        onChangeText={setAddress}
                        style={styles.TxtInput}
                    />
                </View>
                <TouchableOpacity
                    style={styles.BtnNext}
                    onPress={(onSend)}
                >
                    <Text style={styles.TxtNext}>Lưu</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    Title: {
        fontSize: 21,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#68ac44',
        padding: 15,
        marginTop: 15,
    },
    Content: {
        padding: 10,
    },
    Info: {
        padding: 2,
        height: 60,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 25,
    },
    Txt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
        padding: 0,
    },
    TxtInput: {
        padding: 3,
        fontSize: 14,
    },
    BtnNext: {
        marginTop: 10,
        alignItems: 'center',
        height: 45,
        backgroundColor: '#fed734',
        justifyContent: 'center',
        borderRadius: 7,
    },
    TxtNext: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
