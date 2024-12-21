import React from 'react';
import { Link } from 'react-router-dom';

function HeaderItems({ path,name, Icon, onclick = () => {} }) {
    return (
        <Link to={path} className='group relative text-white flex items-center gap-1.5 font-semibold cursor-pointer' onClick={onclick}>
            <Icon />
            <h2 className="relative text-sm  md:text-[16px] lg:text-lg">
                {name}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </h2>
        </Link>
    );
}

export default HeaderItems;
