const fcl = require("@onflow/fcl")
const t = require("@onflow/types")
const config = require("../config/config.json")
const { HEADLINE_DATA_ARRAY } = require("../helpers/headlineMetadataArray.helper")

const connect = () => {
    fcl.config()
        .put("accessNode.api", config.ACCESS_NODE_API_ADDRESS)
    console.log("FCl connected .........");

}
connect();


var headlineArray = [];

let collectionArray = [
    "Captain Cripps nails centre-bounce classic",
    "Cripps snaps truly from tight angle",
    "Two Swans cannot stop composed Cripps",
    "One-handed magic mark from Fyfe",
    "Fearless Fyfe takes huge pack grab",
    "Fyfe proves elusive in strong centre clearance",
    "Fyfe's slider the matchwinning goal",
    "Crunching Fyfe tackle duly rewarded",
    "Silky skills as Fyfe waltzes through traffic",
    "Big Max in right place at right time",
    "Gawn's running snap sets stadium alight",
    "Inspirational Gawn kicks monster PF goal",
    "Gawn too tall, too strong in defensive hole",
    "Long-range Gawn strikes inside centre square",
    "Great Wall of Gawn on the wing",
    "Big Max's emphatic fist over the line",
    "Banana beauty from Gawn on the boundary",
    "Spinning Touk finds his bearings",
    "Miller's reward for repeat efforts",
    "Tough Touk lands solid bump",
    "Balance and finish from Miller",
    "Witts stands tallest in marking duel",
    "Tiger Grimes hunts prey with tackling pressure",
    "Grimes holds his nerve under skied ball",
    "Floating Grimes takes great grab",
    "Look out, here comes aggressive Grimes",
    "Grimes stuns Walker with strong tackle",
    "Captain's goal for hard-working Coniglio",
    "Goal five keeps Greene's Giants alive",
    "Brilliant bodywork from tricky Toby",
    "Greene unloads massive barrel",
    "Clever Kelly roves the contest",
    "Kelly's clutch matchwinner in Sydney Derby",
    "Goal-saving smother from desperate Kelly",
    "Kelly pins arm in perfect tackle",
    "Kelly creates something out of nothing",
    "Follow the leader as Heppell does it all",
    "Heppell floats across for intercept mark",
    "No way around brick wall Jonas",
    "McEvoy's milestone go-ahead goal",
    "Strong hands in the pack from McEvoy",
    "Rundown ruckman as McEvoy does dirty work",
    "Ziebell fends and finds his target",
    "Strong Ziebell reads the flight in defence",
    "Roos' skipper goes bang off two steps",
    "Desperate spoil from Ziebell",
    "All smiles as Ziebell's spoil ices the game",
    "Ziebell stops stranded Blue in his tracks",
    "Pendlebury's courage on display",
    "Pendlebury stops on a dime for sublime goal",
    "Smooth-moving Pendlebury at full speed",
    "Nankervis' strong presence in defence",
    "Sloane steps up and finishes the job",
    "Desperate Sloane smother causes turnover",
    "Captain Steele settles the ship",
    "Classy Steele strikes among three Dees",
    "Steele sneaks away with a sliding banana",
    "Swans on the march through Mills' bender",
    "Disguised pass from clever Mills",
    "Pure football IQ from playful Parker",
    "Poised Parker swoops on loose ball",
    "Parker doesn't flinch in flight",
    "Rampe's perfect spoil on Stringer",
    "Vital touch from desperate Rampe on goal line",
    "Rampe intercepts and provides deadly delivery",
    "Unstoppable Bont celebrates silky goal",
    "Bontempelli's quick-thinking brings results",
    "Lace-out Bont kick a forward's dream",
    "No hesitation in Bontempelli spoil",
    "Shuey's remarkable mid-air assist",
    "Daring Shuey launches running torp to Darling",
    "Zorko shows finesse with step and strike",
    "Bursting Zorko clearance hits Hipwood",
    "Zorko knows where the big sticks are",
    "Brilliant defence from hungry Zorko",
    "Selwood squeezed but finds the angle",
    "Selwood spears pinpoint pass from clearance",
    "Reliable Selwood converts set shot"
];
let collectionCount = {
    "Captain Cripps nails centre-bounce classic": 0,
    "Cripps snaps truly from tight angle": 1,
    "Two Swans cannot stop composed Cripps": 2,
    "One-handed magic mark from Fyfe": 3,
    "Fearless Fyfe takes huge pack grab": 4,
    "Fyfe proves elusive in strong centre clearance": 5,
    "Fyfe's slider the matchwinning goal": 6,
    "Crunching Fyfe tackle duly rewarded": 7,
    "Silky skills as Fyfe waltzes through traffic": 8,
    "Big Max in right place at right time": 9,
    "Gawn's running snap sets stadium alight": 10,
    "Inspirational Gawn kicks monster PF goal": 11,
    "Gawn too tall, too strong in defensive hole": 12,
    "Long-range Gawn strikes inside centre square": 13,
    "Great Wall of Gawn on the wing": 14,
    "Big Max's emphatic fist over the line": 15,
    "Banana beauty from Gawn on the boundary": 16,
    "Spinning Touk finds his bearings": 17,
    "Miller's reward for repeat efforts": 18,
    "Tough Touk lands solid bump": 19,
    "Balance and finish from Miller": 20,
    "Witts stands tallest in marking duel": 21,
    "Tiger Grimes hunts prey with tackling pressure": 22,
    "Grimes holds his nerve under skied ball": 23,
    "Floating Grimes takes great grab": 24,
    "Look out, here comes aggressive Grimes": 25,
    "Grimes stuns Walker with strong tackle": 26,
    "Captain's goal for hard-working Coniglio": 27,
    "Goal five keeps Greene's Giants alive": 28,
    "Brilliant bodywork from tricky Toby": 29,
    "Greene unloads massive barrel": 30,
    "Clever Kelly roves the contest": 31,
    "Kelly's clutch matchwinner in Sydney Derby": 32,
    "Goal-saving smother from desperate Kelly": 33,
    "Kelly pins arm in perfect tackle": 34,
    "Kelly creates something out of nothing": 35,
    "Follow the leader as Heppell does it all": 36,
    "Heppell floats across for intercept mark": 37,
    "No way around brick wall Jonas": 38,
    "McEvoy's milestone go-ahead goal": 39,
    "Strong hands in the pack from McEvoy": 40,
    "Rundown ruckman as McEvoy does dirty work": 41,
    "Ziebell fends and finds his target": 42,
    "Strong Ziebell reads the flight in defence": 43,
    "Roos' skipper goes bang off two steps": 44,
    "Desperate spoil from Ziebell": 45,
    "All smiles as Ziebell's spoil ices the game": 46,
    "Ziebell stops stranded Blue in his tracks": 47,
    "Pendlebury's courage on display": 48,
    "Pendlebury stops on a dime for sublime goal": 49,
    "Smooth-moving Pendlebury at full speed": 50,
    "Nankervis' strong presence in defence": 51,
    "Sloane steps up and finishes the job": 52,
    "Desperate Sloane smother causes turnover": 53,
    "Captain Steele settles the ship": 54,
    "Classy Steele strikes among three Dees": 55,
    "Steele sneaks away with a sliding banana": 56,
    "Swans on the march through Mills' bender": 57,
    "Disguised pass from clever Mills": 58,
    "Pure football IQ from playful Parker": 59,
    "Poised Parker swoops on loose ball": 60,
    "Parker doesn't flinch in flight": 61,
    "Rampe's perfect spoil on Stringer": 62,
    "Vital touch from desperate Rampe on goal line": 63,
    "Rampe intercepts and provides deadly delivery": 64,
    "Unstoppable Bont celebrates silky goal": 65,
    "Bontempelli's quick-thinking brings results": 66,
    "Lace-out Bont kick a forward's dream": 67,
    "No hesitation in Bontempelli spoil": 68,
    "Shuey's remarkable mid-air assist": 69,
    "Daring Shuey launches running torp to Darling": 70,
    "Zorko shows finesse with step and strike": 71,
    "Bursting Zorko clearance hits Hipwood": 72,
    "Zorko knows where the big sticks are": 73,
    "Brilliant defence from hungry Zorko": 74,
    "Selwood squeezed but finds the angle": 75,
    "Selwood spears pinpoint pass from clearance": 76,
    "Reliable Selwood converts set shot": 77,
};

const headlineMetadata = async (data) => {

    console.log("data", data.length);
    var i = 0;
    while (i < data.length) {
        headlineArray.push(data[i])
        i++;
    }
    console.log(headlineArray.length);
    console.log(collectionArray.length);

}
var addr = "0xb0d2b21b609c4f14"
const getHeadlineStats = async (req, res, next) => {
    const data = await fcl.send([
        fcl.script(HEADLINE_DATA_ARRAY),
        fcl.args([
            fcl.arg(addr, t.Address)
        ])
    ]).then(fcl.decode);
    await headlineMetadata(data)
    // res.status(200).json({ headlineArray });

}


module.exports = { getHeadlineStats }

getHeadlineStats()