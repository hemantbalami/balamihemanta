AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Client Service Manager",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Dhumbarahi, Kathmandu-Nepal",
    time: "(Feb, 2022 - present)",
     desp: "<li>Develop effective communication platforms for client and staff.</li><li>Liaise with different departments about client queries.</li><li>Develop surveys and capture client information.</li><li>Deal with client requests and troubleshoot problems.</li><li>Inspire repeat-business from clients.</li><li>Arranging interview as per client requirement. (Virtual & Physical).</li>",
  },
  {
    title: "Sales & Marketing Manager / Executive Manager ",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Basundhara, Kathmandu-Nepal",
    time: "(July 2018 - February, 2022)",
    desp: "<li>Ensuring the smooth operation of the Office Administrative functions; as well as providing administrative support to the Executive chairman with business plan, procurement, marketing and increase sales of the organization.</li><li>Handling Rope Access, Scaffolding, Civil & MEP Training Division: Planning, Scheduling and implementing various training, Co-ordination with NGO/INGO & Govt Body.</li><li>Initiated a series of marketing campaigns including email, print, digital, outdoor and social media analysis, crafted concept and content for journal ads, direct mail campaigns and bulk sms.</li></li>",
  },
  {
    title: "Administrator Manager",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Al Wakrah, Doha-Qatar",
    time: "(Feb, 2013 - March, 2018)",
    desp: "<li>Systematic Management of office Transportation, Managing Drivers/Vehicles/Staff/Sites/Enquiries Sending/Quotes receiving/analyzing Prices/Quotes.</li><li>To check the filing system of the company.</li><li>Tendering & ensuring the smooth operation of the office administration functions; as well as providing administrative support to the Managing Director.</li>",
  },
{
    title: "Computer Specialist/Instructor",
    cardImage: "assets/images/experience-page/Bal.jpg",
    place: "Nagarujun 1 Ranibon, Kathmandu",
    time: "(June, 2010 - June, 2012)",
    desp: "<li>Handle the entire computer environment of the Organization.</li><li>Instruct the computer science subject to the student of level 6,7,8 as per the curriculam.</li>",
  },
{
    title: "Store Keeper",
    cardImage: "assets/images/experience-page/sunix.jpg",
    place: "Sano-Bharyang, Swoyambhu, Nepal",
    time: "(May, 2009 - May, 2013)",
    desp: "<li>Systematic Management of Store.</li><li>Daily Production & Outgoing Entry.</li><li>FIFO Delivery, Sales, Production.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Computer Specialist",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for installing and reparing computer hardware and software.",
  },
  {
    title: "Graphic Designing",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for creating logo, visiting card, letter head, profile, hording board etc using Adobe Illustrator or Photoshop.",
  },
  {
    title: "Documentation",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Document prepartion for Spray Contec INC-USA, Handling entire documentation of the organisation, Tender Document, Quotation, PO, Invoice Preparation, Shipping Document etc.",
  },
  {
    title: "Website design",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Website preparation for Spray Contec INC, Bal Bikash School etc using html, css, javascript.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Santaneshwor Mahadev",
    subtitle: "Religious Place",
    image: "assets/images/experience-page/uplift.png",
    desp: "Located in the Lalitpur it's the religious beleif temple of Lord Mahadev.",
  },
  {
    title: "Manakamana Temple",
    subtitle: "Religious Place",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "Popular Hindu destination place of Mai Manakamana.",
  },
  {
    title: "Tistung-Palung",
    subtitle: "Tourist Destination",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "Naturally beautiful and religiously reach place of Western Nepal. The place is 67 KM west from Kathmandu.",
  },
  {
    title: "Basantapur",
    subtitle: "Durbar square",
    image: "assets/images/experience-page/elevate.png",
    desp: "Historic Place and rich in art and architecture the place itself is the history of Nepal where our king live.",
  },
  {
    title: "Daman Resort",
    subtitle: "Homestay",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "Resort located in Daman is a naturally beutiful place where you can spend your weekend.",
  },
  {
    title: "Villageo - Qatar",
    subtitle: "Landmark",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Beautiful Villageo mall of Doha-Qatar with modern landmark and art.",
  },
  {
    title: "Doha Cornice",
    subtitle: "Cornice",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "A beutiful place to visit in Doha-Qatar.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
