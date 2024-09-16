import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getScheduleById } from '../services/api';
import { styles } from '../styles/globalStyles';

const TreatmentDetailsScreen = ({ route, navigation }) => {
  const { treatmentId } = route.params;
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    getScheduleById(treatmentId).then((response) => setTreatment(response.data));
  }, [treatmentId]);

  return (
    <View style={styles.container}>
      {treatment ? (
        <>
          <Text style={styles.title}>{treatment.treatmentType}</Text>
          <Text>{`Data: ${treatment.date}`}</Text>
          <Text>{`Frequência: ${treatment.frequency} dias`}</Text>
          <Text>{`Notas: ${treatment.notes}`}</Text>
        </>
      ) : (
        <Text>Carregando...</Text>
      )}
      <Button title="Editar" onPress={() => navigation.navigate('EditTreatment', { treatment })} />
    </View>
  );
};

export default TreatmentDetailsScreen;
