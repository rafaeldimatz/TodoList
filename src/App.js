import { Formulario } from "./componentes/Formulario";

function App() {
  return (
    <div className='container mx-auto bg-slate-900'>
      <p className='h-20 text-slate-200 text-center text-4xl ' >
        List Task <span className=' inline-block text-sm mb-2 ml-3 mt-1 '>A simple React Todo List App</span>
      </p>
      <hr/>
        <Formulario/>
    </div>
  );
}
export default App;

