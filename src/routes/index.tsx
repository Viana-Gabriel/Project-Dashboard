import { Button } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = ()=>{
  const {toggleTheme} = useAppThemeContext()
  return(
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Teste</Button>}></Route>
      <Route path="*" element={<p>Pagina nao encontrada</p>}></Route>
    </Routes>
  )
};