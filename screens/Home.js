/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { COLORS, images, icons } from '../contants';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Feather from 'react-native-vector-icons/Feather';

import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import { useSelector, useDispatch } from 'react-redux';

const DATA = [
    {
        id: '1',
        name: 'Hot Soya Milk',
        price: '39.500 đ',
        image: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA1675.jpg',
    },
    {
        id: '2',
        name: 'Hot Chocolate Latte',
        price: '35.000 đ',
        image: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA1703-copy-683x1024.jpg',
    },
    {
        id: '3',
        name: 'Hot Black Tea',
        price: '35.000 đ',
        image: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA0040-683x1024.jpg',
    },
    {
        id: '4',
        name: 'Ribbed Combo Sweater',
        price: '35.000 đ',
        image: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA4933-683x1024.jpg',
    },
];
const DATA1 = [
    {
        id: '1',
        name: 'Voucher giảm giá 40.000đ',
        price: '30 S-Point',
        image: 'https://soyagarden.com/content/uploads/2020/12/z2253425214787_26a3753be9ab7a8555d37cf0678e3b60-768x1026.jpg',
    },
    {
        id: '2',
        name: 'Voucher giảm giá 30.000đ',
        price: '25 S-Point',
        image: 'https://soyagarden.com/content/uploads/2020/01/li-xi-1024x577.jpg',
    },
    {
        id: '3',
        name: 'Voucher giảm giá 20.000đ',
        price: '20 S-Point',
        image: 'https://soyagarden.com/content/uploads/2019/11/9fc6e8d81f97e6c9bf86.jpg',
    },
    {
        id: '4',
        name: 'Voucher giảm giá 10.000đ',
        price: '10 S-Point',
        image: 'https://soyagarden.com/content/uploads/2019/11/73504788_3195986220476346_6528997133469614080_o.jpg',
    },
];

const DATA2 = [
    {
        id: '1',
        name: 'BST MÙA ĐÔNG 2020 | ĐỘC THÂN ẤM ÁP VỚI CHÚT NGỌT CỦA “DEAR WINTER”',
        image: 'https://soyagarden.com/content/uploads/2020/11/DSC_9722-1024x723.jpg',
    },
    {
        id: '2',
        name: 'ĐẾN VƯỜN ĐẬU THỬ SOYA JELLY-O MỚI – KIM BÀI MIỄN DỊCH TUYỆT VỜI, CHỈ 29K',
        image: 'https://soyagarden.com/content/uploads/2020/03/3bd7b9c6e1041a5a4315-1024x460.jpg',
    },
    {
        id: '3',
        name: 'HỌC TIẾNG ANH PHẤN KHÍCH CÙNG SOYA GARDEN VÀ ENGLISHNOW',
        image: 'https://soyagarden.com/content/uploads/2020/09/118649411_4295276030547354_6614295648694420106_n.jpg',
    },
    {
        id: '4',
        name: 'BỘ SƯU TẬP “FESTIVE SPECIALS” TỪ SOYA GARDEN',
        image: 'https://soyagarden.com/content/uploads/2019/11/bst-web3-1024x576.jpg',
        },
];

const Home = ({ navigation }) => {

    const listGift = useSelector((store) => store.infoReducer.items);

    const Name = ({ name }) => (
		<View style={{flex: 1, width: 250}}>
			<Text style={{ fontSize: 16, paddingLeft: 15, fontWeight: 'bold' }}>{name}</Text>
		</View>
	);

    const Price = ({ price }) => (
		<View style={{flex: 1, paddingBottom: 10}}>
			<Text style={{ fontSize: 14, paddingLeft: 15, color: 'gray'}}>{price}</Text>
		</View>
	);

    const renderItem = ({item}) => (
        <View style={{height: 225}}>
            <View style={{height: 170 }}>
                <Image
                style={{
                    width: 250,
                    flex: 1,
                    margin: 10,
                    marginTop: 0,
                    borderRadius: 15,
                }}
                source={{uri: item.image}}
            />
            </View>
            <Name name={item.name} />
			<Price price={item.price} />
        </View>
    );
    const renderNew = ({item}) => (
        <View style={{height: 250}}>
            <View style={{height: 170 }}>
                <Image
                style={{
                    width: 250,
                    flex: 1,
                    margin: 10,
                    marginTop: 0,
                    borderRadius: 15,
                }}
                source={{uri: item.image}}
            />
            </View>
            <Name name={item.name} />
        </View>
    );
    return (
        <View style={styles.Container}>
            <LinearGradient colors={['#fed734', '#fedd52', '#D8D8D8']} style={styles.Header}>
                <View style={styles.User}>
                    <View style={styles.Avt}>
                        <Image
                            source={images.avatar_5}
                            resizeMode="contain"
                            style={{
                                width: 45,
                                height: 45,
                            }}
                        />
                    </View>
                    <View style={styles.Info}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                            {listGift.map((e, i) => (
                                <Text key={i}>{e}</Text>
                            ))}
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Image
                                source={{uri: 'https://soyagarden.com/content/uploads/2019/10/ic_dau-vang_53px@3x.png'}}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                            <Text style={{fontSize: 15, marginLeft: 5 }}>Đậu vàng </Text>
                        </View>
                    </View>
                    <View style={styles.Peanut}>
                        <Image
                            source={icons.fire}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                            }}
                        />
                        <Text style={{fontSize: 18, marginLeft: 5, fontWeight: 'bold', lineHeight: 22 }}>0</Text>
                    </View>
                </View>
                <View style={styles.Options}>
                    <View style={styles.Card}>
                        <View style={styles.Icons}>
                            <FontAwesome name="credit-card" size={27} color="#dc8113" />
                        </View>
                        <Text style={styles.CartText}>Nạp đậu</Text>
                    </View>
                    <View style={styles.Card}>
                        <View style={styles.Icons}>
                            <Material name="bike-fast" size={27} color="#dc8113" />
                        </View>
                        <Text style={styles.CartText}>Giao hàng</Text>
                    </View>
                    <View style={styles.Card}>
                        <View style={styles.Icons}>
                            <Material name="barcode-scan" size={27} color="#dc8113" />
                        </View>
                        <Text style={styles.CartText}>Tích S-Point</Text>
                    </View>
                    <View style={styles.Card}>
                        <View style={styles.Icons}>
                            <Material name="ticket-confirmation-outline" size={27} color="#dc8113" />
                        </View>
                        <Text style={styles.CartText}>Voucher</Text>
                    </View>
                </View>
            </LinearGradient>
            <View style={styles.Content}>
                <ScrollView>
                    <Swiper flex={1} backgroundColor={'#D8D8D8'} style={styles.wrapper} showsButtons={false}  autoplay={true}>
                        <View style={styles.slide1}>
                            <Image
                            style={styles.SlideImg}
                            source={{
                                uri: 'https://soyagarden.com/content/uploads/2021/04/banner-web.jpg',
                            }}
                            />
                        </View>
                        <View style={styles.slide1}>
                            <Image
                            style={styles.SlideImg}
                            source={{
                                uri: 'https://soyagarden.com/content/uploads/2020/01/web-2-1-2020-1024x460.jpg',
                            }}
                            />
                        </View>
                        <View style={styles.slide1}>
                            <Image
                            style={styles.SlideImg}
                            source={{
                                uri: 'https://soyagarden.com/content/uploads/2019/09/Soyal-Garden21721-e1568393821340.jpg',
                            }}
                            />
                        </View>
                        <View style={styles.slide1}>
                            <Image
                            style={styles.SlideImg}
                            source={{
                                uri: 'https://soyagarden.com/content/uploads/2020/03/3bd7b9c6e1041a5a4315.jpg',
                            }}
                            />
                        </View>
                    </Swiper>
                    <View style={styles.List}>
                        <View style={styles.ListTitle}>
                            <Text style={styles.ListText}>Gợi ý cho bạn</Text>
                        </View>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                    <View style={styles.List}>
                        <View style={styles.ListTitle}>
                            <Text style={styles.ListText}>Voucher/Khuyến mãi</Text>
                            <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                        </View>
                        <FlatList
                            data={DATA1}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                    <View style={styles.List}>
                        <View style={styles.ListTitle}>
                            <Text style={styles.ListText}>Tin tức</Text>
                            <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                        </View>
                        <FlatList
                            data={DATA2}
                            renderItem={renderNew}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Header: {
        flex: 2.8,
        padding: 10,
        paddingTop: 0,
    },
    User: {
        flex: 1.5,
        flexDirection: 'row',
        padding: 10,
    },
    Avt: {
        height: 55,
        width: 55,
        padding: 4,
        borderRadius: 55 / 2,
        backgroundColor: COLORS.darkgray,
        alignItems: 'center',
    },
    Info: {
        flex: 1,
        marginLeft: 15,
    },
    Peanut: {
        height: 40,
        width: 60,
        padding: 10,
        borderRadius: 25,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    Options: {
        flex: 2.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    Card: {
        padding: 15,
        alignItems: 'center',
    },
    Icons: {
        width: 50,
        height: 50,
        padding: 10,
        borderRadius: 50 / 2,
        alignItems: 'center',
        backgroundColor: '#bceea2',
    },
    CartText: {
        textAlign: 'center',
        paddingTop: 5,
    },
    Content: {
        flex: 8,
    },
    wrapper: {
        padding: 10,
        paddingTop: 3,
        height: 200,
    },
    SlideImg: {
        height: 180,
        width: '95%' ,
        borderRadius: 10,
    },
    wrapperList: {
        padding: 10,
        height: 250,
    },
    SlideL: {
        height: 250,
    },
    SlideImgList: {
        height: 180,
        width: '95%' ,
        borderRadius: 10,
    },
    List: {
        flex: 1,
        borderBottomWidth: 4,
        borderBottomColor: '#D8D8D8',
    },
    ListTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ListText: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
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

export default Home;
