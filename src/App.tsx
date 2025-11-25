import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from "@/pages/Home";
import Integracoes from "@/pages/Integracoes";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import LangChain from "@/pages/LangChain";
import LangGraph from "@/pages/LangGraph";
import N8n from "@/pages/N8n";
import CrewAI from "@/pages/CrewAI";
import Agno from "@/pages/Agno";
import WorkWithUs from "@/pages/WorkWithUs";
import LangSmith from "@/pages/LangSmith";
import GrowChatProduct from "@/pages/GrowChatProduct";
import GrowMetrics from "@/pages/GrowMetrics";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/integracoes" element={<Integracoes />} />
          <Route path="/growchat-produto" element={<GrowChatProduct />} />
          <Route path="/growmetrics" element={<GrowMetrics />} />
          <Route path="/agno" element={<Agno />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/langchain" element={<LangChain />} />
          <Route path="/n8n" element={<N8n />} />
          <Route path="/langgraph" element={<LangGraph />} />
          <Route path="/crewai" element={<CrewAI />} />
          <Route path="/langsmith" element={<LangSmith />} />
          <Route path="/trabalhe-conosco" element={<WorkWithUs />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
