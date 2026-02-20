import { ThemeProvider } from "@/context/ThemeContext";
import About from "@/pages/About";
import Agno from "@/pages/Agno";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import CrewAI from "@/pages/CrewAI";
import GrowChatProduct from "@/pages/GrowChatProduct";
import GrowMetrics from "@/pages/GrowMetrics";
import Home from "@/pages/Home";
import Integracoes from "@/pages/Integracoes";
import LangChain from "@/pages/LangChain";
import LangGraph from "@/pages/LangGraph";
import LangSmith from "@/pages/LangSmith";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import WABA from "@/pages/WABA";
import WorkWithUs from "@/pages/WorkWithUs";
import GrowCOEX from "@/pages/GrowCOEX";
import GrowConnect from "@/pages/GrowConnect";
import CES from "@/pages/metrics/CES";
import CSAT from "@/pages/metrics/CSAT";
import NPS from "@/pages/metrics/NPS";
import PMF from "@/pages/metrics/PMF";
import ENPS from "@/pages/metrics/eNPS";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-white text-black px-4 py-2 rounded font-medium"
          >
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
            <Route path="/growcoex" element={<GrowCOEX />} />
            <Route path="/growconnect" element={<GrowConnect />} />
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
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/waba" element={<WABA />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}
