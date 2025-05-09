import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { cn } from "@/lib/utils";
  import Link from "next/link";
  import { usePathname } from "next/navigation";
  
  const NavbarCarousel = ({ autoplay = true }) => {
    const data = [
      { label: "home", path: "/" },
      { label: "about", path: "/about" },
      { label: "services", path: "/services" },
      { label: "portfolio", path: "/portfolio" },
      { label: "home", path: "/" },
    
      { label: "home", path: "/" },
      { label: "about", path: "/about" },
      { label: "services", path: "/services" },
      { label: "portfolio", path: "/portfolio" },
      { label: "home", path: "/" },
    
      { label: "home", path: "/" },
      { label: "about", path: "/about" },
      { label: "services", path: "/services" },
      { label: "portfolio", path: "/portfolio" },
      { label: "home", path: "/" },
    
     
      
    ];
  
    const pathname = usePathname();
  
    return (
      <Carousel
        opts={{
            align: "center",
            loop: true, // Optional: make the carousel loop continuously
        }}
        className="w-full mx-auto my-2"
      >
        <CarouselContent className="mx-2 lg:mx-5 md:mx-3">
          {data?.map((item, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "flex justify-center transition-opacity",
                // Responsive basis for different screen sizes
                "basis-[29%] sm:basis-1/6 md:basis-[12%] lg:basis-[9%] xl:basis-[9%] ",
              )}
            >
              <Link
                href={item.path}
                className={`flex flex-col justify-center items-center`}
              >
                <p className="">{item.label}</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={cn("absolute left-0 ")} />
        <CarouselNext className={cn("absolute right-0 ")} />
      </Carousel>
    );
  };
  
  export default NavbarCarousel;
  