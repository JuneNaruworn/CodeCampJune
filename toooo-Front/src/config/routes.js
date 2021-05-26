import IDEAPage from '../components/pages/Index'
import LoginPage from '../components/pages/Login'
import ProfilePage from '../components/pages/Profile'
import RegisterPage from '../components/pages/Register'
import contactPage from '../components/pages/contact'
import RankPage from '../components/pages/Rank'
import AdminPage from '../components/pages/Admin'



const components = {
    
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
    },
    contact: { 
        url: "/contact",
        component: contactPage
    },
    rank: { 
        url: "/rank",
        component: RankPage
    },
    idea: {
        url: "/idea",
        component: IDEAPage
    },
    admin: {
        url: "/Admin",
        component: AdminPage
    },
   
   
  
   
  
    
};
// Role ไหนเข้าหน้าไหนได้บ้าง
export default {
    guest: {
        allowedRoutes: [
            components.login,
            components.register,
            components.contact,
           
           
            
        ],
        redirectRoutes: "/login"
    },
    user: {
        allowedRoutes: [
            components.idea,
            components.profile,
            components.contact,
            components.rank,
          
            
        ],
        redirectRoutes: "/profile"
    },

    admin: {
        allowedRoutes: [
            components.admin,
            components.contact,
            components.rank,
              
                
        ],
        redirectRoutes: "/admin"
    },

  

    

};