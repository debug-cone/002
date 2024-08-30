import Title from './components/title/Title';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';

import './index.css'
import './App.css'

function App() {
  return (
  <>
    <Navbar />
    <main className="App">
      <h1>Hello React</h1>
      <Title />
    </main>
    <Footer />
  </>
  );
}

export default App;
