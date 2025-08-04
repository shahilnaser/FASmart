import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const [stateDropdown, setStateDropdown] = useState(false); // Track dropdown state

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.style.backgroundColor = theme === "dark" ? "#1e293b" : "#ffffff";
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Schemes", path: "/schemes" },
    { name: "News", path: "/news" },
    { name: "Yield", path: "/yield-prediction" },
    { name: "Central Gov Schemes", path: "/central-schemes" },
    {
      name: "State Gov Schemes",
      dropdown: true, // Mark as dropdown
    },
    { name: "Eligibility Checker", path: "/eligibility-checker" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        sticky ? "shadow-md bg-base-200 dark:bg-slate-700" : "bg-transparent"
      }`}
    >
      <div className="navbar max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-between items-center py-3">
        {/* Logo & Mobile Menu */}
        <div className="navbar-start flex items-center">
          <div className="dropdown lg:hidden">
            <button className="btn btn-ghost" tabIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul className="dropdown-content mt-3 z-50 p-2 shadow bg-base-100 dark:bg-slate-800 rounded-box w-52">
              {navItems.map(({ name, path, dropdown }) =>
                dropdown ? (
                  <li key={name} className="relative">
                    <button onClick={() => setStateDropdown(!stateDropdown)} className="cursor-pointer">
                      {name}
                    </button>
                    {stateDropdown && (
                      <ul className="absolute left-0 mt-2 bg-base-100 dark:bg-slate-800 shadow-md rounded-md p-2 max-h-60 overflow-y-auto">
                        {states.map((state) => (
                          <li key={state}>
                            <Link to={`/state-schemes/${state.toLowerCase().replace(/\s+/g, "-")}`}>
                              {state}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={name}>
                    <Link to={path}>{name}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold cursor-pointer">
            Agro-Help
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map(({ name, path, dropdown }) =>
              dropdown ? (
                <li key={name} className="relative">
                  <button onClick={() => setStateDropdown(!stateDropdown)} className="cursor-pointer">
                    {name}
                  </button>
                  {stateDropdown && (
                    <ul className="absolute left-0 mt-2 bg-base-100 dark:bg-slate-800 shadow-md rounded-md p-2 max-h-60 overflow-y-auto">
                      {states.map((state) => (
                        <li key={state}>
                          <Link to={`/state-schemes/${state.toLowerCase().replace(/\s+/g, "-")}`}>
                            {state}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={name}>
                  <Link to={path}>{name}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Search, Theme Toggle & Authentication */}
        <div className="navbar-end flex items-center space-x-3">
          {/* Search Bar */}
          <div className="hidden md:block">
            <label className="flex px-3 py-2 border rounded-md items-center gap-2">
              <input
                type="text"
                className="w-32 outline-none px-1 dark:bg-slate-900 dark:text-white"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {/* Theme Toggle */}
          <button
            className="w-7 h-7 flex items-center justify-center rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Authentication */}
          <div className="flex space-x-2">
            {authUser ? (
              <Logout />
            ) : (
              <>
                <Link to="/login" className="px-3 py-1 bg-blue-500 text-white rounded-md">
                  Login
                </Link>
                <Link to="/signup" className="px-3 py-1 bg-green-500 text-white rounded-md">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;






// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Logout from "./Logout";
// import { useAuth } from "../context/AuthProvider";

// function Navbar() {
//   const [authUser] = useAuth();
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
//   const [sticky, setSticky] = useState(false);

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     document.body.style.backgroundColor = theme === "dark" ? "#1e293b" : "#ffffff";
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   useEffect(() => {
//     const handleScroll = () => setSticky(window.scrollY > 0);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Schemes", path: "/schemes" },
//     { name: "News", path: "/news" },
//     { name: "Yield", path: "/yield-prediction" },
//     { name: "Central Gov Schemes", path: "/central-schemes" },
//     {
//       name: "State Gov Schemes",
//       path: "#",
//       dropdown: [
//         { name: "Bihar", path: "/state-schemes/bihar" },
//         { name: "Uttar Pradesh", path: "/state-schemes/up" },
//         { name: "Maharashtra", path: "/state-schemes/maharashtra" },
//       ],
//     },
//     { name: "Eligibility Checker", path: "/eligibility-checker" },
//   ];

//   return (
//     <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${sticky ? "shadow-md bg-base-200 dark:bg-slate-700" : "bg-transparent"}`}>
//       <div className="navbar max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-between items-center py-3">
        
//         {/* Logo & Mobile Menu */}
//         <div className="navbar-start flex items-center">
//           <div className="dropdown lg:hidden">
//             <button className="btn btn-ghost" tabIndex={0}>
//               ☰
//             </button>
//             <ul className="dropdown-content mt-3 z-50 p-2 shadow bg-base-100 dark:bg-slate-800 rounded-box w-52">
//               {navItems.map(({ name, path, dropdown }) =>
//                 dropdown ? (
//                   <li key={name} className="dropdown">
//                     <span className="cursor-pointer">{name}</span>
//                     <ul className="dropdown-content bg-base-100 dark:bg-slate-800 shadow-md rounded-md p-2">
//                       {dropdown.map(({ name, path }) => (
//                         <li key={name}>
//                           <Link to={path}>{name}</Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 ) : (
//                   <li key={name}>
//                     <Link to={path}>{name}</Link>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>
//           <Link to="/" className="text-2xl font-bold cursor-pointer">
//             Agro-Help
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             {navItems.map(({ name, path, dropdown }) =>
//               dropdown ? (
//                 <li key={name} className="dropdown">
//                   <span className="cursor-pointer">{name}</span>
//                   <ul className="dropdown-content bg-base-100 dark:bg-slate-800 shadow-md rounded-md p-2">
//                     {dropdown.map(({ name, path }) => (
//                       <li key={name}>
//                         <Link to={path}>{name}</Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </li>
//               ) : (
//                 <li key={name}>
//                   <Link to={path}>{name}</Link>
//                 </li>
//               )
//             )}
//           </ul>
//         </div>

//         {/* Search, Theme Toggle & Authentication */}
//         <div className="navbar-end flex items-center space-x-3">
//           {/* Search Bar */}
//           <div className="hidden md:block">
//             <input type="text" className="w-32 outline-none px-2 py-1 rounded-md dark:bg-slate-900 dark:text-white" placeholder="Search" />
//           </div>

//           {/* Theme Toggle */}
//           <button className="w-7 h-7 flex items-center justify-center rounded-full" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//             {theme === "light" ? "🌙" : "☀️"}
//           </button>

//           {/* Authentication */}
//           <div className="flex space-x-2">
//             {authUser ? (
//               <Logout />
//             ) : (
//               <>
//                 <Link to="/login" className="px-3 py-1 bg-blue-500 text-white rounded-md">Login</Link>
//                 <Link to="/signup" className="px-3 py-1 bg-green-500 text-white rounded-md">Signup</Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
