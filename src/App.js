import Router from "./Router";
import { Header, PageArea, Footer } from "./components/Index";
function App() {
  return (
    <>
      <Header />
      <PageArea>
        <Router />
      </PageArea>
      <Footer />
    </>
  );
}

export default App;
