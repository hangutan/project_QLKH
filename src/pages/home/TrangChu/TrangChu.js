import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import * as action from '../../../store/courses/actions';
import Header from './../../../layout/Header/Header';
import Footer from './../../../layout/Footer/Footer';
import OwlCarousel from 'react-owl-carousel';
import { Tabs, Card } from 'antd';
const { TabPane } = Tabs;

function HomePage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(action.actGetListCourse())
    }, [dispatch]);

    const listCourses = useSelector(function (state) {
        return state.ListCourses.listCourses;
    });


    const renderData = () => {
        return listCourses.map(item => {
            return (
                <div key={item.maKhoaHoc} className="item">
                    <div className="card">
                        <img src={item.hinhAnh} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{item.tenKhoaHoc}</h5>
                            <p className="card-text">{item.moTa}</p>
                            <Link 
                              to={`/detail_courses/${item.maKhoaHoc}`}
                            >Xem chi tiết
                            </Link> 
                        </div>
                    </div>
                </div>
            )
        })
    }

    const callback = (key) => {
        console.log(key);
    }

    return (
        <>
            <Header/>
            <div className="container tan__home">
                <div className="main">
                    <div className="img_bg">
                        <img src='./img/01.jpg' alt="" />
                    </div>
                    <div className="courses-1">
                        <div><h2>Những khóa học hay</h2></div>
                        <OwlCarousel
                            className="owl-theme"
                            margin={48}
                            nav
                            dotsEach={false}
                            responsiveClass
                            responsive={{
                                0: {
                                    items: 2,
                                    slideBy: 2
                                },
                                600: {
                                    items: 3,
                                    slideBy: 3
                                },
                                992: {
                                    items: 5,
                                    slideBy: 5
                                }
                            }}
                            key={`carousel_${listCourses.length}`}
                        >
                            {renderData()}
                        </OwlCarousel>
                    </div>
                    <div className="courses-2">
                        <div><h2>Khóa học tất cả các môn</h2></div>
                    </div>
                </div>
                <div>

                    <Tabs defaultActiveKey="1" onChange={callback}>

                        <TabPane tab="Tất cả khóa học" key="1">
                            <Card
                                hoverable={true}
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <p>Hà Ngủ Tân</p>
                                <p>Lập trình frontend cơ bản</p>
                            </Card>
                        </TabPane>
                    </Tabs>
                </div>
                <div className="main_teacher">
                    <div className="text_teacher">
                        <h2>Đội ngũ giảng viên chuyên nghiệp</h2>
                        <p>Chúng tôi có nhiều năm kinh nghiệm trong việc giảng dạy và đào tạo nhiều
                        thế hệ trên thế giới và trong cả nước
                        </p>
                    </div>
                    <div>
                        <OwlCarousel
                            className="owl-theme"
                            margin={48}
                            nav
                            dotsEach={false}
                            responsiveClass
                            responsive={{
                                0: {
                                    items: 2,
                                    slideBy: 2
                                },
                                600: {
                                    items: 3,
                                    slideBy: 3
                                },
                                992: {
                                    items: 5,
                                    slideBy: 5
                                }
                            }}
                        >
                            <div>
                                <h1>Hà ngủ tân</h1>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        <Footer/>
    </>
    )
}

export default HomePage;