import { IBook } from '../../types/globalTypes';
import { Link } from 'react-router-dom';

interface IProps {
    book: IBook
}

const Book = ({ book }: IProps) => {

    // const location = useLocation();
    // const path = location.pathname;

    return (
        <div>

            <Link to={`/book-details/${book._id}`}>
                <div className="w-96 border hover:translate-y-1  hover:transition-transform rounded-lg p-5 border-gray-400 text-center shadow-xl ">
                    <div className="h-96  mx-auto ">
                        <img className='h-full rounded-md w-full' src={book.img} alt="" />
                    </div>

                    <div className=" lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between">
                        <div className="mb-8 text-start">

                            <div className="text-gray-900 font-bold text-xl mb-2">Title: {book.title}</div>
                            <div className=' gap-2'>
                                <p className="text-gray-800 text-lg font-semibold mb-2">Auhtor: {book?.author}</p>
                                <p className="text-gray-800 text-lg font-semibold">Genre: {book.genre}</p>
                                <p className="text-gray-800 text-lg pt-2 font-semibold">Date: {book.publicationDate}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Book;