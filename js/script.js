var candidates = function(name, partyColor)      //factory function  (paramiters)
{

        var politician = {};                     //politician object

        politician.partyColor = partyColor;
        politician.electionResults = null;       //properties    
        politician.name = name;                  
        politician.totalVotes = 0;                               

        politician.announceCandidate = function()
        {
                console.log(this.name);
        };

        politician.announceCandidate();
        
        //Tally up votes method
        politician.tallyUpTotalVotes = function ()
        {
                this.totalVotes = 0;
                for (var i = 0; i < this.electionResults.length; i++)
                {
                        this.totalVotes = this.totalVotes + this.electionResults[i];
                }

        };
        //End tally up votes

        return politician;

};

var archie = candidates("ARCHIE", [132, 17, 11]);     // ([color value to], parameter)
var luke = candidates("LUKE", [245, 141, 136]);

//console.log("ARCHIE'S COLOR IS: " + archie.partyColor);
//console.log("LUKES COLOR IS: " + luke.partyColor);

archie.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2,];
luke.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

archie.electionResults [9] = 1;
luke.electionResults [9] = 28;

archie.electionResults [4] = 17;
luke.electionResults [4] = 38;

archie.electionResults [43] = 11;
luke.electionResults [43] = 27;

//function for setting state results
var setStateResults = function(state)
{
        theStates[state].winner = null;
        if (archie.electionResults[state] > luke.electionResults[state])
        {
                theStates[state].winner = archie;
        }
        else if (archie.electionResults[state] < luke.electionResults[state])
        {
                theStates[state].winner = luke;
        }

        //change color of each state based on winner
        var stateWinner = theStates[state].winner;

        if (stateWinner !== null)
        {
                theStates[state].rgbColor = stateWinner.partyColor;
        }
        else 
        {
                theStates[state].rgbColor = [11,32,57];
        }

//Bottom table cell population
//Variables
var stateInfoTable = document.getElementById("stateResults");
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var archieName = body.children[0].children[0];
var lukeName = body.children[1].children[0];
var archieResults = body.children[0].children[1];
var lukeResults = body.children[1].children[1];
var winnersName = body.children[2].children[1];

//Cell population code
stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

archieName.innerText = archie.name;
lukeName.innerText = luke.name;

archieResults.innerText = archie.electionResults[state];
lukeResults.innerText = luke.electionResults[state];

if (theStates[state].winner === null)
{
        winnersName.innertext = "DRAW";
}
else
{
        winnersName.innerText = theStates[state].winner.name;
}
//End of bottom table cell population

};//End of states result function


//Call tallyUpVotes method
archie.tallyUpTotalVotes();
luke.tallyUpTotalVotes();

console.log(archie.totalVotes);
console.log(luke.totalVotes);

//Declare the winner
var winner = "??";

if (archie.totalVotes > luke.totalVotes)
{
        winner = archie.name;
}
else if (archie.totalVotes < luke.totalVotes)
{
        winner = luke.name;
}
else
{
        winner = "DRAW."
}

console.log("AND THE WINNER IS.. " + winner + "!!!");

//Top table
var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = archie.name;
row.children[1].innerText = archie.totalVotes;
row.children[2].innerText = luke.name;
row.children[3].innerText = luke.totalVotes;
row.children[5].innerText = winner;
