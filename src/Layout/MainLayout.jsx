import { Outlet } from 'react-router';
import NavBar from '../Components/Shared/Navbar/NavBar';

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            
        </div>
    );
};

export default MainLayout;