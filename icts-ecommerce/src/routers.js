import { Route, Routes } from 'react-router-dom';

import Produtos from './pages/Produtos';
import Carrinho from './pages/Carrinho';

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Produtos/>} />
            <Route path="/carrinho" element={<Carrinho/>} />
        </Routes>
    )
}