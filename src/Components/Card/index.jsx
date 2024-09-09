
const Card = () =>{

    return(
        
            <div className="w-1/3 h-max rounded overflow-hidden shadow-lg ml-80 mt-10">
                <h1 className="text-3xl font-extrabold dark:text-black mb-4">Vintage Double Decker Bus Tour <br />& Thames River Cruise</h1>
                <figure className=" mb-2 w-full  relative"  >
                    <img src="https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="montanias" />
                    
                </figure>
                <div className="flex">
                    <figure className="w-40 ml-0 mb-1 mr-1" >
                        <img src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </figure>
                    <figure className="w-40 ml-0 mb-1 mr-1">
                        <img src="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </figure>
                    <figure className="w-40 ml-0 mb-1 mr-1">
                        <img src="https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </figure>
                    <figure className="w-40 ml-0 mb-1 mr-1">
                        <img src="https://images.pexels.com/photos/17783544/pexels-photo-17783544/free-photo-of-mar-puesta-de-sol-playa-arena.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </figure>

                </div>
            </div>

    )
}

export default Card