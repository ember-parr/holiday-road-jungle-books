/* 
    listens for save event from ItinerarySave.js
    will get info from provider to render array of saved itineraries to aside
*/
import { getItinerary, useItinerary } from "./ItineraryProvider.js";
import { ItineraryHTML } from "./Itinerary.js";

let itineraryArray = [];
export const ItineraryList = () => {
  getItinerary().then(() => {
    itineraryArray = useItinerary();
    addItineraryToDom(itineraryArray);
  });
};

const addItineraryToDom = (anArrayOfItineraries) => {
  const domElement = document.querySelector(".savedItinerary");
  let HTMLRender = anArrayOfItineraries.map((singleItinerary) => {
    return ItineraryHTML(singleItinerary);
  });
  domElement.innerHTML = HTMLRender.join("");
};


//event hub to show/hide additional information for each clickable option in sidebar. 
const eventHub = document.querySelector(".container");

eventHub.addEventListener("sidebarExtraInfo", customEvent => {
  const btnType = customEvent.detail.btnType
  const btnID = customEvent.detail.btnId
  const correctAreaOnDom = document.querySelector(`.${btnType}--${btnID}`)

  if (btnType === "eateryInfo") {
    hideActivities();
    hideHours();
    hideFees();
    hideInfo();
    hideAttraction();
    if (correctAreaOnDom.style.display === "none") {
      correctAreaOnDom.style.display = "block"
    } else {
      correctAreaOnDom.style.display = "none"
    }
  }

  if (btnType === "attractionInfo") {
    hideActivities();
    hideHours();
    hideFees();
    hideInfo();
    hideEatery();
    if (correctAreaOnDom.style.display === "none") {
      correctAreaOnDom.style.display = "block"
    } else {
      correctAreaOnDom.style.display = "none"
    }
  }

  if (btnType === "parkHours") {
    hideActivities();
    hideFees();
    hideInfo();
    hideEatery();
    hideAttraction();
    if (correctAreaOnDom.style.display === "none") {
      correctAreaOnDom.style.display = "block"
    } else {
      correctAreaOnDom.style.display="none"
    }
  }

  if (btnType === "parkFees") {
    hideActivities();
    hideHours();
    hideInfo();
    hideEatery();
    hideAttraction();
    if (correctAreaOnDom.style.display === "none") {
      correctAreaOnDom.style.display = "block"
    } else {
      correctAreaOnDom.style.display="none"
    }
  }

  if (btnType === "parkActivities") {
    hideHours();
    hideFees();
    hideInfo();
    hideEatery();
    hideAttraction();
    if (correctAreaOnDom.style.display === "none") {
      correctAreaOnDom.style.display = "block"
    } else {
      correctAreaOnDom.style.display="none"
    }
  }

  if (btnType === "parkInfo") {
    hideActivities();
    hideHours();
    hideFees();
    hideEatery();
    hideAttraction();
    if (correctAreaOnDom.style.display === "none") {
      correctAreaOnDom.style.display = "block"
    } else {
      correctAreaOnDom.style.display="none"
    }
  }
})


//functions to hide non-used info areas. these functions are called in code above. 

let hideHours = () => {
  let hourSpans = document.getElementsByClassName("parkHours")
  for(var i=0; i < hourSpans.length; i++) {
    hourSpans[i].style.display = "none";
  }
}
let hideFees = () => {
  let feeSpans = document.getElementsByClassName("parkFees")
  for(var i=0; i < feeSpans.length; i++) {
    feeSpans[i].style.display = "none";
  }
}
let hideActivities = () => {
  let activitieSpans = document.getElementsByClassName("parkActivities")
  for(var i=0; i < activitieSpans.length; i++) {
    activitieSpans[i].style.display = "none";
  }
}
let hideInfo = () => {
  let infoSpans = document.getElementsByClassName("parkInfo")
  for(var i=0; i < infoSpans.length; i++) {
    infoSpans[i].style.display = "none";
  }
}
let hideEatery = () => {
  let eaterySpans = document.getElementsByClassName("eateryInfo")
  for(var i=0; i < eaterySpans.length; i++) {
    eaterySpans[i].style.display = "none";
  }
}
let hideAttraction = () => {
  let attractionSpans = document.getElementsByClassName("attractionInfo")
  for(var i=0; i < attractionSpans.length; i++) {
    attractionSpans[i].style.display = "none";
  }
}
