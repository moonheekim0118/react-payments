import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Loading, AddCard, RegisterCard, CardList } from './pages';

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/addCard" exact element={<AddCard />} />
          <Route path="/registerCard" exact element={<RegisterCard />} />
          <Route path="/" exact element={<CardList />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: flex;
    justify-content: center;
  }

  main {
    width: fit-content;
    height: fit-content;
    padding: 10px;
  }


`;

export default App;
