
import { Route, Routes } from 'react-router-dom';
import { MyProvider } from './utils/ContextProvider';
import { About } from './pages/About/about';import { Home } from './pages/Home/home';
import Skills from './pages/skills/skills';
import { Contact } from './pages/contact/contact';
import { Test } from './pages/test/test';
function App() {
  return (
    <MyProvider>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/test' element={<Test/>} />
      </Routes >
    </MyProvider>

  );
}
export default App;
