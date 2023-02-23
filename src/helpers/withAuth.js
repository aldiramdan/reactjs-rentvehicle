import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const withAuth = (Component) => {
    return (props) => {
        const { isAuth, data } = useSelector((state) => state.users)

        if (!isAuth) {
            return <Navigate to="/login" />
        }

         return <Component {...props} />
    }
}

export default withAuth