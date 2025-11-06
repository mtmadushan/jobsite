import UiButton from "../components/buttons/button";
import UiInput from "../components/inputs/input";
import UiTextarea from "../components/inputs/textarea";
// import UiTextarea from "../components/inputs/textarea"

const CreateJobScreen = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center p-6 ">
      <h1 className="mt-12 text-3xl font-bold text-txt-primary">
        Create New Job
      </h1>
      <p className="text-sm text-txt-secondary mt-2 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, sunt
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:px-20">
        {/* Job Title */}
        <UiInput
          placeholder="e.g., Senior Frontend Developer"
          type="text"
          label="Job Title"
          isShadow
        />

        {/* Company Name */}
        <UiInput
          placeholder="e.g., Aspirations I-Lab"
          type="text"
          label="Company Name"
          isShadow
        />

        {/* Location */}
        <UiInput
          placeholder="e.g., Remote, Colombo, Matara"
          type="text"
          label="Location"
          isShadow
        />

        {/* Job Type Dropdown (You'll need a new Select component) */}
        {/* <UiSelect 
        label="Job Type" 
        options={['Full-time', 'Part-time', 'Contract', 'Internship']}

    /> */}
    {/* Description*/}

        <UiTextarea
          placeholder="Describe the role, team, and company culture..."
          label="Full Description"
          isShadow
          rows={8}
        />
{/* Responsibilities*/}
        <UiTextarea
          placeholder="List key responsibilities, one per line or using bullet points."
          label="Key Responsibilities"
          isShadow
          rows={6}
        />
        {/* Qualifications */}
        <UiTextarea
          placeholder="List required skills and experience."
          label="Minimum Qualifications"
          isShadow
          rows={6}
        />
      </div>

      <section className="w-full px-5 mt-7 flex flex-col md:flex-row md:gap-5 pb-5 gap-3 md:px-20">
        <UiButton
          label="Save Draft"
          textClassName="text-txt-primary"
          className="bg-btn-secondary"
        />
        <UiButton label="Publish Post" textClassName="text-white" />
      </section>
    </div>
  );
};

export default CreateJobScreen;
