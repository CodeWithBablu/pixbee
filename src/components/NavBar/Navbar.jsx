import Search from './Search'

import { motion } from 'framer-motion'

import navbarList from '../../config/navbarList'

const lighticon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>;


const darkicon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>;


const Navbar = ({ theme, toggleTheme }) => {

  return (
    <div className=' absolute top-0 left-0 w-full flex items-center justify-between py-4 px-2 md:px-2 bg-white dark:bg-secondary'>


      <div className=' relative flex items-center space-x-2'>

        <div className="absolute z-0 bottom-2 -left-4 w-12 h-12 bg-rose-500 dark:bg-indigo-400 rounded-full
    filter blur-lg opacity-90 animate-blob animation-delay-4000"></div>

        <div className="absolute z-0 bottom-2 right-0 md:-right-4 w-12 h-12 bg-teal-500 dark:bg-rose-400 rounded-full
     filter blur-xl opacity-90 animate-blob animation-delay-3000"></div>

        <motion.div whileTap={{ scale: 0.7 }} className=' z-10 flex space-x-2 items-center cursor-pointer'>


          <h2 className='flex text-xl md:text-2xl font-medium font-dynapuff dark:text-white'>Pix<span className=' text-rose-500 dark:text-teal-400'>b</span>ee</h2>

        </motion.div>

      </div>

      <Search text={"Search images here"} allowMaxWidth={true} />

      <div className=' hidden md:flex items-center space-x-6'>
        {
          navbarList.map((link) => (
            <span key={link.id} className=' cursor-pointer hover:scale-75 ease-in-out duration-100 text-sm font-poppins text-slate-800 dark:text-dimWhite font-semibold'>{link.title}</span>
          ))
        }
      </div>

      <span onClick={toggleTheme} className={` cursor-pointer rounded-full border-2 p-1 dark:text-dimWhite ${theme == 0 ? ' border-slate-600' : 'border-cyan-500'}`}>
        {theme == 0 ? lighticon : darkicon}
      </span>

    </div >
  )
}

export default Navbar