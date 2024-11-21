import React from 'react';
import bg from '../assets/logo/bg_1.png';
import pdf from '../pdf/Ansar-Resume.pdf';

function Aboutme() {
  return (
    <div className='pt-20 pb-20'>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-6 ">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
          {/* Image Section */}
          <div>
            <img
              src={bg}
              alt="Background"
              className="bg-image object-cover"
            />
          </div>
          {/* About Me Text Section */}
          <div className='mt-20 ml-10'>
            <h2 className="text-white text-6xl font-black font-serif pb-10">ABOUT ME</h2>
            <p className='text-xl pb-9 font-serif'> I am a passionate Web and App Developer with expertise in creating user-friendly and responsive websites and applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in modern frameworks and libraries, including React.js, Next.js, Bootstrap, Tailwind CSS, and Font Awesome.My focus is on delivering high-quality digital solutions that combine aesthetic appeal with seamless functionality. Whether it's developing innovative designs or ensuring cross-platform responsiveness, I thrive on crafting experiences that meet user needs and exceed expectations.Let's create something amazing together!</p>
            <p className='text-xl'><span className='font-bold font-serif mr-10'> Name : </span>  Ansar Sultan</p>
            <p className='text-xl'><span className='font-bold font-serif mr-10'> Email :</span><a className='text-white' href='mailto:ansarsultan2002@gmail.com'> ansarsultan2002@gmail.com</a> </p>
            <p className='text-xl'><span className='font-bold font-serif mr-10'> Phone :</span><a href="tel:+4733378901">+92 3061359665</a></p>
          <div className='mt-10 '>   
            <a href={pdf} download="pdf-download" class="animated-button1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            download
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
