import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import store from './app/store';
import DetailProductPage from './pages/detail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/detail/:productId' element={<DetailProductPage />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
