import "./App.css";

function App() {
  return (
    <>
      <h1> Tailwind css</h1>
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
    </>
  );
}

export default App;
