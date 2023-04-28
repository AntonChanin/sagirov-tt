import BackgroundLayer from './components/BackgroundLayer';
import Button from './components/Button';
import InfoCard from './components/InfoCard';
import Navbar from './components/Navbar';
import Title from './components/Title';

function App() {

  return (
    <> 
      <BackgroundLayer name="space" url="src/assets/space.png" className="bg-black overflow-hidden">
        <Navbar className="max-w-[1170px]" />
        <div className="max-w-[1170px] h-1/3 m-auto mt-16 flex flex-row justify-between">
          <div className="flex flex-col justify-between w-fit">
            <div>
              <Title size="MAX">ПУТЕШЕСТВИЕ</Title>
              <Title size="REGULAR">на красную планету</Title>
            </div>
            <div className="mb-[25%]">
              <Button type="secondary">Начать путешествие</Button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between content-evenly w-1/4 h-full gap-4">
            <InfoCard start="мы" main="1" end="на рынке"/>
            <InfoCard start="гарантируем" main="50%" end="безопасность" />
            <InfoCard start="календарик за" main="2001г." end="в подарок" />
            <InfoCard start="путешествие" main="597" end="дней" />
          </div>
        </div>
        <BackgroundLayer name="mars" url="src/assets/redplanet.png" className="absolute top-0 left-0" />
        <BackgroundLayer name="gardient" className="absolute bottom-[30%] top-auto h-48 bg-gradient-to-t from-black to-transparent" />
      </BackgroundLayer>
    </>
  );
}

export default App;
