import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, ImageBackground, } from 'react-native';
import { colors } from './src/utils/constans';
import SearchInput from './src/components/SearchInput';
import { fetchLocationId, fetchWeather } from './src/utils/api';
import WeaterItem from './src/components/WeaterItem';
import WeatherNow from './src/components/WeatherNow';

export default function App() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([])
  const [city, setCity] = useState(null)


  handleFindLocation = async city => {
    if (!city) return;
    setLoading(true)
    try {
      const { lat, long, city_name } = await fetchLocationId(city)
        setCity(city_name)
          const result = await fetchWeather(lat, long)
          setData(result);
        setLoading(false)
    } catch (e) {
      console.log(e);
      setLoading(false)
      setError(true)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ImageBackground
        source={require('./assets/weather.png')}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <SearchInput
          placeholder="Search city"
          onSubmit={handleFindLocation}
          city={city}
        />
        <ActivityIndicator
          animating={loading}
          color="white"
          size="large"
          style={{ marginTop: 30 }}
        />

        {!error ? (
          <>
            <WeatherNow
              current={data.current}
              timezone={data.timezone}
              city={city}
            />
            <WeaterItem
              data={data.daily}
            />
          </>
        ) : (
          <View style={styles.errorContainer}>
            <Text style={styles.error} > We can't find the city try again</Text>
          </View>
        )

        }
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  error: {
    color: "#fff",
    fontSize: 20
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },

});
