// PrivateRoutes.js
import { Navigate, Outlet } from "react-router-dom";
import cookie from 'react-cookie'
import { useState } from "react"


const PrivateRoutes = () => {

  
  let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)sid\s*\=\s*([^;]*).*$)|^.*$/, "\$1");
  console.log({cookieValue})

  const [auth, setAuth] = useState(false)

  if (auth === true) {
    return (
      auth ? <Outlet/> : < Navigate to='/login'/>
    )
  }

  if (cookieValue !== "") {
    setAuth(true)
    console.log({auth})
  }

  return (
    auth ? <Outlet/> : < Navigate to='/login'/>
  )
}

export default PrivateRoutes;