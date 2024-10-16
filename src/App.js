import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* To Stick the Footer at the bottom */}
      <main className="flex-grow">
        {/* Your main content goes here */}
      </main>
      <Footer />
    </div>
  )
}