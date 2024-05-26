
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import dataArray from "./data"


function App() {
  const cards = dataArray.map(card => <Card 

    key = {card.id}
    item={card} 
    // We can do : {...card} and it will do the same as this : id = {card.id} title = {card.title} and so on ... And this method is called object spread
    

  
  />)
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className='container'>
        {cards}
      </div>
      
    </div>
  );
}

export default App;
