import Section from "./components/firstsection/Section"
import Footer from "./components/footer/Footer"
import SectionB from "./components/secsection/SectionB"
import SectionC from "./components/thirdsection/SectionC"
import Top from "./components/top/Top"

const App = () => {
  return (
    <div>
      
      <Top/>
      <Section/>
      <SectionB/>
      <SectionC/>
      <Footer/>
    </div>
  )
}

export default App