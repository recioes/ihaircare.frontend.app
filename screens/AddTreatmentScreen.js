import React, { useState } from 'react';
import { View, Button } from 'react-native';
import AddTreatmentModal from '../components/AddTreatmentModal';
import { styles } from '../styles/globalStyles';
import { createSchedule } from '../services/api';

const AddTreatmentScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = async (treatment) => {
    try {
      await createSchedule(treatment);
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao salvar o tratamento", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Adicionar Tratamento" onPress={() => setModalVisible(true)} />
      <AddTreatmentModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
      />
    </View>
  );
};

export default AddTreatmentScreen;
