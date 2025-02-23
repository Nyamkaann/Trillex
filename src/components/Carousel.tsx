'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  {
    src: '/images/carousel-1.jpg',
    alt: 'First slide',
    title: 'Welcome to Our Site',
    description: 'Discover amazing things with us'
  },
  {
    src: '/images/carousel-2.jpg',
    alt: 'Second slide',
    title: 'Quality Services',
    description: 'We provide the best services'
  },
  {
    src: '/images/carousel-3.jpg',
    alt: 'Third slide',
    title: 'Expert Solutions',
    description: 'Professional solutions for your needs'
  }
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">{image.title}</h2>
              <p className="text-xl">{image.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 