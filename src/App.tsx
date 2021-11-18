import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from "./components/Layout";
import Pages from "./Pages";

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