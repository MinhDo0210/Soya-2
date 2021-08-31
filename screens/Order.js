/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, images, icons } from '../contants';

import { getProductList, getCategoryList } from '../services/Api';

import AntDesign from 'react-native-vector-icons/AntDesign';

const OrderDelivery = ({navigation}) => {
    const [product, setProduct] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
		const callGetProductList = async () => {
			try {
				const response = await getProductList();
				setProduct(response.data.data);

			} catch (error) {
				console.error(error);
			}
		};

        const callGetCategoryList = async () => {
			try {
				const response = await getCategoryList();
				setCategories(response.data);

			} catch (error) {
				console.error(error);
			}
		};

		callGetCategoryList();
		callGetProductList();
	}, []);

    function onSelectCategory(category) {
        let producttList = product.filter(a => a.categ_id.includes(category.id));

        setProduct(producttList);

        setSelectedCategory(category);
    }

    const renderNew = ({item}) => (
        <View style={{ height: 90, paddingLeft: 10, paddingTop: 10}}>
            <TouchableOpacity
                style={{
                    height: 75,
                    width: 180,
                    alignItems: 'center',
                    backgroundColor: 'white',
                    padding: 10,
                    borderRadius: 10,
                    flexDirection: 'row',
                }}
                onPress={() => onSelectCategory(item)}
            >
                <Image
                    source={{uri: item.image}}
                    resizeMode="cover"
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 7,
                        marginRight: 10,
                    }}
                />
                <Text style={{
                    width: 95,
                    fontSize: 14,
                    fontWeight: 'bold',
                    }}
                    ellipsizeMode="tail" numberOfLines={2}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        </View>
    );
    const renderItem = ({item}) => (
        <View style={{ height: 270, paddingLeft: 15 }}>
            <View style={{height: 180 }}>
                <Image
                style={{
                    width: 175,
                    height: 170,
                    flex: 1,
                    marginTop: 0,
                    borderRadius: 10,
                }}
                source={{uri: item.image}}
            />
            </View>
            <View style={{height: 90}}>
                <Text style={{
                    width: 150,
                    fontSize: 16,
                    paddingTop: 10,
                    fontWeight: 'bold',
                    }}
                    ellipsizeMode="tail" numberOfLines={2}
                >
                    {item.product_name}
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ width: 150, fontSize: 14, paddingTop: 5, paddingBottom: 15, color: 'gray'}}>
                        {item.price}
                    </Text>
                    <AntDesign name="pluscircle" size={23} color={'#fed734'}/>
                </View>
            </View>
        </View>
    );
    return (
        <View style={styles.Content}>
            <View style={styles.List}>
                <View style={styles.ListTitle}>
                    <Text style={styles.ListText}>Danh mục</Text>
                </View>
                <FlatList
                    data={categories}
                    renderItem={renderNew}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
            <View style={styles.Order}>
                <View style={styles.OrderTitle}>
                    <Text style={styles.OrderText}>Tất cả các món</Text>
                </View>
                <SafeAreaView>
                    <FlatList
                        style={{ marginTop: 10 }}
                        data={product}
                        renderItem={renderItem}
                        keyExtractor={item => item._id}
                        numColumns={2}
                    />
                </SafeAreaView>
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
    },
    ListTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ListText: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        paddingBottom: 0,
    },
    Order: {
        flex: 3.8,
        borderBottomWidth: 4,
        borderBottomColor: '#D8D8D8',
        backgroundColor: 'white',
    },
    OrderTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    OrderText: {
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

export default OrderDelivery;
