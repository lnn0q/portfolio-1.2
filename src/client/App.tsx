import Header from "./Header";
import Navigator from "./components/Navigator";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigator />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
