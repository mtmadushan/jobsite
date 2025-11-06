import { useNavigate } from "react-router";
import bgimage from "../assets/image/Background.png";
import UiButton from "../components/buttons/button";
import UiCard from "../components/cards/card";
const DashboardScreen = () => {
    const navigate =useNavigate()
  return (
    <div className="w-full">
        
      <section className="w-full h-[280px] bg-no-repeat bg-center bg-cover" style={{ backgroundImage:`url(${bgimage})` }}>
      </section>
<section className="w-full flex justify-end mt-5 pr-5 md:pr-12 lg:pr-20">
    <div className="w-fit">
        <UiButton label="Create Job" textClassName="text-white" className="bg-btn-primary px-12" onClick={()=>{
            navigate("/createjob")
        }}/>
    </div>
    
</section>
      <section className="w-full px-5 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-12 lg:mt-20">
<UiCard/>
<UiCard/>
<UiCard/>
<UiCard/>
<UiCard/>
      </section>
    </div>
  )
}

export default DashboardScreen
