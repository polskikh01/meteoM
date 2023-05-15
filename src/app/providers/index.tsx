import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
        errorElement: <div>404</div>
    },
]);

export const Providers = () => {
    return <RouterProvider router={ router } />
}