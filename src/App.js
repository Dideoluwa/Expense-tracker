import React from "react";
import Balance from "./Components/Balance";
// import ContextProvider from "./Components/context/ContextProvider";
import Header from "./Components/Header";
import History from "./Components/History";
import Input from "./Components/Input";
import Money from "./Components/Money";

function App() {

  return (
    // <ContextProvider>
    <div>
      <Header />
      <Balance />
      <History />
      <Money />
      <Input />
    </div>
    // </ContextProvider>
  );
}

export default App;
