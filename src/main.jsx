import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import LanguageContext from './context/language'


createRoot(document.getElementById('root')).render(
 <StrictMode>
    <Provider store={store}>
     

      <App />
      
    </Provider>
  </StrictMode>
)



