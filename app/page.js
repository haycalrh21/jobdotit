"use client"
import React, { useState, useEffect, useRef } from 'react';

import Link from "next/link";
import Image from "next/image";
export default function Component() {
  const videoRefs = useRef([]);

  useEffect(() => {
    // Loop through videoRefs and add event listeners
    videoRefs.current.forEach((videoRef) => {
      if (videoRef) {
        // Play the video when metadata is loaded
        videoRef.addEventListener('loadedmetadata', () => {
          videoRef.play();
        });
  
        // Pause the video after 5 seconds (adjust as needed)
        const stopVideoTimeout = setTimeout(() => {
          videoRef.pause();
        }, 5000);
  
        // Clean up event listener and timeout when component is unmounted
        return () => {
          videoRef.removeEventListener('loadedmetadata', () => {});
          clearTimeout(stopVideoTimeout);
        };
      }
    });
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-zinc-900 px-4 lg:px-6 h-16 flex items-center">
      <Link href="/" className="flex items-center justify-center">
  <Image
    src="/inioke.png" // Ganti dengan path logo yang sesuai
    alt="Job Dot IT Logo"
    width={50} // Sesuaikan lebar sesuai kebutuhan
    height={50} // Sesuaikan tinggi sesuai kebutuhan
  />
  <span className="sr-only">Job Dot IT</span>
</Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Portfolio
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-2">
        <section className="bg-zinc-900 w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="space-y-12 px-4 md:px-6 mb-9">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 lg:grid-cols-3 md:gap-16">
              <div className="col-span-2 lg:col-span-2">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Welcome to Job Dot IT
                </h1>
              </div>
              <div className="space-y-12 px-4 md:px-6">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                 Lihat-Lihat aja dulu dimari, siapa tau cocok kan ? :)  
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-zinc-900 w-full py-12 md:py-24 lg:py-32">
          <div className=" space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Jasa yang bisa kami berikan.
                </h2>
               
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-full sm:grid-cols-1 md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
              {/* Service items */}
              {serviceItems.map((item) => (
                <ServiceCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>
        <section id="portfolio" className="bg-zinc-900 py-20  ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center text-white mb-4">Portfolio</h2>
          <div className="flex flex-wrap -m-4">
            {portfolioItems.map((item, index) => (
              <div key={index} className="p-4 md:w-1/2 lg:w-1/3">
                <div className="h-full overflow-hidden">
                  <video ref={(ref) => (videoRefs.current[index] = ref)} width="640" height="360" controls autoPlay>
                    <source src={item.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-6">
                    <h2 className="text-xl font-medium text-white mb-1">{item.title}</h2>
                    <p className="leading-relaxed mb-5">{item.description}</p>
                    <div className="flex items-center flex-wrap">
                      {/* ... additional content */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© Job Dot IT Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

const serviceItems = [
  {
    title: "IT Konsultan",
    description: "Menawarkan jasa IT tentang Web/Aplikasi",

  },
  {
    title: "Skripsi",
    description: "Menawarkan jasa penulisan berbagai jurusan.",

  },
  {
    title: "Kelas IT",
    description: "Menawarkan kelas private untuk IT.",

  },
];

const portfolioItems = [
  {
    title: "Booking Mobil",
    description: "Website booking mobil online mempermudah Anda untuk membeli mobil dengan cepat dan mudah. Temukan pilihan mobil yang sesuai kebutuhan Anda dan nikmati perjalanan tanpa ribet dengan layanan pemesanan online yang praktis.",
    videoSrc: "/mobil.mp4",
  },
  {
    title: "Forum",
    description: "Platform forum online tempat berkumpulnya berbagai komunitas dan individu untuk berbagi informasi, bertukar ide, dan mendiskusikan berbagai topik menarik. Sambutlah dunia percakapan yang dinamis dan beragam dengan website forum kami",
    videoSrc: "/forum.mp4",
  },
  {
    title: "Layanan",
    description: "Website ini sedang dikembangkan bersama tim saya.",
    videoSrc: "/layanan.mp4",
  },
  {
    title: "Toko Baju",
    description: "Website beli baju online memudahkan Anda untuk menjelajahi, memilih, dan membeli pakaian secara daring dengan berbagai kategori, deskripsi produk, dan proses pembayaran yang aman.",
    videoSrc: "/toko baju.mp4",
  },
  // Add more portfolio items as needed
];

// Create separate components for ServiceCard and PortfolioCard
const ServiceCard = ({ title, description, price }) => (
  <div className="grid gap-1">
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    <p className="text-lg font-bold">{price}</p>
    <Link
      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      href="https://wa.me/+6283140813617"
    >
      Contact
    </Link>
  </div>
);

const PortfolioCard = ({ title, description, videoSrc }) => (
  <>
    <div className="relative h-0 aspect-w-16 aspect-h-9">
      <Image
        src={videoSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="flex flex-col justify-center space-y-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  </>
);



