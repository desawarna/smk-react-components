// Pada App.jsx
// Disini kita membagi tiga komponent kecil, Header, Content, Body. Semua tag Components di tulis dengan huruf kapital di awal.

import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
