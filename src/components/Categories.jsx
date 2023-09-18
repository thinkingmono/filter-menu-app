const Categories = (props) => {
    return (
        <>
            <div className="btn-container">
                {props.categories.length > 0 ?
                    props.categories.map((category, index) => {
                        return <button type="button" key={index} className="btn" onClick={() => props.filterCategory(category)}>{category}</button>
                    }) : <h3>There are no categories</h3>
                }
            </div>
        </>
    )
}

export default Categories