import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import CalendarComponent from '../components/Calendar';
import TreatmentList from '../components/TreatmentList';
import { getAllSchedules } from '../services/api';

const HomeScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    // Carrega os tratamentos quando a tela for carregada
    getAllSchedules().then((response) => setTreatments(response.data));
  }, []);

  return (
    <View>
      <CalendarComponent onDateSelect={setSelectedDate} />
      <Text>Tratamentos para {selectedDate}</Text>
      <TreatmentList treatments={treatments} onComplete={() => {}} />
      <Button title="Ver todos os tratamentos" onPress={() => navigation.navigate('AllTreatments')} />
    </View>
  );
};

export default HomeScreen;
