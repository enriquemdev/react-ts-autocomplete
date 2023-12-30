import Autocomplete from './Autocomplete';

function App() {

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className='w-72'>
      <Autocomplete 
        placeholder='Escribe el nombre de un libro'
        id_name='books_autocomplete'
        label='Libro'
      />
      </div>
      
    </div>
  )
}

export default App
