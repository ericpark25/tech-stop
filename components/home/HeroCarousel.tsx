import image1 from '@/public/images/carousel/image1.jpg';
import image2 from '@/public/images/carousel/image2.jpg';
import image3 from '@/public/images/carousel/image3.jpg';
import image4 from '@/public/images/carousel/image4.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

const carouselImages = [image1, image2, image3, image4];

function HeroCarousel() {
  return (
    <div className='hidden lg:block'>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='p-2'>
                    <Image
                      src={image}
                      alt='hero'
                      className='w-full h-[24rem] rounded-md object-cover'
                      priority={index === 0}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
