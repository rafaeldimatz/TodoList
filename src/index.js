import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ListItemProvider } from './componentes/context/ListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const UserContext = createContext();
root.render(
  <React.StrictMode>
    <ListItemProvider>
    <App />
    </ListItemProvider>
  </React.StrictMode>
);
reportWebVitals();
