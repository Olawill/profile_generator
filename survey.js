const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

rl.question(questions[0], (answer0) => {

  rl.question(questions[1], (answer1) => {
   
    rl.question(questions[2], (answer2) => {

      rl.question(questions[3], (answer3) => {
       
        rl.question(questions[4], (answer4) => {
         
          rl.question(questions[5], (answer5) => {
           
            rl.question(questions[6], (answer6) => {

              console.log();
              console.log(`${answer0} loves listening to ${answer2} while ${answer1}, devouring ${answer4} for ${answer3}, prefers ${answer5} over any other sport, and is amazing at ${answer6}.`);
   
              rl.close();
            });
          });
        });
      });
    });
  });
});
  