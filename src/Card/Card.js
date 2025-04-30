import { Link } from "react-router-dom";

export function Card() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://upload.wikimedia.org/wikipedia/en/d/db/Woodstock.png" className="d-block w-100" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </p>
                <Link href="#" className="btn btn-primary">
                    Go somewhere
                </Link>
            </div>
        </div>

    )
}