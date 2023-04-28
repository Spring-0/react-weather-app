import WeatherContainer from '../containers/WeatherContainer'

export default function WeatherApp(props) {

  return (

    <div>

      <main>

        <header>
          <h1 className='text-xl font-light text-white py-4 px-6 fixed'>WeatherApp</h1>
        </header>

        <div>
          <WeatherContainer />
        </div>
      </main>
    </div>

  )
}
