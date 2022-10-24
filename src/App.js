import {Route, Routes} from 'react-router-dom'
import * as MainLayout from './apps/Layout/index'
import Header from "./apps/Layout/components/Header"
import Manifesto from "./apps/Layout/pages/NavigatorPage/Manifesto"
import Team from "./apps/Layout/pages/NavigatorPage/Team"
import Characters from "./apps/Layout/pages/NavigatorPage/Characters"
import Partners from "./apps/Layout/pages/NavigatorPage/Partners"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainLayout.pages.Main/>}/>
        <Route path='roadmap' element={<MainLayout.pages.Roadmap/>}/>
        <Route path="navigator" element={<MainLayout.pages.NavigatorPage/>}>
          <Route path="manifesto" element={<Manifesto/>}/>
          <Route path="team" element={<Team/>}/>
          <Route path="characters" element={<Characters/>}/>
          <Route path="partners" element={<Partners/>}/>
        </Route>
        <Route path='*' element={<MainLayout.pages.NotFound/>}/>
      </Routes>
    </>
  )
}

export default App