import { RouterProvider } from 'react-router-dom';
import { MainRouter } from './Route/MainRouter';
import './App.css';

function App() {
  return (
    <div >
      <RouterProvider
       router={MainRouter}/>
    </div>
  );
}

export default App;
