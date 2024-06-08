import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styled } from 'nativewind';

const Bmi: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // convert height to meters

    if (!isNaN(weightNum) && !isNaN(heightNum) && heightNum > 0) {
      const bmiValue = weightNum / (heightNum * heightNum);
      setBmi(bmiValue);
      generateMessage(bmiValue);
    } else {
      setBmi(null);
      setMessage('Please enter valid weight and height.');
    }
  };

  const generateMessage = (bmiValue: number) => {
    if (bmiValue < 18.5) {
      setMessage('You are undernourished. Visit a tavern and eat well before your next adventure.');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage('You are in great shape! Ready for any challenge that comes your way.');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage('You are a bit overweight. Consider some training before your next quest.');
    } else {
      setMessage('You are overweight. Training and a balanced diet are advised before setting out.');
    }
  };

  const StyledView = styled(View);
  const StyledText = styled(Text);
  const StyledTextInput = styled(TextInput);

  return (
    <StyledView className="flex-1 bg-gray-900 p-4">
      <StyledText className="text-2xl text-white text-center mb-4">BMI Calculator</StyledText>

      <StyledTextInput
        className="bg-gray-800 text-white p-2 mb-2 rounded"
        placeholder="Weight (kg)"
        placeholderTextColor="#bbb"
        keyboardType="decimal-pad"
        keyboardAppearance="dark"
        value={weight}
        onChangeText={setWeight}
      />
      <StyledTextInput
        className="bg-gray-800 text-white p-2 mb-2 rounded"
        placeholder="Height (cm)"
        placeholderTextColor="#bbb"
        keyboardType="decimal-pad"
        keyboardAppearance="dark"
        value={height}
        onChangeText={setHeight}
      />
      <Button title="Calculate BMI" onPress={calculateBMI} color="#d4af37" />

      {bmi !== null && (
        <StyledView className="mt-4 p-4 bg-gray-800 rounded">
          <StyledText className="text-white text-lg">Your BMI: {bmi.toFixed(2)}</StyledText>
          <StyledText className="text-gray-400 mt-2">{message}</StyledText>
        </StyledView>
      )}
    </StyledView>
  );
};

export default Bmi;
