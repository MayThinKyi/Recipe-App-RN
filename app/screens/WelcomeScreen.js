import { View, Text, StyleSheet, Image,TouchableHighlight } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import colors from '../utils/colors'
import routes from '../routes'

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image  style={styles.bg} source={require('../assets/images/background.png')} />
        <View style={styles.welcomeContent}>
            <LottieView
            autoPlay
            loop 
            source={require('../assets/lottie/logo.json')}
            style={styles.logo}
            />
            <Text style={styles.title} >Food Cafe</Text>
            <Text style={styles.subTitle} >Explore some delicious food</Text>
            <TouchableHighlight underlayColor={'#f3f2f2'} onPress={()=>navigation.navigate(routes.HOME)} style={styles.btn}>
                <Text style={styles.btnText} >Get Started</Text>
            </TouchableHighlight>
        </View>
     </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.primary
    },
    bg:{
        flex:1,
        justifyContent:'center',
        objectFit:'contain'
     },
     welcomeContent:{
        position:'absolute',
        alignItems:'center'
     },
    logo:{
        width:250,
        height:250,
    },
    title:{
        color:'white',
        fontSize:35,
        fontWeight:'800'
    },
    subTitle:{
        color:'white',
        fontSize:18,
        marginTop:5
    },
    btn:{
        marginTop:20,
        backgroundColor:'white',
        paddingHorizontal:40,
        paddingVertical:15,
        borderRadius:10,
    },
    btnText:{
        fontSize:16,
        fontWeight:'600',
        color:colors.primary
    }
})