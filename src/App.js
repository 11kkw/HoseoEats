import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakra/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} /> // 홈 페이지 라우트
          </Routes>
        </Router>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
