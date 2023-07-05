import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    Platform,
    StatusBar,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
                return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/Bg_2.jpeg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Animal Breeds!</Text>
                    </View>

                    <View>
                    <Text style={styles.shortText}>Searching For A Breed? </Text>
                    <Text style={styles.shortText}>You're in the right place! </Text>
                    </View>

                    <TouchableOpacity style={styles.routeCardCat} onPress={() =>
                        this.props.navigation.navigate("CatScreen")
                    }>
                    <Text style={styles.routeText}>Cat Breeds</Text>
                    <Image source = {require("../assets/cat.png")} style = {styles.iconImage}>
                    </Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCardDog} onPress={() =>
                        this.props.navigation.navigate("DogScreen")
                    }>
                    <Text style={styles.routeText}>Dog Breeds</Text>
                    <Image source = {require("../assets/puppy.png")} style = {styles.iconImage}>
                    </Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCardBird} 
                    onPress={() => this.props.navigation.navigate("BirdScreen")
                    }>
                    <Text style={styles.routeText}>Bird Breeds</Text>
                    <Image source = {require("../assets/bird.png")} style = {styles.iconImage}>
                    </Image>
                    </TouchableOpacity>

              </ImageBackground>
              </View>
        );
    }
}

const styles = StyleSheet.create({
      container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
  backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.30,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeCardCat: {
        flex: 0.2,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 50,
        borderRadius: 50,
        backgroundColor: 'pink',
    },
        routeCardDog: {
        flex: 0.2,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        borderRadius: 50,
        backgroundColor: '#ffaf7a',
    },
        routeCardBird: {
        flex: 0.2,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        borderRadius: 50,
        backgroundColor: '#8fd3fe',
    },
    routeText:{
        fontSize: 35,
        fontWeight: "semi-bold",
        color: "white",
        marginTop:1,
        paddingLeft: 50.6
    },
    shortText: {
      fontSize: 20,
      justifyContent: "center",
      alignItems: "center",
      color: "#abf7b1",
      fontWeight: "bold",
      paddingLeft: 40, 
    },
    iconImage:{
       height:"70.5px",
       width:"70.5px",
       marginLeft: 220,
       marginTop: -70.5,
    },
})
