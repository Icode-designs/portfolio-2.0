import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import {
  ContactContainer,
  ContactForm,
  FormInput,
  FormLabel,
  FormMessage,
} from "styles/Contact.style";
import { Button, FlexContainer, SocialIcon } from "styles/Global.style";

const Contact = () => {
  const Socials = [
    { icon: <FaGithub />, link: "https://github.com/Icode-designs" },
    { icon: <FaTwitter />, link: "https://x.com/Alexanderosakwe" },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/_himbonaventure/",
    },
    { icon: <FaWhatsapp />, link: "https://wa.me/2349120026574" },
  ];

  return (
    <ContactContainer>
      <ContactForm action="https://formspree.io/f/xanqjabo" method="POST">
        <div>
          <FormLabel>Name</FormLabel>
          <FormInput name="name" type="text" placeholder="What is your name?" />
        </div>
        <div>
          <FormLabel>Email</FormLabel>
          <FormInput
            name="email"
            type="email"
            placeholder="What is your email?"
          />
        </div>
        <div>
          <FormLabel>Tell me...</FormLabel>
          <FormMessage name="message" placeholder="What is your message?" />
        </div>

        <Button type="submit">Submit</Button>
      </ContactForm>

      <FlexContainer
        $marginT="3rem"
        $marginL=""
        $marginR=""
        $gap="1rem"
        $justify="center"
      >
        {Socials.map((data, index) => (
          <SocialIcon key={index}>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              {data.icon}
            </a>
          </SocialIcon>
        ))}
      </FlexContainer>
    </ContactContainer>
  );
};

export default Contact;
