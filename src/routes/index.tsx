import { Route, Routes } from "react-router-dom";

export const AppRoutes = ()=>{
  return(
    <Routes>
      <Route path="/pagina-inicial" element={<p>Pagina Inicial</p>}></Route>
      <Route path="*" element={<p>Pagina nao encontrada</p>}></Route>
    </Routes>
  )
};