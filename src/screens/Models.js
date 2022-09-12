import React from "react";
import { SafeAreaView, StyleSheet,Text, Image, View, TouchableOpacity } from "react-native";
import { color_primario, color_secundario } from "../utils/paleta";

export const ModelScreen = ({navigation}) =>{
    return(
        <SafeAreaView styles={styles.main}>
            <View style={styles.head}>
                <Image style={styles.iconUmd} source={require('../imagenes/iconumd2.png')}/>
            
           
                <Text style={{alignSelf:'center'}}> Modelos de inventario disponibles </Text>  
            </View>
            <View>
                <TouchableOpacity style={styles.btnComenzar}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}} onPress={()=> navigation.navigate('Welcome')} >Volver a Inicio</Text>
                </TouchableOpacity>           

            </View>

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
        marginTop: 5,
        alignSelf:'flex-start',
        justifyContent:'center'
    },
    head:{
        padding:10,
    },
    btnComenzar:{
        alignSelf:'center',
        marginTop: 50,
        backgroundColor: color_secundario,
        padding:20,
        borderRadius:30
    },
    main:{
        flex: 1,
        backgroundColor:color_primario,
    },



})