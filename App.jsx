// import React from 'react'
// import Fetch from './ftech_data/Fetch'
// const App = () => {
//   return (
//     <div>
//       <Fetch />
//     </div>
//   )
// }

// export default App





// .....shoping flatform

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css"
import Landpage from './Stires/pages/Landpage'
import MobilePage from './Stires/pages/MobilePage';
import MensPages from './Stires/pages/MensPages';
import FridgePage from './Stires/pages/FridgePage';
import ComputerPage from './Stires/pages/ComputerPage';
import MobileSingles from './singles/MobileSingles';
import Mensingle from './singles/Mensingle';

const App = () => {
  return (
    <div> 
    <Router>
       <Routes>
          <Route path="/" element={<Landpage/>   } />
          <Route path='/computer' element={<ComputerPage />}/>
          <Route path='/fridges' element={<FridgePage />}/>
          <Route path='/mens' element={<MensPages />}/>
          <Route path='/mens/:id' element={<Mensingle />}/>
          <Route  path='/mobiles' element={<MobilePage />}/>
          <Route path='/mobiles/:id' element={<MobileSingles/>}/>
          <Route path='/cart' element={<useCart/>}/>
        </Routes>
      
    </Router> 

    </div> 
  )
}

export default App