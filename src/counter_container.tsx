import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import { CounterStoreYo } from './mobx_store/counter_store';
import Counter from './counter';

export const CounterContainer = observer(() => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={CounterStoreYo.handleAddCounter}>
          <Text>sdfsdf</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={CounterStoreYo.handleRemoveCounter}>
          <Text>sdfsd</Text>
        </TouchableOpacity>
      </View>

      <View>
        {CounterStoreYo.counter.map((item, index) => (
          <Counter key={index} index={index} value={item} />
        ))}
      </View>
    </View>
  );
});
