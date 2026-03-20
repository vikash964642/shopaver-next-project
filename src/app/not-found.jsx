
import Link from 'next/link';


const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Oops! Page not found</h2>
      <p className="text-lg mt-2 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      
      <Link href="/" className="font-bold text-[15px] mt-6 px-6 py-3 cursor-pointer">
             
              <button className="w-[140px] h-[44px]  bg-purple-950 text-white px-[16px] py-2 rounded-[4px] md:bg-white md:border-2 md:border-primary md:text-primary hover:bg-primary hover:text-white">Go To Home</button>
            </Link>
           
    </div>
  );
};

export default PageNotFound;
