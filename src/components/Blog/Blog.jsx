import { FaBeer, FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog
    // console.log(blog)
    return (
        <div className='my-4 mr-4 '>
            <img className='w-full rounded-lg' src={cover} alt="`cover picture of the title ${title}" />
            <div className='flex justify-between mt-4 '>
            <div className='flex justify-center gap-2 '>
                <img className='w-14' src={author_img} alt="" />
                <div className=''>
                    <h4 className='text-lg font-semibold'>{author}</h4>
                    <p><small>{posted_date}</small></p>
                </div>
            </div>

            {/* Bookmark */}
            <div>
                <span>{reading_time} min read</span>
                <button 
                onClick={() => handleAddToBookmark(blog)} className='ml-2 text-xl text-blue-700'> <FaBookmark/>
                </button>
            </div>

            </div>
            <h3 className='text-2xl font-bold pt-2'>{title}</h3>
            <p className='mt-2 mb-2'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)}
            className='text-purple-900 underline font-bold'>Mark As Read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;