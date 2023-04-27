import CreatDesk from "./components/CreateDesk";
// import CreateMob from "./components/CreateMob";
import FooterDesk from "./components/FooterDesk";
import LeaderDesk from "./components/Leader";
import Navbar from "./components/Navbar";
function App() {
  return (
    <main className="App">
      <Navbar />
      <LeaderDesk />
      <CreatDesk />
      <FooterDesk />
    </main>
  );
}

export default App;
