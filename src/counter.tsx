import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type CounterProps = {
  index: any;
  value: any;
};

const styles = StyleSheet.create({
  counterContainer: {
    width: '100%',
    height: 100,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginBottom: 10,
  },
  counterInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  counterBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  counterButton: {
    backgroundColor: '#D1B2FF',
    marginLeft: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Counter = ({ index, value }: CounterProps) => {
  return (
    <>
      <View style={styles.counterContainer}>
        <Text>Count: {value.counterNum.toString()}</Text>
        <View style={styles.counterBtnContainer}>
          <TouchableOpacity style={styles.counterButton} onPress={() => {}}>
            <Text>INCREMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.counterButton} onPress={() => {}}>
            <Text>DECREMENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default Counter;
