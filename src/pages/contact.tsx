import * as React from "react";
import * as S from "styles/contact";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

import Home from "icons/Home";
import NextHead from "components/NextHead";
import ErrorWarning from "components/ErrorWarning";
import { SubmitButton } from "components/SubmitButton";

import { postRequest, IFormInput } from "constants/contact";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const emailWarning = "a valid email is required.";
  const warningMessage = "message must not be empty.";

  const [isOver, setIsOver] = React.useState(false);

  const router = useRouter();

  function handleBackwardsButton(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evt.preventDefault();
    router.push("/");
  }

  const response = useMutation((data: IFormInput) => postRequest(data));
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    response.mutateAsync(data);
  };
  //const message = response?.data?.message || response?.data;
  console.log(response?.data);
  return (
    <S.ContactContainer>
      <NextHead title="fouz contact page" />
      <S.Contactform onSubmit={handleSubmit(onSubmit)}>
        <S.BackwardsButton
          onClick={(evt) => {
            handleBackwardsButton(evt);
          }}
        >
          <Home fontSize="25px" color="#ffffff" />
        </S.BackwardsButton>
        <S.EmailInputContainer>
          <S.MainTitle
            style={{
              color: errors?.hasOwnProperty("email") ? "#ff0000" : "#ffffff",
              transition: "1s",
            }}
          >
            Contact Me
          </S.MainTitle>
          <S.InputLabel
            htmlFor="email"
            className={isOver ? "upwards" : "normal"}
          >
            Your email
          </S.InputLabel>
          <S.ContactEmailInput
            id="email"
            onMouseEnter={() => {
              setIsOver(true);
            }}
            onMouseLeave={() => {
              setIsOver(false);
            }}
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          <ErrorWarning
            label="email"
            errors={errors}
            info={emailWarning}
            color="#ffffff"
          />
        </S.EmailInputContainer>
        <S.TextInputContainer>
          <S.InputLabel
            htmlFor="message"
            className={isOver ? "upwards" : "normal"}
          >
            Your message
          </S.InputLabel>
          <S.TextArea
            className={
              errors.hasOwnProperty("message") ? "messageError" : undefined
            }
            onMouseEnter={() => {
              setIsOver(true);
            }}
            onMouseLeave={() => {
              setIsOver(false);
            }}
            {...register("message", {
              required: true,
            })}
          ></S.TextArea>
          <ErrorWarning
            label="message"
            errors={errors}
            info={warningMessage}
            color="#ffffff"
          />
        </S.TextInputContainer>
        <SubmitButton className={isOver ? "downwards" : "upwards"}>
          {isOver ? "Hello" : "Send"}
        </SubmitButton>
        {response?.data?.ok ? (
          <S.QueryStatus>Thanks, message sent to Giovani!</S.QueryStatus>
        ) : (
          <S.QueryStatus style={{ color: "orange" }}>
            {response?.data}
          </S.QueryStatus>
        )}
      </S.Contactform>
    </S.ContactContainer>
  );
}

export default Contact;
