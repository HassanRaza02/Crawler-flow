const fcl = require("@onflow/fcl");
const t = require("@onflow/types");
const config = require("../config/config.json")

const { GENESIS_BALL } = require("../helpers/genesisBall.helper");
const connect = () => {
    fcl.config()
        .put("accessNode.api", config.ACCESS_NODE_API_ADDRESS_CURRENT)
    console.log("FCl connected .........");

}
connect();

const uniqueUserAddresses = [
    "0xd56ed884fa73612f",
    "0x9028fb8c06dcef74",
    "0xf3d0a48d59de90a4",
    "0x4d850930b46e2688",
    "0xda30444129711a4e",
    "0x744f42511726efab",
    "0x0b8624faa14d74db",
    "0x514867d82235f171",
    "0xae3274598328d16f",
    "0x01654e039e0681e3",
    "0xae3838bcd07ac5eb",
    "0x36c47892cff3a691",
    "0xdd3e03d6a47a3d71",
    "0xd04e29799107fb5c",
    "0x9a99c21ab972f0b7",
    "0xf51e1dba793bd112",
    "0xc73591ae56deca27",
    "0xe624e502fedc46be",
    "0x7ebfbc27de409cc3",
    "0x17c45f6d45d20d2f",
    "0x56afb636a265a33e",
    "0x08f1bb89d731bc64",
    "0x46c6766f1dc5583f",
    "0x831c1db9960a1c5a",
    "0x649dd09c89b39f58",
    "0x8759975c5f459d77",
    "0x8ec5321c5b28753c",
    "0x0c16397d3fff84c3",
    "0x693cf20f7a231bf5",
    "0x914d2a5d93c1c1ab",
    "0x21fe5e464a57ec28",
    "0xb0d2b21b609c4f14",
    "0x6866245eee1223cf",
    "0x7d5afe39d17e7efd",
    "0x0a86b21fffd74415",
    "0xf6f0665a25103937",
    "0xb411d56d2cf3b5ff",
    "0x37fc799c4bb99c8d",
    "0x087e02f1e22c594f",
    "0xf448a54eb7c316cc",
    "0xfeb3901298d5cb30",
    "0xd06fca00f209ff86",
    "0xd06fca00f209ff86",
    "0x527c0c72686df9c0",
    "0x9e4192034df97b28",
    "0xfb1be3cb9c901bb9",
    "0x56dcdbe2a00f847d",
    "0x61ac179b82724500",
    "0x3f336b820c9d9f56",
    "0x3f336b820c9d9f56",
    "0xdb8f6bcd075cf97d",
    "0xf1a60d92376e046d",
    "0xa1d8de015c88cf9e",
    "0xc4518f3fdfcf301d",
    "0x9da96ff4f800880e",
    "0x90363e02bc0d82be",
    "0x30c3cf20566b4df0",
    "0x34cf8c3c560a9a13",
    "0x6ecc8fcf6b329b65",
    "0x160c9acf6be7cb7e",
    "0x1fd69ad077dbf726",
    "0x376478a60b2b4e31",
    "0x4615157713872714",
    "0x6bd65e3e1e36ae90",
    "0xa2dcde8dc6835317",
    "0xb48f609424ffc9c7",
    "0x4e458afbd7eb63b3",
    "0x14d84b056f0035e4",
    "0x9f32dec688ff56b4",
    "0x31668bffbf860598",
    "0xfc97fad01c0259bb",
    "0xd344af9ad12f54ab",
    "0x2a8175d6a13b8295",
    "0x0e549d3614cc3f14",
    "0x0df85d6f2920d098",
    "0xb2b26807f374f5e6",
    "0x241e982ccd659e28",
    "0xc6967d8eb4f372c6",
    "0x0a494d8679df0922",
    "0x3bca525d99430bfa",
    "0x9d9500be5195c75b",
    "0xf39f6613e608e9ba",
    "0x2674da46a64013e4",
    "0x4bff7b2e4cd5e5a4",
    "0x5af4632e9d082a2c",
    "0xa026bd2cb0c0dd88",
    "0xfe6785d91cc0e9eb",
    "0x46c0468d806f28b0",
    "0x4cb0eecbe52ecd1f",
    "0xcc153b4162968330",
    "0xba330d634490574e",
    "0xabf539b578fd4634",
    "0x934820f767257131",
    "0x9b638a354be97c5c",
    "0xc515d1907a2c4036",
    "0x868834ce5c9fcec1",
    "0x300dd4115728a37c",
    "0x1035c0cba37750a3",
    "0x29e360df05aa8085",
    "0x6f5598ef06113bc7",
    "0x2f02f1714c1904b6",
    "0x801aa54df240b1f8",
    "0xb2f3226841ee7a64",
    "0x104af06fb7166c1e",
    "0x1be2726ddb495a72",
    "0xb8bfa915ebb7a4d8",
    "0xf9cd45e648fe517f",
    "0x2f9e1c79c078a13f",
    "0x74fa3a52f091cbfb",
    "0x4f48c93e10b966ec",
    "0x8a35fa8128740979",
    "0xcd3b0c6c37170989",
    "0xdfce0a2ac4e9f7a5",
    "0x2bae4724bf2bc56a",
    "0x3c39d8852bf07de6",
    "0x868834ce5c9fcec1",
    "0x2f7ed08af10958ba",
    "0x163347bd4d43ec39",
    "0x333dd7575fcfd509",
    "0x949eda3f0b5c3364",
    "0x9798584f69ca9004",
    "0x8427114b497f3904",
    "0xfbd77467e959d8c4",
    "0x51f3706c2f93e41d",
    "0x80c33325bab1f25e",
    "0xdc848196cc28ab32",
    "0x55e54b7fcaf5852d",
    "0xc76dfe1f95c7307b",
    "0xf9721298950aaffa",
    "0xca1d57a1b387d09d",
    "0xe295eb7e16c607cd",
    "0x9e7e4110e74a4e77",
    "0xba547f5fee7c4ca7",
    "0x49fef91edbda149a",
    "0xbda5767a49dc54cf",
    "0x9b7e700cba5b9aad",
    "0x9adf2aca7158d685",
    "0xed1584a37edda888",
    "0x535eaf812ea844ad",
    "0xd819343c1aa63823",
    "0x3877fa2d36a64bf4",
    "0x5d50d6ab4bfe54d4",
    "0xaa48553b0c920d81",
    "0x607e3db4e5cb21fb",
    "0x6a8f433d5f861043",
    "0x08145e97750bee9a",
    "0x025cbac9009c61d8",
    "0x6d3af397a507ca8a",
    "0x2b6df76fbb19084c",
    "0xe00ff3946a715f17",
    "0xca888b1496355b0f",
    "0x0f2dd066099b23d7",
    "0xb2cab66dfb2814ad",
    "0x2093ed89335ca2bc",
    "0x9821452feabc104f",
    "0x1a50305594c3f544",
    "0xb5fcc3b8fa4c4f44",
    "0x6ecc8fcf6b329b65",
    "0x90fe6c44212c25bc",
    "0x2610d522f62d3292",
    "0x808f8de21268e042",
    "0x4f48c93e10b966ec",
    "0x6106372b59979620",
    "0x1be2726ddb495a72",
    "0xa2dcde8dc6835317",
    "0x2674da46a64013e4",
    "0x29e360df05aa8085",
    "0x0df85d6f2920d098",
    "0x300dd4115728a37c",
    "0x2f79de32cc60ba2c",
    "0xeae6eef2b642360e",
    "0xd00468c38abc1cb8",
    "0xbacc6d398c298393",
    "0x880eb16591395583",
    "0xc9a98c7c5f2bd8d6",
    "0x54317e5b3f7a2b4e",
    "0x2646339c8e8eb835",
    "0x092e4d283826d02c",
    "0xc5c99c3e4f8bdb9e",
    "0xa30c76a102dfdfff",
    "0x78238c7202b0d1d6",
    "0xab14eb6adc3203c0",
    "0x371e940bff6d85b8",
    "0x1f9e1b79251f9e8f",
    "0x20d0c46db5817c2a",
    "0x1316aa49d2399076",
    "0x0a51599d927e7a9a",
    "0x270f56fb449e070d",
    "0x9a3062464ceafe02",
    "0x3be7943f5b78abb8",
    "0x704a68ed3cd7875d",
    "0x92a595bacca254d3",
    "0xfebedd2f97777ea7",
    "0x954931242212af3b",
    "0x5b1845c067635096",
    "0xd7d5314a2a83713a",
    "0x33adde458b3c948d",
    "0x92a2389a8cf3691c",
    "0x80d9294c80510cbb",
    "0xeb21e59082c62bbc",
    "0x058efb4e43cc8633",
    "0x18222a5572ca7f76",
    "0x6f5eb2b22cbbfbae",
    "0x1a121b5e9f861e54",
    "0x8c754ed4c46cf3ee",
    "0xdabebdc67b6eacbd",
    "0xacf2ba847431c4a5",
    "0xa30c76a102dfdfff",
    "0xdefd71cb14a2f061",
    "0x200edfacd324fbd1",
    "0x456ffa72f1f47bc4",
    "0x628da03714930408",
    "0x3be7943f5b78abb8",
    "0x9a3062464ceafe02",
    "0x934ce41c624344d3",
    "0xdb1cb281837998dd",
    "0x38bb200e93147aa8",
    "0x3f9d2c41af26a6cd",
    "0x6ebf6f94ad0a5f0f",
    "0xeea795181d2ecf86",
    "0xc9a98c7c5f2bd8d6",
    "0x953f8637b0a001eb",
    "0x35a82af548e6d76a",
    "0x62d29fed185ff36b",
    "0x29a1779e78cc1bf0",
    "0xacf2ba847431c4a5",
    "0x92a595bacca254d3",
    "0xd1d32fdfe42bcbc1",
    "0x9a3062464ceafe02",
    "0x456ffa72f1f47bc4",
    "0xdfbc963b4888c788",
    "0x3be7943f5b78abb8",
    "0xea48a75099ee1d8d",
    "0x38bb200e93147aa8",
    "0x5e6ce49a06e26371",
    "0x54317e5b3f7a2b4e",
    "0xaa0e69786f270809",
    "0x7f58143cb5b00189",
    "0xf7301beb9bc37975",
    "0xd7f00c2a7f4a60a8",
    "0x1286ac5d78cce75d",
    "0x6f5eb2b22cbbfbae",
    "0xc9a98c7c5f2bd8d6",
    "0x1a121b5e9f861e54",
    "0x92a595bacca254d3",
    "0x3b4c653c3beb419e",
    "0x3be7943f5b78abb8",
    "0xdabebdc67b6eacbd",
    "0x4e68966b3258f253",
    "0x1f9e1b79251f9e8f",
    "0x0a844126a112f9b8",
    "0x0d6802fea8ffc5f0",
    "0x1316aa49d2399076",
    "0x943bdaa73c33c125",
    "0x20d0c46db5817c2a",
    "0x29a1779e78cc1bf0",
    "0x456ffa72f1f47bc4",
    "0xef2792fd3db38047",
    "0x9a3062464ceafe02",
    "0xaa974b2521a6473c",
    "0x86f3cee0c18fd586",
    "0x515b082d701bee8c",
    "0xd3bad9bc2bb88742",
    "0x98eb0ab8df63f062",
    "0x4ddf0da5bfd8e17f",
    "0x65ab1cbc775e1abc",
    "0x42521d6e225599d0",
    "0x212a7f971ff105d3",
    "0x8c243ecf17cc1bd9",
    "0x984fdb6c0802ecdf",
    "0xcd518567bd591b81",
    "0xe86d443c240c270e",
    "0xc656ab6e946ff448",
    "0xdd0c486a477acf9e",
    "0xe3a6f20642129fc5",
    "0xb68af3ddf0877f3c",
    "0x1838b22cb699f6c5",
    "0x7d8c8879612c0d32",
    "0xd78d4b69bba2e849",
    "0xd3bad9bc2bb88742",
    "0x9af334b5197372e3",
    "0xa4a0d1fe73e91295",
    "0x515b082d701bee8c",
    "0x2c3d900f42ee35fc",
    "0x89c5c9600adc6fbf",
    "0x49264a20b6bf63e8",
    "0xce780067b905c773",
    "0x42521d6e225599d0",
    "0xc282f74bbeb21fff",
    "0x79e21dc4c7c05e90",
    "0x74e2fa25ebd74c03",
    "0xf2e50166e2041d6d",
    "0x7ee99506882b9313",
    "0xdecd98fd3a42130f",
    "0x599f2d53b34522ae",
    "0x455f5e345417bd71",
    "0xa3375442913745ff",
    "0xbe49e361be9ad92d",
    "0xce0867e09749264c",
    "0x5c616a964fbbf267",
    "0x78c7f361e000e152",
    "0xe90b08c36ac40c2e",
    "0xc4e3e277db3e87ec",
    "0x297368cc3cd7909c",
    "0x29d1a872f59754a1",
    "0xbe7556266bff7020",
    "0x73c4940c0802d850",
    "0x3026559ade1e8f52",
    "0x0fd758d0abce1ce4",
    "0x3526c61f13b9d54c",
    "0x2df25b1551b2113b",
    "0x2c02daffc8c106c2",
    "0xd9c1ea9d8d5ae632",
    "0xb1c41b8ca5d325a7",
    "0x560f769b3673f846",
    "0x63ef8d7552fabb34",
    "0xac2c95a0985f5f84",
    "0x42e232daca1000c0",
    "0x83029ad89d39c034",
    "0x0c7a2c6c34ba7a98",
    "0x27acb3ecf332201e",
    "0x276b1b8ffe694025",
    "0x367cd5b1b18cb750",
    "0x9080d4b0ba8e376e",
    "0xb47b2b6d701a5b14",
    "0xca8b40b918cc0a1c",
    "0x861f71745f9f0b8d",
    "0xc4e3e277db3e87ec",
    "0xaa49b0926657ffa7",
    "0x6721e42f1623c38b",
    "0xbb62cbebfcd7a1df",
    "0x27acb3ecf332201e",
    "0x7b7e45086d0ba51c",
    "0xce0867e09749264c",
    "0x2b169d0c17f32848",
    "0xd9c5a3061716e703",
    "0x3644ef5cc10ba739",
    "0x9890fef7ce64f93d",
    "0x9890fef7ce64f93d",
    "0x4c3d9ef1d3524ca1",
    "0x59d6935ef7b45f79",
    "0x17db00eebf89029f",
    "0x5b9d50d47b0049a3",
    "0x1857fb129fae4df4",
    "0xd029d10562c82ca6",
    "0x38519b62411d1f0c",
    "0x57edd6e54d436678",
    "0x4c0c256555f9b002",
    "0xe87af21fdd940281",
    "0x5b2e54446790693a",
    "0x01a7e8cbf3629c0b",
    "0xc05150523002bc95",
    "0xe5c8c88df1f5b2c8",
    "0xa2e05fd0c255313a",
    "0x57edd6e54d436678",
    "0xaf4455501478988b",
    "0x09c3bbedd05260dd",
    "0x720f8f91faf62c3d",
    "0x1857fb129fae4df4",
    "0x4780dcc920ea6d79",
    "0x09a3719c33aff22e",
    "0x6604bab135646962",
    "0x01a7e8cbf3629c0b",
    "0x3c43b0f651fabf9e",
    "0xd81e58e2f8289283",
    "0xbb1331ae0f600da0",
    "0x145625009194976e",
    "0xf30e50a524cebc40",
    "0x1b9a97823847e466",
    "0xfce054dfdd07b3da",
    "0x3470c14fe32793c6",
    "0x54d63e00cdd1470b",
    "0x5b6cd5865bf3b7ab",
    "0xd143bed0a6b20a43",
    "0x874156d5f2f59ce8",
    "0xd48926e39fd77f73",
    "0x16a5be4d1033cc3a",
    "0x0cfa88882df848d0",
    "0x6d2a57cf79d08464",
    "0x5bf8f6682725eeb5",
    "0xaaf6130925410cf0",
    "0x204e9e7da638ab0d",
    "0xee1275f9378bbc2a",
    "0xdc7eaa47483d9ca2",
    "0xddbf42648c852ae5",
    "0x4fd9538f95a67830",
    "0xe8e94655e7cf6892",
    "0x9e5e2ac650ffb338",
    "0x82ee52de9169400c",
    "0x4e8d7bda6c8acc12",
    "0x8357b7cb6b631b80",
    "0xe45ada19b9e06814",
    "0x376705fef1aa74ae",
    "0xee1275f9378bbc2a",
    "0x331fdff58745aea8",
    "0x19a3260e95d1efe9",
    "0x4fd9538f95a67830",
    "0x97ed24f175816fc7",
    "0x73fed057e21296bd",
    "0x7f2fa96f5672f660",
    "0x89d5e67962a6bcdf",
    "0x9d48df4d832885cc",
    "0x544c74972be9518e",
    "0x13fe5c46d6654f4c",
    "0xcf10308c6463171d",
    "0x89d5e67962a6bcdf",
    "0xf4faefbf1b3ea06f",
    "0xb0a1cba386388d1f",
    "0x9b8a778488337c38",
    "0xbc4c09bd6b2a56d7",
    "0x878e9337295908e7",
    "0x89d5e67962a6bcdf",
    "0x1ad7386f7b267ca4",
    "0x3e6aef626db127e4",
    "0xede2df046ec70b77",
    "0x6bab17e30db1e393",
    "0x7d3ef15d81135f8b",
    "0x55a59d2c1362c188",
    "0xfb278c81350554ec",
    "0x7d3ef15d81135f8b",
    "0xed1960467d379b7f",
    "0x6bab17e30db1e393",
    "0x98e563c1458dbff9",
    "0xe23fc451f7c24092",
    "0x9c4997845c25187b",
    "0x3e6aef626db127e4",
    "0xed1960467d379b7f",
    "0xc4e0e9251a96100d",
    "0x1ad7386f7b267ca4",
    "0xdd287eb4d5350152",
    "0x00d6dc76dc0c91b4",
    "0xdd287eb4d5350152",
    "0x1ceeb866cf460121",
    "0x61d28f192cad79ba",
    "0xec316776ee64b6b3",
    "0xb3fc0c473eec3c37",
    "0xdd287eb4d5350152",
    "0x509b8078bda4f281",
    "0x9cae6fb40d99da50",
    "0x46fc505228325ee4",
    "0x61624125534a59ad",
    "0x1ceeb866cf460121",
    "0xb0fe08ccb386cceb",
    "0x9127155c368f6fd5",
    "0xe30b85ed902bb91a",
    "0xadc55d93235f678d",
    "0xc3e8e85a311eeac3",
    "0xe420f17bc4fe9daf",
    "0x4218b23ccfd584b6",
    "0x087df2d987875703",
    "0xc93951027b3f6d12",
    "0x4b3d12865401aac1",
    "0xdcdc9ee344e782b7",
    "0xc617777d3c88e9d4",
    "0x3e90ca2d3ecbd596",
    "0x445533c0c029a32a",
    "0x82939772f04a6841",
    "0x10e6ad4d7a5aea6a",
    "0x3d9c4ff9af8beef4",
    "0x17afdcd9e59491e4",
    "0x6a61dccca9bd7f65",
    "0xab3d851b13e71bb4",
    "0xf5dbbb54fe59eb8e",
    "0xdfb95991d110face",
    "0x9a5a93d92ae28496",
    "0x9ef88d0be1e19dbe",
    "0x970adcc1243dadec",
    "0x92c1050c97d4da99",
    "0x6ac06eb5a09d15b8",
    "0xa1158c7276f9d0ad",
    "0x53b5892f215a6c49",
    "0x173062617166e578",
    "0x92c1050c97d4da99",
    "0x07ff7430d980b2bb",
    "0x42beb696588ba293",
    "0xd38e3dcf05717de4",
    "0x8e82051ea4637810",
    "0x7c274df994eb8ee4",
    "0xd97647e02ad2f8fa",
    "0x418243689ccfab04",
    "0xb495c296bd08994c",
    "0xafafd0993dcab8cc",
    "0x3c504eb084d81d47",
    "0x9f37fe7a51aa1717",
    "0xd8bd67f8337453c8",
    "0x52f91707f819f2ed",
    "0xd9e37a22c3ba1d95",
    "0xd8bd67f8337453c8",
    "0x9f37fe7a51aa1717",
    "0x5b714347a2c9dc8e",
    "0xacfc77aa0e967b5d",
    "0x52f91707f819f2ed",
    "0xd8bd67f8337453c8",
    "0xa96b7da99746ab0a",
    "0x1596e1db61de28df",
    "0x5be9cef3cb87bc86",
    "0x4c076ca01642be3a",
    "0x242b453585660e57",
    "0x9172f72fb565e6ec",
    "0xf4fbde85da6471f3",
    "0x5be9cef3cb87bc86",
    "0xd951d90b5f75a974",
    "0xd4c41feb822cd77f",
    "0x242b453585660e57",
    "0xe28cf314a7908411",
    "0x462ac76554ba43d6",
    "0x39dc05d69ec5111a",
    "0x0614b38f05378188",
    "0xc5dc677e6046448f",
    "0x70e09cce4cad77c7",
    "0x4b9f50d7388ace50",
    "0x409eae4aad426e76",
    "0x26c64314672b7e3d",
    "0x85f6f036fb47db16",
    "0x1aa49445db93cc88",
    "0x68d1759670e88b90",
    "0xcc45b401e852b98b",
    "0xef7e5d3ae384c159",
    "0xcab2965313e8d571",
    "0xc6bc24e7ccad8d36",
    "0x4f0210999d68010e",
    "0x85cad2f382a96662",
    "0xc8866582d04528ec",
    "0x20e7749e45d2af59",
    "0xee8df13afedd118e",
    "0x1c27d5844452b25d",
    "0xdda0b62fac764149",
    "0x21c6f4e60b2ac702",
    "0xc88c510c3429830e",
    "0xde75b6cf57002405",
    "0x551a48bd6b5d9fa1",
    "0x83c181a418dbbef4",
    "0x8c3279d63b27fec2",
    "0x83c181a418dbbef4",
    "0x4edebc267b8a8171",
    "0xd2cf76381e82012b",
    "0x487c7d06ee54352f",
    "0xaa46d3ab8dc9e905",
    "0xeb7dfff0adb0a0b4",
    "0x83b48aee894f6a2e",
    "0xc1f28038a40c7411",
    "0x70371a4a9f7a42fb",
    "0x2a47af9e6a2e04f1",
    "0x2d23c39bfdddbf02",
    "0x8e5e494e273265df",
    "0xe791f16055044dea",
    "0x5bc27dace3fd252f",
    "0x2d23c39bfdddbf02",
    "0xafdd77f201810044",
    "0x433164bfe7f0907c",
    "0x0b1e7a12feed1853",
    "0x8ea7eced5a354a38",
    "0x41dc8c89a8fecd6e",
    "0x2bfaf6f479040203",
    "0x734cea9d5e41243d",
    "0x666d7a07cf605d2f",
    "0x2c622b0bc06ecb6e",
    "0x2c20d2a24b33aa99",
    "0xb407de05669524a2",
    "0x5f868b0360eb5045",
    "0x38b94385a7532bbc",
    "0x0270443f129b2d24",
    "0xb18d0986a6fb1356",
    "0x1a45688dc636b50c",
    "0xf0fe15b16637a002",
    "0xd27d42932ec6a1b3",
    "0xa687079aaf602dee",
    "0xeab9bbe19981e5e4",
    "0x6329c9ee7f7ac3f1",
    "0xfecf1cef8f928d87",
    "0xab3f06e606f475c0",
    "0x69de5426350b59bc",
    "0x5f7f15daadc6f707",
    "0x58e680758f46010d",
    "0x0829798d47749ea8",
    "0x25c28d063e66365e",
    "0xfb313f82dc746bdf",
    "0xc5377bab3210b553",
    "0xc9ed4b56c5cbdbb6",
    "0x6e434772f877fc0a",
    "0xd9ceb3206018fe52",
    "0x6e434772f877fc0a",
    "0x0a0eae172d0b27b4",
    "0x28e05f0e51567e94",
    "0xcc04489b2eb05d85",
    "0x8b9a5712c4742391",
    "0xedd41243623baa24",
    "0x96ab6040e5ed77f9",
    "0xa635a4b333af990f",
    "0xb7ffae8d70d85dda",
    "0xf62f34ca35d1d036",
    "0x8339ada95ce9391b",
    "0xcf8ded409faee56f",
    "0x01edb27d6d8edd22",
    "0xb7cfb25f2d54e2fb",
    "0xaa7bfad033a18b2f",
    "0x200d2f84b68ff59d",
    "0x61f29ca42c263b93",
    "0x93df843aa8ffda80",
    "0x3f2a0cb3ccfc5b2c",
    "0x9aef46233c7a6d87",
    "0xe55a3596bdcab621",
    "0x64222cd5d597d23b",
    "0xcfb997e057f2e168",
    "0x2563cb9aa9a45151",
    "0x142e2167e538907d",
    "0x9fe973c72d7202f2",
    "0x1be33d0d86aa9dd5",
    "0xe1e996ffa2d172ac",
    "0xef291bf28609f0bc",
    "0xcf8cdc85058ce309",
    "0x4f5f6b8e569771d1",
    "0x5078a6ae81a7f218",
    "0xbeb03fa8992d1831",
    "0xfa9a7812d7009f5f",
    "0xb73f8bb808af2e46",
    "0x719cb2338fbb1d64",
    "0x170b7467684563a2",
    "0xab334654e557b654",
    "0xab334654e557b654",
    "0x3d15b759fa1c2eee",
    "0x7b07454ee4c0e92e",
    "0xfbaa5eddc8b78c6c",
    "0x84e3a7178ccc7a0b",
    "0xdd30c9c818d47a49",
    "0xc827d704821d95cb",
    "0x272cb4909748cd0f",
    "0xa9600f1664d72d97",
    "0xa8ff852d657130fb",
    "0x6f9d86d8fdbde883",
    "0x2336f27a0a204e53",
    "0x0e709f0d0c48ed02",
    "0x648ddef2393a33cd",
    "0xd8324e326ceb5a5a",
    "0xd8324e326ceb5a5a",
    "0xc69110aee08b5e01",
    "0x70bddca337788fbd",
    "0xaaf22206534b655d",
    "0x78862f8d139f2b34",
    "0x31b78c5c438ad367",
    "0xd7d768ba4360f916",
    "0x84ebf0ed079f5707",
    "0x28eebbf80fead226",
    "0x4e0566d353d8fe2e",
    "0x0d6a5cc15c6d62e6",
    "0xbf11795211700a14",
    "0xbf11795211700a14",
    "0xfca6d858e14d7483",
    "0x1a908c7c97505743",
    "0xfca6d858e14d7483",
    "0xc93e8bd6b6b17bc4",
    "0xc93e8bd6b6b17bc4",
    "0x9e63024358615775",
    "0x767f9a7d91205b31",
    "0xb14d7acfd0d8e3dc",
    "0x216c78aecc6e88fe",
    "0x28af2b659af86c06",
    "0x4b2f32135bcc729b",
    "0xf7f90e9dfc91a295",
    "0xa26f980d308915d0",
    "0x3fe527b9e16b35a1",
    "0x3563a812de6987b6",
    "0x34ee74b6eb2beffe",
    "0x4f31fd6248c1e1fe",
    "0x6249eadee852f190",
    "0x30d4cef73605526e",
    "0xafa0c4545b8b8577",
    "0x7f3a1ea1444acacd",
    "0x7c91e55b78f25d6a",
    "0x65b8e304148a3e02",
    "0xe4031310172857ad",
    "0x215ee77edf898e51",
    "0x215ee77edf898e51",
    "0x9684f0b22fac1c12",
    "0x724652fb8c6e4841",
    "0x977c0f7a199735ad",
    "0x315d39ae46ec7321",
    "0x092f0ae7992d7b34",
    "0x0f46951ccd0bd0b3",
    "0xd695d29b8bce0df2",
    "0x99c622abaf840872",
    "0x5efca007026ad0d4",
    "0xf7a12c5cb48b7d12",
    "0xf587521ed2bc426e",
    "0x9753fa219140394a",
    "0x97d45183039d6ff3",
    "0x55d58c5e5d7f5a33",
    "0xf7a12c5cb48b7d12",
    "0x7d812aad753b13ba",
    "0xd0aedef0105c8a7c",
    "0xfe7d84bca377b1c3",
    "0xc6e3ab06c4e66f7e",
    "0x97dbaba693e7a8ca",
    "0xbb8936b63923e904",
    "0xf33c8d9a86cb0b4b",
    "0x97dbaba693e7a8ca",
    "0x21459baf9c91a459",
    "0xb3589f83031746d4",
    "0x21459baf9c91a459",
    "0xd0b188ddfb61b8ee",
    "0x1afbfa2c447a97c7",
    "0xe4a9d2d70017ea70",
    "0x1370075814cc777b",
    "0x792b7e47c0c3fff4",
    "0x4aed17ac3a0a3c92",
    "0x0c47d17b7a35ecf2",
    "0x3efc41efd31bd56c",
    "0x0c47d17b7a35ecf2",
    "0x6de40171a8e898c9",
    "0x999cb7727846a55b",
    "0xd059b1b28a8d3559",
    "0xd5ad534a1513f356",
    "0xb438a1118bff5adb",
    "0xb8557f80dcb81d35",
    "0xb8557f80dcb81d35",
    "0x5683df421ce9fbbb",
    "0xdaa605258c6e43d9",
    "0x20ec702b8d6a84ba",
    "0xd921be8c7139484b",
    "0xd921be8c7139484b",
    "0x2f85c23113d605f3",
    "0x06529c6f1f3d4e72",
    "0x06529c6f1f3d4e72",
    "0x982289b2a24cb99c",
    "0xd9344533058c00a0",
    "0xdf4809aeec8aa11b",
    "0x0d46a336a3e47f87",
    "0x2cf2cdf00f2821f5",
    "0x018eb2a0ed044f5f",
    "0xf1e101ea780f81e4",
    "0x55913d81a7ce23d7",
    "0x863f56d38ea78284",
    "0xb1b78cdcb54c1d2e",
    "0x896eec0f9aa871d9",
    "0x415c8bf5cc84207f",
    "0x8ae4f48cc51ee2a4",
    "0x1e1ff6550ede60ed",
    "0xbc649868a6e34bd5",
    "0xe2ae64647401508c",
    "0x9c44da4608ff7a16",
    "0x2b29759a56124248",
    "0x829c5e7d778a9c98",
    "0x53796977d94c842d",
    "0x30e906041fcf8943",
    "0x6dc3e8910be835a4",
    "0xa29bab9fd3523865",
    "0x160a062ab194f0d7",
    "0xdb03a6bc82decc11",
    "0x9ff9a83bdbeadc40",
    "0x83c0c66bb9d015ec",
    "0xd90f1fbb215a25c6",
    "0x1b6665964ab276c1",
    "0x3bfff62e8bf0757e",
    "0xcb09cd0f3c24168b",
    "0xb8f937cf18b42f94",
    "0x95f0d367018e795d",
    "0xbdc3f47ddbcdde2f",
    "0x64cbec2f8de0f3a7",
    "0x618910808a1f8daa",
    "0x89a1b0f13ae0344d",
    "0xdd5364ec69712575",
    "0xa6ce2f14aa9415dd",
    "0x404f0d41ea7f9f10",
    "0x9a04c3ea15c84dc0",
    "0xbeabe01efc753a9a",
    "0x7f7a261a6be674ea",
    "0xd444cc044dc919d4",
    "0xd76178730c6e84f6",
    "0x5cb9056b2ed11dea",
    "0x92ca4567c509e983",
    "0x290c85aac9376543",
    "0xb2e6a143d91d5a13",
    "0xfef5ee4111faa8e6",
    "0x333c44f40e238a51",
    "0xea805810ae98a034",
    "0x972877fb818f0914",
    "0x0b332af37dd3fdf5",
    "0x60d737de7c0dcd35",
    "0xfcd4ad6e06669116",
    "0xa4bf302701221a16",
    "0x5615ef1c44d6f792",
    "0xb05b9148ff0def31",
    "0x4ba14f4a879fcd99",
    "0x4ba14f4a879fcd99",
    "0xb3465af2e2befce4",
    "0x9294b85250743a6e",
    "0x9554d01156f7ef07",
    "0x1948ad596b0c0a4c",
    "0xbcf634c079f9e310",
    "0x3f34c9c22d55e11c",
    "0xcd193fb45fb7fa8d",
    "0xfbb16f835bd45445",
    "0x59659851d1c5eb9f",
    "0x59659851d1c5eb9f",
    "0x8544531f67886ff7",
    "0xe4b659c751d3c67a",
    "0xb1340c7c3942d56a",
    "0x218ab0a5b106cad4",
    "0x218ab0a5b106cad4",
    "0xdf51f91d80607118",
    "0xdf51f91d80607118",
    "0xc89ac4b798daecf2",
    "0x886eaf7882233330",
    "0xd64d605b505dfce7",
    "0x02a00d020582ba1b",
    "0xe8421aaf76734ff5",
    "0x6c9eb2685c03985e",
    "0xa6c0476cddf40bdb",
    "0x00d4c908881aba24",
    "0xb20786780ebe43a8",
    "0xb32a746602a95de0",
    "0x53c6cbed77d426e7",
    "0x00eac4c8f846f5f8",
    "0x7823639b19057ac9",
    "0x1327ffcaf9d141ad",
    "0xc60bea0202345daf",
    "0xdd02f580760ba3bf",
    "0x643f2aa6462f55a7",
    "0x88ddb6d530631c39",
    "0x54b4ac80aa410c49",
    "0x34d8fb1e5635ff09",
    "0xe71e40b79cf1c47e",
    "0x3c156dcdc20b6a66",
    "0x21be46740bfeab9d",
    "0xbacbfa9dcaa4b09e",
    "0x8378845e876278c8",
    "0x1e32e5a58af4b288",
    "0xf8d1c3f3ec8a36e3",
    "0xd0145c293ce9beef",
    "0x4ccee134bc023226",
    "0x56b6d10762046744",
    "0x0056e92142421ed8",
    "0x10e805351913e564",
    "0x66a3f92b584933a5",
    "0x9b278280ffc1fa4b",
    "0xcbaa8a811b3ebf5c",
    "0x7d5272cfcb53e434",
    "0xb9c5f41bb21f8937",
    "0x1602f349aa71531f",
    "0x8d5eb6ac530d93eb",
    "0x69f0b96003e54077",
    "0x25696608362c2b28",
    "0xf027d5a5209260b2",
    "0xace2b5eb293639ad",
    "0xace2b5eb293639ad",
    "0x7c82980cbeedd978",
    "0x36609ca27fd7f76b",
    "0xe8c512959996c615",
    "0x72e33e9bb38937d4",
    "0xa4824fdfea662cd0",
    "0x225b75afa298cbe7",
    "0xdc34ec32cef7547c",
    "0x100661411053c415",
    "0x397bfed80b873249",
    "0x79ef58a96ff25042",
    "0x152da62249ab17f8",
    "0x6242999fad35f16a",
    "0x07d716304ca25aab",
    "0xec46ee3fdc158a7a",
    "0x39259c3f95e14e98",
    "0x01be23022fa2c4ad",
    "0x544922de92ed6aa9",
    "0xec01d83cced0d6cb",
    "0xbb77a628921f7b2a",
    "0x81cefd6fb9b11428",
    "0x28cb89f83bba8031",
    "0xa6991678e556b464",
    "0x58d82e2d82229188",
    "0x58d82e2d82229188",
    "0x4d3f09f96668654d",
    "0xa30bee6525cbaf77",
    "0xd9a249272b907cec",
    "0x9d830b29408b81fc",
    "0x5b5490cf013b379e",
    "0x48f213fc4bb8405f",
    "0xe0f1588f2a1f9266",
    "0x1d5fa911c327a8f8",
    "0x706a5a27e4afba81",
    "0xbf9bb8742403e868",
    "0x72e3ea081816146e",
    "0x7df9b8b61bea86b7",
    "0x99e6938f3fb9c49f",
    "0x7ddc51babec46365",
    "0xa666634f24afd46c",
    "0x1fc98073a1136608",
    "0xd82d1e2eac51c195",
    "0xd82d1e2eac51c195",
    "0xefe0ad1c9c63f405",
    "0x4b87dd2ff3b7bb89",
    "0x49571d63ef5fd52c",
    "0x192ff172788a2dd5",
    "0xfca360f9ae72b526",
    "0x9db5847ea6ed46f1",
    "0x9db5847ea6ed46f1",
    "0x326d016da5595a0b",
    "0x4d43a57244520d92",
    "0x33ae14e9e84b9403",
    "0x152d0bdbb884dab9",
    "0x6dd9128e105cf421",
    "0x2ff245e6f6c8fcd8",
    "0xbc9765426c7895fe",
    "0x6cc2c33fe68cb1b8",
    "0xbd3e7372a97f5217",
    "0x58be63b53efb9e1f",
    "0x80a2e679217c8d41",
    "0x22b398ac2393b210",
    "0xea149a891e9497d7",
    "0x645b48c4a83c7f62",
    "0xd446e3fe1f033c86",
    "0xf8894d35e349a242",
    "0x096d5128d9be43fd",
    "0xf05d11d11d41e9ec",
    "0xebe38c389a1264d9",
    "0x7cdacdc62050fa1c",
    "0x069652586db0b21b",
    "0xcf6d1ac91ef5944f",
    "0x04ef4decae8f4257",
    "0xcf6d1ac91ef5944f",
    "0x5fd97d8832105cf6",
    "0x973948aff05c741d",
    "0xbcd1ad1bca574a5e",
    "0x1bae954947255f07",
    "0x8fdbf60a4890ebbb",
    "0xc1c7b336414cc916",
    "0x4edf201a10874a56",
    "0x5d4acd3cc7e82c56",
    "0xc85db0e8c2f6c3cc",
    "0x6ef59744f8284718",
    "0x5b3139133c87d30d",
    "0x5fa030be30d8351f",
    "0x51fe084a1c0ccb37",
    "0x31c6c0ecc4451494",
    "0x4eef9f5030332a2e",
    "0xa294d59b961c2157",
    "0xaa91e2249c9031d2",
    "0x56264109cd13f75b",
    "0x46ff9b00fdb3d80d",
    "0x948c20a778610d66",
    "0x9861cc5177613d24",
    "0x9861cc5177613d24",
    "0x8c0ae8f391088ab7",
    "0x3452be19b672c37e",
    "0x4811635679efc3d0",
    "0x8dbe0dabefa34177",
    "0x0937c5f0e3f2bf49",
    "0x33423d016c26d816",
    "0x7c4273585ea4a9f4",
    "0xc9adebf07c0de597",
    "0x5e994aca38c20384",
    "0x0647bbec3cff499c",
    "0xf2f062c400dbd580",
    "0x8b3f82e7ee72740d",
    "0x8b3f82e7ee72740d",
    "0x35ae350181a8ca08",
    "0xc85681b96d0ba568",
    "0xe977c62e97192cc7",
    "0x14423b168fe42da3",
    "0xcbcde24f8273841f",
    "0xe9dac631c8ff2101",
    "0xe9dac631c8ff2101",
    "0xa1b3113bc13bf0e9",
    "0x67044053380e0382",
    "0x0f6229820667d26c",
    "0x2a635f71c7cf7268",
    "0x9405d8072df6cd7c",
    "0xade427f63bb5b2cc",
    "0x807f61682afa8922",
    "0x807f61682afa8922",
    "0xd08ad3543239cc15",
    "0x0fdf856a79befdfb",
    "0x0fdf856a79befdfb",
    "0x8d098ec1f14163cf",
    "0xee19356d3e2e58ca",
    "0xf08930ff139fd7ed",
    "0x90c9a5dd8bcf1834",
    "0x24eceda9d345b996",
    "0x6b0ae91439642af2",
    "0xf5506a3fd283a79b",
    "0x9791ca95e659b6bc",
    "0x9791ca95e659b6bc",
    "0xe0413b4aa4d77f30",
    "0xa3b33de39c757f77",
    "0x0046ee1eb8d55895",
    "0xcdc414a213e8b5c8",
    "0x3a7ef2da9003895e",
    "0x3a7ef2da9003895e",
    "0xfef742550b757c85",
    "0xfef742550b757c85",
    "0xe02a6d9319f84626",
    "0x7a18d3fa5f336864",
    "0x2a706967a1547afc",
    "0x91ee5199c2f81819",
    "0xd3c262803a0ad6ff",
    "0xac431d9f48cfa420",
    "0xa0a11e21def5e78e",
    "0xb25175ab7f5d7dda",
    "0xc73f7683df24babf",
    "0xb1cbdb2d3375ec5c",
    "0x6b38d5a30cc324fe",
    "0x1bd4b0b5ed546f5e",
    "0x657809ae4235c8e9",
    "0xc93d81859a97bdb8",
    "0x987e17f3580eec9f",
    "0x41a5fc0b6ae35285",
    "0xb82ab2901c25c682",
    "0xf9d10395e73c52c1",
    "0x26e8c354efbb6c45",
    "0xd38b7825c5ca8cb1",
    "0xd16fd7a4183e52c6",
    "0x7182ee5e15f676cf",
    "0x02446783b50ae9b0",
    "0x9e86e8c2c0ba91f4",
    "0x68cb37e2c84be47b",
    "0x7ed0d2a05f7b26a0",
    "0x3ce6bef0b1fa883d",
    "0x60ab1f8bd07bac1b",
    "0x3ce6bef0b1fa883d",
    "0x68cb37e2c84be47b",
    "0xedba8b30468cae74",
    "0xa93f16742d998a3b",
    "0xa93f16742d998a3b",
    "0x7ed0d2a05f7b26a0",
    "0xedba8b30468cae74",
    "0x628a68414d2c8931",
    "0x628a68414d2c8931",
    "0x7991cf4ba0b42f7d",
    "0x192a9d409c2acfca",
    "0x4b891630a297ad2c",
    "0x7991cf4ba0b42f7d",
    "0xdd86d8ffe12c81ce",
    "0x6855c00b2addfe1d",
    "0xdd86d8ffe12c81ce",
    "0x6855c00b2addfe1d",
    "0x783d058ddeecc85a",
    "0xc316fbd5891f5e26",
    "0xde28f9c24d4c9ffa",
    "0x783d058ddeecc85a",
    "0xc316fbd5891f5e26",
    "0xde28f9c24d4c9ffa",
    "0xe760311259642d7c",
    "0x41c2162a5665c96a",
    "0x282fd902d6960aa2",
    "0x4603526e3f6cc20f",
    "0x94b4a320467fe2fc",
    "0x2921506b72b30f73",
    "0x15df322fc0298941",
    "0xda295b1b5e2e6152",
    "0xb971a7d0a7535c51",
    "0x89f558c2c87ae44d",
    "0xc2ed0f4f7e8ce078",
    "0xc2ed0f4f7e8ce078",
    "0xc2ed0f4f7e8ce078",
    "0xc2ed0f4f7e8ce078",
    "0xc2ed0f4f7e8ce078",
    "0xe3f776075428adda",
    "0xe3f776075428adda",
    "0xe3f776075428adda",
    "0xe3f776075428adda",
    "0x3f6d3ab0de39079d",
    "0xe3f776075428adda",
    "0x3f6d3ab0de39079d",
    "0x3f6d3ab0de39079d",
    "0x36a2c1efedc8a4d4",
    "0x3f6d3ab0de39079d",
    "0x36a2c1efedc8a4d4",
    "0x36a2c1efedc8a4d4",
    "0x36a2c1efedc8a4d4",
    "0x36a2c1efedc8a4d4",
    "0xe5c5fddb4969b839",
    "0xe5c5fddb4969b839",
    "0xe5c5fddb4969b839",
    "0xe5c5fddb4969b839",
    "0xe5c5fddb4969b839",
    "0xe1a6810c006eae6f",
    "0xe1a6810c006eae6f",
    "0x3f6d3ab0de39079d",
    "0xe1a6810c006eae6f",
    "0xe1a6810c006eae6f",
    "0xd698d3d7e2e1cc23",
    "0xe1a6810c006eae6f",
    "0xd698d3d7e2e1cc23",
    "0xd698d3d7e2e1cc23",
    "0xd698d3d7e2e1cc23",
    "0xe3fb317a2afa4174",
    "0xe3fb317a2afa4174",
    "0xe3fb317a2afa4174",
    "0xd698d3d7e2e1cc23",
    "0xe3fb317a2afa4174",
    "0x9ff349d822efd27f",
    "0xe3fb317a2afa4174",
    "0x4b3abf594f2840f4",
    "0x4eca76a3ce651806",
    "0x192a9d409c2acfca",
    "0x4b891630a297ad2c",
    "0x0630356a93ff5a6f",
    "0xcd40f6bdf17fc534",
    "0x0201fd6be638b698",
    "0x8ec5d4a40a8334fb",
    "0x4e446eac0bd817f2",
    "0x5855646ce9fac90e",
    "0x07ed19d55d4e4f3a",
    "0x1d6a5d2ff447fc37",
    "0x9d5072c37d68de7d",
    "0x996d9046937b026d",
    "0x946c5c9016ef3632",
    "0x7475c7f45fe93629",
    "0x6e164be98da68fb1",
    "0x109a45e7997d4db6",
    "0x0efa341d414cfc0d",
    "0x0eb855a95c7b1dfc",
    "0x36aa78fd90a0735a",
    "0xba4df78735a823c2",
    "0xd855c78b397c0fe4",
    "0x6a8fd54145fb825d",
    "0x114d1fc6593a955f",
    "0x118cfed2c803bcea",
    "0x9ecc7adbb697ad6a",
    "0x0e6b36b1523962d7",
    "0xfe2f6888468c0d96",
    "0xa1de431a300d7250",
    "0x001a91288e4d636b",
    "0x475decd3e9e284f1",
    "0x7588a844ef789ce4",
    "0x10328c9c2ffc0391",
    "0xd6d07439aedf22bf",
    "0x7c77d84b2d8e94f5",
    "0xd2f3bb147cd91740",
    "0x658d726c3a04da3b",
    "0xd4f6babf9717df12",
    "0x4fd87f77a15471c6",
    "0xa40c6d5429072de6",
    "0x22c0428cb80faf42",
    "0xe567b0ea447b9f2d",
    "0xa6dc0f81a559cd87",
    "0x31f005fb6f290e82",
    "0xf2a7e40c717ff56d",
    "0x8321975a555aa129",
    "0xdc23ec1b186fcd85",
    "0x7a615fcda45c4118",
    "0xcf6a8c93ee8e2125",
    "0x349acb19d827b2d4",
    "0xe500929bcb44ae8f",
    "0xbbf249b89c897dd5",
    "0x00ed87ff1554e54f",
    "0x1a79085855426e26",
    "0x344e2df85fa1b2e7",
    "0xe2cdc94005a40fb0",
    "0x9bb00f6a4f78954a",
    "0x434174331f1b8da0",
    "0xd489befe09bdff75",
    "0x8efe1e611faf2ade",
    "0xc2ad0311dbeb4285",
    "0x2a2029475e2012ca",
    "0xf8832909798ef411",
    "0x7c5965bf65cb708f",
    "0x7c5965bf65cb708f",
    "0x0b3ae1359d8d1bde",
    "0x1eabbe929ec51346",
    "0x9c1bba4e1b013341",
    "0x72df84bc0775dd5c",
    "0x5446a83f49417e49",
    "0x645a009433d64005",
    "0x94a5c35973e6f63b",
    "0xf62762ce08747b5d",
    "0x45d91e5e20180bf6",
    "0xa59a7d1a5bda7a8d",
    "0xa59a7d1a5bda7a8d",
    "0xdd20c759f3250126",
    "0x0724861c38478f33",
    "0xb91d47da840229bf",
    "0x7850bf8aa91ecec6",
    "0x65c8984022e056ca",
    "0x44c20f109999889d",
    "0xdabe522f60db07a2",
    "0x9556c56f02e1c497",
    "0x519a71247748473f",
    "0xd83a605de6704e57",
    "0xea13fe075b8a8632",
    "0x2bb9b4276a207e7b",
    "0x2ed4bc2d53fe8af6",
    "0x0c50d1adf7d5a2f1",
    "0xaced36a4e3fc106f",
    "0x34204ef0329b7e87",
    "0x0ce0ae543a4311aa",

]

let allAddresses = []
let genesisBallRecord = { data: [] }


const checkGensisBallCount = (data) => {
    let requiredTemplateId = "129"
    let tempsCount = 0;

    if (data.length < 1) return 0;
    else {
        data.map((tempId) => {

            if (tempId === requiredTemplateId) {
                // tempsCount++
                console.log(tempId);
            };
        });
        return tempsCount;
    }


}

const getGensisBallData = async (addr) => {
    // console.log(addr.length);
    // let totalGenesisBallCount = 0;
    // for (var i = 0; i < addr.length; i++) {
    // console.log(addr[i]);

    const data = await fcl.send([
        fcl.script(GENESIS_BALL),
        fcl.args([
            fcl.arg(addr, t.Address)
        ])
    ]).then(fcl.decode)
    const count = await checkGensisBallCount(data);
    console.log(count);
    // totalGenesisBallCount += count;

    // if (count) genesisBallRecord.data.push({ user: addr[i], genesisBalls: count });

    // console.log("User: ", addr[i], "  Count: ", count);

}
// genesisBallRecord.totalGenesisBallCount = totalGenesisBallCount;
// 
// console.log("Genesis Ball Record: ", genesisBallRecord);
// }
getGensisBallData("0x514867d82235f171")