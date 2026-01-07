import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import Integracoes from "@/pages/Integracoes";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import LangChain from "@/pages/LangChain";
import LangGraph from "@/pages/LangGraph";
import CrewAI from "@/pages/CrewAI";
import Agno from "@/pages/Agno";
import WorkWithUs from "@/pages/WorkWithUs";
import About from "@/pages/About";
import Authors from "@/pages/Authors";
import LangSmith from "@/pages/LangSmith";
import NPS from "@/pages/metrics/NPS";
import CSAT from "@/pages/metrics/CSAT";
import CES from "@/pages/metrics/CES";
import PMF from "@/pages/metrics/PMF";
import ENPS from "@/pages/metrics/eNPS";
import GrowChatProduct from "@/pages/GrowChatProduct";
import GrowMetrics from "@/pages/GrowMetrics";
import { ThemeProvider } from "@/context/ThemeContext";
import NotFound from "@/pages/NotFound";
import BlogPost from "@/pages/BlogPost";

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
      <ThemeProvider>
        <Router>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-white text-black px-4 py-2 rounded font-medium">
            Pular para o conteúdo principal
          </a>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/integracoes" element={<Integracoes />} />
            <Route path="/growchat" element={<GrowChatProduct />} />
            <Route path="/growmetrics" element={<GrowMetrics />} />
            <Route path="/agno" element={<Agno />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/langchain" element={<LangChain />} />
            <Route path="/langgraph" element={<LangGraph />} />
            <Route path="/crewai" element={<CrewAI />} />
            <Route path="/langsmith" element={<LangSmith />} />
            <Route path="/nps" element={<NPS />} />
            <Route path="/csat" element={<CSAT />} />
            <Route path="/ces" element={<CES />} />
            <Route path="/pmf" element={<PMF />} />
            <Route path="/enps" element={<ENPS />} />
            <Route path="/trabalhe-conosco" element={<WorkWithUs />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/autores" element={<Authors />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}
