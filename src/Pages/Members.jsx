import { NavLink } from "react-router-dom";
import "../Members.css";
import members from "../data/members-list.json";
import { NavBar } from "../Components/NavBar";

export const Members = () => {
    return (
        <div>
            <NavBar />

            <h1 className="section-title">members</h1>
            <section className="paragraph">
            Welcome to our Members section, where book lovers from Vietnam, Armenia, Czechia, Serbia, and the United States come together! We each have our unique tastes—some devour books in one sitting, while others take their time. We've got fans of mysteries, fantasies, romances, and classics. What brought us together? A chance meeting over a beer at Večernice.<br></br>
            </section>
            <section className="paragraph">
            Whether you're a quote collector or just love the smell of fresh pages, there's a spot for you here. Grab your favorite book and join us on our next literary adventure!
            </section>
            
            <div className="members-grid">
                {members.map((item) => (
                    <div className="member-card" key={item.id}>
                        <div className="member-photo"></div>
                        <NavLink to={`/members/${item.id}`} className="member-name">{item.firstName}</NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}
