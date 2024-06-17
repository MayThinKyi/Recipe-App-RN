import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const Searchbar = ({input,setInput,handleSearch}) => {
   return (
    <View style={styles.container}>
        <Ionicons name="search" size={22} color="gray" />
      <TextInput value={input} 
      onChangeText={(text)=>setInput(text)} 
        returnKeyType='search'
       placeholder='Search your favourite food'
       onSubmitEditing={handleSearch} />
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        flexDirection:'row',
        gap:8,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:10,
        
    }
})