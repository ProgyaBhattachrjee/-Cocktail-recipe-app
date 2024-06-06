import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {About, Cocktail, Homelayout, Landing, Newsletter,CocktailDetails} from './pages'
const router = createBrowserRouter([
  {
    path:'/',
   element: <Homelayout/>,
   errorElement: <Error/>,
   children: [
    {
      index: true,
      element: <Landing/>,
    },
    {
      path:'Newsletter',
     element: <Newsletter/>,
    },
    {
      path:'about',
     element: <About/>,
    },
    {
      path:'cocktail',
      element: <Cocktail/>,
    },
    {
      path:'cocktail/:idDrink',
      element: <CocktailDetails/>,
    }
   ]
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
