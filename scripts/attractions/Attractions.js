// creates HTML to go on dom with the selected attraction (selected in dropdown from AttractionSelect.js)

export const AttractionsHTML = (attractionObj) => {

    let amenitiesAvailable = ""
    let souvenirsAvailable = ""
    let restroomsAvailable = ""

    if (attractionObj.ameneties !== undefined) {
        amenitiesAvailable = "<h4>Amenities</h4>"
    }

    // return Object.keys(obj).length

    if (attractionObj.ameneties.souvenirs === true) {
        souvenirsAvailable = "<li>Souvenirs</li>"
    }

    if (attractionObj.ameneties.restrooms === true) {
        restroomsAvailable = "<li>Restrooms</li>"
    }

    return `
        <div class="attraction--card" id="attraction--${attractionObj.id}">
            <h2>${attractionObj.name}</h2>
            <button class="attraction--button" id="attraction-modal-btn">Details</button>
        </div>

        <div class="modal attraction-modal" id="attraction-info--${attractionObj.id}">
            <div class="modal-content">
                <span class="close-btn attractionCloseBtn">&times;</span>
                <h3>More Info:</h3>
                <h4>${attractionObj.name}</h4>
                <p><strong>Location:</strong> ${attractionObj.city}, ${attractionObj.state}</p>
                <p>${attractionObj.description}</p>
                ${amenitiesAvailable}
                <ul class="yesNoContainer">
                    ${souvenirsAvailable}
                    ${restroomsAvailable}
                </ul>
            </div>
        </div>
    `
}

export const AttractionModal = () => {

    let modalBtn = document.getElementById("attraction-modal-btn")
    let modal = document.querySelector(".attraction-modal")
    let closeBtn = document.querySelector(".attractionCloseBtn")

    modalBtn.onclick = function () {
        modal.style.display = "block"
    }

    closeBtn.onclick = function () {
        modal.style.display = "none"
    }

    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none"
        }
    }
}            