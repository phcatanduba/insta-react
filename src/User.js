export default function User(props) {
    return (
        <div class="usuario">
            <img src={props.link} />
            <div class="texto">
                <strong>{props.user}</strong>
                {props.name}
            </div>
        </div>
    );
}
