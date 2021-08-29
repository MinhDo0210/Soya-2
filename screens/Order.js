/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, images, icons } from '../contants';

import { getProductList, getCategoryList } from '../services/Api';

import AntDesign from 'react-native-vector-icons/AntDesign';

// const DATA = [
//     {
//         id: '1',
//         name: 'Hot Soya Milk',
//         price: '39.500 đ',
//         image: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA1675.jpg',
//     },
//     {
//         id: '2',
//         name: 'Hot Chocolate Latte',
//         price: '35.000 đ',
//         image: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA1703-copy-683x1024.jpg',
//     },
//     {
//         id: '3',
//         name: 'Hot Black Tea',
//         price: '35.000 đ',
//         image: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA0040-683x1024.jpg',
//     },
//     {
//         id: '4',
//         name: 'Ribbed Combo Sweater',
//         price: '35.000 đ',
//         image: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA4933-683x1024.jpg',
//     },
//     {
//         id: '5',
//         name: ' 40.000đ',
//         price: '30 S-Point',
//         image: 'https://soyagarden.com/content/uploads/2020/12/z2253425214787_26a3753be9ab7a8555d37cf0678e3b60-768x1026.jpg',
//     },
//     {
//         id: '6',
//         name: ' 30.000đ',
//         price: '25 S-Point',
//         image: 'https://soyagarden.com/content/uploads/2020/01/li-xi-1024x577.jpg',
//     },
//     {
//         id: '7',
//         name: ' 20.000đ',
//         price: '20 S-Point',
//         image: 'https://soyagarden.com/content/uploads/2019/11/9fc6e8d81f97e6c9bf86.jpg',
//     },
//     {
//         id: '8',
//         name: ' 10.000đ',
//         price: '10 S-Point',
//         image: 'https://soyagarden.com/content/uploads/2019/11/73504788_3195986220476346_6528997133469614080_o.jpg',
//     },
// ];

// const categoryData = [
//         {
//             id: 1,
//             nametype: 'Rice',
//             icon: icons.rice_bowl,
//         },
//         {
//             id: 2,
//             nametype: 'Noodles',
//             icon: icons.noodle,
//         },
//         {
//             id: 3,
//             nametype: 'Hot Dogs',
//             icon: icons.hotdog,
//         },
//         {
//             id: 4,
//             nametype: 'Salads',
//             icon: icons.salad,
//         },
//         {
//             id: 5,
//             nametype: 'Burgers',
//             icon: icons.hamburger,
//         },
//         {
//             id: 6,
//             nametype: 'Pizza',
//             icon: icons.pizza,
//         },
//         {
//             id: 7,
//             nametype: 'Snacks',
//             icon: icons.fries,
//         },
//         {
//             id: 8,
//             nametype: 'Sushi',
//             icon: icons.sushi,
//         },
//         {
//             id: 9,
//             nametype: 'Desserts',
//             icon: icons.donut,
//         },
//         {
//             id: 10,
//             nametype: 'Drinks',
//             icon: icons.drink,
//         },
//     ];

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

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id);

        if (category.length > 0)
            {return category[0].name;}

        return '';
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
        <View style={{ paddingLeft: 15 }}>
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
