import { useNavigate } from "react-router";
import glogo from "../../assets/image/google_logo.png";
import savej from "../../assets/image/Rectangle 19@2x.png";

const UiCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full card-shadow p-5 rounded-2xl cursor-pointer"
      onClick={() => {
        navigate("/applyjob");
      }}
    >
      <section className="w-full flex justify-between">
        <img src={glogo} className="w-10 object-contain" />
        <img src={savej} className="w-5 object-contain" />
      </section>
      <section className="w-full mt-5">
        <h3 className="text-lg font-bold">UI/UX Designer</h3>
        <p>Google inc . California, USA</p>
      </section>
      <section className="w-full flex items-center gap-3 mt-5">
        <Lable className="flex-1" title="Design" />
        <Lable className="flex-1" title="Full time" />
        <Lable className="flex-2" title="Senior designer" />
      </section>
      <section className="w-full flex items-center justify-between mt-5">
        <p className="text-gray-400 text-sm">25 minute ago</p>
        <p className="text-lg text-gray-400">
          <span className="font-bold text-black ">$15k</span>/Mo
        </p>
      </section>
    </div>
  );
};

export default UiCard;

const Lable = ({ className, title }: { className: string; title: string }) => {
  return (
    <div className={`py-2 bg-gray-100 rounded-md text-center ${className}`}>
      {title}
    </div>
  );
};
