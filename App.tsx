import { StyleSheet, Text, View } from 'react-native';
import {Button} from '@rneui/themed';

export default function App() {
  return (
    <View style={styles.container}>
      <Button 
      title={'Hello World!'}
      size='sm'
      color={'primary'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
