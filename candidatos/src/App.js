import React from 'react';
import './App.css';

//
import { store } from './actions/store';
import { Provider } from 'react-redux';
import DCandidates from './components/DCandidates';
import { Container } from '@material-ui/core';
import { ToastProvider } from 'react-toast-notifications';
import {Badge} from 'react-bootstrap'

function App() {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}>
        <Container maxWidth="lg">
          <h1>
            <Badge variant="secondary">Candidatos C# API</Badge>
          </h1>
          <DCandidates />
        </Container>
      </ToastProvider>
    </Provider>
  );
}

export default App;
