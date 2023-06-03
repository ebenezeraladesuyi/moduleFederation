import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/common/Layout"
import DataFetching from "../pages/DataFetching"

export const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <DataFetching />
            }
        ]
    }
])
