import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import Error from "./Error";
import UserDetailsPage from "./UserDetailsPage";
import MovieDetailsPage from "./MovieDetailsPage";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error />,
    },
    {
      path: "/browse/:movieId",
      element: <MovieDetailsPage />,
    },
    {
      path: "/user",
      element: <UserDetailsPage />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={appRouter} />
      <Footer />
    </>
  );
};

export default Body;
