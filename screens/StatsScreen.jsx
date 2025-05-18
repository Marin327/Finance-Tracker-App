import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [
            {
              data: [200, -50, 300, 100],
              color: (opacity = 1) => `rgba(34, 128, 176, ${opacity})`, // синя линия
            },
          ],
        }}
        width={screenWidth - 40}
        height={250}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: '#f5f5f5',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: '#2280b0',
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});