import { useQuery } from '@tanstack/react-query';
import './App.css';
import Form from './components/Form';

function App() {
  const { data } = useQuery(
    ['todo'],
    async () => await (await fetch('http://localhost:8000/todo')).json()
  )
  // console.log('Data', data)
  return (
    <>
      <h1>Contact form</h1>
      <Form />
    </>
  );
}

export default App;
