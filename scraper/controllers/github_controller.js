//@author sudheer_dagar(raven)

// import fetch from 'cross-fetch';
const fetch = require("cross-fetch");
//GITHUB
// const fetch=require(node-fetch)
exports.getdata = async (req, res) => {
  try {
    const username = req.params.username;

    const fulldata = await fetch(`https://api.github.com/users/${username}`);
    const fdata = await fulldata.json();
    const jdata = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await jdata.json();

    //   console.log(data[0])
    let perrepo = [];
    let othrepo = [];
    data.forEach((element) => {
      if (element.fork == true) {
        othrepo.push(element.name);
      } else {
        perrepo.push(element.name);
      }
    });
    // fdata.push({"Personal repos":perrepo});
    // fdata.push({"Others repo":othrepo})
    fdata.Personal_repos = perrepo;
    fdata.Forked_repos = othrepo;
    res.status(200).json({
        status:'success',
        fdata
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "fail",
      error,
    });
  }
};
