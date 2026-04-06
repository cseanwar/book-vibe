import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/Books/Books";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
