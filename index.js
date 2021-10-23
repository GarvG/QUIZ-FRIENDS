var readlineSync=require("readline-sync");
const chalk = require('chalk');
console.log("Are you ready to play a quiz on the one of most favourite tv show "+chalk.whiteBright.italic("F.R.I.E.N.D.S")+" ?");

var score=0;
var q1= "PRESS A to Start and B to EXIT : "; 
var a1=readlineSync.question(q1);
var q2="Please Enter Your Name ?  ";


var data=["Ashi","Raj"]

// question 
var  q3 = `The series Friends is set in which city?  
 1: Los Angeles
 2: New York City
 3: Miami
 4: Seattle `
 var a3="2";
let q4= `Who was Chandler’s TV magazine always addressed to?

 1:  Chanandler Bong
 2:  Chanandler Bang
 3:  Chanandler Bing
 4:  Chanandler Beng `
var a4="1";
  
  var q5=`What is the name of Rachel’s Sphynx cat?

1:Baldy
2:Mrs. Whiskerson
3:Sid
4:Felix`
var a5="2";

  var q6=` What’s the name of Joey’s penguin?

1:Snowflake
2:Waddle
3:Huggsy
4:Bobber`
var a6="3";

var q7=`What does Joey never share?

1:His books
2:His information
3:His food
4:His DVDs`

var a7="3";
if(a1==="A")
{
console.log(chalk.bold.greenBright("GREAT!!!! Let Start"));
var n2=readlineSync.question(q2);
console.log("Hey "+n2+" Let us Begin the Quiz");
quiz(q3,a3);
quiz(q4,a4);
quiz(q5,a5);
    if(score>=3)
    {
           console.log(chalk.magentaBright("YOU ARE DOING GREAT"));
    }
quiz(q6,a6);
quiz(q7,a7);

  console.log("Your Final Score is "+ score+"/5");
        if(score===5)
        {
          console.log(chalk.bgCyan("HURRRAYY !!! YOU ARE AT THE TOP LEADERBOARD FOR THE QUIZ!"+"\n"));
          data.unshift(n2);
          console.log("THERE YOU GO");
          console.log(chalk.greenBright(data[0]));
          for(var i=1;i<data.length;i++)
          {
            console.log(data[i]);
          }
            

        }
        else
        {
          console.log(chalk.cyanBright("NICE TRY!! BUT YOU DIDNT MAKE TO THE TOP OF THE LEADERBOARD FOR THE QUIZ!"+"\n"));
          console.log("HERE ARE SOME OF OUR FRIENDS WHO MADE IT TO THE TOP ");
          for(var i=0;i<data.length;i++)
          {
            console.log(data[i]);
          }
        }
} 
else
{
 console.log(chalk.cyan.underline("^_^"+" SEE YAA"));
 //break;
}




function quiz(q,a)
{
    var userA=readlineSync.question(q+"\n"+"Choose the Option ");
    //  console.log("Choose the Option")
      if(userA===a )
        {
            console.log(chalk.green("CONGO !! Its The Right Answer "));
              score++;
        }
      else
        {
            console.log(chalk.red("OOPS! :( "+ a+ " IS THE CORRECT ANSWER"));
        }
}


var data=["Ashi","Raj"]
function nhighscore(name)
{
  var len=highscore_p.push(name);
  for(var i=0;i<highscore_p.length;i++)
  {
    console.log(highscore_p[i]);
  }

}

function highscore()
{
 for(var i=0;i<highscore_p.length;i++)
  {
    console.log(highscore_p[i]);
  }
}