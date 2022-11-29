/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Alfred Michel Joseph Reilly",
        designation1 : "GM/ President, Spray Con Technology W.L.L-Qatar / Spray Contec INC-USA",
        image1 : "assets/images/alfred.jpg",
        message1 : "Hemanta Balami is a conscientious individual whom I mentored while working with us in Qatar since 2013. His problem-solving skills, task management, documentation and a keen interest in learning new skillsets are remarkable. His hardworking nature and team-building abilities make him different from others.",
        

        sl2:2,
        name2 : "Engineer Nabin Adhikari",
        designation2 : "Operation Manager, Bcube Engineering & Construction Pvt. Ltd", 
        image2: "assets/images/Nabin.jpg",
        message2 : "Hemanta Balami has the best grasping skills I have seen in a new Generation. I got to know him through Spray Con Technology - Qatar 2015 when I mentored him, and he made an exceptional growth during the stayn. He made some incredible contributions and has good experience with Management.",
        
        
    },

    {
        sl1:3,
        name1 : "Dr. Namrata Pandey",
        designation1 : "BIMS, Regional Director",
        image1 : "assets/images/Namrata.jpg",
        message1 : "Hemanta Balami and I have worked on several projects. Apart from technical skills, he also has good soft skills. He has good experience working with NGO/INGO and has excellent leadership qualities. He Handly SaMi Helvatas project with example ",
        

        sl2:4,
        name2 : "Tek Bahadur Paudel",
        designation2 : "Executive Chairman, Motherland Group",
        image2 : "assets/images/tek.jpg",
        message2 : "Hemanta Balami and I worked together during in Motherland Group and the thing that surprised me the most about him was his knowledge & Skill. He complete his task with sincere manner. He is an impressive problem solver who is able to address complex issues strategically and confidently.",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
