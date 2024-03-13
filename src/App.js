import {Provider} from 'react-redux';
import store from './store';
import RestaurantScreen from './Components/RestaurantScreen';

export default function App() {
    return (
      <Provider store={store}>
        <RestaurantScreen />
      </Provider>
    );
  }
