$(document).ready(function () {
var eligibilityList = document.getElementById('eligibility');
eligibilityList.options[0] = new Option(' ');
eligibilityList.options[1] = new Option('A home owner or live in a rental house');
eligibilityList.options[2] = new Option('60 years of age or older');
eligibilityList.options[3] = new Option('Of any age with a disability');
eligibilityList.options[4] = new Option('For subsided assistance, you must receive an Australian Government Allowance or payment');
eligibilityList.options[5] = new Option('None of the above');
});

function checkEligibility(){
            ("select option[value='0']:selected").attr('disabled',"disabled");
            var eligibilityList = document.getElementById('eligibility');
}

var resultData=[" ", "Acacia Ridge", "Advancetown", "Alberton",
"Alegester", "Annerley", "Archerfield", "Bahrs Scrub", "Bannockburn", "Basin Pocket",
"Beechmont Lower", "Beenleigh", "Belivah", "Bellbird Park", "Benowa", "Berrinba",
"Bethania", "Blackstone", "Boonooroo Park", "Booval", "Boronia Heights", "Broadbeach",
"Broadbeach Waters", "Browns Plains", "Buccan", "Bundall", "Bundamba", "Buranda",
"Calamvale", "Camira", "Camp Hill", "Canal Estate", "Carbrook", "Carina", "Carina Heights",
"Carindale", "Carole Park", "Carrara", "Cedar Creek", "Chambers Flat", "Chelmer",
"Chevron Island", "Clear Island Waters", "Collingwood Park", "Coomera", "Coomera Upper",
"Coopers Plains", "Coorparoo", "Corinda", "Cornubia", "Crestmead", "Cronin Island",
"Cypress Gardens", "Daisy Hill", "Darra", "Dinmore", "Doolandella", "Drewvale", "Durack",
"Dutton Park", "Eagleby", "Eastern Heights", "Ebbw Vale", "Edens Landing", "Eight Mile Plains",
"Ellen Grove", "Fairfield", "Flinders View", "Florida Gardens", "Forest Lake", "Forestdale",
"Gailes", "Gilston", "Goodna", "Graceville", "Greenbank", "Greenslopes", "Heathwood", "Helensvale",
"Heritage Park", "Highgate Hill", "Hillcrest", "Holland Park", "Holland Park West", "Holmview",
"Hope Island", "Inala", "Isle of Capri", "Jacobs Well", "Jamboree Heights", "Jindalee", "Kerrydale", "Kingsholme", "Kingston", "Kuraby", "Larapinta", "Logan Central",
"Logan Reserve", "Logan Village", "Loganholme", "Loganlea", "Luscombe", "Macgregor",
"Main Beach", "Mansfield", "Marsden", "Meadowbrook", "Mermaid Beach", "Mermaid Keys",
"Mermaid Waters", "Merrimac", "Miami", "Miami", "Miami Keys", "Middle Park", "Moorooka", "Mount Gravatt", "Mount Gravatt Upper", "Mount Ommaney", "Mount Warren Park",
"Mudgeeraba", "Nathan", "Newtown", "Nobby Beach", "North Booval", "Norwell", "Ormeau",
"Ormeau Hills", "Oxley", "Pallara", "Paradise Island", "Paradise Waters", "Park Ridge", "Park Ridge South",
"Parkinson", "Priestdale", "Raceview", "Redbank", "Redbank Plains", "Regents Park", "Richlands", "Riverhills",
"Robertson", "Robina", "Rochedale South", "Rocklea", "Runcorn", "Salisbury", "Seventeen Mile Rocks", "Shailer Park",
"Sherwood", "Silkstone", "Sinnamon Park", "Slacks Creek", "Sorrento", "South Brisbane", "Springwood", "Staplyton",
"Steiglitz", "Stockleigh", "Sumner", "Sunnybank", "Sunnybank Hills", "Surfers Paradise", "Tallai", "Tanah Merah",
"Tarragindi", "Tennyson", "Underwood", "Wacol", "Waterford", "Waterford West", "Wellers Hill", "West End", "Westlake",
"Willawong", "Windaroo", "Wishart", "Wolfdene", "Wongawallan", "Woodridge", "Woongoolba", "Worongary", "Yatala",
"Yeerongpilly", "Yerona"]
$(document).ready(function(){
   var myselect = $('<select>');
     $.each(resultData, function(index, key) {
	     myselect.append( $('<option></option>').val(key).html(key) );
       });
      $('#searchSuburb').append(myselect.html());
});


document.getElementById("conactForm").onclick = function () {
        location.href = "/contact_form.html";
    };


function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


// Ways to have a URL attached to an option
document.addEventListener("DOMContentLoaded", function(){
 function pageGenerator(fieldName){
 return window.__page_generator ? fieldName : base64_encode(fieldName);
 }

 const dropdownName = "My Dropdown"; // field name
 const options = {
 "Option 1" : "https://instapage.com", // each option on a new line
 "Option 2" : "https://help.instapage.com/hc",
 "Option 3" : "https://help.instapage.com/hc/en-us/articles/214133067"
 // "Option Name" : "Redirect URL if this option is chosen"
 }

 const selectInput = document.querySelector('form select[name="' + pageGenerator(dropdownName) + '"]');
 window.instapageFormSubmitSuccess = function( form ){
 const selectedOption = selectInput.value;
 form.querySelector('input[name="redirect"]').value = options[selectedOption];
 };
})

$(function(){
  // bind change event to select
  $('#dynamic_select').bind('change', function () {
      var url = $(this).val(); // get selected value
      if (url) { // require a URL
          window.location = url; // redirect
      }
      return false;
  });
});
