import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import * as action from '../../../store/courses/actions';

function TrangCTKH(){
    const dispatch = useDispatch();
    const {courses_id} = useParams();
    useEffect(()=>{
        dispatch(action.actGetDetailListCourses(courses_id))
    },[dispatch,courses_id])

    const courses = useSelector(function(state){
        return state.ListCourses.courses
    })
    console.log(courses);

    return(
    <div>{courses.tenKhoaHoc}</div>
    )

}
export default TrangCTKH;