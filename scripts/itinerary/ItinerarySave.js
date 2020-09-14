/*
event to save itinerary when button pressed
creates itinerary object & sends to json database
dispatches/invokes customEvent
*/

import {
  getItinerary,
  useItinerary,
  saveItinerary,
} from "./ItineraryProvider.js";
import { ItineraryList } from "./ItineraryList.js";
import { ItineraryHTML } from "./Itinerary.js";
import { usePark } from "../parks/ParkProvider.js";
import { useMatchingEatery } from "../eateries/EateryList.js";
import { useMatchingAttraction } from "../attractions/AttractionList.js";

let chosenPark = {};
let eateryChosen = {};
let attractionChosen = {};

export const saveButtonEnable = () => {
  const saveBtn = document.querySelector(".itinerarySaveBtn")
  if (chosenPark === {} || eateryChosen === {} || attractionChosen === {} ) {
      saveBtn.disabled = true
  } else {
    saveBtn.disabled = false
  }
}


const elementTarget = document.querySelector(".savedItinerary");
const eventHub = document.querySelector(".container");
//event creates a new saved itinerary in local database
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.classList.contains("itinerarySaveBtn")) {
    chosenPark = usePark();
    let chosenEatery = useMatchingEatery();
    let eateryObject = chosenEatery[0];
    eateryChosen = eateryObject;
    let chosenAttraction = useMatchingAttraction();
    let attractionObject = chosenAttraction[0];
    attractionChosen = attractionObject;    

    if (chosenPark != 0 && chosenAttraction != 0 && chosenEatery != 0) {
      const newItinerary = {
        park: chosenPark,
        eatery: eateryChosen,
        attraction: attractionChosen,
        date: Date.now(),
      };
      saveItinerary(newItinerary);
      elementTarget.innerHTML += ItineraryHTML(newItinerary);
    } else {
      window.alert("please select park, eatery & attraction")
    }
  }
});
export const savedItinerary = () => {
  getItinerary().then(() => {
    ItineraryList(useItinerary());
  });
};


