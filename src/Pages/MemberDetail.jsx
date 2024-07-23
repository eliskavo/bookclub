import { useParams} from "react-router-dom";
import members from "../data/members-list.json";
import '../navbar.css';
import { NavBar } from "../Components/NavBar";

export const MemberDetail = () => {
    
    const { id } = useParams();
    const clen = members.find((item) => item.id === Number(id));


    return (
        <div>
            <NavBar />
            <h1>Member Detail</h1>
            
                    <p>{clen.firstName} {clen.lastName}</p>

    
        </div>
    );
}