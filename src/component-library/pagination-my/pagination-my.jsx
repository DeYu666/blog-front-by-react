import React, {Component} from "react";
import { Pagination } from 'antd';
import PropTypes from "prop-types"

import './pagination-my.css'
// import {connect} from "react-redux";
// import {getCateId, getPageNum, getPosts} from "../../redux/actions";

export default class PaginationMy extends Component{

    state = {
        current: 1,
        total: 150,
    }

    static propTypes = {
        current:PropTypes.number.isRequired,
        total:PropTypes.number.isRequired,
        getPageNum: PropTypes.func.isRequired,
    }


    onChange = (page) => {
        console.log(page)

        this.setState({
            current: page,
        });
        this.props.getPageNum(page)
    };



    static getDerivedStateFromProps(nextProps, prevState) {

        const {current, total} = nextProps
        // console.log(current, total)

        // 由于页面中每一页的数据是12条，而导航栏中默认是10条一页，故 总数 total 需要重新计算一下

        return {
            total: parseInt(total / 12 * 10 ) ,
            current:current,
        }
    }



    render() {

        const {current, total} = this.state
  

        return (
            <div className="pagenav">
                <div className="pagenav">
                    <div className="panda_pagi">
                        <Pagination key={current} total={total}  showSizeChanger current={current} onChange={this.onChange}/>
                    </div>
                </div>
            </div>
        )
    }
}