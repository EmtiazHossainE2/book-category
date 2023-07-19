import Banner from '../components/ui/Banner';
import Books from '../components/ui/Books';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='px-5 lg-px-10 mx-auto'>

                <Books />
            </div>
        </div>
    );
};

export default Home;