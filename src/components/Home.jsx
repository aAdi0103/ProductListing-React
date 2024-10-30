import Nav from "../components/Nav";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { productContext } from "../utils/Context";
import { useContext } from "react";

const Home = () => {
  const [products] = useContext(productContext);

  return products ? (
    <>
      <Nav />
      <div className="w-[80vw] h-screen bg-zinc-300 p-4 rounded-md flex flex-wrap overflow-x-hidden overflow-y-auto gap-10">
        {products.map((p, i) => (
          <Link
            key={i}
            to={`/details/${p.id}`}
            className="card hover:scale-110 transition-transform w-[16vw]  rounded-sm bg-white overflow-hidden p-2 flex flex-col items-center justify-center"
          >
            <img className="h-[65%]" src={p.image} alt={p.name} />
            <h1 className="mt-2">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
