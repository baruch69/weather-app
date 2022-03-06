import React, {useState} from 'react';
import { StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../utils/constans';



export default function SearchInput({onSubmit, placeholder}) {
 
  const [text, setText] = useState('')


 const  handleChangeText = text => {
     setText(text)
  };

   const handleKeyPress=({nativeEvent})=>{
     if(!text ) return
       if(text.length > 2){
        onSubmit(text);
       }
   }

    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          value={text}
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          clearButtonMode="always"
          onChangeText={handleChangeText}
          onKeyPress={handleKeyPress}
        />
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    height: 40,
    marginTop: 60,
    backgroundColor: colors.secundary,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth:1,
    borderColor:"#fff"
    
  },
  textInput: {
    flex: 1,
    color: 'white',
    fontSize:16
  }
});
