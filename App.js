import React, { useState } from 'react';
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

const CalcButton = styled.Button`
  margin-top:10px;
`;

const ResultArea = styled.View`
  width:90%;
  margin-top:30px;
  background-color:#EEE;
  justify-content:center;
  align-items:center;
`;

const ResultItemTitle = styled.Text`
  font-size:18px;
  font-weight:bold;
`;

const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom:10px;
`;

const PctArea = styled.View`
  flex-direction:row;
  margin:20px;
  padding:15px;
`;

const PctItem = styled.Button`
    
`;

const App = () => {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);
    if (nBill) {
      setTip((pct/100)*nBill);
    } else {
      alert("Enter account amount");
    }
  }

  return (
    <Page>
      <HeaderText>Tip Calculator</HeaderText>
      <Input
        placeholder="Bill amount"
        keyboardType="numeric"
        value={bill}
        onChangeText={n => setBill(n)}
      />
      <PctArea>
        <PctItem title="5%" onPress={()=>setPct(5)}/>
        <PctItem title="10%" onPress={()=>setPct(10)}/>
        <PctItem title="15%" onPress={()=>setPct(15)}/>
        <PctItem title="20%" onPress={()=>setPct(20)}/>
      </PctArea>
      <CalcButton title={`Calculate (${pct}%)`} onPress={calc} />
      {tip > 0 &&
        <ResultArea>
          <ResultItemTitle>Bill Amount</ResultItemTitle>
          <ResultItem>${parseFloat(bill).toFixed(2)}</ResultItem>
          <ResultItemTitle>Tip Amount</ResultItemTitle>
          <ResultItem>${tip.toFixed(2)} ({pct}%)</ResultItem>
          <ResultItemTitle>Final Value</ResultItemTitle>
          <ResultItem>${(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      }

    </Page>
  );
};



export default App;
