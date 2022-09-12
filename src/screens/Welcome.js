import React from "react";
import { SafeAreaView, StyleSheet,Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import { Navegacion } from "../navigation";
import { color_primario, color_secundario } from "../utils/paleta";

export const WelcomeScreen = ({navigation}) =>{
    return(        
        <SafeAreaView style={styles.main}>
            <ScrollView>
            <View style={styles.head}>               
                <Image style={styles.iconUmd} source={require('../imagenes/iconumd2.png')}/>
                <Text style={styles.textStyle}>Bienvenidos a</Text>
                <Image style={styles.iconStyle} source={require('../imagenes/iconagii2.png')}/>
                <Text style={styles.textDescripcion}>Apoyo a la Gestion de Ingenieria en los Inventarios</Text>

            <TouchableOpacity style={styles.btnComenzar} onPress={()=> navigation.navigate('Home')}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Comencemos</Text>

            </TouchableOpacity> 
            </View>
            </ScrollView>
           
            
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor:color_primario,
    },
    head:{
        padding:15,
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
    iconUmd:{
        width:150,
        height: 50,
        marginTop: 10,
        alignSelf:'flex-start',
        
    },
    textDescripcion:{
        alignSelf:'center',
        fontSize:14,
        fontWeight:'bold',
        marginTop: 15
    },
    btnComenzar:{
        alignSelf:'center',
        marginTop: 50,
        backgroundColor: color_secundario,
        padding:20,
        borderRadius:30
    }
})