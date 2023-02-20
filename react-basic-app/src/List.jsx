import React from "react";
 const List=({people}) =>{
    return (
        <>
        {people.map((ele) =>{
            const {id,image,name,age}=ele;
            return(
                <div key={id}>
                    <img src={image} alt="person" />
                    <h4>Name: {name}</h4>
                    <h4>Age: {age}</h4>

                </div>
            )

        })}
        </>
    )

 }
 export default List;