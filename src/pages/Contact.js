import ReactDom from "react-dom";
import { useForm } from "react-hook-form";
import { FormInput } from "../components/UI/Input";
import { PrimaryButton } from "../components/UI/Buttons";
import { ArrowForward } from "@mui/icons-material";
import NavBar from "../components/Navigation/NavBar";
import { FadeDownAnimation } from "../components/UI/Animations";
const Contact = ({ showContact, setShowContact }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const inputItems = [
    {
      inputName: "firstName",
      title: "First Name",
      type: "text",
      placeholder: "Enter your First Name",
      register: register,
      errors: errors,
    },
    {
      inputName: "lastName",
      title: "Last Name",
      type: "text",
      placeholder: "Enter your Last Name",
      register: register,
      errors: errors,
    },
    {
      inputName: "email",
      title: "Email Address",
      type: "email",
      placeholder: "Enter your Email Address",
      register: register,
      errors: errors,
    },
  ];
  return (
    <FadeDownAnimation className="flex h-screen justify-between lg:fixed z-50 w-full lg:top-0   transition duration-300 overflow-y-hidden">
      <navbar className="flex  lg:hidden">
        <NavBar
          bgColor="#1f0041"
          showContact={showContact}
          setShowContact={setShowContact}
        />
      </navbar>
      <div
        className="hidden lg:block h-full py-96 backdrop-filter backdrop-blur-xl bg-opacity-60  bg-purple w-2/4 z-20"
        onClick={() => {
          setShowContact(!showContact);
        }}
      ></div>

      <div className="bg-bgImage bg-cover  w-full lg:w-2/4 relative h-full py-12">
        <div
          alt="close"
          className="w-20 h-20 rounded-full cursor-pointer hidden lg:flex justify-center items-center absolute bg-white py-4 top-12 -left-10 text-pry-50 z-50"
          onClick={() => {
            setShowContact(!showContact);
          }}
        >
          <ArrowForward />
        </div>
        <div className="hidden lg:block h-40 w-40 rounded-full z-10 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  bg-[#1f0041] py-8 absolute top-24 right-12"></div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col px-6 lg:px-24 py-12 lg:py-0 justify-start items-start gap-4 z-20"
        >
          <h3 className="text-white text-2xl text-center  font-heading z-20">
            {" "}
            Hey, we are still in the works, but you can send us a message!
          </h3>
          {inputItems.map((item) => (
            <FormInput
              key={item.inputName}
              inputName={item.inputName}
              title={item.title}
              placeholder={item.placeholder}
              type={item.type}
              register={item.register}
              errors={item.errors}
              py="4"
            />
          ))}
          <FormInput
            inputName="comment"
            title="Tell us what you need help with"
            placeholder="Enter a problem like: channel problem"
            type="text"
            py="4 pb-20"
            register={register}
            errors={errors}
          />
          <PrimaryButton
            bgColor="pry-50"
            name="Send message"
            textColor="white w-full"
            py="4"
          />
        </form>
      </div>
    </FadeDownAnimation>
  );
};

const portalElement = document.getElementById("overlays");
const ContactPopOver = ({ showContact, setShowContact }) => {
  return (
    <>
      {ReactDom.createPortal(
        <Contact
          showContact={showContact}
          setShowContact={setShowContact}
        ></Contact>,
        portalElement
      )}
    </>
  );
};
export default ContactPopOver;
