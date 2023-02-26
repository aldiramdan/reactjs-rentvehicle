import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const withAuth = (Component, roles) => {
    return (props) => {
        const { isAuth, data } = useSelector((state) => state.users)

        if (!isAuth) {
            return <Navigate to="/login" />
        }

        if (roles !== data.role) {
            return <Navigate to="/" />
      }

         return <Component {...props} />
    }
}

export default withAuth