const fcl = require("@onflow/fcl")
fcl.config()
    .put("accessNode.api", "https://flow-access-mainnet.portto.io")

var receiptAddressess = []
var counter = 0

/*
NOTE: Todo

1- Get All User Addresses and template IDs from events 
2- Within Range
3- Range of response data : 250

*/
const doStuff = async (sHeight, eHeight) => {

    var events = await fcl
        .send([
            fcl.getEventsAtBlockHeightRange(
                "A.8f9231920da9af6d.AFLPack.PackBought",
                sHeight,
                eHeight
            ),
        ])
        .then(fcl.decode);

    if (events[0]?.data?.receiptAddress !== undefined) {
        receiptAddressess.push(events[0]?.data?.receiptAddress)
    } else {
        counter++;
    }
    console.log("recipt addre in ", receiptAddressess);
    // data = events
    console.log("counter", counter);
    console.log(receiptAddressess.length);
    // data = [...data, events.data?.receiptAddress]
    // console.log(events);
    // console.log("hase", events.data?.receiptAddress);

    // console.log("data", data);
    // data.map((obj) => {
    //     // console.log(obj.data?.receiptAddress);

    // })
    // console.log("reciptAddress", receiptAddressess);
}


const doWhileLoop = async () => {

    var i = 1;
    var startHeight = 35444752;
    var endHeight = 35444753;
    var j = 1;
    do {
        do {
            await doStuff(startHeight, endHeight)
            startHeight = endHeight;
            endHeight = endHeight + 1

            if (endHeight === 35534251) {
                break;
            }
            i++;
        } while (i < 1000)
        j++;
        i = 1
        // // console.log(startHeight);
        // doStuff(startHeight, endHeight)
        // startHeight = endHeight;
        // endHeight = endHeight + 1
        // i++;
    }
    while (j < 90);
}
doWhileLoop()
// var startHeight = 35444752;
// var endHeight = 35534251;
// for (var i = 1; i < 894; i++) {

//     doStuff(startHeight, endHeight)
//     startHeight = endHeight;
//     endHeight = endHeight + 1

// }

// console.log("recipt addre outside ", receiptAddressess);
// doStuff(startHeight, endHeight)