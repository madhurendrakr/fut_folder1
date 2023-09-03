export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I am Madhurendra Kumar</p>
          <h3 className="hero--section--title">
            {/* <span className="hero--section-title--color">Software developer</span>{" "} */}
            <br />
             </h3>
          <p className="hero--section-description">
          {/* I excels in crafting efficient and reliable software applications. Whether it's designing user-friendly interfaces, optimizing algorithms, or debugging complex issues. */}
           </p>
          
          <h2 className="hero--section--title">
            <span className="hero--section-title--color"> Web developer</span>{" "}
            <br />
             </h2>
          <p className="hero--section-description">
          As a web developer, I am a dynamic and creative  who thrives in the digital realm.
           With a keen eye for design aesthetics and a deep understanding of web technologies, I crafts engaging and user-friendly websites. 
           {/* They are proficient in HTML, CSS, JavaScript, and various web development frameworks, allowing them to bring ideas to life with functional and visually appealing web solutions. */}
          </p>
        </div>
        <button className="btn btn-primary ">
        <a href="https://www.linkedin.com/in/madhurendra-kumar-237319203" target="_blank  "  className="varsh"> Get In Touch</a>
        </button> 
      </div>
      <div className="hero--section--img">
        <img src="./img/MadhurendraPhoto.png" alt="Hero Section" />
      </div>
    </section>
  );
}
