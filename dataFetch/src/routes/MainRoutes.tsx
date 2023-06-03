import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/common/Layout"
import ReadFiles from "../pages/ReadFiles"
import UseEffect from "../pages/UseEffect"
import TanStack from "../pages/TanStack"
import UseSWR from "../pages/SWR"

export const MainRoutes = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ReadFiles>
                            <UseEffect />
                        </ReadFiles>
            },
            {
                path: "tanstack",
                element: <ReadFiles>
                            <TanStack />
                        </ReadFiles>
            },
            {
                path: "swr",
                element: <ReadFiles>
                            <UseSWR />
                        </ReadFiles>
            },
        ]
    }
])