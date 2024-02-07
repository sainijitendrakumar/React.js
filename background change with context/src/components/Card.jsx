import React from 'react'

function Card() {
  return (
    <div>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://www.eurokidsindia.com/blog/wp-content/uploads/2023/10/ancient-indian-history.jpg" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    The importance of ancient Indian history lies in the fact that it’s one of the oldest civilisations seen on the face of the earth.
                    </h5>
                </a>
                
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">Ancient Indian Civilization</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      History
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card