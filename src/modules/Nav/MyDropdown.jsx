import 'react-dropdown/style.css';
import { List } from 'phosphor-react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { X } from 'phosphor-react'


const MyDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        };  

    const options = [
        { label: 'Home', path: '/' },
        { label: 'Profile', path: '/profile' },
        { label: 'Contact', path: '/contact' }
        ];

    return (
        <div className="relative inline-block">
            <button onClick={toggleDropdown} className="flex items-center">
                {isOpen ? 
                    <X className="h-5 w-5" color='pink' /> : 
                    <List className="h-5 w-5" color='pink' />
                }
            </button>
            {isOpen && (
                <div className="absolute flex -bottom-1.5 right-7 max-w-fi">
                    {options.map((option, index) => (
                        <Link key={index} to={option.path} className="block mx-1 px-4 py-2 rounded-sm text-xs text-white-700  bg-fuchsia-400 bg-opacity-60 shadow-lg hover:bg-fuchsia-300 hover:rounded-md hover:text-slate-200 font-Lemonmilk-Medium">
                            {option.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
  );

}

export default MyDropdown