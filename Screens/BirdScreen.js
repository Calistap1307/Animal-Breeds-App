import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Platform,
  StatusBar,
  Image,
} from 'react-native';

export default class BirdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/Bg_4.jpg')}
          style={styles.backgroundImage}></ImageBackground>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={styles.homeText}>HOME</Text>
        </TouchableOpacity>

        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Bird Breeds!</Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/Parrotlets_bird.jpg')}
            style={styles.birdImage}></Image>
          <Text style={{ color: '#3066be', fontSize: 22, fontWeight: 'bold' }}>
            Parrotlets
          </Text>
          <Text style={{ color: '#3388ff', fontSize: 16, padding: 10 }}>
            Parrotlets are the smallest birds in the parrot family. This
            cheerful, but territorial bird is a great housepet, with a wide
            variety of subspecies and colorful plumages. They enjoy interacting
            with the humans around them and sometimes they are called a pocket
            parrot. Parrotlets personality, as being known to be one of the
            quietest. They live for about 20 years. Parrotlets love fruits and
            vegetables.
          </Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/Dove_bird.jpg')}
            style={styles.birdImage}></Image>
          <Text style={{ color: '#3066be', fontSize: 22, fontWeight: 'bold' }}>
            Dove
          </Text>
          <Text style={{ color: '#3388ff', fontSize: 16, padding: 10 }}>
            Doves are beautiful white birds. Young doves are called squabs.
            Doves live in every continent except Antarctica. Doves eat mainly
            insects, seeds, nuts, and fruits but in areas where people feed
            them, they will eat almost anything. They are often used as the
            symbol of peace. These doves can live up 10-15 years in terms of
            age.
          </Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/Canary_bird.jpg')}
            style={styles.birdImage}></Image>
          <Text style={{ color: '#3066be', fontSize: 22, fontWeight: 'bold' }}>
            Canary
          </Text>
          <Text style={{ color: '#3388ff', fontSize: 16, padding: 10 }}>
            Canaries have attractive yellow feathers, are great singers, and are
            naturally friendly which are the very reasons why they are great to
            keep as pets. They are herbivores, or plant eaters. Their diet is
            mostly made up of seeds, like those that can be found in the grass.
            Thave short, cone-shaped bills.
          </Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/Budgie_bird.jpg')}
            style={styles.birdImage}></Image>
          <Text style={{ color: '#3066be', fontSize: 22, fontWeight: 'bold' }}>
            Budgie
          </Text>
          <Text style={{ color: '#3388ff', fontSize: 16, padding: 10 }}>
            Budgies are one of the smallest members of the parakeet family and
            are native to Australia. Budgies are small in size. They can live
            7-15 years. The heart rate of the budgie is also extremely fast and
            beats at over 300 times per minute! They drink a lot of water. A
            Budgie can remember sequences of sounds, and sometimes mimic them.
            Budgies also have a great talent! Budgies can swivel their heads up
            to 180 degrees.
          </Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/Macaw_bird.jpg')}
            style={styles.birdImage}></Image>
          <Text style={{ color: '#3066be', fontSize: 22, fontWeight: 'bold' }}>
            Macaw
          </Text>
          <Text style={{ color: '#3388ff', fontSize: 16, padding: 10 }}>
            Macaws are one of the worlds most colorful birds. They have long
            toes and sharp claws which they use to latch onto branches and
            examine items, and their first and fourth toes point backward.
            Macaws live to be around 60 years in the wild on average, and in
            some cases this can extend for up to 80 years and even as long as
            100 years. When kept as pets, macaws are often known for outliving
            their owners! Macaws mostly eat nuts and seeds.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#16558f',
  },
  contentCard: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    elevation: 10,
    backgroundColor: '#b5e2ff',
  },
  birdImage: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  homeButton: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fd3fe',
    margin: 4,
    elevation: 9,
    width: 50,
    height: 30,
    marginLeft: 250,
  },
  homeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
