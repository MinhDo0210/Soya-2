/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import Material from 'react-native-vector-icons/MaterialCommunityIcons';
// import Feather from 'react-native-vector-icons/Feather';
// import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Cart({navigation}) {
    const [name, setName] = useState('Đỗ Quang Minh');
    const [phone, setPhone] = useState('0355736587');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');

    const productList = useSelector((store) => store.cartReducer.products);

    const onChangeQuantity = () => {

    };

    const onRemoveItem = () => {
        
    };

    const renderItem = ({ item }) => (
        <View style={styles.Item}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row', width: '85%'}}>
                    <Image
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 7,
                            marginRight: 10,
                        }}
                        resizeMode="cover"
                        source={{uri: item.image}}
                    />
                    <View style={{flexDirection: 'column'}}>
                        <Text
                            style={{fontSize: 14, fontWeight: 'bold', width: 200}}
                            ellipsizeMode="tail" numberOfLines={1}
                        >
                            {item.product_name}
                        </Text>
                        <View style={{flexDirection: 'row', paddingTop: 10}}>
                            <TouchableOpacity onPress={onChangeQuantity('redece', item)}>
                                <AntDesign name="minuscircleo" size={20} color={'#fed734'}/>
                            </TouchableOpacity>
                            <Text style={{padding: 10, paddingTop: 0}}>{item?.quantity}</Text>
                            <TouchableOpacity onPress={onChangeQuantity('redece', item)}>
                                <AntDesign name="pluscircle" size={20} color={'#fed734'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{width: '15%', alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 14, color: '#68ac44'}}>{item.price}</Text>
                    <TouchableOpacity style={{padding: 10}} onPress={onRemoveItem(item)}>
                        <FontAwesome name="trash-o" size={25} color={'#fed734'}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );


    return (
        <View style={styles.Container}>
            {/* <View style={styles.Infomation}>
                <Text style={styles.Title}>Thông tin khách hàng</Text>
                <View style={styles.Content}>
                    <View style={styles.Info}>
                        <Text style={styles.Txt}>Tên người nhận</Text>
                        <TextInput
                            placeholder={name}
                            onChangeText={setName}
                            style={styles.TxtInput}
                        />
                    </View>
                    <View style={styles.Info}>
                        <Text style={styles.Txt}>Số điện thoại</Text>
                        <TextInput
                            placeholder={phone}
                            onChangeText={setPhone}
                            style={styles.TxtInput}
                        />
                    </View>
                    <View style={styles.Info}>
                        <Text style={styles.Txt}>Giao hàng tới</Text>
                        <TextInput
                            placeholder="Nhập địa chỉ"
                            onChangeText={setAddress}
                            style={styles.TxtInput}
                        />
                    </View>
                    <View style={styles.Note}>
                        <Text style={styles.TxtNote}>Ghi chú</Text>
                        <TextInput
                            placeholder="Nội dung ghi chú"
                            onChangeText={setNote}
                            style={styles.TxtIpNote}
                        />
                    </View>
                </View>
            </View> */}
            <View style={styles.Detail}>
                <Text style={styles.Title}>Chi tiết đơn hàng</Text>
                <SafeAreaView>
                    <FlatList
                        data={productList}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id?.toString()}
                        horizontal={false}
                    />
                </SafeAreaView>
            </View>
            <View style={styles.Pay}>
                <TouchableOpacity style={styles.BtnNext}>
                    <Text style={styles.TxtNext}>Đặt hàng</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Infomation: {
        flex: 3,
        padding: 10,
    },
    Title: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'black',
    },
    Content: {
        paddingTop: 10,
    },
    Info: {
        padding: 2,
        height: 60,
        borderBottomColor: 'black',
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
    Note: {
        padding: 2,
        height: 60,
        marginBottom: 25,
    },
    TxtNote: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        padding: 0,
    },
    TxtIpNote: {
        padding: 5,
        paddingLeft: 10,
        marginTop: 10,
        fontSize: 14,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 7,
    },
    Detail: {
        borderTopColor: '#D8D8D8',
        borderTopWidth: 12,
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 12,
        padding: 10,
        flex: 1,
    },
    Item: {
        padding: 15,
        height: 80,
    },
    Pay: {
        padding: 10,
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
