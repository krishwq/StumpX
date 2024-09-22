import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Match from './component/Match';
import './App.css';
import Details from './component/Details';
import Booking from './component/Booking';
import ShowNavbar from './component/ShowNavbar';

function App() {
  var today = new Date();
  return (
    <Router>
      <ShowNavbar>
      <Navbar/>
      </ShowNavbar>
      <Switch>
        <Route exact path="/" >
        <Home/>
        </Route>
        <Route path="/about">
        <About/>
        </Route>
        <Route path="/matches">
        <Match/>
        </Route>
        <Route path="/contact">
        <Contact/>
        </Route>
        <Route path="/booking">
        <Booking/>
        </Route>
        <Route path="/wvi">
        <Details
        image="https://www.91-cdn.com/hub/wp-content/uploads/2023/08/How-to-watch-India-vs-West-Indies-T20-series.jpg"
        team1="WEST INDIES"
        team2="INDIA"
        venue="Rajib Gandhi Stadium,Hydrabad"
date={(today.getDate()) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }
data ={ [
  { name1: "Kraigg Brathwaite (C)", name2: "Rohit Sharma (C)" },
  { name1: "Alick Athanaze", name2: "Yashasvi Jaiswal" },
  { name1: "Joshua Da Silva (WK)", name2: "Shubman Gill" },
  { name1: "Kavem Hodge", name2: "Virat Kohli" },
  { name1: "Jason Holder", name2: "KL Rahul" },
  { name1: "Alzarri Joseph", name2: " Sarfaraz Khan" },
  { name1: "Shamar Joseph", name2: "Rishabh Pant (WK)" },
  { name1: "Mikyle Louis", name2: "Kuldeep Yadav" },
  { name1: "Kirk Mckenzie", name2: "Axar Patel" },
  { name1: "Gudakesh Motie", name2: "R Jadeja" },
  { name1: "Jayden Seales", name2: "Jasprit Bumrah" },
]}
        />
        </Route>
        <Route path="/ivp">
        <Details
        image="https://focus.hidubai.com/content/images/2024/06/Winter-Camps--95-.jpg"
        team1="INDIA"
        team2="PAKISTAN"
        venue="Eden Garden,Kolkata"
date={(today.getDate()+1) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }
data ={ [
  { "name1": "Rohit Sharma (C)", "name2": "Babar Azam (C)" },
  { "name1": "Yashasvi Jaiswal", "name2": "Fakhar Zaman" },
  { "name1": "Shubman Gill", "name2": "Imam-ul-Haq" },
  { "name1": "Virat Kohli", "name2": "Mohammad Rizwan (WK)" },
  { "name1": "KL Rahul", "name2": "Shadab Khan" },
  { "name1": "Sarfaraz Khan", "name2": "Shaheen Afridi" },
  { "name1": "Rishabh Pant (WK)", "name2": "Sarfaraz Ahmed (WK)" },
  { "name1": "Kuldeep Yadav", "name2": "Naseem Shah" },
  { "name1": "Axar Patel", "name2": "Haris Rauf" },
  { "name1": "R Jadeja", "name2": "Mohammad Nawaz" },
  { "name1": "Jasprit Bumrah", "name2": "Hasan Ali" }
]
}
        />
        </Route>
        <Route path="/nvs">
        <Details
        image="https://img.jagranjosh.com/images/2023/November/1112023/new-zealand-vs-south-africa-head-to-head.webp"
        team1="NEW ZEALAND"
        team2="SOUTH AFRICA"
        venue="Narendra Modi Stadium,Ahmedabad"
date={(today.getDate()+2) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }
data ={ [
  { "name1": "Kane Williamson (C)", "name2": "Temba Bavuma (C)" },
  { "name1": "Devon Conway", "name2": "Quinton de Kock (WK)" },
  { "name1": "Tom Latham (WK)", "name2": "Rassie van der Dussen" },
  { "name1": "Daryl Mitchell", "name2": "Aiden Markram" },
  { "name1": "Glenn Phillips", "name2": "Heinrich Klaasen" },
  { "name1": "Jimmy Neesham", "name2": "David Miller" },
  { "name1": "Mitchell Santner", "name2": "Marco Jansen" },
  { "name1": "Ish Sodhi", "name2": "Keshav Maharaj" },
  { "name1": "Matt Henry", "name2": "Kagiso Rabada" },
  { "name1": "Tim Southee", "name2": "Anrich Nortje" },
  { "name1": "Trent Boult", "name2": "Lungi Ngidi" }
]
}
        />
        </Route>
        <Route path="/ivn">
        <Details
        image="https://crickettimes.com/wp-content/uploads/2023/10/India-vs-New-Zealand-ICC-ODI-World-Cup-2023.webp"
        team1="INDIA"
        team2="NEW ZEALAND"
        venue="WanKhede Stadium,Mumbai"
date={(today.getDate()+4) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }
data ={ [
  { "name1": "Rohit Sharma (C)", "name2": "Kane Williamson (C)" },
  { "name1": "Yashasvi Jaiswal", "name2": "Devon Conway" },
  { "name1": "Shubman Gill", "name2": "Tom Latham (WK)" },
  { "name1": "Virat Kohli", "name2": "Daryl Mitchell" },
  { "name1": "KL Rahul", "name2": "Glenn Phillips" },
  { "name1": "Sarfaraz Khan", "name2": "Mark Chapman" },
  { "name1": "Rishabh Pant (WK)", "name2": "Tim Seifert (WK)" },
  { "name1": "Kuldeep Yadav", "name2": "Ish Sodhi" },
  { "name1": "Axar Patel", "name2": "Mitchell Santner" },
  { "name1": "R Jadeja", "name2": "Trent Boult" },
  { "name1": "Jasprit Bumrah", "name2": "Lockie Ferguson" }
]
}
        />
        </Route>
        <Route path="/wvn">
        <Details
        image="https://www.jagranimages.com/images/newimg/13062024/13_06_2024-wi_vs_nz_live_0_54243589.webp"
        team1="WEST INDIES"
        team2="NEW ZEALAND"
        venue="M. A. Chidambaram Stadium,Chennai"
date={(today.getDate()+5) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }
data ={ [
  { "name1": "Shai Hope (C)", "name2": "Kane Williamson (C)" },
{ "name1": "Brandon King", "name2": "Devon Conway" },
{ "name1": "Kyle Mayers", "name2": "Tom Latham (WK)" },
{ "name1": "Nicholas Pooran", "name2": "Daryl Mitchell" },
{ "name1": "Shimron Hetmyer", "name2": "Glenn Phillips" },
{ "name1": "Rovman Powell", "name2": "Mark Chapman" },
{ "name1": "Johnson Charles (WK)", "name2": "Tim Seifert (WK)" },
{ "name1": "Akeal Hosein", "name2": "Ish Sodhi" },
{ "name1": "Jason Holder", "name2": "Mitchell Santner" },
{ "name1": "Alzarri Joseph", "name2": "Trent Boult" },
{ "name1": "Oshane Thomas", "name2": "Lockie Ferguson" }

]
}
        />
        </Route>
        <Route path="/sva">
        <Details
        image="https://crickettimes.com/wp-content/uploads/2023/09/SA-vs-AUS-ODI-Series-Broadcast-and-Streaming-Details.webp"
        team1="SOUTH AFRICA"
        team2="AUSTRALIA"
        venue="Arun Jaitley Cricket Stadium,Delhi"
date={(today.getDate()+6) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }
data ={ [
  { "name1": "Temba Bavuma (C)", "name2": "Pat Cummins (C)" },
{ "name1": "Quinton de Kock (WK)", "name2": "David Warner" },
{ "name1": "Rassie van der Dussen", "name2": "Marnus Labuschagne" },
{ "name1": "Aiden Markram", "name2": "Steve Smith" },
{ "name1": "Heinrich Klaasen", "name2": "Glenn Maxwell" },
{ "name1": "David Miller", "name2": "Marcus Stoinis" },
{ "name1": "Reeza Hendricks", "name2": "Alex Carey (WK)" },
{ "name1": "Keshav Maharaj", "name2": "Adam Zampa" },
{ "name1": "Marco Jansen", "name2": "Mitchell Marsh" },
{ "name1": "Kagiso Rabada", "name2": "Mitchell Starc" },
{ "name1": "Anrich Nortje", "name2": "Josh Hazlewood" }


]
}
        />
        </Route>
        <Route path="/ivs">
        <Details
        image="https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/06/India-vs-South-Africa-IND-vs-SA-for-the-first-time-two-undefeated-teams-will-face-in-the-T20-World-Cup-final.jpg"
        team1="INDIA"
        team2="SOUTH AFRICA"
        venue="M. Chinnaswamy Stadium,Bengaluru"
date={(today.getDate()+8) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }
data ={ [
  { "name1": "Rohit Sharma (C)", "name2": "Temba Bavuma (C)" },
  { "name1": "Yashasvi Jaiswal", "name2": "Quinton de Kock (WK)" },
  { "name1": "Shubman Gill", "name2": "Rassie van der Dussen" },
  { "name1": "Virat Kohli", "name2": "Aiden Markram" },
  { "name1": "KL Rahul", "name2": "David Miller" },
  { "name1": "Sarfaraz Khan", "name2": "Heinrich Klaasen" },
  { "name1": "Rishabh Pant (WK)", "name2": "Reeza Hendricks" },
  { "name1": "Kuldeep Yadav", "name2": "Keshav Maharaj" },
  { "name1": "Axar Patel", "name2": "Tabraiz Shamsi" },
  { "name1": "R Jadeja", "name2": "Kagiso Rabada" },
  { "name1": "Jasprit Bumrah", "name2": "Anrich Nortje" }
  


]
}
        />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
