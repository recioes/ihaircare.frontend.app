import React, { useState } from "react";
import { View, Text, TextInput, Button, Modal, Picker } from "react-native";
import { styles } from "../styles/globalStyles";

const AddTreatmentModal = ({ isVisible, onClose, onSave }) => {
  const [treatmentType, setTreatmentType] = useState("");
  const [date, setDate] = useState("");
  const [frequency, setFrequency] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    const newTreatment = {
      treatmentType,
      date,
      frequency,
      notes,
    };
    onSave(newTreatment);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.label}>Selecione o tipo de tratamento</Text>
        <Picker
          selectedValue={treatmentType}
          onValueChange={(value) => setTreatmentType(value)}>
          <Picker.Item label="Nutrição" value="nutricao" />
          <Picker.Item label="Hidratação" value="hidratacao" />
          <Picker.Item label="Reconstrução" value="reconstrucao" />
        </Picker>

        <Text style={styles.label}>Escolha a data</Text>
        <TextInput
          style={styles.input}
          placeholder="Data (DD/MM/AAAA)"
          value={date}
          onChangeText={setDate}
        />

        <Text style={styles.label}>Escolher frequência</Text>
        <TextInput
          style={styles.input}
          placeholder="Frequência (dias)"
          value={frequency}
          onChangeText={setFrequency}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Adicione notas</Text>
        <TextInput
          style={styles.input}
          placeholder="Notas"
          value={notes}
          onChangeText={setNotes}
        />

        <View style={styles.buttonContainer}>
          <Button title="Salvar" onPress={handleSave} />
          <Button title="Cancelar" onPress={onClose} color="red" />
        </View>
      </View>
    </Modal>
  );
};

export default AddTreatmentModal;
