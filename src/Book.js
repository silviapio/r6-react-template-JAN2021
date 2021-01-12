export default (props) => {
    return(
        <div>
            <h3>{props.item.title}</h3>
            <p>{props.item.author}</p>
        </div>
    )
}