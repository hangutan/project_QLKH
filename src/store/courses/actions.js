import {CallAPI} from '../../ultis/api';

export const actGetListCourse = () =>{
    return dispatch =>{
        CallAPI('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01','GET',null,null)
        .then(res=>{
            console.log(res.data)
            dispatch({
                type:'GET_LIST_COURSE',
                payload:res.data
            })

        })
        .catch(err=>console.log(err))
    }
}

export const actGetDetailListCourses = (id) =>{
    return dispatch =>{
        CallAPI(
            `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
            'GET',
            null,
            null
        )
        .then(res=>{
            dispatch({
                type:'GET_DETAIL_LIST_COURSES',
                payload:{
                    courses:res.data
                }
            })
        })
    }
}