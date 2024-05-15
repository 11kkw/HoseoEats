import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Layout from "./components/layout";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakra/theme";
import Fonts from "./chakra/Fonts";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <Layout>
        <Router>
          <Routes>
            <Route path="/details/:title" Component={Details} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Router>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
