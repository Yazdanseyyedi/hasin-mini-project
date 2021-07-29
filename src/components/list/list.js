import React, { useState, useEffect, useRef } from "react";
import "./list.css"
import { connect } from "react-redux";
import * as Actions from "../../redux/actions"
import { useHistory } from "react-router-dom";
import { RoutePath } from "../../data/route";



const ItemList = (props) => {

    const [list,setList]=useState(null)
    const [deletedCard,setDeletedCard]=useState(null)

    useEffect(() => {
        setList(props.list)
    }, [props.list,deletedCard]);

    let history = useHistory();

    const details=(id)=>{
        console.log(id)
        history.push(RoutePath.details+`${id}`)
    }

    const delete_card =(id)=>{
        props.delete(id)
        setDeletedCard(id)
    }
    

    return (
        <div className="page">
                <div className='my-list-page'>
                    {
                        list &&
                        list.map((item) => (
                            item.show &&
                                <div key={item.id} className="list-card">
                                <div className="cover-div">
                                    <img alt='cover' className="cover"
                                        src={item.image} />
                                </div>
                                <div className='content'>
                                    {item.title &&<p className="in-line-item">عنوان: {item.title}</p>}
                                    <div className="end-line-button">
                                        <p  className="detail" data-testid={"details"+item.id} onClick={()=>{details(item.id)}}>جزئیات</p>
                                        <p className="delete" data-testid={item.id} onClick={()=>{delete_card(item.id)}} >حذف</p>
                                    </div>
                                </div>
                            </div> 
                        ))
                    }
                </div>
    </div>
    )
}

const mapStateToProps = (state) => ({
    list:state.list
});

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => dispatch({ type: Actions.DELETE, deleteId: id }),
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(ItemList);