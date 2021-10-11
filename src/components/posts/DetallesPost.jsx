import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { db } from '../../firebase/firebaseConfig'

const DetallesPost = () => {
    const { post } = useSelector(state => state.post)
    
  const PostStore =  db.collection(`/post`).get()

 
   

    return (
        <>
    
           
                    <div className="col-md-4 ms-5">
                        <div className="card mb-1" >
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                <h1>Publicaciones</h1>
                                    
                                    <div>
                                      
                                     
                                        <Link 
                to={`/post/`}
                > 
                                        Regresar
                                        </Link>
                                    </div>
                                </div>
                                <p>Titulo de la Publicación: {PostStore.title}</p>
                                <p>Categoria: {post.categoria}</p>
                                <p>post {post.post}</p>
                               <img className="img-fluid" src={post.urlImg} alt ={post.title} />
                                


                           
                                
                            </div>
                        </div>

                    </div>
                
            

        </>
    )
}

export default DetallesPost
