import "./App.css";

function App() {
  return (
    <>
      {/* <h1 className="text-white text-1xl mb-2">Hello Tailwind</h1> */}
      <div className="">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div>
            <img
              className="h-12 w-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Physics_wallah_logo.jpg/800px-Physics_wallah_logo.jpg"
              alt="logo"
            />
          </div>
          <div className="text-2xl font-semibold">
            <div>
              Tailwind Css
              <p className="text-slate-600 text-base">By Imran Ghafoor!</p>
            </div>
          </div>
        </div>
      </div>

      <button className="bg-sky-500 mt-2 text-center font-bold text-white text-base p-2 rounded-lg hover:bg-white hover:text-black">
        Buy Now
      </button>
      <div className="text-center my-4">
        <p className="text-white sm:text-yellow-500 md:text-green-500 lg:text-purple-500 xl:text-orange-500 2xl:text-blue-600">
          Lorem, ipsum dolor.
        </p>
      </div>

      {/* card */}
      <div className="mt-3">
        <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div>
              <img
                className="h-50 w-full object-cover md: h-full md:w-48"
                src="https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-orange-600 font-semibold md:text-indigo-700">
                My New Card
              </div>
              <a
                className="block mt-1 text-lg font-medium text-black hover:text-orange-800 md:hover:text-blue-700"
                href="#"
              >
                Tailwind Css is Amazing once you understand the{" "}
                <span className="bg-yellow-500 p-[1px] px-[14px]">Power</span>{" "}
                of it !
              </a>
              <p className=" mt-2 text-slate-600 text-base">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
