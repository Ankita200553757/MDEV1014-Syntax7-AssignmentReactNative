import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const SettingsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.logo} source={require('./images/image.png')} />
        <Text style={styles.heading}>Weather Glossary</Text>
        <Text style={styles.content}>
          1. Temperature: The measure of hotness or coldness of the air, usually measured in degrees Celsius (°C) or Fahrenheit (°F). {'\n\n'}
          2. Precipitation: Any form of water that falls from the atmosphere to the Earth's surface, including rain, snow, sleet, and hail. {'\n\n'}
          3. Humidity: The amount of moisture present in the air. It can be measured as relative humidity, which expresses the amount of moisture in the air as a percentage of the maximum amount the air can hold at a given temperature. {'\n\n'}
          4. Wind: The movement of air horizontally across the Earth's surface. Wind is commonly described by its speed and direction. {'\n\n'}
          5. Barometer: An instrument used to measure atmospheric pressure. It is often used to forecast changes in the weather. {'\n\n'}
          6. Clouds: Visible masses of water droplets or ice crystals suspended in the atmosphere. Clouds are categorized based on their height and appearance, such as cumulus, stratus, and cirrus clouds. {'\n\n'}
          7. Fog: A cloud that forms at the Earth's surface, consisting of tiny water droplets suspended in the air. {'\n\n'}
          8. Dew Point: The temperature at which the air becomes saturated with moisture, leading to condensation and the formation of dew. {'\n\n'}
          9. Front: The boundary between two air masses of different temperatures and humidity. Fronts can bring changes in weather conditions. {'\n\n'}
          10. Jet Stream: A narrow band of strong, high-altitude winds that flow from west to east in the upper levels of the atmosphere. Jet streams can influence weather patterns. {'\n\n'}
          11. Thunderstorm: A weather event characterized by thunder, lightning, heavy rain, and sometimes strong winds. Thunderstorms can also produce hail and tornadoes. {'\n\n'}
          12. Tornado: A rapidly rotating column of air that is in contact with both the surface of the Earth and a cumulonimbus cloud. Tornadoes are known for their destructive winds and are often accompanied by a funnel-shaped cloud. {'\n\n'}
          13. Weather Phenomenon: A term used to describe any observable atmospheric occurrence or event, such as rainbows, fogbows, mirages, or halos. {'\n\n'}
          14. Weather Forecast: A prediction of future weather conditions based on current observations, historical data, and meteorological models. {'\n\n'}
          15. Weather Station: A facility equipped with instruments and sensors to measure and record weather data, including temperature, humidity, wind speed, and atmospheric pressure. {'\n\n'}
          16. Climate Change: Long-term shifts and alterations in average weather patterns and conditions, typically attributed to human activities, such as greenhouse gas emissions. {'\n\n'}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#100529',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  content: {
    fontSize: 16,
    color: 'white',
  },
});

export default SettingsPage;