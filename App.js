import React,{useState} from 'react';
import { } from 'react-native';
import styled from 'styled-components/native'

const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
`;

const Input = styled.TextInput`
  width:90%;
  height:50px;
  margin-top:20px;
  border-radius:10px;
  font-size:18px;
  background-color:#EEE;
  padding:10px;

`;

const App = () => {

  const [bill, setBill] = useState('');

  return (
    <Page>
      <HeaderText>Tip Calculator</HeaderText>
      <Input 
        placeholder="Bill amount"
        keyboardType="numeric"
        value={bill}
        onChangeText={n=>setBill(n)}
      />
    </Page>
  );
};



export default App;
