import { useState } from "react";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const navItems = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Type",
      url: "/type",
    },
  ];
  const [name, setName] = useState<string>();
  const login = ({ name }: { name: string }) => {
    setName(name);
    return name;
  };

  return (
    <div className="App">
      <Header name={name} login={login} navItems={navItems}></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
