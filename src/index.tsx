import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './components/аpp/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App /> 
  // <React.StrictMode></React.StrictMode>
);


