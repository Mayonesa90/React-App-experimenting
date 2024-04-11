import 'react-dropdown/style.css';
import { List } from 'phosphor-react'
import { useState } from 'react'
import { Link } from "react-router-dom";


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
                <List className="h-5 w-5" />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                    {options.map((option, index) => (
                        <Link key={index} to={option.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            {option.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
  );

}

export default MyDropdown