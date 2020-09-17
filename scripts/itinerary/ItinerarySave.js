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
let checkPark = (obj)=> {
  return Object.keys(obj).length;
  }
let eateryChosen = {};
let attractionChosen = {};


const elementTarget = document.querySelector(".savedItinerary");
const eventHub = document.querySelector(".container");
//event creates a new saved itinerary in local database
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.classList.contains("itinerarySaveBtn")) {
    chosenPark = usePark();
    let pullInChosenEatery = useMatchingEatery();
    let grabEntireEateryObject = pullInChosenEatery[0];
    eateryChosen = grabEntireEateryObject;
    let pullInChosenAttraction = useMatchingAttraction();
    let grabEntireAttractionObject = pullInChosenAttraction[0];
    attractionChosen = grabEntireAttractionObject;    

    if (checkPark(chosenPark) !== 0 && chosenAttraction !== {} && chosenEatery !== {}) {
      const newItinerary = {
        park: chosenPark,
        eatery: eateryChosen,
        attraction: attractionChosen,
        date: Date.now(),
      };
      saveItinerary(newItinerary);
      elementTarget.innerHTML += ItineraryHTML(newItinerary);
    } else {
      window.alert("Please select park, eatery & attraction")
    }
  }
});
export const savedItinerary = () => {
  getItinerary().then(() => {
    ItineraryList(useItinerary());
  });
};


