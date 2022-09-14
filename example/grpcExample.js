import { config } from "@onflow/fcl"
import fcl from "@onflow/fcl"
import { send as transportGRPC } from "@onflow/transport-grpc"

config({
    "accessNode.api": "https://access-mainnet.onflow.org",
    "sdk.transport": transportGRPC
})

const getAccount = async (address) => {
    const account = await fcl.send([fcl.getAccount(address)]).then(fcl.decode);
    return account;
};


getAccount("0xb0d2b21b609c4f14");