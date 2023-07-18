
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {

  let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)sid\s*\=\s*([^;]*).*$)|^.*$/, "\$1");
  // console.log({ cookieValue })
  // console.log({ c: document.cookie })

  const auth = cookieValue !== ''

  return (
    auth ? <Outlet /> : < Navigate to='/login' />
  )
}

export default PrivateRoutes;