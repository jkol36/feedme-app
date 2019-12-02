import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ChefNode from '../components/chefNode';
import colors from '../constants/Colors';
import Header from '../components/Header';
import { Searchbar } from 'react-native-paper';


export default class Chefs extends React.Component {
  constructor(props) {
    super(props);
    this.filterItems = this.filterItems.bind(this);
    this.state = {
      query: ''
    }
  }

  filterItems = () => {
    const regex = new RegExp(this.state.query, 'gi');
    let results = []
    this.props.results.forEach(item => {
      if (item.name.match(regex)) {
        results.push(item)
      }
      else if (this.state.query.length === 0) {
        return this.props.results
      }
      item.specialties.forEach(food => {
        if (food.name.match(regex)) {
          results.push(item)
        }
      })

    })
    return results.filter((item, i) => results.indexOf(item) === i) //remove duplicate items
  }


  render() {
    console.log(this.filterItems().length)
    console.log(this.props.results.length)
    return (
      <>
        <Header title="Browse Chefs" />
        <Searchbar
          value={this.state.query}
          onChangeText={query => { this.setState({ query }); }}
          placeholder='enter a chef name or a food'
          style={{ height: 80 }}
        />
        <ScrollView style={styles.screen}>
          {this.filterItems().map((item, index) => {
            return (
              <ChefNode key={index} chef={item} navigation={this.props.navigation} />
            )
          })}
        </ScrollView>
      </>
    )
  }
}
const styles = StyleSheet.create({
  bottomNavigationStyle: {
    backgroundColor: colors.primary
  },
  screen: {
    height: '100%',
  }

})

Chefs.defaultProps = {
  results: [
    {
      name: 'Jasmine',
      specialties: [{ name: 'Eggs', remaining: 2, rating:5, description: 'a variety of different dishes available', imgUrl: 'https://media.phillyvoice.com/media/images/food-eggs.2e16d0ba.fill-735x490.jpg' }],
      knownFor: 'Humus',
      category: 'Breakfast and Lunch',
      mealsSold: 0,
      moneyMade: 0,
      avgDeliveryTime: '30-60 minutes',
      profileImgUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      rating: 5
    },
    {
      name: 'Jack',
      specialties: [
        { name: 'Eggs', remaining: 2, rating:5, description: 'a variety of different dishes available', imgUrl: 'https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Lasagna', remaining: 4, rating:3, description: 'Enjoy My Delicious Lasagna. Feeds 6.', imgUrl: 'https://images.pexels.com/photos/2765875/pexels-photo-2765875.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },

      ],
      knownFor: 'Israeli Salad',
      category: 'Lunch and Dinner',
      mealsSold: 0,
      moneyMade: 0,
      avgDeliveryTime: '30-60 minutes',
      profileImgUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      rating: 4.5
    },
    {
      name: 'Jon Kolman',
      specialties: [{ name: 'Eggs', remaining: 2, rating:5, description: 'a variety of different dishes available', imgUrl: 'https://media.phillyvoice.com/media/images/food-eggs.2e16d0ba.fill-735x490.jpg' }],
      knownFor: 'Lasagna',
      category: 'Breakfast and Lunch',
      mealsSold: 0,
      moneyMade: 0,
      avgDeliveryTime: '30-60 minutes',
      profileImgUrl: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      rating: 2.5
    },
    {
      name: 'Shakira',
      specialties: [{ name: 'Eggs', remaining: 2, rating:5, description: 'a variety of different dishes available', imgUrl: 'https://media.phillyvoice.com/media/images/food-eggs.2e16d0ba.fill-735x490.jpg' }],
      knownFor: 'Egg Salad',
      category: 'Breakfast and Lunch',
      mealsSold: 0,
      moneyMade: 0,
      avgDeliveryTime: '30-60 minutes',
      profileImgUrl: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      rating: 3.2
    },
    {
      name: 'Leslie',
      specialties: [{ name: 'Eggs', remaining: 2, rating:5, description: 'a variety of different dishes available', imgUrl: 'https://media.phillyvoice.com/media/images/food-eggs.2e16d0ba.fill-735x490.jpg' }],
      knownFor: 'Tuna Salad',
      category: 'Breakfast and Lunch',
      mealsSold: 0,
      moneyMade: 0,
      avgDeliveryTime: '30-60 minutes',
      profileImgUrl: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      rating: 5
    },
    {
      name: 'Deborah',
      specialties: [{ name: 'Eggs', remaining: 2, rating:5, description: 'a variety of different dishes available', imgUrl: 'https://media.phillyvoice.com/media/images/food-eggs.2e16d0ba.fill-735x490.jpg' }],
      knownFor: 'StirFry',
      category: 'Lunch and Dinner',
      mealsSold: 0,
      moneyMade: 0,
      avgDeliveryTime: '30-60 minutes',
      profileImgUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      rating: 4.3
    },
  ]
}