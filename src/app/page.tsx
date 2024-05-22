import CustomButton from "./components/CustomButton";
import FoodComponent from "./components/FoodComponent";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import BoxComponent from "./components/LocationBox";
import NavBar from "./components/Navbar";
import ReviewComponent from "./components/Review";


export default function Home() {
  
  
  return (
    <main>
      <NavBar />
      <Hero />
      <div className="mt-9">
        <h1 className="text-green-500 mt-4 justify-center text-center text-xl lg:text-3xl font-bold mb-4">
          Explore favorite cities!
        </h1>
        <div className="mt-4 text-slate-500 justify-center text-center text-base lg:text-xl mb-4">
          Find us in these cities and many more
        </div>
        <div className="flex justify-center text-center flex-wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <BoxComponent bgImage={"/images/location.jpg"} locationName={"Kathmandu"} />
            <BoxComponent bgImage={"/images/location.jpg"} locationName={"Kathmandu"} />
            <BoxComponent bgImage={"/images/location.jpg"} locationName={"Kathmandu"} />
            <BoxComponent bgImage={"/images/location.jpg"} locationName={"Kathmandu"} />
            <BoxComponent bgImage={"/images/location.jpg"} locationName={"Kathmandu"} />
            <BoxComponent bgImage={"/images/location.jpg"} locationName={"Kathmandu"} />
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <CustomButton
            title="Show more"
            containerStyles="bg-green-500 text-white rounded-lg py-3 px-5 mr-10 font-bold hover:bg-green-700 justify-center item-center w-35 h-12"
          />
        </div>
      </div>

      <div className="mt-10 bg-green-50 pb-2 pt-10">
        <h1 className="text-green-500 mt-4 justify-center text-center text-xl lg:text-3xl font-bold mb-4">
          Explore local favorites!
        </h1>
        <h2 className="mt-4 text-slate-500 justify-center text-center text-base lg:text-xl mb-1">
          As the sun begins to set, treat yourself to a leisurely <br />
          dinner at one of the city's acclaimed eateries
        </h2>
        <div className="flex justify-center text-center flex-wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
            <FoodComponent backgroundImage={"/images/momo.jpg"} foodName={"Vegeterian Momo"} foodLocation={"kathmandu"} deliveryStatus={false} rating={0} foodCost={150} reviewRating={4} />
            <FoodComponent backgroundImage={"/images/momo.jpg"} foodName={"Vegeterian Momo"} foodLocation={"kathmandu"} deliveryStatus={false} rating={0} foodCost={150} reviewRating={4} />
            <FoodComponent backgroundImage={"/images/momo.jpg"} foodName={"Vegeterian Momo"} foodLocation={"kathmandu"} deliveryStatus={false} rating={0} foodCost={150} reviewRating={4} />
            <FoodComponent backgroundImage={"/images/momo.jpg"} foodName={"Vegeterian Momo"} foodLocation={"kathmandu"} deliveryStatus={false} rating={0} foodCost={150} reviewRating={4} />
            <FoodComponent backgroundImage={"/images/momo.jpg"} foodName={"Vegeterian Momo"} foodLocation={"kathmandu"} deliveryStatus={false} rating={0} foodCost={150} reviewRating={4} />
            <FoodComponent backgroundImage={"/images/momo.jpg"} foodName={"Vegeterian Momo"} foodLocation={"kathmandu"} deliveryStatus={false} rating={0} foodCost={150} reviewRating={4} />
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 mb-10">
          <CustomButton
            title="Show more"
            containerStyles="bg-green-500 text-white rounded-lg py-3 px-5 mr-10 font-bold hover:bg-green-700 justify-center item-center w-35 h-12"
          />
        </div>
      </div>
      <div>
        <h1 className="text-slate-600 font-semibold mt-20 justify-center mb-10 text-center text-xl lg:text-3xl">
          What people Think <span className="text-green-500"> About Us?</span>
        </h1>
      </div>
      <div className="flex justify-center text-center flex-wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <ReviewComponent date={new Date()} starRating={0} review={"In the quiet hours of dawn, when the world slumbers and dreams dance on the edges of consciousness, there exists a realm untouched by the rush of time. Here, whispers of forgotten tales linger in the dew-kissed air, where shadows weave intricate patterns upon the earth. It is a place where the heart finds solace and the mind finds peace, where the gentle melody of nature's symphony orchestrates a harmonious symphony."} image={""} userName={""} />
          <ReviewComponent date={new Date()} starRating={0} review={"In the quiet hours of dawn, when the world slumbers and dreams dance on the edges of consciousness, there exists a realm untouched by the rush of time. Here, whispers of forgotten tales linger in the dew-kissed air, where shadows weave intricate patterns upon the earth. It is a place where the heart finds solace and the mind finds peace, where the gentle melody of nature's symphony orchestrates a harmonious symphony."} image={""} userName={""} />
          <ReviewComponent date={new Date()} starRating={0} review={"In the quiet hours of dawn, when the world slumbers and dreams dance on the edges of consciousness, there exists a realm untouched by the rush of time. Here, whispers of forgotten tales linger in the dew-kissed air, whispers of forgotten tales linger in the dew-kissed air,  ."} image={""} userName={""} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 mb-20">
        <CustomButton
          title="Show more"
          containerStyles="bg-green-500 text-white rounded-lg py-3 px-5 mr-10 font-bold hover:bg-green-700 justify-center item-center w-35 h-12"
        />
      </div>
      <Footer />
    </main>
  );
}
