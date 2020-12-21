import './App.css';
import './index.css';
import Logo from './images/coca-cola-logo.svg'
import cocaFoto from './images/coca-cola.svg'
import cocaFoto2 from './images/coca-cola-2.svg'
import cocaFoto3 from './images/coca-cola-3.svg'
import cocaFoto4 from './images/coca-cola-4.svg'
import next from './images/next-bg.svg'
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

function App() {
const CarouselUI = ({ children }) => <div className="body flex flex-wrap justify-center items-center">{children}</div>;
const Carousel = makeCarousel(CarouselUI);
  return (
    <Carousel defaultWait={10000}> 
    <Slide>
    <div className="flex flex-wrap justify-center items-center">
      <div className="rectangle m-5 rounded-3xl grid grid-cols-1 justify-items-center justify-self-center">
          <Slide right big delay={1000} duration={3000}>
            <div className="foto z-20 m-50">
              <img src={cocaFoto}/>
            </div>
          </Slide>
        <div className="flex justify-between foot">
          <Slide top big delay={1000} duration={3000}> 
            <div className="text-white ml-10">
              <h1 className="text-2xl mb-4">Zero Sugar</h1>
              <p>
                Coca-Cola Zero Sugar<br/>
                Real Coke taste with zero<br/>
                calories. It's possible!
              </p>
            </div>
          </Slide>
          <div className="next flex">
            <img src={next} className="z-10"/>
          </div>
        </div>
      </div>
      <img src={Logo} className="logo"/>
      </div>
    </Slide>

    <Slide>
    <div className="flex flex-wrap justify-center items-center">
      <div className="rectangle-2 m-5 rounded-3xl grid grid-cols-1 justify-items-center justify-self-center">
      <Slide right big delay={1000} duration={3000}>
            <div className="foto z-40 m-10">
              <img src={cocaFoto2} />
            </div>
          </Slide>
        <div className="flex justify-between foot">
          <Slide top big delay={1000} duration={3000}>
            <div className="text-white ml-10">
              <h1 className="text-2xl mb-4">Vanilla</h1>
              <p>
                Great taste of Coca-Cola<br/> 
                with refreshingly smooth<br/> 
                balance of vanilla flavor.  
              </p>
            </div>
          </Slide>
          <div className="next flex">
            <img src={next} className="z-10"/>
          </div>
        </div>
      </div>
      <img src={Logo} className="logo"/>
      </div>
    </Slide>

    <Slide>
    <div className="flex flex-wrap justify-center items-center">
      <div className="rectangle-3 m-5 rounded-3xl grid grid-cols-1 justify-items-center justify-self-center">
      <Slide right big delay={1000} duration={3000}>
            <div className="foto z-40 m-10">
              <img src={cocaFoto3} />
            </div>
          </Slide>
        <div className="flex justify-between foot">
          <Slide top big delay={1000} duration={3000}>
            <div className="text-white ml-10">
              <h1 className="text-2xl mb-4">Cherry</h1>
              <p>
                Great taste of Coca-Cola<br/> 
                with a sweet, smooth<br/> 
                cherry flavor. 
              </p>
            </div>
          </Slide>
          <div className="next flex">
            <img src={next} className="z-10"/>
          </div>
        </div>
      </div>
      <img src={Logo} className="logo"/>
      </div>
    </Slide>

    <Slide>
    <div className="flex flex-wrap justify-center items-center">
      <div className="rectangle-4 m-5 rounded-3xl grid grid-cols-1 justify-items-center justify-self-center">
      <Slide right big delay={1000} duration={3000}>
            <div className="foto z-40 m-10">
              <img src={cocaFoto4} />
            </div>
          </Slide>
        <div className="flex justify-between foot">
          <Slide top big delay={1000} duration={3000}>
            <div className="text-white ml-10">
              <h1 className="text-2xl mb-4">Orange Vanilla</h1>
              <p>
                Newest flavor to join the<br/> 
                Coke family with a new<br/> 
                twist on delicious.
              </p>
            </div>
          </Slide>
          <div className="next flex">
            <img src={next} className="z-10"/>
          </div>
        </div>
      </div>
      <img src={Logo} className="logo"/>
      </div>
    </Slide>
    </Carousel>

  );
}

export default App;
