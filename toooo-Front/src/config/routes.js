import TodoPage from '../components/pages/Index'
import LoginPage from '../components/pages/Login'
import ProfilePage from '../components/pages/Profile'
import RegisterPage from '../components/pages/Register'



const components = {
    todo: {
        url: "/todo",
        component: TodoPage
    },
    login: {
        url: "/login",
        component: LoginPage
    },
    profile: { 
        url: "/profile",
        component: ProfilePage
    },
    register: { 
        url: "/register",
        component: RegisterPage
    }
};
// Role ไหนเข้าหน้าไหนได้บ้าง
export default {
    guest: {
        allowedRoutes: [
            components.login,
            components.register
        ],
        redirectRoutes: "/login"
    },
    user: {
        allowedRoutes: [
            components.todo,
            components.login,
            components.profile
        ],
        redirectRoutes: "/profile"
    },
    

};