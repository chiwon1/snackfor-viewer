import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages';
import Layout from './components/Layout';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Pages />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
