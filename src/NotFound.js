import brokenFileIcon from './broken-file-icon.png';

const NotFound = () => {
    return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700 animate-fade-in">
    <div className="flex items-center gap-4 text-[9rem] font-bold">
    404
    <img src={brokenFileIcon} alt="Broken file" className="w-20 h-20 animate-bounce  relative top-4" onError={(e) => e.target.style.display = 'none'} />
    </div>
    <div className="text-2xl font-medium mt-4 fade-in-text">Page not found</div>
    <p className="mt-2 text-gray-500 text-center px-4 fade-in-text">
    The page you are looking for doesn't exist or another error occurred.
    </p>
</div>
);
}

export default NotFound;