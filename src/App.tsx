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
  return (
    <div className="App">
      <Header name={`Saulo`} navItems={navItems}></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
