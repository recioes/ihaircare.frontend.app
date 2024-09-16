import React from 'react';
import { View, Text, CheckBox, Button } from 'react-native';

const TreatmentList = ({ treatments, onComplete }) => {
  return (
    <View>
      {treatments.map((treatment) => (
        <View key={treatment.id}>
          <Text>{treatment.name}</Text>
          <CheckBox value={treatment.done} onValueChange={() => onComplete(treatment.id)} />
        </View>
      ))}
      <Button title="Adicionar tratamento" onPress={() => {}} />
    </View>
  );
};

export default TreatmentList;
