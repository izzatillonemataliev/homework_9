import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaUserLarge } from "react-icons/fa6";

function Dashboard() {
  const { user } = useGlobalContext();
  console.log(user);
  return (
    <>
      <h1 className="font-black text-5xl">My profile</h1>
      <div className="card w-96 h-4/5 glass mt-12">
        <div className="flex gap-12 justfy-center">
          <img
            className="w-24 ml-6 mt-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            src={user.photoURL}
            alt=""
          />
          <div>
            <h2 className="font-semibold text-2xl mt-9">{user.displayName}</h2>
            <p className="font-semibold text-xl mt-3">Uzbekistan</p>
          </div>
        </div>
        <div>
          <h3 className="tracking-widest ml-9 mt-4">Phone number :</h3>
          <h2 className="tracking-widest ml-9 mt-2">{user.phoneNumber}</h2>
        </div>
        <div>
          <h3 className="tracking-widest ml-9 mt-4">Gmail :</h3>
          <h2 className="tracking-widest ml-9 mt-2">{user.email}</h2>
        </div>
        <div>
          <h4 className="tracking-widest ml-9 mt-4">About me :</h4>
          <p className="tracking-widest ml-9 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            beatae
            <br /> nemo, reprehenderit facere earum <br /> qui.
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
