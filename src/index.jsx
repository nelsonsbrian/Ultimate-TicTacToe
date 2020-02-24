import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import 'animate.css/animate.css';

const store = createStore(rootReducer);

// let unsubscribe = store.subscribe(() => 
//   console.log()
// );

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter basename="/tictactoe">
        <Provider store={store}>
          <Component/>
        </Provider>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
/*eslint-enable */
