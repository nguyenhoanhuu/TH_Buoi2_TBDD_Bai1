import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import { useState } from 'react';

export default function App() {
    const [text,setText] = useState('');
    const [result,setResult] = useState('');
    return (
        
        <View style={styles.container}>
       
           <TextInput style={styles.textInput} placeholder="Email"
           
             onChangeText={(text) => setText(text)}
            value={text}
            ></TextInput>
            <Button title="Submit" onPress={toggleModal} style={[{marginTop:100}]} />
          
          <Text>kết quả : {result}</Text>
           
        </View>
    );
    function toggleModal () {
        setResult(text)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       
    },
    textInput: {
        marginTop:50,
        backgroundColor: '#fff',
        border: '1px solid #fff',
        height: 40,
          borderColor: 'gray',
          borderWidth: 1

    }
});
