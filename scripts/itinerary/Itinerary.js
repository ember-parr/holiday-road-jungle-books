/* 
    creates HTML for aside containing cards for each saved itinerary in LOCAL database
*/

export const ItineraryHTML = (anObject) => {
  //adds emoji icon to array if park has ameneties 
  let amenetiesArray = [];
  if (anObject.eatery.ameneties.wifi === true) {
    amenetiesArray.push("&#128246;");
  }
  if (anObject.eatery.ameneties.wheelchairAccessible === true) {
    amenetiesArray.push("&#9855;");
  }
  if (anObject.eatery.ameneties.petFriendly === true) {
    amenetiesArray.push("&#128054;");
  }
  if (anObject.eatery.ameneties.diaperFacility === true) {
    amenetiesArray.push("&#128118;");
  }
  if (anObject.eatery.ameneties.playground === true) {
    amenetiesArray.push("&#9977;");
  }
  if (anObject.eatery.ameneties.restrooms === true) {
    amenetiesArray.push("&#128701;");
  }  

  let attractionAmenetiesArray = [];
  if (anObject.attraction.ameneties.souvenirs === true) {
    attractionAmenetiesArray.push("&#128246;");
  }
  if (anObject.attraction.ameneties.restrooms === true) {
    attractionAmenetiesArray.push("&#9855;");
  }

  let arrayOfActivityNames = []
  let arrayOfActivities = anObject.park.activities
  arrayOfActivities.forEach(name => {
    arrayOfActivityNames.push(name.name)
  })

  //adds HTML to DOM for each saved itinerary 
  return `
        <section class="card-itinerary">
            <p class="card-title">${anObject.park.fullName}</p>
            <div class="park-extras"><a href="#!" id="parkHours--${anObject.park.id}" class="more-info-btn"> Hours </a> • <a href="#!" id="parkFees--${anObject.park.id}" class="more-info-btn"> Entrance Fees </a> • <a href="#!" id="parkActivities--${anObject.park.id}" class="more-info-btn">Activities Available</a> • <a href="#!" id="parkInfo--${anObject.park.id}" class="more-info-btn">More Info</a></div>
              
              <span class="parkHours--${anObject.park.id} parkHours" style="display:none">
                <h4>Park Hours:</h4>
                ${anObject.park.operatingHours[0].description}<br>
              </span>
              <span class="parkFees--${anObject.park.id} parkFees" style="display:none">
              <h4>Entrance Fees:</h4>
                - ${anObject.park.entranceFees[0].title} -<br>
                ${anObject.park.entranceFees[0].description}
              </span>
              <span class="parkActivities--${anObject.park.id} parkActivities" style="display:none">
              <h4>Activities Available:</h4>
                ${arrayOfActivityNames.join(" <br> ")}
              </span>
              <span class="parkInfo--${anObject.park.id} parkInfo" style="display:none">
                <h4>Park info:</h4>
                ${anObject.park.description}<br>
              </span>
            
            <p><span class="more-info-btn" id="eateryInfo--${anObject.eatery.id}">&#9432;</span> 
            Place To Eat: ${anObject.eatery.businessName} <br>
            <span class="iconContainer eateryInfo eateryInfo--${anObject.eatery.id}" style="display:none">
            ${amenetiesArray.join(" ")}<br>
            ${anObject.eatery.description}</span><br>

            <span class="more-info-btn" id="attractionInfo--${anObject.attraction.id}">&#9432;</span> 
            Bizzare Attraction to Visit: ${anObject.attraction.name}<br>
            <span class="iconContainer attractionInfo attractionInfo--${anObject.attraction.id}" style="display:none">
            ${attractionAmenetiesArray.join(" ")}<br>
            ${anObject.attraction.description}</span></p>
            <p class="caption">Date Saved: ${new Date(anObject.date).toLocaleDateString("en-US")}</p>
        </section>
        `;
};



// EventHub for clicks on sidebar to show/hide more info in sidebar upon info button click, used in ItineraryList.js

const eventHub = document.querySelector(".container");
eventHub.addEventListener("click", event => {
  if (event.target.classList.contains("more-info-btn")) {
    const [btnPrefix, buttonID ] = event.target.id.split("--")
    const customEvent = new CustomEvent("sidebarExtraInfo", {
      detail: {
        btnType: btnPrefix,
        btnId: buttonID,
      }
    })
    eventHub.dispatchEvent(customEvent)
  }
})