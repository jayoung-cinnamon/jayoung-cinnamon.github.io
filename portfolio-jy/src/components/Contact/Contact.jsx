import React, { useContext, useState, useEffect } from 'react';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';
import Container from './../../styles/container/Container';
import Wrapper from '../../styles/container/Wrapper';
import { useForm } from "react-hook-form";

function Contact () {

  const [isDesktop,setIsDesktop] = useState(false);
  const [isMobile,setIsMobile]= useState(false);
  const {register,handleSubmit,errors} = useForm();
  const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }
  
 const onSubmit = (data, r) => {
        alert(`Thank you for your message from ${data.email}`);
        const templateId = 'template_l7s9qxd';
        const serviceID = 'my_gmail';
        sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email })
        r.target.reset();
    }

   useEffect(()=>{
      if(window.innerWidth>769){
        setIsDesktop(true);
        setIsMobile(false);
      }
      else{
        setIsMobile(true);
        setIsDesktop(false);
      }
    },[]);
    
  return (

    <section id="contact">
      <Container>
        <Wrapper>
          <Fade bottom duration={1000} delay={800} distance="30px">
          <Title title ="Contact me:)"/>
            <div className="contact-text">Would you like to work with me? Awesome!</div>
          </Fade>
           <form onSubmit={(onSubmit)}>
             <input
                    placeholder="name"
                    name="name"
                    ref={register({
                      required:"Please enter your name",
                      maxLength:{
                        value:20,
                        message:"Please enter a name with fewer than 20 characters"
                      }
                    })} >
             </input>
             <br/>
             {errors.name && errors.name.message}
             <br/>
             <input 
                    placeholder="email"
                    name="email"
                    ref={
                        register({
                            required: "Please enter an email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })
                    }
              ></input> 
              <br/>
              {errors.email && errors.email.message}<br />
              <textarea 
                    placeholder="comment"
                    name="comment"
                    ref={
                        register({
                            required: true
                        })
                    } 
              ></textarea>
              <br/>
              {errors.comment && "oops, you forgot your message!"}<br />
              <input type="submit" />
           </form>
        </Wrapper>
      </Container>
    </section>
  ); 
};

export default Contact;