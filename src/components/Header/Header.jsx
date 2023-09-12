import prifile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between mb-12 items-center p-4 max-w-6xl mx-auto border-b-2'>
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img src={prifile} alt="" />
        </header>
    );
};

export default Header;