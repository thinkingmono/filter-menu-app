import MenuItem from "./MenuItem"

const Menu = (props) => {
    return (
        <section className="section-center">
            {props.menu ?
                props.menu.map((dish) => {
                    return <MenuItem {...dish} key={dish.id} />
                }) : <h3>There are no item in the menu</h3>
            }
        </section>
    )
}

export default Menu