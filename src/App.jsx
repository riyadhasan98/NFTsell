
import Categories from "./Component/Categories"
import Foter from "./Component/Foter"
import Header from "./Component/Header"
import HowToMint from "./Component/HowToMint"
import Navba from "./Component/Navba"
import Popular from "./Component/Popular"
import TopSeller from "./Component/TopSeller"
import TrendingCard from "./Component/TrendingCard"


function App() {
  

  return (
    <>
      <Navba />
      <Header />
      <HowToMint />
      <TrendingCard />
      <Categories />
      <Popular />
      <TopSeller />
      <Foter/>
    </>
  )
}

export default App
