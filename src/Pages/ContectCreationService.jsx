import React from "react";
import { FaImages } from 'react-icons/fa';
import ItemCard from "../Components/ItemCard";
import theArtWindow from "../Assets/images/the_art_window.jpeg"
import printImg from "../Assets/images/print-img.jpg"
import allPersons from "../Assets/images/all_persons.jpeg"
import standUp from "../Assets/images/stand-up.jpeg"
import urban_chowk from "../Assets/images/urban_chowk.jpeg"
import familyFunction from "../Assets/images/function.jpeg"

export default function ContenCreationService() {

  return (
    <div id="ContenCreationService" className="px-4 py-16 md:px-24 lg:px-8 lg:py-20 relative z-10 bg-[rgba(44,44,44,0.21)] border-slate-800 backdrop-blur-md border-x ">
      <div className="w-fit mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold text-white sm:text-4xl">
            <span className="relative inline-block text-3xl">
              <FaImages />
            </span>{' '}
            Stand-Up Comedy
          </h2>
          <div className="md:col-start-2">
            {/* <NavLink to="https://www.instagram.com/m.k.moments/?hl=en">Explore my portfolio on Instagram</NavLink> */}
          </div>
        </div>
      </div>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ItemCard
          imgSrc={urban_chowk}
          firstP="Urban Chowk"
          secondP="It was a fantastic experience filled with fun for both the performers and the audience. At the start, I felt quite nervous, but once the performance began, I was fully prepared and delivered an amazing act."
        />
        <ItemCard
          imgSrc={theArtWindow}
          firstP="The art window (Khau Gully)"
          secondP="Performing at Khau Gully was a unique and unforgettable experience. I delivered an amazing performance, connecting with the audience through engaging humor and light-hearted roasting. I gave my best stand-up comedy act and was thrilled to receive recognition with a prize for my efforts."
        />
        <ItemCard
          imgSrc={familyFunction}
          firstP="Family Function"
          secondP="Performed a heartfelt shayari at my sister's Garba function, setting the perfect emotional tone for the evening. Following that, I added a touch of humor with a lighthearted stand-up set, bringing smiles and laughter to everyone present. It was an unforgettable experience filled with love, joy, and celebration."
        />
        <ItemCard
          imgSrc={allPersons}
          firstP="All performers in Urban Chowk"
          secondP="I had an amazing time with everyone, enjoying great fun and learning from this incredible opportunity. It taught me so much about performing on stage, respecting every form of art, and appreciating the dedication behind every act presented by talented artists."
        />
        <ItemCard
          imgSrc={standUp}
          firstP="Khau Gully"
          secondP="Provide professional photo editing and retouching services to enhance the visual appeal and quality of images. From color correction to removing imperfections, I ensure the final images meet the highest standards."
        />
        {/* <ItemCard
          imgSrc={printImg}
          firstP="Photo Prints and Custom Framing"
          secondP="I offer high-quality prints of photographs along with custom framing options. Providing clients with a complete service, allowing them to display their favorite images as stunning pieces of art."
        /> */}
      </div>
    </div>
  );
};
