import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages';
import { QueryClient, QueryClientProvider } from 'react-query';

const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Pages />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
