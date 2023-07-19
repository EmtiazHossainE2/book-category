import { Link } from 'react-router-dom';
import Book from '../components/ui/Book';
import { useGetBooksQuery } from '../redux/features/book/bookApi';
import { useState } from 'react';

interface IBook {
    _id: number
    title: string
    author: string
    genre: string
    publicationDate: string
    img: string

}

const AllBooks = () => {
    const [search, setSearch] = useState('')
    const handelSearch = (e: any) => {
        e.preventDefault()

        console.log(e.target.search.value);
        setSearch(`searchTerm=${e.target.search.value}`)
    }
    console.log(search);


    const { data, isLoading, error } = useGetBooksQuery(search, { refetchOnMountOrArgChange: true, pollingInterval: 30000 })


    console.log(data, 'this is data');
    console.log(isLoading, error);






    return (
        <div>
            <h2 className='text-2xl text-black text-center mt-5 font-bold'>All Books</h2>
            <div>
                <div className='grid justify-center mt-2'>
                    <form onSubmit={handelSearch} className="join  text-center">
                        <div>
                            <div>

                                {/* // search bar */}
                                <input name='search' className="input input-bordered join-item" placeholder="Search..." required={true} />
                            </div>

                        </div>

                        <div className="indicator">
                            <button className="btn join-item">Search</button>
                        </div>
                    </form>
                    <div className='text-center mt-5'>
                        <Link to="/add-new-book">
                            <button className=" btn btn-success">Add NEW BOOK</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='mx-auto p-10 grid justify-center md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-y-10 gap-10'>
                {
                    data?.data?.map((book: IBook) => (
                        <Book key={book._id} book={book} />
                    ))
                }
            </div>

            <div className='text-center my-5'>
                <Link to="/add-new-book">
                    <button className="btn px-7 py-2 btn-outline btn-success">Add NEW BOOK</button>
                </Link>
            </div>
        </div>
    );
};

export default AllBooks;