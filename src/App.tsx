// import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import {Routes, Route, BrowserRouter} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route index element={< Home  />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
