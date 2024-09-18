import React from 'react';
// import Sidebar from './components/Sidebar';
import DashBoard from './components/DashBoard';
import Header from './components/Header';
import { First } from './components/First';
function App() {
  return (
    <div className="flex h-screen ">
       <First></First>
      <div className="flex flex-col flex-grow">
     <Header></Header>
        <DashBoard />
      </div>
    </div>




  );
}

export default App;
