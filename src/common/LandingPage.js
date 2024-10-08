import ImageUpload from "./ImageUploader";
import BasicModal from "./Modal";
import backgroundimg from "../images/blurred-common-room.jpg";

const LandingPage = () => {
  return (
    <>
      <div 
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100" 
        // style={{
        //   // backgroundImage: `url(${backgroundimg})`, // Use backticks for template literal
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat'
        // }}
      >
        <ImageUpload />
        <BasicModal />
      </div>
    </>
  );
};

export default LandingPage;
