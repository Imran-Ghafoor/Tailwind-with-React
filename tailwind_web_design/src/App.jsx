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

      {/* Image session starts here */}
      <header className="w-full h-auto">
        <img
          className="w-full hidden md:block"
          src="https://images.pexels.com/photos/3176452/pexels-photo-3176452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className="w-full md:hidden"
          src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </header>
      {/* Image session End here */}

      {/* Student session start */}
      <div className=" bg-black w-100 h-auto flex flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            "Pure Hardwork,No Shortcuts!"
          </p>
          <div className="w-36 md:w-52  h-1 border-b-4 border-yellow-500 mt-2 rounded-2xl md:mt-2 mb-12"></div>
        </div>
        {/* icons wrap */}
        <div className=" w-full flex flex-wrap justify-evenly">
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-40 h-40 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
              alt=""
            />
            <p className="text-3xl font-bold ">500+</p>
            <p className="text-2xl font-bold text-gray-500">
              Different Courses
            </p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-40 h-40 cursor-pointer"
              src="https://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Student-3-icon.png"
              alt=""
            />
            <p className="text-3xl font-bold">70,000+</p>
            <p className="text-2xl font-bold text-gray-500">
              Students Enrolled
            </p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-40 h-40 cursor-pointer"
              src="https://cdn.iconscout.com/icon/free/png-256/free-credit-card-1795347-1522706.png"
              alt=""
            />
            <p className="text-3xl font-bold">15,000+</p>
            <p className="text-2xl font-bold text-gray-500">
              Successfull Transition
            </p>
          </div>
        </div>
      </div>
      {/* Student session End */}

      {/* Product session */}
      <div className="w-100 h-auto flex flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            Our Products!
          </p>
          <div className="w-36 md:w-52  h-1 border-b-4 border-yellow-500 mt-2 rounded-2xl md:mt-2 mb-12"></div>
        </div>
        <div className=" w-[90%] h-auto flex flex-wrap justify-around">
          <div className="w-52 flex flex-col items-center mb-12 border-black border-2 rounded-xl p-2">
            <img
              className="cursor-pointer"
              src="https://cdn4.iconfinder.com/data/icons/seo-and-web-optimization-14/512/Testing_programming-512.png"
              alt=""
            />
            <p className="text-3xl font-bold">Tailwind skills lab</p>
            <p className="text-xl font-bold text-gray-600">
              Supercharge your project development with Tailwind lab.
            </p>
          </div>
          <div className="w-52 flex flex-col items-center mb-12 border-black border-2 rounded-xl p-2">
            <img
              className="cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrjlWJXHJMJ32fFKLfYAQ5LVBXwtg1oCutAdLMoZOxsqTbcaifCQ5jWqhBN-kHyl93KAE&usqp=CAU"
              alt=""
            />
            <p className="text-3xl font-bold">Job Portal</p>
            <p className="text-xl font-bold text-gray-600">
              Use exceptional templates for a stand out resume minu the signup
              process and take the path.
            </p>
          </div>
          <div className="w-52 flex flex-col items-center mb-12 border-black border-2 rounded-xl p-2">
            <img
              className="cursor-pointer"
              src="https://cdn1.iconfinder.com/data/icons/blue-business-7/512/work_experience-01-512.png"
              alt=""
            />
            <p className="text-3xl font-bold">Experience Portal</p>
            <p className="text-xl font-bold text-gray-600">
              Skills self-placed experience portal prioritises hands-on training
              internship program.
            </p>
          </div>
          <div className="w-52 flex flex-col items-center mb-12 border-black border-2 rounded-xl p-2">
            <img
              className="cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/256/204/204324.png"
              alt=""
            />
            <p className="text-3xl font-bold">Become an Affiliate</p>
            <p className="text-xl font-bold text-gray-600">
              Explore affiliate marketing oppertunities with skills and attain
              financial freedom.
            </p>
          </div>
          <div className="w-52 flex flex-col items-center mb-12 border-black border-2 rounded-xl p-2">
            <img
              className="cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/352/352727.png"
              alt=""
            />
            <p className="text-3xl font-bold">Hall of fame</p>
            <p className="text-xl font-bold text-gray-600">
              Students placements and 200k+ carrer transitions speak volume
              about courses.
            </p>
          </div>
        </div>
      </div>
      {/* Product session End*/}

      {/* Footer session */}

      <footer className="w-full items-center bg-gray-900 px-4 pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12 text-white">
        <div>
          <img
            className="w-40 h-16"
            src="https://logos.flamingtext.com/Word-Logos/skills-design-china-name.png"
            alt=""
          />
          <p className="my-4 text-white text-base">
            Email us: imranghafoor427@gmail.com
          </p>
          <img
            className="w-32 h-32"
            src="https://media.mktg.workday.com/is/image/workday/illustration-man-on-bar-charts-data-1?fmt=png-alpha&wid=1000"
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Tailwind Skills</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>About us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Products</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>Tailwind skills</p>
            <p>Job portal</p>
            <p>Experience Portal</p>
            <p>Become an Affiliate</p>
            <p>Hall of fame</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Links</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>LinkedIn</p>
            <p>Github</p>
            <p>Discord</p>
          </div>
        </div>
        <div className=" container mx-auto text-center py-1">
          <p className="text-sm text-gray-500">
            &copy; 2023 Imran-Ghafoor. All Rights Reserved by Imran.
          </p>
        </div>
      </footer>
      {/* Footer session End */}
    </>
  );
}

export default App;
