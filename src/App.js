const favYoutuber = "Tannu Technical";
const favfood = "Rajma Rice";
function myName() {
  const name = "Tannu Pandey is my Name. Badminton is my game.";
  return name;
} //while calling a functin in the main index.js file you have to pass the function name with parenthesis in the render method
function profession() {
  const prof =
    "I am an Enthusiastic web develepor. Also exploring cloud computing ";
  return prof;
}
export default favYoutuber; //default value to be exported can be one and only one

//if we have to export other values also you can export them simply
export { favfood, myName, profession }; //all the values except default that are to be exported should be given in export statement with their name wrappped in CURLY BRACES

//if we have to import all the values from this app.js in index.js we will simply write import * as "Aliasnamethatuwanttogive"
