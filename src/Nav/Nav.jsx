import React from 'react';
import { Link} from 'react-router';
import logo from '../assets/image.png'

const Nav = () => {

    return (
        <div className="dark:bg-black shadow-md border-b-gray-300 border-b rounded-b-lg px-6 py-4">
            <div className="flex justify-center items-center">
                <img  className='lg:w-[35px] md:w-[28px] w-[23px] mt-1' src={logo} alt="" />
                <Link to='/' className="btn btn-ghost p-1 text-primary md:text-2xl lg:text-3xl text-xl font-semibold md:ml-1"> Chittagong Polytechnic Institute</Link>  
            </div>
        </div>
    );
};

export default Nav;