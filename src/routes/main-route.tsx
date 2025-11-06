import { createBrowserRouter, RouterProvider } from "react-router"
import { DashboardScreen, LoginScreen } from "../pages"
import CreateJobScreen from "../pages/createjob"
import ApplyJobScreen from "../pages/applyjob"

const routes=createBrowserRouter([
    {
        path:"/",
        children:[
            { 
                index:true,
                Component:LoginScreen
            },
            // { 
            //     path:"register",
            //     Component:RegisterScreen
            // },
            { 
                path:"createjob",
                Component:CreateJobScreen
            },
            { 
                path:"applyjob",
                Component:ApplyJobScreen
            },
            { 
                path:"dashboard",
                Component:DashboardScreen
            }
        ]
    }
])
const MainRoute = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default MainRoute
