import React from "react";
import './App.css';
import Menu from './components/Menu'
import { YMInitializer } from 'react-yandex-metrika';


const App = () => {
  return (
  
    <div>
      <Menu />
      <YMInitializer accounts={[26382525]} options={{ webvisor: true }} version="2" />
    </div>
  
  );
}
export default App;

