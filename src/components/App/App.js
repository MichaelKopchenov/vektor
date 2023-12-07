import Container from '../Container/Container';
import Content from '../Content/Content';
import Main from '../Main/Main';
import Hello from '../Hello/Hello';
import Desc from '../Desc/Desc';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Content>
        <Hello />
          <Container>
            <Main />
            <Desc />
            <Footer />
          </Container>
      </Content>
      {/* <Footer /> */}
    </>
  );
};

export default App;