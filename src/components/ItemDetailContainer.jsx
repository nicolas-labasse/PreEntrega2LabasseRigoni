import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import product from './json/productos.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let producto = product.find((prod) => prod.id === parseInt(id))
                resolve(producto)
            }, 2000)
        })
        promesa.then((resultado) => {
            setItem(resultado)
        })

    }, [id])

    return (
        <>
         { item ? <ItemDetail producto={item}/> : "" }
        </>
    )
}

export default ItemDetailContainer