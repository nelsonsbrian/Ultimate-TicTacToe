import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalBoard from './components/GlobalBoard';
import Header from './components/Header';
import Status from './components/Status';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Status />
        <GlobalBoard />
      </Provider>
    </div>
  );
}

export default App;
