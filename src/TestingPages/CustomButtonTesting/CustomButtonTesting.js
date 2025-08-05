import React from "react";
import CustomButton from "../../shared/CustomButton/CustomButton";
import { FaPlus } from "react-icons/fa";
import CustomCard from "../../shared/CustomCard/CustomCard";

const CustomButtonTesting = () => {
  return (
    <div>
      <h1>Form Page</h1>
      <div className="p-4 space-y-4">
        {/* Primary CustomButton */}
        <CustomButton onClick={() => alert("Clicked!")}>Click Me</CustomButton>

        {/* Colored CustomButton */}
        <CustomButton
          bgColor="bg-green-600"
          textColor="text-white"
          hover="hover:bg-green-700"
          rounded="rounded-full"
        >
          Green CustomButton
        </CustomButton>

        {/* With Icon */}
        <CustomButton
          icon={<FaPlus />}
          bgColor="bg-indigo-500"
          hover="hover:bg-indigo-600"
        >
          Add Item
        </CustomButton>

        {/* Disabled CustomButton */}
        <CustomButton disabled>Disabled</CustomButton>

        {/* Full Width */}
        <CustomButton fullWidth bgColor="bg-red-500">
          Full Width CustomButton
        </CustomButton>

        {/* Submit type */}
        <CustomButton type="submit" bgColor="bg-black" textColor="text-white">
          Submit Form
        </CustomButton>
      </div>

      <p>----------------------- Custom Card ---------------------</p>

      <CustomCard
        title="Tesla Model 3"
        subtitle="Electric Sedan"
        description="Enjoy the smooth, powerful, and eco-friendly ride of a Tesla."
        image="https://source.unsplash.com/400x200/?tesla"
        footer={<span>Starting at $35,000</span>}
        bgColor="#f0f8ff"
        textColor="#222"
        border="1px solid #ccc"
        borderRadius="16px"
        boxShadow="0 4px 12px rgba(0,0,0,0.1)"
        onClick={() => alert("Card Clicked!")}
      >
        <button style={{ marginTop: "8px" }}>Learn More</button>
      </CustomCard>

      {/* Add Tailwind (optional) */}
      <CustomCard
        // title="Custom Tailwind Card"
        // className="bg-white text-black p-4 rounded-lg shadow-md hover:shadow-lg"
      >
        Kushang
      </CustomCard>


      
    </div>
  );
};

export default CustomButtonTesting;

