import React from 'react'

export const Promesas = () => {

    const falsasPromesas = (estado) =>{
        return new Promise((resolve, reject)=>{
            if(estado)
            {
                resolve("Promesa Cumplida")
            }
            else
            {
                reject("Promeza rechazada")
            }
        })
    }

    console.log(falsasPromesas(false))

  return (
    <div>Promesas</div>
  )
}
