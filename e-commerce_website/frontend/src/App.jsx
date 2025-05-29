import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from "./components/home/HomePage"
import NotFoundPage from "./components/ui/NotFoundPage"
import ProductPage from "./components/product/ProductPage"
import { useEffect, useState } from "react"
import api from "./api"
import CartPage from "./components/cart/CartPage"
import CheckoutPage from "./components/checkout/CheckoutPage"
import LoginPage from "./components/user/LoginPage"
import RegisterPage from "./components/user/RegisterPage"
import ProtectedRoute from "./components/ui/ProtectedRoute"
import { AuthProvider } from "./context/AuthContext"
import UserProfilePage from "./components/user/UserProfilePage"
import PaymentStatusPage from "./components/payment/PaymentStatusPage"

// The App component is the top-level component that renders the entire application
// It uses React Router to define the routes for the application
// The Routes component defines the different routes for the application
// The Route component defines the individual routes and the components to render for each route
const App = () => {

  // State to hold the number of items in the cart
  // This will be updated whenever the cart is modified, and will be passed down to the MainLayout
  // to update the cart icon in the header
  const [numCartItems, setNumberCartItems] = useState(0);

  // Get the cart code from localStorage
  // This is used to fetch the cart statistics from the backend
  const cart_code = localStorage.getItem("cart_code")
  
  // Fetch the cart statistics from the backend when the component mounts and whenever the cart_code changes
  // This will update the numCartItems state with the number of items in the cart
  // This is done to ensure that the cart icon in the header is updated whenever the cart is modified
  useEffect(function(){
    if(cart_code){
      api.get(`get_cart_stat?cart_code=${cart_code}`)
      .then(res => {
        console.log(res.data)
        setNumberCartItems(res.data.num_of_items)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
  },[cart_code])

  return (
    // The AuthProvider component is used to provide authentication context to the entire application
    <AuthProvider>
      {/* The BrowserRouter component is used to enable routing in the application */}
      <BrowserRouter>
        <Routes>
          {/*The MainLayout component is used to wrap the main content of the application, 
          and it receives the numCartItems state as a prop to update the cart icon in the header */}
          <Route path="/" element={<MainLayout numCartItems={numCartItems}/>}>
            {/* The index route renders the HomePage component */}
            <Route index element={<HomePage />}/>
            <Route path="products/:slug" element={<ProductPage setNumberCartItems={setNumberCartItems}/>}/>
            <Route path="cart" element={<CartPage setNumberCartItems={setNumberCartItems}/>} />
            {/* The checkout route is protected, meaning that only authenticated users can access it */}
            <Route path="checkout" element={
              <ProtectedRoute>
                <CheckoutPage setNumberCartItems={setNumberCartItems}/> 
              </ProtectedRoute>} />
            {/* The LoginPage component is used to render the login page */}
            <Route path="login" element={<LoginPage />} />
            {/* The RegisterPage component is used to render the registration page */}
            <Route path="register" element={<RegisterPage />} />
            {/* The UserProfilePage component is used to render the user profile page */}
            <Route path="profile" element={<UserProfilePage />}/>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* The PaymentStatusPage component is used to render the payment status page after a successful payment */}
          <Route path="payment-status" element={<PaymentStatusPage setNumberCartItems={setNumberCartItems}/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App