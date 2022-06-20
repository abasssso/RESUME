import About from "./About/About";
import Header from "./Header/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./Skills/Skills";
import Carrier from "./Carrier/Carrier";
import Collection from "./Collection/Collection";
import Footer from "./Footer/Footer";

function App() {
  const apes = [
    {
      name: "1721",
      image:
        "https://img.seadn.io/files/b6f594010c5495fa1322009ee8e3e26f.png?fit=max&w=600",
      price: "$107,151.59",
      id: "1",
    },
    {
      name: "3438",
      image:
        "https://img.seadn.io/files/128c3f3a21e145fa7bb2806f16435fc8.png?fit=max&w=600",
      price: "$108,393.60",
      id: "2",
    },
    {
      name: "6940",
      image:
        "https://img.seadn.io/files/a3ca89db5e4792dfb21dc89a6f6b3fc8.png?fit=max&w=600",
      price: "$116,669.90",
      id: "3",
    },
    {
      name: "1128",
      image:
        "https://img.seadn.io/files/137ae0bb33dcad73524c9f5727d0a1a4.png?fit=max&w=600",
      price: "$122,936.41",
      id: "4",
    },
    {
      name: "5883",
      image:
        "https://img.seadn.io/files/bf6b7a36d2ed23551a601ca9fa50bccd.png?fit=max&w=600",
      price: "$1,254,430.10",
      id: "5",
    },
    {
      name: "8489",
      image:
        "https://img.seadn.io/files/eb7ce49d3683d5f9e8ada6e611ccdaec.png?fit=max&w=600",
      price: "$1,127,970.90",
      id: "6",
    },
    {
      name: "2549",
      image:
        "https://img.seadn.io/files/5238ddbe4ddf696931706a0d45df4f9c.png?fit=max&w=600",
      price: "$1,002,640.80",
      id: "7",
    },
    {
      name: "2544",
      image:
        "https://img.seadn.io/files/5e527eecd0efba4720efcce7f0f47fb3.png?fit=max&w=600",
      price: "$564,550.00",
      id: "8",
    },
    {
      name: "2596",
      image:
        "https://img.seadn.io/files/f6bbca9c08be5d7ef266110a67cfd6e9.png?fit=max&w=600",
      price: "$475,001.08",
      id: "9",
    },
    {
      name: "2139",
      image:
        "https://img.seadn.io/files/0a922ba061b51202a4f4cd02f5a1578c.png?fit=max&w=600",
      price: "$474,222.00",
      id: "10",
    },
    {
      name: "8150",
      image:
        "https://img.seadn.io/files/2b43f50f18c11e45330dd1237d2bb493.png?fit=max&w=600",
      price: "$$475,001.08",
      id: "11",
    },
    {
      name: "528",
      image:
        "https://img.seadn.io/files/35a149b4aad74d151d51948762e6910e.png?fit=max&w=600",
      price: "$1,505,090.30",
      id: "10",
    },
  ];
  return (
    <div>
      {/* <Header /> */}
      {/* <About /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/collection" element={<Collection apes={apes} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
