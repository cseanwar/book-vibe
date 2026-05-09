import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/Books/Books";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/bookDetails/BookDetails";
import PagesToRead from "../Pages/pagesToRead/PagesToRead";


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
        path: "/page-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      }
      // {
      //   path: "/BookDetails/:bookId",
      //   Component: BookDetails,
      //   loader: () => fetch("/booksData.json"),
      // },
    ],
    errorElement: <ErrorPage />,
  },
]);
