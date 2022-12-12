import { useContext } from 'react'
import { View, Text, StyleSheet, FlatList }  from 'react-native'
import { CartContext } from '../contexts/CartContext'
import CardItem from '../components/CardItem';
export default function Cart(){
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);


    return(

      <View style={styles.container}>

        <FlatList
          data={cart}
          showsVerticalScrollIndicator={false}
          keyExtractor={ (item) => String(item.id) }
          ListEmptyComponent={ () => <Text> Cart is empty !</Text>}
          renderItem={ ({item}) => (
            <CardItem
            data={item}
            addAmount={ () => addItemCart(item) }
            removeAmount={ () => removeItemCart(item)}
            />
           )}
           ListFooterComponent={ () => <Text style={styles.total}> total: RS$  {total} </Text> }

       />

       </View>

    )
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FAFAFA',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14
    },
    total:{
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 24,

    }
})