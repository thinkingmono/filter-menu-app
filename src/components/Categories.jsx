const Categories = (props) => {
    return (
        <>
            <div className="btn-container">
                <button type="button" onClick={props.refresh} className="btn" >All</button>
                {props.categories.length > 0 ?
                    props.categories.map((category, index) => {
                        return <button type="button" key={index} className="btn" onClick={() => {
                            props.refresh();
                            props.filterCategory(category);
                        }}>{category}</button>
                    }) : <h3>There are no categories</h3>
                }
            </div>
        </>
    )
}

export default Categories