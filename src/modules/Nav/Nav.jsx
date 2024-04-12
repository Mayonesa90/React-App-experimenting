import { SmileyNervous }  from 'phosphor-react'
import MyDropdown from './MyDropdown'


function Nav() {

    const options = [
        { label: 'Home', path: '/' },
        { label: 'Profile', path: '/profile' },
        { label: 'Contact', path: '/contact' }
      ];

    return (
        <header className=" flex w-full justify-between border-solid mx-auto border-white  items-center px-4 border-2 h-12 rounded-3xl mb-3">
            <SmileyNervous color='pink' />
            <MyDropdown options={options}/>
        </header>
    )
}


export default Nav;