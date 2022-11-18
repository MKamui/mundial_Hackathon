import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { getDetail } from "../../redux/actions";

export default function Detail(props){
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch])

    const myTeam=useSelector((state)=>state.detail)
    return(
        <div className="detail">
            {
                myTeam.length>0?
                <div className="detail">
                    <img src={myTeam[0].flag} />
                    <h1>Nombre</h1>
                    <h2>{myTeam[0].name}</h2>
                    <div className="p">
                    <h3>Codigo</h3>
                    </div>
                </div>: <p>loading</p>

            }
        </div>
    )
}
