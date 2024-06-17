import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { categories } from '../utils/categories'
import colors from '../utils/colors'

const Categories = ({selectedCategory,setSelectedCategory}) => {

  return (
    <View style={{marginVertical:20}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
      {categories.map((category)=>{
        return <Pressable onPress={()=>setSelectedCategory(category.strCategory)} style={styles.category} key={category.idCategory}>
            <Image  style={[styles.categoryImg,{backgroundColor:
                category.strCategory===selectedCategory ? colors.primary : '#E5E5E4'}]} source={{uri:category.strCategoryThumb}} />
            <Text style={styles.categoryTitle}>{category.strCategory}</Text>
        </Pressable>
      })}
    </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    category:{
        alignItems:'center',
        marginRight:8
    },
    categoryImg:{
        width:60,
        height:60,
        borderRadius:13,
        objectFit:'contain',
     },
    categoryTitle:{
        fontSize:12,
        marginTop:2
    }
})