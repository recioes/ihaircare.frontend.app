import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Modal, Picker } from 'react-native';
import { styles } from '../styles/globalStyles';

const EditTreatmentModal = ({ isVisible, onClose, onSave, treatment }) => {
  const [treatmentType, setTreatmentType] = useState(treatment.treatmentType);
  const [date, setDate] = useState(treatment.date);
  const [frequency, setFrequency] = useState(treatment.frequency);
  const [notes, setNotes] = useState(treatment.notes);

  const handleSave = () => {
    const updatedTreatment = {
      ...treatment,
      treatmentType,
      date,
      frequency,
      notes,
    };
    onSave(updatedTreatment);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.label}>Editar tratamento</Text>
        <Picker selectedValue={treatmentType} onValueChange={(value) => setTreatmentType(value)}>
          <Picker.Item label="Nutrição" value="nutricao" />
          <Picker.Item label="Hidratação" value="hidratacao" />
          <Picker.Item label="Reconstrução" value="reconstrucao" />
        </Picker>

        <Text style={styles.label}>Editar data</Text>
        <TextInput style={styles.input} value={date} onChangeText={setDate} placeholder="Data" />

        <Text style={styles.label}>Editar frequência</Text>
        <TextInput style={styles.input} value={frequency} onChangeText={setFrequency} placeholder="Frequência (dias)" />

        <Text style={styles.label}>Editar notas</Text>
        <TextInput style={styles.input} value={notes} onChangeText={setNotes} placeholder="Notas" />

        <Button title="Salvar" onPress={handleSave} />
        <Button title="Cancelar" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default EditTreatmentModal;
