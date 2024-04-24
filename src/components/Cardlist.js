import Cards from "./Cards";

function Cardlist(){
    const products = [
  { id: 1, name: "Grocery stores", image: "https://picsum.photos/200" },
  { id: 2, name: "Clothing boutiques", image: "https://picsum.photos/200" },
  { id: 3, name: "Food", image: "https://picsum.photos/200" },
  { id: 4, name: "Coaching Centres", image: "https://picsum.photos/200" },
  { id: 5, name: "Photography", image: "https://picsum.photos/200" },
  { id: 6, name: "Home Services", image: "https://picsum.photos/200" },
  { id: 7, name: "Wellness and Health", image: "https://picsum.photos/200" },
  { id: 8, name: "Beauty Salons", image: "https://picsum.photos/200" },


  // Add more products as needed
];
    return(
        <>
            <Cards products={products}></Cards>
        </>
    );
}
export default Cardlist;