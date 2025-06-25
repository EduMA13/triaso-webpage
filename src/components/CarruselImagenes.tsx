"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [  
  "/Images/Carrusel/Catalogo-Nortam-09.png",
  "/Images/Carrusel/Catalogo-Nortam-10.png",
  "/Images/Carrusel/Catalogo-Nortam-11.png",
  "/Images/Carrusel/Catalogo-Nortam-12.png",
  "/Images/Carrusel/Catalogo-Nortam-13.png",
]

const CarruselImagenes = () => {
  const [isVertical, setIsVertical] = useState(false)

  useEffect(() => {
    const checkOrientation = () => {
      setIsVertical(window.innerWidth <= 640)
    }

    checkOrientation()
    window.addEventListener("resize", checkOrientation)
    return () => window.removeEventListener("resize", checkOrientation)
  }, [])

  return (
    <div className="w-full flex justify-center px-4 mt-10 mb-10">
      <Carousel
        orientation={isVertical ? "vertical" : "horizontal"}
        className={`w-full ${isVertical ? "h-[200px] max-w-[300px]" : "max-w-[800px]"}`}
      >
        <CarouselContent className={isVertical ? "-mt-1 h-[200px]" : ""}>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className={isVertical ? "pt-1" : "basis-full"}
            >
              <div className="p-1">
                <Card className="w-full aspect-[2/1] bg-white flex items-center justify-center overflow-hidden relative">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className=""
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CarruselImagenes
