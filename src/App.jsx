import { createRoot } from "react-dom/client";

const App = () => {
    return (
      <div>
      </div>
    );
  };
  
  const contianer = document.getElementById("root");
  const root = createRoot(contianer);
  root.render(<App />);