const SignUp = () => {
  return ( 
      <main className=" text-neutral-600 min-h-screen">

              <h1 className="text-3xl text-center font-semibold">Sign Up</h1>

          <form className="shadow-lg rounded-md p-8 w-2/3 m-auto flex flex-col justify-center">

              <div className="grid grid-cols-3 items-center place-content-center">
          
              <label htmlFor="name" className="col-span-1 font-bold text-l">Name: </label>
              <input type="text" name="name" id="name" className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none"/>
              
              <label htmlFor="phone" className="col-span-1 font-bold text-l">Age: </label>
              <input type="number" name="name" id="name" className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none"/>
              
              <label htmlFor="name" className="col-span-1 font-bold text-l">Matric_Number: </label>
              <input type="Email" name="name" id="name" className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none"/>
              
              <label htmlFor="name" className="col-span-1 font-bold text-l">Email: </label>
              <input type="text" name="name" id="name" className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none"/>

              <label htmlFor="name" className="col-span-1 font-bold text-l">Department: </label>
              <input type="text" name="name" id="name" className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none"/>
              
              <div className=" md:ml-20 flex justify-center col-span-3">
                <button
              className=" px-7 py-5
              bg-lime-700
              border
              border-neutral-400
              mt-10 mx-10
              text-neutral-950
              text-xl
              transition-all
              duration-100 
              shadow-xl
              rounded-full shadow-neutral-500 hover:shadow-lg hover:font-bold ">Submit</button>
              </div>

              </div>
          </form>
      </main>
   );
}

export default SignUp;