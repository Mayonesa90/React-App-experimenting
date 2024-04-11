import { SmileyNervous }  from 'phosphor-react'
// import { Route, Routes } from 'react-router-dom';
import MyDropdown from './MyDropdown'
// import App from '../../App';
// import Profile from '../Nav/Profile/Profile'

function Nav() {

    const options = [
        { label: 'Home', path: '/' },
        { label: 'Profile', path: '/profile' },
        { label: 'Contact', path: '/contact' }
      ];

    return (
        <header className=" flex justify-between max-w-screen-sm border-solid mx-auto border-white  items-center px-4 border-2 h-12 rounded-3xl mb-3">
            <SmileyNervous color='pink' />
                <MyDropdown options={options}>
                {/* <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/contact" />
                </Routes> */}
                </MyDropdown>
        </header>
    )
}


export default Nav;