import React from 'react';

const Header = () => {
    return (
        <header className='bg-gray-800 p-5 text-white'>
            {/** Justify between - x axis, items center (similar to ~ allign item) - y axis*/}
            <div className='container mx-auto flex justify-between items-center'>
                <div className='text-xl font-bold'>My App</div>
                <nav>
                    <a href="#" className='px-4'>Home</a>
                    <a href="#" className='px-4'>About</a>
                    <a href="#" className='px-4'>Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;

/*
  .container {
  max-width: 100%;
  width: 1200px; 
  margin: 0 auto;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.flex {
    display: flex
}

.justify-between {
    justify-content: space-between;
}

.items-center {
    align-items: center
}
*/