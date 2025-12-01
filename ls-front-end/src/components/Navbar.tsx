import "react";
import Button from "./General/Button";
import { Link } from "react-router";
import Logo from "./General/Logo";


import { useEffect, useRef, useState } from "react";


export default function SmartNavbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If navbar is OUT of view → show sticky version
        setIsStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (navRef.current) observer.observe(navRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Main flowing navbar */}
      <section
        ref={navRef}
        className="bg-bg pad py-10 mb-[2rem] w-full z-10"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 flex-1">
            <Logo />
          </div>

          <div className="flex gap-2 items-center">
            <div className="hidden sm:flex">
              <Link to={"/auth"}>
                <Button size="lg" variant="secondary">
                  Sign in
                </Button>
              </Link>
            </div>

            <Link to={"/auth/signup"}>
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky reappearing navbar */}
      <div
        className={`
          fixed top-0 left-0 w-full z-40 bg-bg/80 backdrop-blur-md shadow-md
          transition-all duration-300 
          ${isStickyVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
        `}
      >
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 flex-1">
            <Logo />
          </div>

          <div className="flex gap-2 items-center">
            <div className="hidden sm:flex">
              <Link to={"/auth"}>
                <Button size="md" variant="secondary">
                  Sign in
                </Button>
              </Link>
            </div>

            <Link to={"/auth/signup"}>
              <Button variant="primary" size="md">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


// const links = [
// 	{ path: "/", label: "Courses" },
// 	{ path: "/", label: "How it works" },
// 	{ path: "/", label: "Reviews" },
// 	{ path: "/", label: "About" },
// ];

// border-b-gray-300 bg-[rgba(255,255,255,0.7)]  backdrop-blur-[20px]

{/* <ul className='gap-10 text-gray-500 text-[0.8rem] flex-10 justify-center sm:flex hidden'>
	{links.map((link, i) => (
		<Link to={link.path} key={i}>
			<li className='relative'>{link.label}</li>
		</Link>
	))}
</ul> */}