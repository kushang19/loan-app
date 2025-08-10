import CustomCard from "../../../shared/CustomCard/CustomCard";
import CustomForm from "../../../shared/CustomForm";
import CustomButton from "../../../shared/CustomButton/CustomButton";
import OTPModal from "../../../Modals/OTPModal";
import { useLogic } from "./Logic";
import { mobileInput } from "../../../JSON/mobileInputJSON";
import FormDynamicInputFields from "../../../shared/CustomForm/FormDynamicInputFields";

const Home = () => {
  const {
    showOTP,
    onSubmit,
    handleSubmit,
    handleCloseOTP,
    ROUTES,
    register,
    control,
    setValue,
    getValues,
    watch,
    errors,
  } = useLogic();

  return (
    <div className="max-w-md mx-auto p-2 mt-10">
      <h1 className="text-blue-600 text-center my-2 text-2xl font-bold">
        Please Enter Your Mobile Number To Login Our Loan Application.
      </h1>
      <div className="gold-coins mb-10 text-center">
        <span className="text-5xl">💰</span>
        <span className="text-5xl">💰</span>
        <span className="text-5xl">💰</span>
      </div>

      <CustomCard>
        <CustomForm config={mobileInput} onSubmit={handleSubmit(onSubmit)}>
          <div className="form-details">
            {mobileInput.map((field) => (
              <div className="mb-3">
                <FormDynamicInputFields
                  key={field.id}
                  field={field}
                  register={register}
                  error={errors[field.variable]}
                  control={control}
                  setValue={setValue}
                  getValues={getValues}
                  watch={watch}
                  errors={errors}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end flex-wrap mt-4 w-full">
            <CustomButton
              type="submit"
              rounded="rounded-full"
              hover="hover:bg-blue-700"
              title="Let's Go"
            />
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
