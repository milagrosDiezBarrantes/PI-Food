import React, {useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesId, cleanDetail, deleteRecipe } from "../../Actions";
import { Link } from "react-router-dom";
import LoadingPage from '../Home/LoadingPage.jsx';
import './RecipeDetails.css';



export default function RecipeDetail (){
    const{id} = useParams();
   // const navigate = useNavigate()
    const dispatch=useDispatch();
    //const detailsstate = useSelector((state) => state.detail)
    const { image, name, diet, summary, score, healthScore, instructions } = useSelector((state) => state.detail);
    
     useEffect(()=>{ 
                   dispatch(getRecipesId(id))
                  },[]);

      console.log(id);
 return( 
   <div className='container-detail'>
      <div className='det'>
           <h3 className='name'>{name}</h3>
           <img src={image} alt="Img Not Available" width="500px" className='img'/>
           <div className='summary'>
                 <p>{summary && summary.replace(/<[^>]+>/g, "")}</p>
           </div>
           <div className='name'>
                 {diet?.map((d) => (
                       <h4 key={d}>{d}</h4>
                  ))}
            </div>
            <div className='score'>
                <span id="score">
                        Score:{" "}
                        <progress id="score" max="100" value={score} className='score' />{" "}
                        {score}/100
                </span> <br></br>
                <span id="healthScore"> Nivel de Saludable:{" "}
                    <progress id="healthScore" max="100" value={healthScore} className='score'/>{" "}
                    {healthScore}/100
                </span>
            </div>
            <div className='container'>
                   {instructions && (
                     <p dangerouslySetInnerHTML={{ __html: `${instructions}` }} />
                    )}
            </div>
       </div>
       <Link to='/Home'><button className="back-det">Volver a Inicio</button></Link>
    </div> 
   )
     
 }

     

