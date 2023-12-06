import Container from '../Container/Container';
import Main from '../Main/Main';
import Hello from '../Hello/Hello';
import Desc from '../Desc/Desc';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <Container>
      <Hello />
      <Main>
        <Desc />
        <Footer />
      </Main>
    </Container>
  );
};

export default App;