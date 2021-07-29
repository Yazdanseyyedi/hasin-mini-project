import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import "./detail.css"


const Details = (props) => {

    const [id, setID] = useState(null)
    const [detail, setDetail] = useState("")

    useEffect(() => {
        console.log(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]);
        setID(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1])
    }, [props.details]);

    
    useEffect(() => {
        props.details.map(el=>{
            if(el.id==id){
                console.log(el)
                setDetail(el)
            }
        })
    }, [id]);

    return (
        <div className="page">
        <div className='my-detail-page'>
            {
                detail &&
                    <div className="detail-card">
                        <div className="detail-cover-div">
                            <img alt='detail-cover' className="detail-cover"
                                src={detail.image} />
                        </div>
                        <div className='detail-content'>
                            {detail.title &&<p className="detail-in-line-item">عنوان: {detail.title}</p>}
                            {detail.title &&<p className="detail-in-line-item">توضیحات: {detail.descriprtion}</p>}
                        </div>
                    </div>
            }
        </div>
    </div>
    )
}

const mapStateToProps = (state) => ({
    details:state.details
});


const connector = connect(mapStateToProps, );
export default connector(Details);