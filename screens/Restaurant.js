/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {getRestaurantList} from '../services/Api';

const Restaurant = ({route, navigation}) => {
    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
		const callGetRestaurantList = async () => {
			try {
				const response = await getRestaurantList();
				setRestaurant(response.data);

			} catch (error) {
				console.error(error);
			}
		};
		callGetRestaurantList();
	}, []);

    const onMoveToDetail = (data) => () => {
		navigation.navigate('Details', { detail: data });
	};

    const renderItem = ({ item }) => (
        <View style={styles.Item}>
            <TouchableOpacity onPress={onMoveToDetail(item)}>
                <View style={{height: 170}}>
                    <Image
                        style={{
                            height: 170,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }}
                        source={{uri: item.image_1}}
                    />
                </View>
                <View style={styles.Info}>
                    <View>
                        <Text style={{fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                    </View>
                    <View style={styles.InfoText}>
                        <Ionicons name="ios-location-outline" size={20} color={'black'}/>
                        <View>
                            <Text
                                style={{
                                    fontSize: 16, color: 'gray',
                                    paddingLeft: 3,
                                }}
                                ellipsizeMode="tail" numberOfLines={1}
                            >
                                {item.address.full_address}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.InfoText}>
                        <Feather name="phone-call" size={17} color={'black'}/>
                        <View>
                            <Text style={{fontSize: 16, color: 'gray', paddingLeft: 8}}>{item.phone}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.Time}>
                    <Material name="clock-time-eight-outline" size={21} color={'black'}/>
                    <Text style={{fontSize: 17, paddingLeft: 4}}>{item.opening_time} - {item.closing_time} (Đang mở cửa)</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <View style={styles.Search}>
                    <EvilIcons style={{ padding: 5}} name="search" size={30} color={'black'}/>
                    <TextInput style={{width: '100%', padding: 0}} placeholder="Tìm kiếm cửa hàng"/>
                </View>
                <Material style={{padding: 10}} name="telegram" size={30} color={'gray'}/>
            </View>
            <View style={styles.Content}>
                <FlatList
                    data={restaurant}
                    renderItem={renderItem}
                    keyExtractor={item => item.id?.toString()}
                />
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
        borderBottomWidth: 10,
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
        backgroundColor: '#D8D8D8',
    },
    Item: {
        padding: 15,
        paddingTop: 0,
        height: 300,
        backgroundColor: '#D8D8D8',
    },
    Info: {
        height: 110,
        padding: 10,
        backgroundColor: 'white',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    InfoText: {
        width: '97%',
        flexDirection: 'row',
        paddingTop: 10,
    },
    Time: {
        position: 'absolute',
        flexDirection: 'row',
        top: 8,
        left: -5,
        borderRadius: 9,
        backgroundColor: '#fed734',
        justifyContent: 'center',
        padding: 5,
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
});

export default Restaurant;
