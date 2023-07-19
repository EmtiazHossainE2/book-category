import Book from './Book';
import { IBook } from '../../types/globalTypes';
import { useGetBooksQuery } from '../../redux/features/book/bookApi';



const Books = () => {


    const { data } = useGetBooksQuery(undefined)

    // const book = data?.data?.book?.reverse()
    console.log(data);

    // console.log(data?.data?.reverse());


    return (
        <>
            <div>
                <h2 className='text-2xl text-center mt-5 font-bold'>Books</h2>
            </div>
            <div className=' p-10 grid justify-center md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-y-10 gap-10'>
                {
                    data?.data?.map((book: IBook) => (
                        <Book book={book} />
                    ))
                }
            </div>
        </>
    );
};



export default Books;