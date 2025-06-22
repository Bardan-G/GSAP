'use client';
import React, { useRef, useState } from 'react'
import slider_left_leaf from '../public 3/images/slider-left-leaf.png'
import slider_right_leaf from '../public 3/images/slider-right-leaf.png'
import Cocktails from './Cocktails'
import { allCocktails, cocktailLists } from '../constants'
import left_arrow from '../public 3/images/left-arrow.png'
import right_arrow from '../public 3/images/right-arrow.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {
    const contentRef= useRef()
    const [currentIndex,setCurrentIndex] = useState(0);
    useGSAP(()=>{
        gsap.fromTo('#title',{opacity:0},{opacity:1,duration:1});
        gsap.fromTo('.cocktail img',{opacity:0,xPercent:-100},{xPercent:0,opacity:1,duration:1,ease:'power1.inOut'});
        gsap.fromTo('.details h2',{yPercent:100,opacity:0},{opacity:100,yPercent:0,ease:'power1.inOut'})
        gsap.fromTo('.details p',{yPercent:100,opacity:0},{opacity:100,yPercent:0,ease:'power1.inOut'})
    },[currentIndex])
    const totalCocktails = allCocktails.length
    const goToSlide =(index)=>{
        const newIndex = (index+totalCocktails) % totalCocktails;

        setCurrentIndex(newIndex);
    }
    const getCocktailAt = (indexOffset)=>{
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }
    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1)
    const nextCocktail = getCocktailAt(1)

  return (
    <section id='menu' aria-labelledby='menu-heading'>
        <img src={slider_left_leaf} alt="left-leaf" id='m-left-leaf' />
        <img src={slider_right_leaf} alt="right-leaf" id='m-right-leaf' />

        <h2 id='menu-heading' className='sr-only'>
            Cocktail Menu 
        </h2>
        <nav className="cocktail-tabs" aria-label='Cocktail Navigation'>
            {allCocktails.map((cocktail,index)=>{
                const isActive = index == currentIndex;

                return(
                    <button key={cocktail.id} 
                    className={`${isActive ? 'text-white border-white':'text-white/50 border-white/50'}`} 
                    onClick={()=>goToSlide(index)}>
                       {cocktail.name} 
                    </button>
                )
            })}
        </nav>
        <div className="content">
            <div className="arrows">
                <button className="text-left" onClick={()=> goToSlide(currentIndex - 1)}>
                    <span className="">{prevCocktail.name}</span>
                    <img src={right_arrow} alt="right-arrow" aria-hidden='true' />
                    
                </button>

                <button className="text-left" onClick={()=> goToSlide(currentIndex + 1)}>
                    <span className="">{nextCocktail.name}</span>
                    <img src={left_arrow} alt="left-arrow" aria-hidden='true' />
                    
                </button>
            </div>
            <div className="cocktail">
                <img src={currentCocktail .image} className='object-contain' alt="" />
            </div>

            <div className="recipe">
                <div ref={contentRef} className='info'>
                    <p className="">Recipe for:</p>
                    <p id='title'>{currentCocktail.name}</p>
                </div>
                 
                <div className="details">
                    <h2>{currentCocktail.title} </h2>
                    <p>
                       {currentCocktail.description} 
                    </p>
                </div>
            </div>
        </div>
     </section>

)}

export default Menu