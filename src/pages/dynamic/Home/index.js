import CustomCard from "../../../shared/CustomCard/CustomCard";
import CustomForm from "../../../shared/CustomForm";
import CustomButton from "../../../shared/CustomButton/CustomButton";
import OTPModal from "../../../Modals/OTPModal";
import { mobileInput, useLogic } from "./Logic";

const Home = () => {
  const { showOTP, handleFormSubmit, handleCloseOTP, ROUTES } = useLogic();

  return (
    <div className="max-w-md mx-auto p-2 mt-10">
      <h1
        className="text-blue-800"
        style={{
          margin: "10px 0",
          fontSize: "27px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Please Enter Your Mobile Number To Login Our Loan Application.
      </h1>

      <div className="gold-coins mb-10 text-center">
        <span className="text-5xl">💰</span>
        <span className="text-5xl">💰</span>
        <span className="text-5xl">💰</span>
      </div>

      <CustomCard>
        <CustomForm config={mobileInput} onSubmit={handleFormSubmit}>
          <div className="flex justify-end flex-wrap mt-4 w-full">
            <CustomButton
              type="submit"
              rounded="rounded-full"
              hover="hover:bg-blue-700"
            >
              Let's Go
            </CustomButton>
          </div>
        </CustomForm>
      </CustomCard>

      <OTPModal
        isOpen={showOTP}
        onClose={handleCloseOTP}
        timerSeconds={120}
        route={ROUTES.personalDetails.replace(":step", 1)}
      />
    </div>
  );
};

export default Home;
