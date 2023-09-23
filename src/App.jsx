
import { useEffect, useState, useRef } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
//import useError from './hooks/useError'


function App() {

  const [inputValue, setInputValue] = useState(getRandomNumber(126))
  //const [ error, setError] = useState(inputValue)
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'hola' }`
  const [ location, getLocation, hasError ] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputSearch = useRef()

  const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.trim())
    }

  //const inputError = useError()

  //const handleError = (x) => {
  //  if (inputValue !== 0) {
  //    setError(inputError)
  //  }
  //}


  return (
    <div>
      <header className='header__body'>
      <img src="" alt="" />
      </header>
        <div className='general__form'>
        <form className='form' onSubmit={handleSubmit}>
          <input className='input' /*onChange={handleError}*/ ref={inputSearch} type="text" placeholder='Dimension Number' />
          <button className='btn'>Search</button>
        </form>
        </div>

        {
          hasError
          ?
          <div className='error_container'>
           <h2 className='error'>Tienes que poner un numero entre el 1 y el 126</h2>
          </div>
            : (
              <>
              <div className='location__general'>
                <LocationInfo 
                  location = {location}
                />
              </div>
                <div className='resident__general'>
                  {
                    location?.residents.map((url) => (
                      <ResidentCard 
                        key={url}
                        url = {url}
                      />
                    ))
                  }
                </div>
              </>
              )
        }
     
      
        
      
    </div>
  )
}

export default App
