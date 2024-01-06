import { useState } from 'react';


function Navbar() {


  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  

    return (
        <div className='flex gap-5 items-center pt-4 justify-between text-center '>
           
            <div>
                <h1 className="font-semibold text-2xl text-black">Pti.</h1>
            </div>

<div>

<div className='flex gap-5 justify-between'>
<form>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="lg:w-4 lg:h-4  text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block lg:w-full w-32  p-2 ps-10 text-sm text-gray-900 border rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Audio, Books..."
          required
        />
        
      </div>
    </form>


    <div className="relative inline-block text-left p2 ">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center  gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
          onClick={toggleMenu}
        >
          MENU
          <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:text-orange-400" role="menuitem" tabIndex="-1" id="menu-item-0">
              Account settings
            </a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:text-orange-400" role="menuitem" tabIndex="-1" id="menu-item-1">
              Support
            </a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:text-orange-400" role="menuitem" tabIndex="-1" id="menu-item-2">
              License
            </a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:text-orange-400" role="menuitem" tabIndex="-1" id="menu-item-1">
              Support
            </a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:text-orange-400" role="menuitem" tabIndex="-1" id="menu-item-2">
              License
            </a>
            
          </div>
        </div>
      )}
    </div>

    
</div>



</div>

<div className='hidden lg:block text-5xl font-bold'> 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 bg-orange-500 text-white rounded-full">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

</div>

        </div>
    )
}

export default Navbar
