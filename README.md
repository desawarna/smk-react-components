Mengenal Components di React.js dengan ES6
===

**Components** bisa di bilang hal yang sangat penting di react.js. Components adalah semacam konsep bagaimana cara untuk membuat tiap bagian dari UI (tampilan) bisa bekerja secara mandiri dan terisolasi dari bagian-bagian yang lain.

Sebenarnya secara sadar atau tidak sadar bagi yang sering bekerja dengan kode HTML, selalu melakukan pemisahan bagian dari halaman-halaman misalnya Header, Content, dan Footer. Biasanya tujuannya agar kode tidak menumpuk di satu halaman sehingga di pisahkan ke file-file kecil yang lebih spesifik fungsinya dan kode lebih maintainable jika ada perbaikan.

App.jsx
=======
    import React from 'react';
    import Header from './Components/Header.jsx';
    import Content from './Components/Content.jsx';
    import Footer from './Components/Footer.jsx';

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
       }

Buat folder Components di dalam folder src , ingat sensitive case , huruf besar dan kecil beda. Kemudian dalam folder **Components** buat 3 file ini yaitu ```Header.jsx``` , ```Content.jsx``` , ```Footer.jsx```

Header.jsx
======
    import React from 'react';

    export default class Header extends React.Component{
      render(){
        return (
          <div>
            <h1>Header</h1>
          </div>
        )
      }
    }

Content.jsx
======
    import React from 'react';
    
    export default class Content extends React.Component{
      render(){
        return (
          <div>
            Mantap jiwa!!!!!!!
          </div>
      }
    }

Footer.jsx
======
    import React from 'react';
    
    export default class Footer extends React.Component{
      render(){
        return (
            <p><b>footer</b></p>
          </div>
        )
      }
    }
