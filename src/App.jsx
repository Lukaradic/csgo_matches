import { createRoot } from "react-dom/client";
import { store } from './app/store'
import { Provider } from 'react-redux'

import Matches from './features/matches/Matches';

const App = () => {
  return (
    <div>
      <Matches />
    </div>
  );
};

const contianer = document.getElementById("root");
const root = createRoot(contianer);
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);