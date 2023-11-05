import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fetchShops } from '../apis/shops.api';

export default function Screen1({ route }) {
    const [drinks, setDrinks] = useState(route.params?.item.drinks.map((e, i) => {
        return { ...e, quantity: 0 };
    }));
    console.log(drinks);
    
    const handleClick = (name, quantity) => {
        setDrinks(drinks.map((e, i) => {
            if (e.name === name) {
                const updatedQuantity = e.quantity + quantity;
                if (updatedQuantity >= 0) {
                    return { ...e, quantity: updatedQuantity };
                }
            }
            return { ...e };
        }));
    };
    
    // console.log(data);
    const navigator = useNavigation();

    return (
        <View style={styles.container}>
            {drinks.map(item => {
                return (
                    <View style={{ height: 84, width: 370, borderRadius: 4, border: 'solid 2px black', padding: 5, margin: 10, flexDirection: 'row' }}>
                        <Image source={{uri:item.image}} style={{ height: 70, width: 70 }} />
                        <View style={{ width: 300 }}>
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>{item.name}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <TouchableOpacity style={{ width: 15, height: 15, alignItems: 'center', justifyContent: 'center', marginTop: 4 }}
                                    onPress={() => {handleClick(item.name,-1)}}>
                                    <Image source={require('../assets/buttongiam.png')} style={{ height: 15, width: 15 }} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginHorizontal: 20 }}>{item.quantity}</Text>
                                <TouchableOpacity style={{ width: 15, height: 15, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginTop: 4 }}
                                    onPress={() => {handleClick(item.name,1)}}>
                                    <Image source={require('../assets/buttontang.png')} style={{ height: 15, width: 15 }} />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ color: 'grey' }}>${item.price}</Text>
                        </View>

                    </View>
                )
            })}
            <TouchableOpacity style={{ width: 347, height: 54, alignItems: 'center', justifyContent: 'center', borderRadius:6,backgroundColor:'rgba(239, 176, 52, 1)' }}
                                    onPress={() => {}}>
                                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold'}}>Go to cart</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});
