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

export default class CatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/Bg_1.jpg')}
          style={styles.backgroundImage}></ImageBackground>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={styles.homeText}>HOME</Text>
        </TouchableOpacity>

        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Cat Breeds!</Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/Ragdoll_cat.jpg')}
            style={styles.catsImage}></Image>
          <Text style={{ color: '#b33b72', fontSize: 22, fontWeight: 'bold' }}>
            Ragdoll
          </Text>
          <Text style={{ color: '#cb416b', fontSize: 16, padding: 10 }}>
            The Ragdoll is a cat breed that is large, with blue eyes, and a
            semi-longhair soft and silky coat of fur. It is usually mostly
            white, with light to dark marks. The breed was named Ragdoll because
            they often go limp and relax like a rag or cloth doll when it is
            picked up. They are healthiest when they consume whole-meat-based
            wet food regularly.
          </Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/Siamese_cat.png')}
            style={styles.catsImage}></Image>
          <Text style={{ color: '#b33b72', fontSize: 22, fontWeight: 'bold' }}>
            Siamese
          </Text>
          <Text style={{ color: '#cb416b', fontSize: 16, padding: 10 }}>
            The 'Siamese' is a breed of cat from Thailand. It is a well-known
            cat, especially for its blue eyes and brown face, ears, tail and
            paws, although not all of them look like this. Siamese cats, are
            usually very friendly and loving cats, and will enjoy spending time
            with you, although this depends on the cat. hey are also very smart,
            more so than some other cats. Siamese cats love meat-based snacks,
            like freeze-dried raw chicken treats and shredded boiled poultry.
          </Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/TurkishAngora_cat.jpg')}
            style={styles.catsImage}></Image>
          <Text style={{ color: '#b33b72', fontSize: 22, fontWeight: 'bold' }}>
            Turkish Angora
          </Text>
          <Text style={{ color: '#cb416b', fontSize: 16, padding: 10 }}>
            Turkish Angora cats are known for their fine bone structure and
            shiny white coat. They mostly have bright blue eyes, amber eyes, or
            blue-green eyes. Apart from the blue or blue-green eyes, Turkish
            Angoras have also been found to have two eyes of different colors,
            such as one blue eye and one amber eye. Turkish Angoras will
            generally thrive on the nutrition of a quality adult cat food.
          </Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/AmericanBobtail_cat.jpg')}
            style={styles.catsImage}></Image>
          <Text style={{ color: '#b33b72', fontSize: 22, fontWeight: 'bold' }}>
            American Bobtail
          </Text>
          <Text style={{ color: '#cb416b', fontSize: 16, padding: 10 }}>
            American Bobtails can have either short or long-haired fur coats.
            Their coat is shaggy instead of fluffy. They can have any color of
            eyes and coats. Their eyes are almond shaped. American Bobtails are
            playful and have a lot of energy. They are friendly and are not shy.
            This breeds kittens should eat a kitten food for their first year of
            life to aid in their growth and development.
          </Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/Birman_cat.jpeg')}
            style={styles.catsImage}></Image>
          <Text style={{ color: '#b33b72', fontSize: 22, fontWeight: 'bold' }}>
            Birman
          </Text>
          <Text style={{ color: '#cb416b', fontSize: 16, padding: 10 }}>
            A Birman cat is a domestic cat breed with long hair and deep blue
            eyes. It has brown near its face and has white on the rest of its
            body. Birman cats are said to have originated in Burma, and there
            was was treated like a sacred cat. Its silky fur is medium-long.
            Blueberries, Bananas, Eggs, Salmon, and other similar foods are good
            options. However, be aware that Birmans are very picky eaters, so it
            may take some time to teach them what they like.
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
    fontSize: 37,
    fontWeight: 'bold',
    color: '#FF709A',
  },
  contentCard: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    elevation: 10,
    backgroundColor: '#FFDAE0',
  },
  catsImage: {
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
    backgroundColor: 'pink',
    margin: 6,
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
