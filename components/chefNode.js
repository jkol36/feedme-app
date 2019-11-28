import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';
import { Rating } from 'react-native-ratings';
import Colors from '../constants/Colors';

const ChefNode = props => {
    return (
        <TouchableOpacity onPress={() => console.log('pressed')}>
            <Card>
                <View style={styles.chefContainer}>
                    <Image source={{ uri: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/p320x320/56157897_10156424864661448_2006314330747830272_o.jpg?_nc_cat=109&_nc_ohc=eqifgMWmT4cAQkZ8aRgOIYGwl831Il6RtPmRx9aDMUqSFgJeWxAPn2YxQ&_nc_ht=scontent-lga3-1.xx&oh=bbb2d6fa7dd3782b2c8116e81eceb060&oe=5E423E84' }}
                        style={{ width: 120, height: 120, borderRadius: 10 }} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}> {props.chef.chef.name}</Text>
                        <Text style={styles.subtitle}> {props.chef.chef.mealsSold} meals sold</Text>
                        <Text style={styles.subtitle}> Known For {props.chef.chef.knownFor}</Text>
                        <Text style={styles.subtitle}> {props.chef.chef.avgDeliveryTime}</Text>
                        <Rating
                            type='custom'
                            ratingCount={5}
                            imageSize={30}
                            showRating
                            ratingColor={Colors.primary}
                            onFinishRating={this.ratingCompleted}
                            style={{ paddingVertical: 10 }}
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
    },
    subtitle: {
        fontSize: 15
    },
    nameContainer: {
        flexDirection: 'column',
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center'
    },
    chefContainer: {
        flexDirection: 'row',
    },
})
export default ChefNode