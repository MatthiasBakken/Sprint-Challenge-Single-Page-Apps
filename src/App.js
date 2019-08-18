import React from "react";
import { Route } from 'react-router-dom';
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

export default function App() {
  return (
    <main>
      <Route exact path='/' component={'#'} />
      <Header />
      <TabNav />
    </main>
  );
}
