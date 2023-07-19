import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/ui/Footer';

const MainLaylout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLaylout;