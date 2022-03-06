import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import {colors} from '../utils/constans';

function WeatherNow({ current, timezone, city }) {
    if (!current) {
        return (
            <View></View>
        )
    }
   

    return (
        <View style={styles.container}>
            <Text style={styles.city}>{city}</Text>
            <Text style={styles.timezone}>{timezone}</Text>
            <Text style={styles.timezone}>{current.weather[0].description}</Text>
            <CurrentWheather current={current} />
            <View style={styles.infoContent}>
                <View>
                    <Text style={styles.text}>Humity :{current.humidity} %</Text>
                    <Text style={styles.text}>Wind: {current.wind_speed} km/h</Text>
                </View>

            </View>
        </View>
    );
}

const CurrentWheather = ({ current }) => {
    const img = { uri: current && 'http://openweathermap.org/img/wn/' + current.weather[0].icon + '@4x.png' }
    return (
        <View style={styles.currentWeather}>
            <Image
                source={img}
                style={{ height: 100, width: 100 }}
            />
            <Text style={styles.currentTemp}>{current.temp} &#176;C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginTop: 10,
        marginBottom:20
    },
    infoContent: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        color: colors.white
    },
    city: {
        color: colors.white,
        fontSize: 28
    },

    day: {
        textAlign: 'right',
        color: colors.white
    },
    currentWeather: {
        flexDirection: "row",
        alignItems: "center",
    },
    currentTemp: {
        color: colors.white,
        fontSize: 25
    },
    timezone: {
        fontSize: 20,
        color: 'white'
    },
});

export default WeatherNow;