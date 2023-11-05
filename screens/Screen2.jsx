import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fetchShops } from '../apis/shops.api';

export default function Screen1() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchShops().then(setData)
    }, [])
    console.log(data);
    const navigator = useNavigation();

    return (
        <View style={styles.container}>
            {data.map(item => {
                return (
                    <TouchableOpacity style={{ width: 347, height: 200, borderRadius: 6, backgroundColor: 'white', padding: 10, margin: 10 }}
                        onPress={() => { navigator.navigate('Screen3',{item:item}) }}>
                        <Image source={{uri:item.picture}} style={{ width: 347, height: 114, borderRadius: 6 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={{ color: 'green', fontSize: 15, textAlign: 'center', fontWeight: '300' }}>Accepting Orders</Text>
                            <Text style={{ color: 'red', fontSize: 15, textAlign: 'center', fontWeight: '300' }}>5-10 minutes</Text>
                        </View>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>{item.name}</Text>
                        <Text style={{ color: 'grey', fontSize: 15, fontWeight: '300' }}>{item.address}</Text>
                    </TouchableOpacity>
                )
            })}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(243, 244, 246, 1)',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});
