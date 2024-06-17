import { View, Text, StyleSheet, Image, StatusBar, ActivityIndicator } from 'react-native'
import React,{ useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import colors from '../utils/colors';
import Searchbar from '../components/Searchbar';
import Categories from '../components/Categories';
import Recipies from '../components/Recipies';
import useApi from '../hooks/useApi';

 const HomeScreen = () => {
  const [input,setInput]=useState('');
  const [selectedCategory,setSelectedCategory]=useState('Beef');
   let [url,setUrl]=useState(`/filter.php?c=${selectedCategory}`)
  const {data:recipies,err,loading}=useApi(url);
  const handleSearch=()=>{
    if(input.trim()?.length===0) {
      setUrl(`/filter.php?c=${selectedCategory}`);
      setSelectedCategory('Beef');
    }else{
      setUrl(`/search.php?s=${input}`)
      setSelectedCategory('');
     }
   }
   useEffect(()=>{
      if(selectedCategory) setUrl(`/filter.php?c=${selectedCategory}`)
   },[selectedCategory])
   return (

    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.heading} >
      <Ionicons name="filter-outline" size={30} color="black" />
      <Image style={styles.avatar} source={require('../assets/images/avatar.png')} />
      </View>
      <Text style={styles.title}>Fast & Delicious</Text>
      <Text style={styles.title}>Food You <Text style={{color:colors.primary}}>Love</Text></Text>
      <Searchbar input={input} setInput={setInput} handleSearch={handleSearch} />
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        {loading ? <ActivityIndicator color={colors.primary} size={50} style={{marginTop:20}} /> :  <Recipies recipies={recipies} />}
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    paddingTop:20,
    paddingHorizontal:20,
    backgroundColor:'white',
    flex:1
    },
    heading:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:8
    },
    avatar:{
      width:50,
      height:50,
      borderRadius:25,
      objectFit:'cover'
    },
    title:{
      fontSize:23,
      fontWeight:'700'
    }
})