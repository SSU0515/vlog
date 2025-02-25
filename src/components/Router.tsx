import PostListPage from "pages/posts";
import HomePage from "../pages/home";
import { Route,Routes,Navigate } from 'react-router-dom';
import PostEdit from "pages/posts/edit";
import PostDetail from "pages/posts/detail";
import PostNewPage from "pages/posts/new";
import ProfilePage from "pages/profile";
import ProfileEdit from "pages/profile/edit";
import SearchPage from "pages/search";
import NotificationsPage from "pages/norificarions";
import LoginPage from "pages/users/login";
import SignupPage from "pages/users/signup";

export default function Router(){
    return(
        <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/posts' element={<PostListPage/>}/>
      <Route path='/posts/:id' element={<PostDetail/>}/>
      <Route path='/posts/new' element={<PostNewPage/>}/>
      <Route path='/posts/edit/:id' element={<PostEdit/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/profile/edit' element={<ProfileEdit/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/notifications' element={<NotificationsPage/>}/>
      <Route path='/*' element={<Navigate replace to="/"/>}/>
      <Route path='/users/login' element={<LoginPage/>}/>
      <Route path='/user/signup' element={<SignupPage/>}/>
    </Routes>
    )
}