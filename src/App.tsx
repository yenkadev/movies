import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import Loading from "./components/loading";
import AppContextProvider from "./context/AppContextProvider";

const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));
const Catalog = lazy(() => import("./pages/Catalog"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <AppContextProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:category/search/:keyword" element={<Catalog />} />
              <Route path="/:categogy/:id" element={<Detail />} />
              <Route path="/:categogy" element={<Catalog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </AppContextProvider>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
