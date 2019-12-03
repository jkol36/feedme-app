import React from 'react';
import { ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import { Rating } from 'react-native-ratings';


class ChefDetails extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    console.log('chef details mounting')
  }
  render() {
    return (
      <>
        <Header title={this.props.navigation.state.params.chef.name}>
          <Text style={styles.subtitle}> {this.props.navigation.state.params.chef.category}</Text>
        </Header>
        <ScrollView>
          {this.props.navigation.state.params.chef.specialties.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={()=> this.props.navigation.navigate('Ordering', Object.assign(item, {itemName:item.name}, this.props.navigation.state.params.chef))}>
                <Card key={index}>
                  <Image style={{ width: '100%', height: 150, borderRadius: 10 }} source={{ uri: item.imgUrl }} />
            <Text style={styles.heading}> {item.name} ${item.price}</Text>
                  <Text> {item.remaining} in stock</Text>
                  <Rating
                    type='custom'
                    ratingCount={5}
                    imageSize={10}
                    readonly
                    startingValue={item.rating}
                    ratingColor={Colors.primary}
                    style={styles.rating}
                  />

                </Card>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </>


    )
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    color: Colors.black,
    alignItems: 'center',
    alignContent: 'center'
  },
  rating: {
    marginRight: '80%'
  }
})

export default ChefDetails