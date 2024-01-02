import { Button } from "@mui/material";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = ()=>{
  return(
    <Routes>
      <Route path="/pagina-inicial" element={<Button>Teste</Button>}></Route>
      <Route path="*" element={<p>Pagina nao encontrada</p>}></Route>
    </Routes>
  )
};