import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import BlogPage from './pages/BlogPage';
//import ContactPage from './pages/ContactPage';
import Index from './pages/Index';
import Navigation from './components/Navigation';

// import data
import products from './data/products.js';

// import components and pages
import Gallery from './pages/Gallery.js';
import StaffList from './pages/StaffList.js';
import OrderNow from './pages/OrderNow.js';
import AddEntry from './pages/AddEntry.js';
import EditLog from './pages/EditLog.js';
import Log from './pages/Log.js';
import Topics from './pages/Topics.js';
// import ContactPage from './pages/ContactPage.js';

// import styles and images
import { WiStars } from "react-icons/wi";  
import './App.css';


function App() {
  const [entry, setEntry] = useState([]);
  const [entryToEdit, setEntryToEdit] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Kelsey Collins' Practice Website <WiStars/>
          </h1>
        </header>

        <Navigation />

        <main>
          <section className="App-article">
            <Routes>
                <Route path="/" element={<Index />} />

                { /*<Route path="/contact" element={<ContactPage />} /> */ }
                
                <Route path="/log" element={<Log setEntryToEdit={setEntryToEdit} /> } />
                <Route path="/add-entry" element={<AddEntry />} />
                <Route path="/edit-entry" element={<EditLog entryToEdit={entryToEdit} /> } />
                <Route path="/topics" element={<Topics />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/staff" element={<StaffList />} />
                <Route path="/order" element={<OrderNow products={products}/>} />

            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; 2023 Kelsey Collins</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
