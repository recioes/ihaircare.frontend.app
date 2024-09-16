import React from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarComponent = ({ onDateSelect }) => {
  return (
    <View>
      <Calendar
        onDayPress={(day) => onDateSelect(day.dateString)}
      />
    </View>
  );
};

export default CalendarComponent;
