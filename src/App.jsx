import { useState, useEffect } from 'react'
import './App.css'
//

const edwinsUrl = 'https://happy-birthday-lucy.onrender.com/';

const randomLang = ['es', 'en', 'ko', 'ru', 'jp', 'tl', 'th'];
const randoIndex = Math.floor(Math.random() * randomLang.length);

function App() {

  const [greeting, setGreetings] = useState(null);



  useEffect(() => {
    const getBirthdayGreetings = async () => {
      try {
        const birthdayGreetingResponse = await fetch(edwinsUrl + randomLang[randoIndex], {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })


        const { message } = await birthdayGreetingResponse.json()
        setGreetings(message)

      } catch (e) {
        throw new Error(e)
      }
    }
    getBirthdayGreetings();
  }, [greeting])

  return (
    <>
      <div style={{ backgroundColor: 'pink', position: 'absolute', margin: 'auto', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


        {/* <h1 className='greeting'>
          Happy Bday
        </h1> */}

        {greeting &&
          (<div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
          }}>
            <p>
              {greeting}
            </p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrrTJ1f2SSgVSqZkvXAanyl754CSK_6jB04g&usqp=CAU" alt="" style={{ borderRadius: '50%' }} />
          </div>
          )
        }
      </div>
    </>
  )
}

export default App
