import { useGetWishListQuery, useUpdateWishListBookMutation } from '../redux/features/wishList/wishList';
import { toast } from 'react-toastify';

const PlanToRead = () => {
    const { data } = useGetWishListQuery(undefined, { refetchOnMountOrArgChange: true, pollingInterval: 30000 })
    const [updateWishListBook, { isSuccess }] = useUpdateWishListBookMutation()

    console.log(data?.data);
    const handelUpdateWishListBook = (id: string) => {
        const options = {
            id: id,
            data: { finishRead: true }
        }
        console.log(options);

        updateWishListBook(options)
    }
    if (isSuccess) {
        toast("Successfully Add to Reading List :)");
    }

    return (
        <div>
            <h2 className="text-2xl mt-5 text-center font-bold">PLAN TO READ</h2>

            <div className='p-10 grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-y-10 gap-10'>
                {
                    data?.data?.map((book: any) => (
                        <div key={book._id} className={`${book?.plantoRead == false && "hidden"}`}>

                            <div className='flex gap-5' >
                                <img className='w-32 h-32 rounded-md' src={book?.bookId.img} alt="" />

                                <div>
                                    <p className='text-gray-900 font-bold text-xl mb-2'>Title: {book?.bookId?.title}</p>
                                    <p className='text-gray-900 font-bold text-md mb-2'>Author: {book?.bookId?.author}</p>

                                    <p className='text-gray-900 font-bold text-xl mb-2'>Status: {book?.finishRead == false ? 'Pending' : "Done"}</p>
                                    {
                                        book?.finishRead == false &&
                                        <button onClick={() => handelUpdateWishListBook(book._id)} className='btn btn-xs bg-success'>Complete Read</button>
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PlanToRead;