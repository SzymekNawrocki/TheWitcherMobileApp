import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, KeyboardTypeOptions } from 'react-native';

interface Task {
  text: string;
  type: 'Main Quest' | 'Side Quest' | 'Witcher Contract' | 'Treasure Hunt';
  due: string;
}

const Quest: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>('');
  const [taskType, setTaskType] = useState<'Main Quest' | 'Side Quest' | 'Witcher Contract' | 'Treasure Hunt'>('Main Quest');
  const [dueDate, setDueDate] = useState<string>('');

  const addTask = () => {
    if (taskText && taskType && dueDate) {
      setTasks([...tasks, { text: taskText, type: taskType, due: dueDate }]);
      setTaskText('');
      setTaskType('Main Quest');
      setDueDate('');
    }
  };

  const renderTaskTypeButton = (type: string) => {
    const isActive = taskType === type;
    return (
      <TouchableOpacity
        key={type}
        style={{ backgroundColor: isActive ? '#007AFF' : '#8E8E93', padding: 8, borderRadius: 5 }}
        onPress={() => setTaskType(type as 'Main Quest' | 'Side Quest' | 'Witcher Contract' | 'Treasure Hunt')}
      >
        <Text style={{ color: 'white' }}>{type}</Text>
      </TouchableOpacity>
    );
  };

  const renderTaskItem = ({ item }: { item: Task }) => (
    <View style={{ backgroundColor: '#2d2d2d', padding: 16, marginBottom: 8, borderRadius: 5 }}>
      <Text style={{ color: 'white', marginBottom: 4 }}>{item.text}</Text>
      <Text style={{ color: '#8E8E93', marginBottom: 4 }}>{item.type}</Text>
      <Text style={{ color: '#8E8E93' }}>Due: {item.due}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#121212', padding: 16 }}>
      <Text style={{ fontSize: 24, color: 'white', textAlign: 'center', marginBottom: 16 }}>Witchers Journal</Text>

      <View style={{ marginBottom: 16 }}>
        <TextInput
          style={{ backgroundColor: '#2d2d2d', color: 'white', padding: 12, marginBottom: 8, borderRadius: 5 }}
          placeholder="Task Description"
          placeholderTextColor="#8E8E93"
          value={taskText}
          onChangeText={setTaskText}
        />
        <TextInput
          style={{ backgroundColor: '#2d2d2d', color: 'white', padding: 12, marginBottom: 8, borderRadius: 5 }}
          placeholder="Due Date (e.g., 2024-06-08)"
          placeholderTextColor="#8E8E93"
          value={dueDate}
          onChangeText={setDueDate}
          keyboardType="numeric"
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
          {['Main Quest', 'Side Quest', 'Witcher Contract', 'Treasure Hunt'].map(renderTaskTypeButton)}
        </View>
        <Button title="Add Task" onPress={addTask} color="#d4af37" />
      </View>

      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Quest;
