import logo from './logo.svg';
import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los estudiantes de CEUTEC:</h1>
        <Testimonio
          imagen='testimonio-emma.png'
          nombre='Emma Bostian'
          pais='Suecia'
          cargo='Ingeniera de software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />

        <h1>Esto es lo que dicen los estudiantes de CEUTEC:</h1>
        <Testimonio
          imagen='testimonio-sarah.png'
          nombre='Sara Watson'
          pais='Bosnia'
          cargo='Ingeniera de software'
          empresa='Google'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />


        <h1>Esto es lo que dicen los estudiantes de CEUTEC:</h1>
        <Testimonio
          imagen='testimonio-shawn.png'
          nombre='richard shawn'
          pais='islandia'
          cargo='Ingeniera de software'
          empresa='facebook'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />

        <h1>Esto es lo que dicen los estudiantes de CEUTEC:</h1>
        <Testimonio
          imagen='testimonio-Herwin.png'
          nombre='robert Herwin'
          pais='Noruega'
          cargo='Ingeniera de software'
          empresa='facebook'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />

        <h1>Esto es lo que dicen los estudiantes de CEUTEC:</h1>
        <Testimonio
          imagen='testimonio-lisa.jpeg'
          nombre='Lisa shawn'
          pais='Finlandia'
          cargo='Ingeniera de software'
          empresa='facebook'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />

        <h1>Esto es lo que dicen los estudiantes de CEUTEC:</h1>
        <Testimonio
          imagen='testimonio-Rihanna.png'
          nombre='Rihanna'
          pais='EEUU'
          cargo='Cantante'
          empresa='Musica Pop'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />

        <h1>Esto es lo que dicen los estudiantes de CEUTEC:</h1>
        <Testimonio
          imagen='testimonio-sonia.png'
          nombre='Sonia belt'
          pais='Mexico'
          cargo='Ingeniera de software'
          empresa='Twiter'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />

        <h1>Esto es lo que dicen los estudiantes de CEUTEC:</h1>
        <Testimonio
          imagen='testimonio-Emanuel.png'
          nombre='Emanuel corea'
          pais='EEUU'
          cargo='Ingeniera de software'
          empresa='facebook'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />
      </div>
    </div>
  );
}

export default App;
