import React from 'react'
import footer_right_leaf from '../public 3/images/footer-right-leaf.png'
import footer_left_leaf from '../public 3/images/footer-left-leaf.png'
import { openingHours, socials } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Contact = () => {
    useGSAP(()=>{
        const titleSplit = SplitText.create('#contact h2',{type: 'words'});

        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:'top center',
            
            },
            ease:'power1.inOut'
        })

        timeline.from(titleSplit.words,{
            opacity:0,
            yPercent:100,
            stagger:0.02
        })
        .from('#contact h3, #contact p',{
            opacity:0,yPercent:100,
            stagger:0.02,
        })
        .to('#f-right-leaf',{    y:'-50',  duration:1,  ease:'power1.inOut' })
        .to('#f-left-leaf',{    y:'-50',  duration:1,  ease:'power1.inOut' },'<')
    })
  return (
   <footer className="" id='contact'>
    <img src={footer_right_leaf} alt="leaf-right" id='f-right-leaf' />
    <img src={footer_left_leaf} alt="leaf-left" id='f-left-leaf' />

    <div className="content">
        <h2>Where to Find Us </h2>

        <div className="">
            <h3>Visit Our Bar</h3>
            <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>
        <div>
            <h3>Contact us</h3>
            <p>+977 9824396262</p>
            <p>gsap-lemon.vercel.app</p>
        </div>
        <div>
            <h3>Open Everyday</h3>
            {openingHours.map((time)=>(
                <p key={time.day}>
                    {time.day}:{time.time}
                </p>
            ))}
        </div>
        <div>
            <h3>Social</h3>
            <div className="flex-center gap-5">
                {socials.map((social)=>(
                    <a href={social.url} key={social.name} rel='noopener noreferrer' aria-label={social.icon} >
                        <img src={social.icon} alt="" />
                    </a>
                ))}
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Contact