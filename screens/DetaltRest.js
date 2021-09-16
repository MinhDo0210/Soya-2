/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { icons } from '../contants';

import { FlatList } from 'react-native-gesture-handler';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {getRestaurantList} from '../services/Api';

import { useSelector, useDispatch } from 'react-redux';

const Restaurant = ({ route, navigation }) => {
    const { detail } = route.params;
    console.tron.log('detail', detail);

    return (
        <View style={styles.container}>
            {/* <View style={styles.Header}>
                <View style={styles.Search}>
                    <EvilIcons style={{ padding: 5}} name="search" size={30} color={'black'}/>
                    <TextInput style={{width: '100%'}} placeholder="Tìm kiếm cửa hàng"/>
                </View>
                <Material style={{padding: 10}} name="telegram" size={30} color={'gray'}/>
            </View> */}
            <View style={styles.Content}>
                <View style={styles.Item}>
                    <View style={styles.Name}>
                        <Text style={styles.Nametxt}>{detail?.name}</Text>
                    </View>
                    <View style={styles.Time}>
                        <Material name="clock-time-eight-outline" size={21} color={'black'}/>
                        <Text style={{fontSize: 17, paddingLeft: 4}}>{detail?.opening_time} - {detail?.closing_time} (Đang mở cửa)</Text>
                    </View>
                    <View style={{height: 170}}>
                        <Image
                            style={{
                                height: 170,
                                borderRadius: 10,
                            }}
                            source={{uri: detail?.image_1}}
                        />
                    </View>
                    <View style={styles.Info}>
                        <View style={styles.InfoText}>
                            <Ionicons name="ios-location-outline" size={20} color={'black'}/>
                            <Text
                                style={{
                                    fontSize: 16,
                                    paddingLeft: 4,
                                    color: 'gray',
                                }}
                                ellipsizeMode="tail" numberOfLines={1}
                                >
                                    {detail?.address.full_address}
                                </Text>
                        </View>
                        <View style={styles.InfoText}>
                            <Feather name="phone-call" size={17} color={'black'}/>
                            <Text style={{fontSize: 16, paddingLeft: 6, color: '#68ac44'}}>{detail?.phone}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.Btn}>
                    <TouchableOpacity style={styles.BtnChiDuong}>
                        <Text style={styles.Txt}>chỉ đường</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Order')}
                        style={styles.BtnDatHang}
                    >
                        <Text style={styles.Txt}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Header: {
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 15,
        borderBottomColor: '#D8D8D8',
    },
    Search: {
        width: 310,
        height: '70%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        margin: 10,
        marginLeft: 20,
    },
    Content: {
        flex: 10,
    },
    Item: {
        padding: 15,
        paddingTop: 0,
        height: 300,
        flex: 1.8,
    },
    Info: {
        height: 110,
        padding: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    InfoText: {
        width: '97%',
        flexDirection: 'row',
        paddingTop: 10,
    },
    Time: {
        width: '75%',
        flexDirection: 'row',
        borderRadius: 9,
        backgroundColor: '#fed734',
        justifyContent: 'center',
        padding: 5,
        marginLeft: 50,
        marginBottom: 20,
    },
    Tabs: {
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 2,
        borderTopColor: '#D8D8D8',
    },
    TabIcon: {
        width: 100,
        alignItems: 'center',
        paddingTop: 5,
    },
    Tabtxt: {
        color: 'gray',
    },
    Name: {
        paddingTop: 30,
        padding: 20,
        alignItems: 'center',
    },
    Nametxt: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    Btn: {
        flex: 1,
        padding: 20,
    },
    Txt: {
        fontSize: 16,
        textTransform: 'uppercase',
        padding: 10,
        fontWeight: 'bold',
    },
    BtnChiDuong: {
        width: '100%',
        height: 45,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fed734',
        borderRadius: 7,
    },
    BtnDatHang: {
        width: '100%',
        height: 45,
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#fed734',
        borderRadius: 7,
    },
});

export default Restaurant;
