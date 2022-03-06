import React from 'react';
import { View, StyleSheet, Text , ScrollView, Image} from 'react-native';
import dayjs from 'dayjs';
import {colors} from '../utils/constans';


function WeaterItem({data}) {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}  style={{flex:1}}>
     {data &&  data.length > 0 && data.map((data, i)=>(
         <FutureForecastItem 
           key={i}
           forecastItem={data}
         />
     ))}
   </ScrollView>
  );
}



const FutureForecastItem = ({ forecastItem }) => {
 
  const img = { uri: "http://openweathermap.org/img/wn/" + forecastItem.weather[0].icon + "@2x.png" }
  return (
      <View style={styles.weatherContainer}>
          <Text style={styles.day}>{dayjs(forecastItem.dt * 1000).format('dddd')}</Text>
          <Image source={img} style={styles.image} />
          <Text style={styles.temp}>Day - {forecastItem.temp.day}&#176;C</Text>
          <Text style={styles.temp}>Night - {forecastItem.temp.night}&#176;C</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
},
weatherContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
    height: 180
},
day: {
    fontSize: 16,
    color: colors.white,
    padding: 10,
    textAlign: "center",
    fontWeight: "200",
    marginBottom: 15
},
temp: {
    fontSize: 12,
    color: colors.white,
    fontWeight: "100",
    textAlign: "center"
},
});

export default WeaterItem;