import './App.css';
import { Provider } from 'react-redux';
import { store } from './config/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <h1>hello</h1>
      </Provider>
    </>
  );
}

export default App;
