import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>

        <div className='header'>
          <div className='col-6'>
            <img className='img1' src='data:image/png;base64,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'></img>
            <h1 className='name'>Farid Abdullayev</h1>
            <h4 className='name2'>Full Stack Developer</h4>
          </div>

          <div className='col-6'>
            <h5 className='contacts'>Contacts</h5>
            <div className='linebody'></div>
            <h6 className='number'>+994 50-789-36-45</h6>
            <h6 className='gmail'>abdullayevfarid@gmail.com</h6>
          </div>
        </div>


        <div className='header'>
          <div className='col-6'>
            <div className='Aboutme'>
              <h5 className='me'>About me</h5>
              <div className='line'></div>
              <h5 className='about'>I am Ferid Abdullayev. I know C#, ASP.NET Core, SQL, algorithms. In addition, I am familiar with React, HTML, CSS, JavaScript, etc. including front-end and backend technologies.</h5>
              <h5>~ C#</h5>
              <h5>~ ASP.NET Core</h5>
              <h5>~ SQL</h5>
              <h5>~ React</h5>
              <h5>~ HTML</h5>
              <h5>~ CSS</h5>
              <h5>~ JavaScript</h5>
              <h5>~ SASS</h5>
              <h5>~ GIT</h5>
              <h5>~ Algorithms</h5>
            </div>
          </div>

          <div className='col-6'>
            <h5 className='education'>Education</h5>
            <div className='linebody'></div>
            <h5 className='code'>Code Academy</h5>
            <p className='time'>May 2023</p>
            <h5 className='program'>~Programmer</h5>
          </div>
        </div>






        <div className='header'>
          <div className='col-6'>
            <div className=''>
              <h5 className='language'>Language</h5>
              <div className='line'></div>
              <div className='azerbaijan'>
                <h6>Azerbaijan</h6>
                <p className="native">Native</p>
              </div>

              <div className='turkish'>
                <h6>Turkish</h6>
                <p className='intermediate'>Intermediate</p>
              </div>

              <div className='english'>
                <h6>English</h6>
                <p className='elementary'>Elementary</p>
              </div>
            </div>
          </div>


          <div className='portfolioheader'>
            <h5 className='portfolio'>Portfolio</h5>
            <div className='linebody'></div>
            <a className="link" href='https://github.com/farid12344321' target='_blank'>~  Github</a>
          </div>
        </div>




      </div>


    </div>
  );
}

export default App;
