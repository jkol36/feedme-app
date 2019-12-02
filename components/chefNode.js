import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';
import { Rating } from 'react-native-ratings';
import Colors from '../constants/Colors';


const ChefNode = props => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('ChefDetails', { ...props })}>
      <Card>
        <View style={styles.chefContainer}>
          <Image source={{ uri: props.chef.profileImgUrl }}
            style={{ width: 50, height: 50, borderRadius: 10 }} />
          <View style={styles.nameContainer}>
            <Text style={styles.name}> {props.chef.name}</Text>
            <Text style={styles.subtitle}> {props.chef.mealsSold} meals sold</Text>
            <Text style={styles.subtitle}> Known For {props.chef.knownFor}</Text>
            <Text style={styles.subtitle}> {props.chef.avgDeliveryTime}</Text>
            <Rating
              type='custom'
              ratingCount={5}
              imageSize={10}
              readonly
              startingValue={props.chef.rating}
              ratingColor={Colors.primary}
              onFinishRating={() => props.chef.rating}
              style={styles.rating}
            />
          </View>

        </View>
      </Card>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    alignItems: "center"
  },
  rating: {
    paddingVertical: 10
  },
  subtitle: {
    fontSize: 10,
    alignContent: "center",
    alignItems: 'center'
  },
  nameContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '25%'
  },
  chefContainer: {
    flexDirection: 'row',
  },
})
export default ChefNode