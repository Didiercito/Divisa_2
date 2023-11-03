import info from "../../../DB/db";
import './Titles.css';
function Tittles() {
    return ( 
        <>
        {
            info.Data.map((Data, index) => (
                <div className="container" key={index}>
                    <h1>{Data.Titulo}</h1>
                </div>
            ))
        }
        </>
    );
}

export default Tittles;
