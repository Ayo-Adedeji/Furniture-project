import React from 'react'
import { Link} from 'react-router-dom'


const Signin = () => {
  return (
    <section className=" h-[100vh]  "  >
      
          <form className="max-w-sm mx-auto mt-20 bg-[#DFE9F4] bg-opacity-30 px-10 py-10 border-solid border-2 rounded-2xl">
            <h1 className='text-center mb-5 font-bold text-3xl text-[#054C73] '>Sign in</h1>
          <div className="mb-5">
            <label 
            type="email" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email</label>
            <input 
            type="email" 
            id="email" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
             placeholder="name@flowbite.com" required />
          </div>

          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input
             type="password"
              id="password" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
               required />
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input 
              id="remember" 
              type="checkbox" 
              value="" 
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label 
            for="remember" 
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Remember me</label>
          </div>
          {/* <Link to="/">
            <button 
          type="login" 
          className="text-white bg-[#054C73] hover:bg-[#054c7391] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Login</button>
          </Link> */}
          
          <Link to="/"  > 
           <button className="text-white bg-[#054C73] hover:bg-[#054c7391] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Sign in</button>
          </Link>
          
          

          <p className='font-semibold text-center'>or</p>
            <h5 className=' text-center mb-2'>Don't have an account?</h5>
            <Link to="/signup">
              <button  type="login" 
          className="text-white bg-[#054C73] hover:bg-[#054c7391] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " >Create account</button>
            </Link>
          
        </form>
      
         
    </section>
  )
}

export default Signin;