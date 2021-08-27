/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, images, icons } from '../contants';
import { ScrollView } from 'react-native-gesture-handler';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Account({navigation}) {
    return (
        <View style={styles.Container}>
            <ScrollView>
                <TouchableOpacity style={styles.Btn}>
                    <View style={styles.Avt}>
                        <Image
                            source={images.avatar_5}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                            }}
                        />
                    </View>
                    <View style={styles.Text1}>
                        <Text style={styles.Text2}>Đỗ Quang Minh</Text>
                        <Text style={styles.Text3}>0355736587</Text>
                    </View>
                    <View>
                        <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn}>
                    <View style={styles.Peanut}>
                        <Image
                            source={{uri: 'https://soyagarden.com/content/uploads/2019/10/ic_dau-vang_53px@3x.png'}}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </View>
                    <View style={styles.Text1}>
                        <Text style={styles.Text2}>Đậu vàng</Text>
                        <Text style={styles.Text3}>+300 S-Point - Đậu kim cương</Text>
                    </View>
                    <View>
                        <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn}>
                    <View style={styles.Icons}>
                        <Feather name="file-text" color={'black'} size={25} />
                    </View>
                    <View style={styles.Text1}>
                        <Text style={styles.Text2}>Lịch sử đặt hàng</Text>
                    </View>
                    <View>
                        <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn}>
                    <View style={styles.Icons1}>
                        <Ionicons name="sync-circle-outline" color={'black'} size={28} />
                    </View>
                    <View style={styles.Text1}>
                        <Text style={styles.Text2}>Vòng quay may mắn</Text>
                    </View>
                    <View>
                        <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn}>
                    <View style={styles.Icons}>
                        <Ionicons name="ios-settings-outline" color={'black'} size={25} />
                    </View>
                    <View style={styles.Text4}>
                        <Text style={styles.Text2}>Cài đặt</Text>
                        <Text style={styles.Text3}>Mật khẩu & bảo mật</Text>
                    </View>
                    <View>
                        <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn}>
                    <View style={styles.Icons}>
                        <Feather name="bookmark" color={'black'} size={25} />
                    </View>
                    <View style={styles.Text1}>
                        <Text style={styles.Text2}>Địa chỉ đã lưu</Text>
                    </View>
                    <View>
                        <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn}>
                    <View style={styles.Icons}>
                        <Feather name="mail" color={'black'} size={25} />
                    </View>
                    <View style={styles.Text1}>
                        <Text style={styles.Text2}>Phản hồi/Góp ý</Text>
                    </View>
                    <View>
                        <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn}>
                    <View style={styles.Icons}>
                        <Feather name="help-circle" color={'black'} size={25} />
                    </View>
                    <View style={styles.Text1}>
                        <Text style={styles.Text2}>Hỏi đáp</Text>
                    </View>
                    <View>
                        <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn}>
                    <View style={styles.Icons}>
                        <Feather name="star" color={'black'} size={25} />
                    </View>
                    <View style={styles.Text1}>
                        <Text style={styles.Text2}>Đánh giá úng dụng</Text>
                    </View>
                    <View>
                        <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Btn}
                    onPress = {() => navigation.navigate('Login')}
                >
                    <View style={styles.Icons}>
                        <Material name="logout" color={'black'} size={25} />
                    </View>
                    <View style={styles.Text1}>
                        <Text style={styles.Text2}>Đăng xuất</Text>
                    </View>
                    <View>
                        <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                    </View>
                </TouchableOpacity>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.TxtHotLine}>
                        Nếu có bất kỳ vướng mắc hoặc góp ý gì cho Soya Garden,
                        quý khách có thể gọi hotline để được hỗ trợ.
                        (Thời gian từ 08:00 đến 22:00)
                    </Text>
                    <TouchableOpacity style={styles.BtnLienHe}>
                        <Image
                            source={{uri: 'https://soyagarden.com/content/uploads/2019/10/690x0w.png'}}
                            resizeMode="contain"
                            style={{
                                width: 65,
                                height: 65,
                                position: 'absolute',
                                top: -65,
                            }}
                        />
                        <Text style={styles.TxtLienHe}>Liên hệ CSKH: 19002255</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 10,
        paddingTop: 0,
        backgroundColor: 'white',
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
        height: 45,
        width: 45,
        padding: 4,
        borderRadius: 55 / 2,
        backgroundColor: '#D8D8D8',
        alignItems: 'center',
    },
    Icons: {
        height: 45,
        width: 45,
        padding: 9,
        borderRadius: 55 / 2,
        backgroundColor: '#D8D8D8',
        alignItems: 'center',
    },
    Icons1: {
        height: 45,
        width: 45,
        padding: 8,
        paddingLeft: 9,
        borderRadius: 55 / 2,
        backgroundColor: '#D8D8D8',
        alignItems: 'center',
    },
    Peanut: {
        height: 45,
        width: 45,
        padding: 7,
        borderRadius: 55 / 2,
        backgroundColor: '#fed734',
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
    CartText: {
        textAlign: 'center',
        paddingTop: 5,
    },
    Btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#D8D8D8',
        padding: 10,
    },
    BtnLienHe: {
        width: 230,
        height: 50,
        backgroundColor: '#fed734',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 60,
        margin: 15,
        borderRadius: 10,
    },
    Text1: {
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    Text2: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    Text3: {
        fontSize: 16,
        color: '#D8D8D8',
    },
    Text4: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
    },
    TxtHotLine: {
        textAlign: 'center',
        fontSize: 15.5,
        paddingTop: 15,
    },
    TxtLienHe: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

