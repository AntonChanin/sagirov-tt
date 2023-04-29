import BackgroundLayer from './components/BackgroundLayer';
import Button from './components/Button';
import InfoCard from './components/InfoCard';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Text from './components/Text';

function App() {

  return (
    <> 
      <BackgroundLayer name="space" url="src/assets/space.png"   className="bg-black bg-top overflow-hidden h-full">
        <Navbar className="max-w-[1170px]" />
        <div className="max-w-[1170px] mobile:mt-[456px] lg:w-full md:w-full mobile:w-fit sm:w-fit m-auto md:mt-16 lg:mt-16 flex lg:flex-row md:flex-row mobile:flex-col sm:flex-col mobile:justify-normal sm:justify-normal md:justify-between  sm:h-full md:h-1/3">
          <div className="flex flex-col justify-between w-fit md:h-full sm:h-1/4">
            <div>
              <Title
                size="MAX"
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-800"
              >
                ПУТЕШЕСТВИЕ
              </Title>
              <Title
                size="MEDIUM"
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-800"
              >на красную планету</Title>
            </div>
            <div>
              <Button type="secondary">Начать путешествие</Button>
            </div>
          </div>
          <div className="flex lg:flex-wrap md:flex-col md:h-full sm:h-fit justify-between content-evenly w-1/4 mobile:h-fit gap-4 z-20">
            <InfoCard
              className="text-[rgba(255,255,255,0.8)]"
              start="мы"
              main="1"
              end="на рынке"
            />
            <InfoCard
              className="text-[rgba(255,255,255,0.8)]"
              start="календарик за"
              main={
                <div className="flex items-end justify-center">
                  <Title size="EXTRA">2001</Title>
                  <Text size="MEDIUM">г.</Text>
                </div>
              }
              end="в подарок" />
            <InfoCard
              className="text-[rgba(255,255,255,0.6)]"
              start="гарантируем"
              main="50%"
              end="безопасность"
            />
            <InfoCard className="text-[rgba(255,255,255,0.6)]" start="путешествие" main="597" end="дней" />
          </div>
        </div>
        <BackgroundLayer name="mars" url="src/assets/redplanet.png" className="absolute top-0 left-0 h-full bg-top mars" />
      </BackgroundLayer>
    </>
  );
}

export default App;
