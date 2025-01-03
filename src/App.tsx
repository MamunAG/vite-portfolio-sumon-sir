import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about";
import Layout from "./pages/layout";
import Services from "./pages/services";
import Attorneys from "./pages/attorney";
import ContactUs from "./pages/contact-us";
import Blogs from "./pages/blogs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WrappedBlogDetails from "./pages/blog-details";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/attorneys" element={<Attorneys />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/details/:id" element={<WrappedBlogDetails />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
