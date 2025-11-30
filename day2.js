let input = require("prompt-sync")();

let feedbackComments = [];
let satisfactionRatings = [];

let continueProgram = "yes";

while (continueProgram == "yes") {
  let feedback = input("Enter your comment:");
  feedbackComments.push(feedback);
  let ratings = parseInt(input("Enter 1 -5:"));
  satisfactionRatings.push(ratings);
  continueProgram = input("do you want to add another comment and rating:?");
}
console.table(feedbackComments);
console.table(satisfactionRatings);
