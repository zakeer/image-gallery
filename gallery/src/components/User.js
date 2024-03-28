export function User(props) {
    return <div className="user other-class">
        <h3>{props.name}</h3>
        <p>Job: {props.job}</p>
        <p>Location: {props.location}</p>
    </div>
}