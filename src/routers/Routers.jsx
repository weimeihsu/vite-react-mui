import { Route, Routes } from 'react-router-dom'
import BoxList from '../pages/BoxList'
import HomePagae from '../pages/HomePage'
const Routers = () => {
    return ( 
        <Routes>
            <Route index element={<HomePagae/> } />
            <Route path="boxes" element={<BoxList/> } />
        </Routes>
     );
}
 
export default Routers;