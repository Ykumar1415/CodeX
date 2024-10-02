const { fetch } = require("cross-fetch");

//LEETCODE


exports.getdata = async (req, res) => {
    try{
  let handle = req.params.handle;
  const fulldata = await fetch(
    `https://leetcode-stats-api.herokuapp.com/${handle}`
  );
  const fdata = await fulldata.json();
  fdata.handle = handle;
  console.log(fdata);
  res.status(200).json({
    status:'sucess',
    data:fdata
  })
}
catch(err){
    res.status(401).json({
        status:'fail',
        error:err
    })
}
};
