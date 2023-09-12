import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {

    const {title} = bookmark;
    return (
        <div className='bg-slate-100 p-4 m-4 pt-4 mt-4 mr-4 rounded-xl'>
            <h4 className='text-xl'>{title}</h4>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;