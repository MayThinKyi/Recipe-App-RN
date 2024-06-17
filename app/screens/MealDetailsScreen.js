import { View, Text, StyleSheet, Image, ActivityIndicator, FlatList, ScrollView } from 'react-native'
import React from 'react'
import useApi from '../hooks/useApi';
import colors from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';

const MealDetailsScreen = ({navigation,route}) => {
  const idMeal=route.params.idMeal;
  const {data,err,loading}=useApi(`/lookup.php?i=${idMeal}`);
  let ingredients=[];
  if(data && data[0]) {
    [...Array(20)].map((_,i)=>{
      const name=data[0][`strIngredient${i+1}`] || null
      const value=data[0][`strMeasure${i+1}`] || null
     if(name && value ){
      ingredients.push({
        id:i+1,
        name ,
        value ,
      })
     }
    })
  }
   return (
   <>
   {loading && <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
     <ActivityIndicator size={50} color={colors.primary} />
     </View> }
    {!loading &&  data && data[0] && <View style={styles.container}>
   <Image style={styles.img} source={{uri:data[0]?.strMealThumb}} />
   <Ionicons onPress={()=>navigation.goBack()} style={styles.backIcon}  name="chevron-back" size={40} color={colors.primary} />
   <ScrollView style={styles.mealsContent} >
     <Text style={styles.title} >{data[0]?.strMeal}</Text>
     <Text style={styles.area} >{data[0]?.strArea}</Text>
     <Text style={styles.ingredientsTitle} >Ingredients</Text>
      {ingredients.map((item)=>{
      return <View style={styles.ingredientItem} key={item.id}>
      <View style={styles.ingredientIcon}></View>
      <Text>{item.name} {item.value}</Text>
    </View>
     })}
    <Text style={styles.ingredientsTitle} >Instructions</Text>
    <Text style={{marginBottom:60}}>{data[0]?.strInstructions}</Text>
   </ScrollView>
    </View>} 
   </>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    img:{
      height:'50%',
      width:'100%',
      objectFit:'cover'
    },
    backIcon:{
      position:'absolute',
      top:15,
      left:15,
      backgroundColor:'white',
      padding:3,
      borderRadius:30
    },
    mealsContent:{
      flex:1,
      paddingHorizontal:20,
      paddingVertical:15,
      marginTop:-80,
      backgroundColor:'white',
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
     },
    title:{
      fontSize:19,
      fontWeight:'700'
    },
    area:{
      fontSize:16,
      marginTop:10
    },
    ingredientsTitle:{
      fontSize:18,
      fontWeight:'600',
      marginTop:18,
      marginBottom:10
    },
    ingredientItem:{
      flexDirection:'row',
      gap:5,
      marginVertical:8,
      alignItems:'center'
    },
    ingredientIcon:{
      width:15,
      height:15,
      borderRadius:7.5,
      backgroundColor:colors.primary
    }
})