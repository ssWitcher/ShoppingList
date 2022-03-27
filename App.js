import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItems from './components/ListItems';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: Math.random() * 100, text: 'Milk'},
    {id: Math.random() * 100, text: 'Eggs'},
    {id: Math.random() * 100, text: 'Bread'},
    {id: Math.random() * 100, text: 'Sugar'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems(prevItems => {
        return [{id: Math.random() * 100, text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItems item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
