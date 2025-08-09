export const addvariant = {
  keyWordAndPhrases: {
    mainheading: "Add Variant Details",

    Updateheading: "Edit Variant Details",

    addVariantSave: "Save",

    UpdateVariantSave: "Update",

    checkboxTitle: "Status",
  },

  addVariantInputs: [
    {
      id: 1,

      placeholder: "Select Product",

      title: "Product",

      type: "reactSelect",

      variableName: "product",

      validations: {
        // fieldType: 'string',

        isRequired: true,

        isRequiredError: "product is required*",
      },

      options: [
        { id: 1, label: "option 1", value: "option 1" },

        { id: 2, label: "option 2", value: "option 2" },
      ],
    },

    {
      id: 2,

      placeholder: "Select Make",

      title: "Make",

      type: "reactSelect",

      variableName: "make",

      validations: {
        // fieldType: 'string',

        isRequired: true,

        isRequiredError: "Make is required*",
      },

      options: [
        { id: 1, label: "option 1", value: "option 1" },

        { id: 2, label: "option 2", value: "option 2" },
      ],
    },

    {
      id: 3,

      placeholder: "Select Model",

      title: "Model",

      type: "reactSelect",

      variableName: "model",

      validations: {
        // fieldType: 'string',

        isRequired: true,

        isRequiredError: "Model is required*",
      },

      options: [
        { id: 1, label: "option 1", value: "option 1" },

        { id: 2, label: "option 2", value: "option 2" },
      ],
    },

    {
      id: 4,

      placeholder: "Select Fuel",

      title: "Fuel",

      type: "reactSelect",

      variableName: "fuel",

      validations: {
        // fieldType: 'string',

        isRequired: true,

        isRequiredError: "Fuel is required*",
      },

      options: [
        { id: 1, label: "option 1", value: "option 1" },

        { id: 2, label: "option 2", value: "option 2" },
      ],
    },

    {
      id: 5,

      placeholder: "Enter CC",

      title: "CC",

      type: "textField",

      variableName: "cc",

      validations: {
        fieldType: "string",

        isRequired: false,

        maxLength: 50,

        maxLengthError: "Max 50 characters are allowed",
      },
    },

    {
      id: 6,

      placeholder: "Enter Variant",

      title: "Variant",

      type: "textField",

      variableName: "variant",

      validations: {
        fieldType: "string",

        isRequired: true,

        isRequiredError: "Variant is required*",

        maxLength: 50,

        maxLengthError: "Max 50 characters are allowed",
      },
    },

    {
      id: 7,

      placeholder: "Select Segment Type",

      title: "Segment Type",

      type: "reactSelect",

      variableName: "segmentType",

      validations: {
        // fieldType: 'string',

        isRequired: true,

        isRequiredError: "Segment Type is required*",
      },

      options: [
        { id: 1, label: "option 1", value: "option 1" },

        { id: 2, label: "option 2", value: "option 2" },
      ],
    },

    {
      id: 8,

      placeholder: "Enter Ex-Showroom Price",

      title: "Ex-Showroom Price",

      type: "textField",

      variableName: "exShowroomPrice",

      validations: {
        fieldType: "float",

        isRequired: true,

        isRequiredError: "Ex-Showroom Price is required*",
      },
    },

    {
      id: 9,

      placeholder: "Select Main Reference Code",

      title: "Main Reference Code",

      type: "reactSelect",

      variableName: "mainReferenceCode",

      validations: {
        // fieldType: 'string',

        isRequired: true,

        isRequiredError: "Main Reference Code is required*",
      },

      options: [
        { id: 1, label: "option 1", value: "option 1" },

        { id: 2, label: "option 2", value: "option 2" },
      ],
    },

    {
      id: 10,

      placeholder: "Select Body Type",

      title: "Body Type",

      type: "reactSelect",

      variableName: "bodyType",

      validations: {
        // fieldType: 'string',

        isRequired: true,

        isRequiredError: "Body Type is required*",
      },

      options: [
        { id: 1, label: "option 1", value: "option 1" },

        { id: 2, label: "option 2", value: "option 2" },
      ],
    },

    {
      id: 11,

      placeholder: "Enter GVW",

      title: "GVW",

      type: "textField",

      variableName: "gvw",

      validations: {
        fieldType: "string",

        isRequired: false,
      },
    },

    {
      id: 12,

      placeholder: "Enter Seating Capacity",

      title: "Seating Capacity",

      type: "textField",

      variableName: "seatingCapacity",

      validations: {
        fieldType: "number",

        isRequired: true,

        isRequiredError: "Seating Capacity is required*",
      },
    },

    {
      id: 13,

      placeholder: "Select No. Of Wheels",

      title: "No. Of Wheels",

      type: "textField",

      variableName: "noOfWheels",

      validations: {
        fieldType: "number",

        isRequired: true,

        isRequiredError: "No. Of Wheels is required*",
      },
    },

    {
      id: 14,

      placeholder: "Select Status",

      title: "Status",

      type: "reactSelect",

      variableName: "status",

      validations: {
        // fieldType: 'string',

        isRequired: true,

        isRequiredError: "status is required*",
      },

      options: [
        { id: 1, label: "option 1", value: 1 },

        { id: 2, label: "option 2", value: 2 },
      ],
    },
  ],
};
