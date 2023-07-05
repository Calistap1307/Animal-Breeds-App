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

export default class DogScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/Bg_3.jpg')}
          style={styles.backgroundImage}></ImageBackground>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={styles.homeText}>HOME</Text>
        </TouchableOpacity>

        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Dog Breeds!</Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/ToyPoodle_dog.jpg')}
            style={styles.dogsImage}></Image>
          <Text style={{ color: '#d06002', fontSize: 22, fontWeight: 'bold' }}>
            Toy Poodle
          </Text>
          <Text style={{ color: '#d7722a', fontSize: 16, padding: 10 }}>
            Toy poodles are all the same breed of dog, so they look more or less
            the same except for their size. Toy poodles are the smallest of the
            three, standing no more than 10 inches tall and generally weighing
            right around 5 pounds. Easily the most recognizable part of poodles
            appearance is their curly fur coat. They will get legitimately
            disgruntled if they think they are being left out of family
            activities. A toy poodle will usually have a mix of protein, healthy
            grains, vegetables and fruits.
          </Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/Husky_dog.jpg')}
            style={styles.dogsImage}></Image>
          <Text style={{ color: '#d06002', fontSize: 22, fontWeight: 'bold' }}>
            Husky
          </Text>
          <Text style={{ color: '#d7722a', fontSize: 16, padding: 10 }}>
            The classic northern dogs, Siberian huskies are friendly and
            intelligent but somewhat independent and stubborn. They thrive on
            human company, but need firm, gentle training from puppyhood.
            Particularly in warm weather, Siberian huskies can be diggers
            because they like to create cool places to lie. A diet-rich puppy
            food in proteins, fats, and carbohydrates with added vitamins and
            minerals is ideal for huskies.
          </Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/GoldenRetriever_dog.jpg')}
            style={styles.dogsImage}></Image>
          <Text style={{ color: '#d06002', fontSize: 22, fontWeight: 'bold' }}>
            Golden Retriever
          </Text>
          <Text style={{ color: '#d7722a', fontSize: 16, padding: 10 }}>
            A Golden Retriever is playful, very friendly with people, other
            dogs, children, and other animals. Very loyal, the golden retriever
            is also even-tempered, intelligent, and affectionate. They have a
            sweet and calm nature once they have outgrown their puppy stage,
            around three years old. A golden will normally eat about two cups of
            premium food per day.
          </Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/Cavapoo_dog.jpg')}
            style={styles.dogsImage}></Image>
          <Text style={{ color: '#d06002', fontSize: 22, fontWeight: 'bold' }}>
            Cavapoo
          </Text>
          <Text style={{ color: '#d7722a', fontSize: 16, padding: 10 }}>
            The Cavapoo is a new mixed breed, so there have not been breed
            standards set for these fluffballs just yet. They are outgoing,
            friendly, playful and a little needy. They are one of the most
            intelligent dog breeds. Their life span is from 10 to 15 years. They
            mostly eay a diet with high-quality animal-based protein sources.
          </Text>
        </View>

        <View style={styles.contentCard}>
          <Image
            source={require('../assets/Papillon_dog.jpg')}
            style={styles.dogsImage}></Image>
          <Text style={{ color: '#d06002', fontSize: 22, fontWeight: 'bold' }}>
            Papillon
          </Text>
          <Text style={{ color: '#d7722a', fontSize: 16, padding: 10 }}>
            The papillon is a small, dainty-looking dog with ears that flare
            from its head like the wings of a butterfly. They are generally
            outgoing, happy dogs that enjoy sitting in laps as much as they like
            running around the house. Although lively and energetic, they are
            not considered high-strung, nervous or fearful, and they do not bark
            excessively. Papillons are so incredibly varied in their
            personalities. While some scarf down any food scrap in sight, others
            have a more picky palate, and quickly tire of their everyday dog
            food.
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
    color: '#FF5F1F',
  },
  contentCard: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    elevation: 10,
    backgroundColor: '#f4c4a0',
  },
  dogsImage: {
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
    backgroundColor: '#ffaf7a',
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
