import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import { Home } from "./home";

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
