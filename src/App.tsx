import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import PassengerDetails from './pages/PassengerDetails'
import AdditionalInfo from "./pages/AdditionalInfo"
import ReviewSubmit from "./pages/ReviewSubmit"
import BookingConfirmation from "./pages/BookingConfirmation"


function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
    
      <Route path="/passengers-detail" element={ <PassengerDetails/>}/>
      <Route path="/additional-info" element={<AdditionalInfo/>}/>
      <Route path="/review-submit" element={<ReviewSubmit/>}/>
      <Route path="/booking-confirmation" element={<BookingConfirmation/>}/>
      
    </Routes>
  </Router>)
 
}

export default App;
