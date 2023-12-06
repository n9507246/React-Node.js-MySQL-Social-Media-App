 
import DefaultLayout from "@layouts/DefaultLayout"
import Home from "@pages/home/Home"
import Profile from "@pages/profile/Profile"

export default [ 
  {
    element: <DefaultLayout/>,
    children:[
      {path: '/', element:<Home/>},
      {path: '/profile/:id', element:<Profile/>},
      
    ]
  }
]