import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import {colors} from './src/utils/constans';
import SearchInput from './src/components/SearchInput';
import { fetchLocationId, fetchWeather } from './src/utils/api';

export default function App() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([])
  const [city, setCity] = useState(null)


  console.log(data);

  handleFindLocation = async city => {
    if (!city) return;
    setLoading(true)
    try {
      const {lat, long, city_name} = await fetchLocationId(city)
       setCity(city_name)
      const result = await fetchWeather(lat, long)
          console.log(result);
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
      <StatusBar style="auto" />

      <View style={styles.detailsContainer}>
        <SearchInput
          placeholder="Buscar ciudad"
          onSubmit={handleFindLocation}
          city={city}
        />
        <ActivityIndicator
          animating={loading}
          color="white"
          size="large"
          style={{ marginTop: 30 }}
        />
        {error && (
          <Text >
            No pudimos encontrar encontrar la ciudad intenta nuevamente
          </Text>
        )}
       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 0,
  },
});
