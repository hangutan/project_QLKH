const GET_LIST_COURSE ='GET_LIST_COURSE';
const GET_DETAIL_LIST_COURSES='GET_DETAIL_LIST_COURSES';

const initState = {
    listCourses:[],
        //listCourseAdmin: [],
        // listCourse: [],
        // cart: [],
        // filterListCourse: [],
        courses: {},
        // danhmuckhoahoc: [],
        // tab: {},
        // courseCard: "courseCard",
        // courseSoft: "Best Courses",
        // editCourse: {},
        // catalogCourse: []
}

const listCourses = (state = initState,action)=>{
    
    switch(action.type){
        case GET_LIST_COURSE : 
            return {
                ...state,
                listCourses:[...action.payload]
            }
        case GET_DETAIL_LIST_COURSES:
            return{
                ...state,
                courses:action.payload.courses
            }
        default:
            return state;
    }

    
}

export default listCourses;