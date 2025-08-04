// import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./home/Home";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Navbar from "./components/Navbar";
// import CentralSchemes from "./components/CentralSchemes";
// import StateSchemes from "./components/StateSchemes";
// import EligibilityChecker from "./components/EligibilityChecker";
// import News from "./components/News";
// import YieldPrediction from "./components/YieldPrediction";
// import { Toaster } from "react-hot-toast";
// import { useAuth } from "./context/AuthProvider";
// import StateList from "./components/StateList";
// import Schemes from "./components/Schemes";
// import ForgotPassword from "./components/ForgotPassword";
// // import Courses from "./components/Courses"; // Uncomment if you have a Courses component

// function App() {
//   const [authUser] = useAuth();

//   return (
//     <div className="dark:bg-slate-900 dark:text-white">
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />

//         {/* New /login route */}
//         <Route path="/login" element={<Login />} />

//         <Route path="/signup" element={<Signup />} />

//         {/* If you need the /course route, ensure Courses is imported */}
//         {/* <Route
//           path="/course"
//           element={authUser ? <Courses /> : <Navigate to="/signup" />}
//         /> */}

//         {/* Routes for Central & State Schemes */}
//         <Route path="/central-schemes" element={<CentralSchemes />} />
//         <Route path="/state-schemes" element={<StateList />} />
//         <Route path="/state-schemes/:state" element={<StateSchemes />} />

//         {/* Schemes Page */}
//         <Route path="/schemes" element={<Schemes />} />

//         <Route path="/eligibility-checker" element={<EligibilityChecker />} />
//         <Route path="/news" element={<News />} />
//         <Route path="/yield-prediction" element={<YieldPrediction />} />

//         <Route path="/forgot-password" element={<ForgotPassword />} />
//       </Routes>

//       <Toaster />
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./home/Home";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Navbar from "./components/Navbar";
// import CentralSchemes from "./components/CentralSchemes";
// import StateSchemes from "./components/StateSchemes";
// import EligibilityChecker from "./components/EligibilityChecker";
// import News from "./components/News";
// import YieldPrediction from "./components/YieldPrediction";
// import StateList from "./components/StateList";
// import Schemes from "./components/Schemes";
// import ForgotPassword from "./components/ForgotPassword";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { Toaster } from "react-hot-toast";
// import { useAuth } from "./context/AuthProvider";

// function App() {
//   const [authUser] = useAuth();

//   return (
//     <div className="dark:bg-slate-900 dark:text-white">
//       <Navbar />

//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />

//         {/* Protected Routes: Only accessible if logged in */}
//         <Route
//           path="/central-schemes"
//           element={
//             <ProtectedRoute>
//               <CentralSchemes />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/state-schemes"
//           element={
//             <ProtectedRoute>
//               <StateList />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/state-schemes/:state"
//           element={
//             <ProtectedRoute>
//               <StateSchemes />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/schemes"
//           element={
//             <ProtectedRoute>
//               <Schemes />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/eligibility-checker"
//           element={
//             <ProtectedRoute>
//               <EligibilityChecker />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/news"
//           element={
//             <ProtectedRoute>
//               <News />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/yield-prediction"
//           element={
//             <ProtectedRoute>
//               <YieldPrediction />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>

//       <Toaster />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import CentralSchemes from "./components/CentralSchemes";
import StateSchemes from "./components/StateSchemes";
import EligibilityChecker from "./components/EligibilityChecker";
import News from "./components/News";
import YieldPrediction from "./components/YieldPrediction";
import StateList from "./components/StateList";
import Schemes from "./components/Schemes";
import ForgotPassword from "./components/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth();

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes: Only accessible if logged in */}
        <Route
          path="/central-schemes"
          element={
            <ProtectedRoute>
              <CentralSchemes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/state-schemes"
          element={
            <ProtectedRoute>
              <StateList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/state-schemes/:state"
          element={
            <ProtectedRoute>
              <StateSchemes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/schemes"
          element={
            <ProtectedRoute>
              <Schemes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/eligibility-checker"
          element={
            <ProtectedRoute>
              <EligibilityChecker />
            </ProtectedRoute>
          }
        />
        <Route
          path="/news"
          element={
            <ProtectedRoute>
              <News />
            </ProtectedRoute>
          }
        />
        <Route
          path="/yield-prediction"
          element={
            <ProtectedRoute>
              <YieldPrediction />
            </ProtectedRoute>
          }
        />
        
        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
