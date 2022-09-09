import React , { Component }from "react";
import { AppRegistry, Text, Image, StyleSheet, View, ImageBackground } from "react-native";


export default class App extends Component{
    render() {
        return(
            <View style = {styles.container}>
                <View style = {styles.centrarContenido}>
                <Image style={styles.iconUmd} source={require('./src/imagenes/iconumd2.png')}></Image>
                <Text style={styles.textStyle}>Bienvenidos a</Text>
                <Image 
                    style= {styles.iconStyle}
                    source = {require ('./src/imagenes/iconagii2.png')}
                    >
                </Image>
                </View>
            </View>
                        
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
        
    },  
    textStyle:{
        paddingTop: 30,
        alignSelf:'center',
        fontSize: 30,
        color:'black'
    },
    centrarContenido:{
        justifyContent:'center',
        alignItems:'center',
    },
    iconStyle:{
        width: 200,
        height: 200,
        marginTop: 30
    },
    iconUmd:{
        width:150,
        height: 50,
        marginTop: 10,
        alignSelf:'flex-start',
        justifyContent:'center'
    }


});