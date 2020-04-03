import HomePage from "./pages/home/TrangChu/TrangChu";
import TrangKhoaHoc from "./pages/home/TrangKhoaHoc/TrangKhoaHoc";
import TrangSuKien from "./pages/home/TrangSuKien/TrangSuKien";
import TrangBlog from "./pages/home/TrangBlog/TrangBlog";
import TrangAbout from "./pages/home/TrangAbout/TrangAbout";
import Templates from './templates/TemplateHome';
import TrangCTKH from "./pages/home/TrangCTKH/TrangCTKH";

export const RoutesHome = [
    {
        path:'/',
        exact:true,
        component:Templates
    },
    {
        path:'/home',
        exact:false,
        component:HomePage
    },
    {
        path:'/courses',
        exact:false,
        component:TrangKhoaHoc
    },
    {
        path: '/detail_courses/:courses_id',
        exact: false,
        component:TrangCTKH
    },
    {
        path:'/event',
        exact:false,
        component:TrangSuKien
    },
    {
        path:'/blog',
        exact:false,
        component:TrangBlog
    },
    {
        path:'/about',
        exact:false,
        component:TrangAbout
    }
]