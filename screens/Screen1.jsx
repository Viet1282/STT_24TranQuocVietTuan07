import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fetchShops } from '../apis/shops.api';

export default function Screen1() {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        fetchShops().then(setData)
    },[])
    console.log(data);
    const navigator = useNavigation();

    return (
    <View style={styles.container}>
      <Text style={{alignItems:'center',fontWeight:'bold',fontSize:20}}>Welcome to Cafe world</Text>
        {data.slice(0,3).map(item=>{
            return (
                <Image source={{uri:item.picture}} style={{width:200,height:62, margin:40, borderRadius:6}}/>
            )
        })}
        <TouchableOpacity style={{justifyContent:'center',width:312,height:50,borderRadius:6, backgroundColor:'rgba(0, 189, 214, 1)'}} 
        onPress={()=>{navigator.navigate('Screen2')}}>
            <Text style={{color:'white',fontSize:20,textAlign:'center'}}>GET STARTED</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
