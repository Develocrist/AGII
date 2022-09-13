import React from "react";
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { color_primario, color_secundario } from "../utils/paleta";

export const ScreenHome = ({navigation}) =>{
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View styles={styles.head}>
                    <Image style={styles.iconUmd} source={require('../imagenes/iconumd2.png')}/>
                    <Text style={styles.textStyle}>Ingreso Licencia</Text>
                    <Image style={styles.iconStyle} source={require('../imagenes/iconagii2.png')}/>
                </View>
                <TextInput style={styles.licenseInput}/>                
                <TouchableOpacity style={styles.btnComenzar}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'white'}} onPress={()=> navigation.navigate('Models')}>Ingresar</Text>
                </TouchableOpacity>             
            </ScrollView>
        </SafeAreaView>

    )

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: color_primario
    },
    iconUmd:{
        width:150,
        height: 50,
        marginTop: 10,
        alignSelf:'flex-start',
        
    },
    textStyle:{
        paddingTop: 30,
        alignSelf:'center',
        fontSize: 30,
        color:'black'
    },
    iconStyle:{
        width: 200,
        height: 200,
        marginTop: 30,
        alignSelf:'center'
    },
    licenseInput:{
        alignSelf:'center',
        marginTop:20,
        borderWidth: 1,
        height: 40,
        width: 200,
        backgroundColor: 'white'
    },
    btnComenzar:{
        alignSelf:'center',
        marginTop: 50,
        backgroundColor: color_secundario,
        padding:20,
        borderRadius:30
    },
    head:{
        padding:15,
    },


})
