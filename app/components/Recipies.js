import { FlatList, Image, StyleSheet, Pressable, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import routes from '../routes';

const Recipies = ({recipies}) => {
  const navigation=useNavigation();
   return (<>
     <Text style={styles.numRecipies}> {recipies?.length} Recipies </Text>
      {recipies &&  <FlatList numColumns={2} showsVerticalScrollIndicator={false}
      data={recipies}
      key={(item)=>item.id}
      renderItem={({item,index})=><Pressable 
      onPress={()=>navigation.navigate(routes.MEAL_DETAILS,{idMeal:item.idMeal})}
       key={item.idMeal} style={[styles.mealCard,{height:index%3===0 ? 200 : 150}]} >
      <Image source={{uri:item.strMealThumb}} style={styles.mealImg} />
     </Pressable> }
      />}</>
   )
}

export default Recipies

const styles = StyleSheet.create({
  numRecipies:{
    fontSize:16,
    fontWeight:'600',
    marginBottom:10
  },
    mealCard:{
      width:'48%',
      marginRight:10,
      marginBottom:20,
      flex:1
    },
    mealImg:{
      width:'100%',
      height:'100%',
      borderRadius:25
    }
})