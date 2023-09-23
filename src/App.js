import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import store from './store/store';
import DetailProductPage from './pages/detail';
import CartPage from './pages/cart';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/detail/:productId' element={<DetailProductPage />}/>
          <Route path='/cart' element={<CartPage />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
