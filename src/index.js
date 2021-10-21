import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import "./index.css";
import { AppShell } from './app-shell';
import { QueryClient, QueryClientProvider } from 'react-query';

import { PageNotFound } from './pages/page404'
import { CityList } from './pages/citylist'
import { Weather } from './pages/weather'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 10 }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={ queryClient } >
        <AppShell>
          <switch>
            {/* <Route path='/:author/:name' component={ weather } /> */}
            {//this.path == "/" ? <Route component={ CityList } /> : <Route component={ PageNotFound } />}
            }
            <Route path='/w/:woeid' component={ Weather } />
            <Route path='/' exact component={ CityList } />
            <Route path='*' component={ PageNotFound } />
          </switch>
        </AppShell>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

