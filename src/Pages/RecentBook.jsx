import Gabrielle_Zevin_Tomorrow from "../Assets/books/Gabrielle_Zevin_Tomorrow.jpg";
import { NavBar } from "../Components/NavBar";
import '../RecentBook.css'
import '../navbar.css';
import books from "../data/books.json";
import members from "../data/members-list.json";





export const RecentBook = () => {

  //přiřadit knihu k členovi a zobrazit která kniha je vybrána

  const chosenBookIndex = 5
  const chosenMember = members.find(member => member.firstName === books[chosenBookIndex].member);


  return (
    <div>
      <h1>Recent Book:</h1>
      <p>Chosen by: {chosenMember.firstName} {chosenMember.lastName}</p>
      <h2>{books[chosenBookIndex].title}</h2>
      <h3>by {books[chosenBookIndex].author}</h3>
      <img src={Gabrielle_Zevin_Tomorrow} alt="Gabrielle_Zevin_Tomorrow" />
    </div>
  );
};
