import './App.css';
import CakeComponent from './components/CakeComponent';
import HookCakeComponent from './components/HookCakeComponent';
import store from './redux/store';
import { Provider } from 'react-redux';
import IceCreamComponent from './components/IceCreamComponent';
import UserComponent from './components/UserComponent';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeComponent/> */}
        {/* <HookCakeComponent/>
        <IceCreamComponent/> */}
        <UserComponent/>
      </div>
    </Provider>
  );
}

export default App;
