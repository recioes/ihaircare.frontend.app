import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getAllSchedules } from '../services/api';
import { styles } from '../styles/globalStyles';

const AllTreatmentsScreen = ({ navigation }) => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    // Carregar todos os tratamentos
    getAllSchedules().then((response) => setTreatments(response.data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos os Tratamentos</Text>
      {treatments.map((treatment) => (
        <View key={treatment.id} style={styles.treatmentItem}>
          <Text>{treatment.treatmentType}</Text>
          <Text>{`A cada ${treatment.frequency} dias`}</Text>
          <Button title="Editar" onPress={() => navigation.navigate('EditTreatment', { treatment })} />
        </View>
      ))}
      <Button title="Adicionar Tratamento" onPress={() => navigation.navigate('AddTreatment')} />
    </View>
  );
};

export default AllTreatmentsScreen;
