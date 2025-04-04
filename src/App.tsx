// import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import {Routes, Route, BrowserRouter} from "react-router-dom"

function Router() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={< Home  />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    </BrowserRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
     < Router  />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
