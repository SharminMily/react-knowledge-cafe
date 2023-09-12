import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 mt-12 rounded-sm ">
            <div className='border border-blue-900 rounded-xl'>
                <h4 className='text-2xl rounded-xl p-6 font-semibold bg-pink-200 text-blue-800 text-center'>Reading Time: {readingTime} min</h4>
            </div>
            <div className='bg-gray-300 mt-4 rounded-xl p-4'>
            <h2 className="text-xl pt-2 text-center pb-4 mb-8 text- font-semibold">Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;

