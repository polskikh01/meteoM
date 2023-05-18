import {Providers} from 'app/providers';
import {Provider} from 'react-redux';
import {store} from './store';

const rootStore = store();

const App = () => {
  return <Provider store={rootStore}>
    <Providers />
  </Provider>;
};

export default App;
