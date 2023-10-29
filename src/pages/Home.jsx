import Courousel from "../components/mainpage/Courousel";

const Home = () => {
  return (
    // <div>Home</div>
    <>
      <Courousel />
     <div>
     <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4_k6OOqrCRQ?si=UR4XmsDGqjKVAqKx"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
     </div>
    </>
  );
};

export default Home;
