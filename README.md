Mengenal Components di React.js dengan ES6
===

**Components** bisa di bilang hal yang sangat penting di react.js. Components adalah semacam konsep bagaimana cara untuk membuat tiap bagian dari UI (tampilan) bisa bekerja secara mandiri dan terisolasi dari bagian-bagian yang lain.

Sebenarnya secara sadar atau tidak sadar bagi yang sering bekerja dengan kode HTML, selalu melakukan pemisahan bagian dari halaman-halaman misalnya Header, Content, dan Footer. Biasanya tujuannya agar kode tidak menumpuk di satu halaman sehingga di pisahkan ke file-file kecil yang lebih spesifik fungsinya dan kode lebih maintainable jika ada perbaikan.

App.js
=======
`import React from 'react';
import Header from './components/header.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}`

# header.jsx

`import React from 'react';

export default class Header extends React.Component{
  render(){
    return (
      <div>
        <h1>Header</h1>
      </div>
    )
  }
}`

#content.jsx

`import React from 'react';

export default class Content extends React.Component{
  render(){
    return (
      <div>
        Mantap jiwa!!!!!!!
      </div>
    )
  }
}`

# footer.jsx

`import React from 'react';

export default class Footer extends React.Component{
  render(){
    return (
      <div>
        <p><b>footer</b></p>
      </div>
    )
  }
}`
