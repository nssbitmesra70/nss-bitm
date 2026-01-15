import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import GovernmentSchemes from "./pages/GovernmentSchemes";
import Layout from "./components/Layout";
import Message from "./components/Message";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={
            <>
            <Hero/>
            <Message/>
            </>
          }/>
          <Route path="/schemes" element={<GovernmentSchemes/>}/>
        </Route>
      </Routes>

    </>
  );
}
