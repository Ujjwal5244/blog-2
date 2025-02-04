// import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navbar/Navbar";
// import { TableOfContents } from "./components/tableOfcontent/Table";
import Home from "./components/Home/Home";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Home />
      {/* <TableOfContents /> */}
      <Footer />
    </div>
  );
}

export default App;
