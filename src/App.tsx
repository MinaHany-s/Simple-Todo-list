import AddTasks from "./components/AddTasks";
import Header from "./components/Header";
import YourTasks from "./components/YourTasks";

function App() {

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Header />
      <AddTasks />
      <YourTasks/>
    </div>
  );
}

export default App;
