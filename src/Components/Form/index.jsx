const Form = () =>{

    return(
        
        
        <form class="w-full max-w-sm rounded overflow-hidden shadow-lg ml-6 p-4 " >
            <h1 className="mb-4 ml-4">Booking</h1>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    From
                </label>
                </div>
                <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"/>
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                    To
                </label>
                </div>
                <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************"/>
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                    No of Guest
                </label>
                </div>
                <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************"/>
                </div>
            </div>
            
            <div class="items-center " >
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                <button class="shadow bg-green-300 hover:bg-green-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-2" type="button">
                    Confirm Booking
                </button>
                </div>

                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                <button class="shadow bg-green-300 hover:bg-green-900  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-2" type="button">
                    Save to Wishlist
                </button>
                </div>

                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                <button class="shadow bg-green-300 hover:bg-green-900  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-2" type="button">
                    Share the activity
                </button>
                </div>
            </div>
        </form>
        
    )

}

export default Form