import React, { Suspense, lazy } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";
// import App from './App';
import "./index.css";

const App = lazy(() => import('./App'))

const Loader = () => {
  return(
    <div className="h-screen flex items-center justify-center bg-darkblue">
      <div className="">
        <span className="text-5xl text-gold">Sudo Agency</span>
      </div>
      Loading...
    </div>
  )
}

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);



