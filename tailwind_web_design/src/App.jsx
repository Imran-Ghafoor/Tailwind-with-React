// import "./App.css";

function App() {
  return (
    <>
    {/* navbar start */}
      <nav className="bg-indigo-200 w-full h-14 flex justify-between items-center px-4 md:px-4">
        <div className="text-indigo-600 text-2xl font-bold">
          Tailwind skills
        </div>
        <ul className="md:flex hidden font-semibold">
          <li className="mx-4 cursor-pointer">Home</li>
          <li className="mx-4 cursor-pointer">About</li>
          <li className="mx-4 cursor-pointer">Contact</li>
        </ul>
        <div className=" hidden md:block font-bold px-2 py-2 cursor-pointer rounded-md text-white bg-indigo-700   ">
          Login/Signup
        </div>
        <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
      {/* navbar ends */}
    </>
  );
}

export default App;
