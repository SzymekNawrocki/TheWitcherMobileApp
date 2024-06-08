import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styled } from 'nativewind';

interface Skill {
  name: string;
  level: number;
}

const SkillComponent: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [skillName, setSkillName] = useState<string>('');
  const [skillLevel, setSkillLevel] = useState<number>(1);

  const addSkill = () => {
    if (skillName) {
      setSkills([...skills, { name: skillName, level: skillLevel }]);
      setSkillName('');
      setSkillLevel(1);
    }
  };

  const StyledView = styled(View);
  const StyledText = styled(Text);
  const StyledTextInput = styled(TextInput);
  const StyledTouchableOpacity = styled(TouchableOpacity);

  return (
    <StyledView className="flex-1 bg-gray-900 p-4">
      <StyledText className="text-2xl text-white text-center mb-4">Skill Tree</StyledText>

      <StyledView className="mb-4">
        <StyledTextInput
          className="bg-gray-800 text-white p-2 mb-2 rounded"
          placeholder="Skill Name"
          placeholderTextColor="#bbb"
          value={skillName}
          onChangeText={setSkillName}
        />
        <RNPickerSelect
          onValueChange={(value) => setSkillLevel(value)}
          items={[...Array(10).keys()].map(i => ({ label: `${i + 1}`, value: i + 1 }))}
          value={skillLevel}
          style={{
            inputIOS: { color: 'white', padding: 10, backgroundColor: '#2d2d2d', borderRadius: 5 },
            inputAndroid: { color: 'white', padding: 10, backgroundColor: '#2d2d2d', borderRadius: 5 }
          }}
        />
        <Button title="Add Skill" onPress={addSkill} color="#d4af37" />
      </StyledView>

      <FlatList
        data={skills}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <StyledView className="bg-gray-800 p-4 mb-2 rounded">
            <StyledText className="text-white">{item.name}</StyledText>
            <StyledText className="text-gray-400">Level: {item.level}</StyledText>
          </StyledView>
        )}
      />
    </StyledView>
  );
};

export default SkillComponent;
