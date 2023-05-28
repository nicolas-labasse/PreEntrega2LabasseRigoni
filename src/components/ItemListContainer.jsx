import { useEffect,useState } from "react"
import ItemList from "./ItemList"
import productos from "./json/productos.json"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const { id } = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve( id ? productos.filter(item => item.categoria === id) : productos)
            }, 2000)
        })
        promesa.then((resultado) => {
            setItems(resultado)
        })
    }, [id])

    return (
        <div className="container mt-5">
            <div className="row">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer