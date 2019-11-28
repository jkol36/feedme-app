import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Header from './components/Header';
import { Searchbar, Colors } from 'react-native-paper';
import ChefNode from './components/chefNode';
import { BottomNavigation } from 'react-native-paper';
import colors from './constants/Colors';
import Chefs from './screens/Chefs';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.filterItems = this.filterItems.bind(this);
    this._handleIndexChange.bind(this);
    this._renderScene = this._renderScene.bind(this);
    this.state = {
      query: '',
      routes: [
        { key: 'chefs', title: 'chefs', icon: 'food' },
        { key: 'My Feedme', title: 'My Feedme', icon: 'home' },
      ],
    }
  }

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    chefs: Chefs,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  filterItems = () => {
    const regex = new RegExp(this.state.query, 'gi');
    let results = []
    this.props.results.forEach(item => {
      if (item.chef.name.match(regex)) {
        results.push(item)
      }
      item.chef.specialties.forEach(food => {
        if (food.name.match(regex)) {
          results.push(item)
        }
      })

    })
    return results.filter((item, i) => results.indexOf(item) === i) //remove duplicate items
  }
  render() {
    const { query } = this.state
    return (
      <>
        <Header title='Browse Chefs' />
        <Searchbar
            placeholder='search for chef by name or by food'
            onChangeText={query => { this.setState({ query: query }); }}
            value={query}
          />
        <ScrollView style={styles.screen}>
          {this.filterItems().map((item, index) => {
            return (
              <ChefNode key={index} chef={item} />
            )
          })}
        </ScrollView>
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
          barStyle={styles.bottomNavigationStyle}
        />
      </>
    );
  }
}
App.defaultProps = {
  results: [{
    chef: {
      name: 'Jon Kolman',
      specialties: [{ name: 'Eggs', numInStock: 2, description: 'a variety of different dishes available', imgUrl: 'https://media.phillyvoice.com/media/images/food-eggs.2e16d0ba.fill-735x490.jpg' }],
      knownFor: 'Lasagna',
      mealsSold: 0,
      moneyMade: 0,
      avgDeliveryTime: '30-60 minutes',
      profileImgUrl: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/p320x320/56157897_10156424864661448_2006314330747830272_o.jpg?_nc_cat=109&_nc_ohc=CDiNbM6NbqUAQk5YYsEgASvQVvN7eslJdFUWAAb_swhNArvqmpoRZckPg&_nc_ht=scontent-lga3-1.xx&oh=c08b45c0dd6dbb4ca4174b25f1f5702b&oe=5E423E84',
      rating: 3.5
    }
  },
  {
    chef: {
      name: 'Deborah',
      specialties: [{ name: 'Lasanga', imgUrl: 'https://image.shutterstock.com/image-photo/meat-lasagna-on-white-wood-260nw-446051698.jpg', description: 'Delicious lasagna' }, { name: 'eggs', description: "delicious eggs", imgUrl: "https://media.phillyvoice.com/media/images/food-eggs.2e16d0ba.fill-735x490.jpg" }, { name: 'stirfry', description: "Delicious Stir Fry", imgUrl: "https://www.chelseasmessyapron.com/wp-content/uploads/2019/06/Chicken-Stir-Fry-5.jpg" }],
      mealsSold: 0,
      moneyMade: 0,
      avgDeliveryTime: '30-60 minutes',
      knownFor: 'stirfry',
      profileImgUrl: 'https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695433-stock-illustration-female-avatar.jpg',
      avgDeliveryTime: 15, // in minutes
      rating: 2
    }
  }]
}
const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  bottomNavigationStyle: {
    backgroundColor: colors.primary
  }

});
export default App

