import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styled } from 'nativewind';

interface ElixirRecipe {
  name: string;
  ingredients: string[];
}

interface ElixirCategory {
  category: string;
  elixirs: ElixirRecipe[];
}

const elixirData: ElixirCategory[] = [
  {
    category: 'Energy',
    elixirs: [
      { name: 'Swallow', ingredients: ['Dwarven spirit', 'Celadine', 'Drowner brain'] },
      { name: 'Thunderbolt', ingredients: ['Dwarven spirit', 'Endrega embryo', 'Rubbish'] }
    ]
  },
  {
    category: 'Healing',
    elixirs: [
      { name: 'White Raffard’s Decoction', ingredients: ['Mandrake root', 'Celandine', 'Balisse fruit'] }
    ]
  },
  {
    category: 'Sleep',
    elixirs: [
      { name: 'Petri’s Philter', ingredients: ['Mandrake cordial', 'White gull', 'Cortinarius'] }
    ]
  },
  {
    category: 'Strength',
    elixirs: [
      { name: 'Full Moon', ingredients: ['Mandrake root', 'White gull', 'Aether'] }
    ]
  },
  {
    category: 'Endurance',
    elixirs: [
      { name: 'Maribor Forest', ingredients: ['Cortinarius', 'Mistletoe', 'Wolfsbane'] }
    ]
  }
];

const Elixir: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedElixir, setSelectedElixir] = useState<string | null>(null);

  const getElixirs = (category: string | null): ElixirRecipe[] => {
    if (!category) return [];
    const foundCategory = elixirData.find(elixirCategory => elixirCategory.category === category);
    return foundCategory ? foundCategory.elixirs : [];
  };

  const getRecipe = (category: string | null, elixirName: string | null): ElixirRecipe | null => {
    if (!category || !elixirName) return null;
    const elixirs = getElixirs(category);
    return elixirs.find(elixir => elixir.name === elixirName) || null;
  };

  const StyledView = styled(View);
  const StyledText = styled(Text);
  const StyledScrollView = styled(ScrollView);

  const recipe = getRecipe(selectedCategory, selectedElixir);

  return (
    <StyledScrollView className="flex-1 bg-gray-900 p-4">
      <StyledText className="text-2xl text-white text-center mb-4">Elixir Journal</StyledText>
      <StyledView className="mb-4">
        <RNPickerSelect
          onValueChange={(value) => {
            setSelectedCategory(value);
            setSelectedElixir(null);
          }}
          items={elixirData.map(category => ({ label: category.category, value: category.category }))}
          placeholder={{ label: 'Select a Category', value: null }}
          style={{
            inputIOS: { color: 'white', padding: 10, backgroundColor: '#2d2d2d', borderRadius: 5, marginBottom: 10 },
            inputAndroid: { color: 'white', padding: 10, backgroundColor: '#2d2d2d', borderRadius: 5, marginBottom: 10 }
          }}
        />

        <RNPickerSelect
          onValueChange={(value) => setSelectedElixir(value)}
          items={getElixirs(selectedCategory).map(elixir => ({ label: elixir.name, value: elixir.name }))}
          placeholder={{ label: 'Select an Elixir', value: null }}
          style={{
            inputIOS: { color: 'white', padding: 10, backgroundColor: '#2d2d2d', borderRadius: 5, marginBottom: 10 },
            inputAndroid: { color: 'white', padding: 10, backgroundColor: '#2d2d2d', borderRadius: 5, marginBottom: 10 }
          }}
        />
      </StyledView>
      {recipe && (
        <StyledView className="bg-gray-800 p-4 rounded">
          <StyledText className="text-xl text-white mb-2">{recipe.name}</StyledText>
          <StyledText className="text-white mb-2">Ingredients:</StyledText>
          {recipe.ingredients.map((ingredient, index) => (
            <StyledText key={index} className="text-gray-400">{ingredient}</StyledText>
          ))}
        </StyledView>
      )}
    </StyledScrollView>
  );
};

export default Elixir;
