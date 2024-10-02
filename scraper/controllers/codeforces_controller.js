const { fetch } = require("cross-fetch");
//CODEFORCES

exports.getdata = async (req, res) => {
  try {
    const handle = req.params.handle;

    const user_status = await fetch(
      `https://codeforces.com/api/user.status?handle=${handle}&from=1`
    );

    const user_info = await fetch(
      `https://codeforces.com/api/user.info?handles=${handle}`
    );
    const data = await user_status.json();
    const data2 = await user_info.json();
    // const data3=await user_submissions.json();
    //   for(let i=0; i<10; i++)
    //   console.log(data.result.problems[i])
    if (!data) {
      new Error("not found", 401);
    }
    // let size = data.result.length;
    let count = 0;
    let arr = [];
    let arr2 = [];
    let counter = {};
    let counter2 = {};
    //   console.log(data.result[1].problem)
    data.result.forEach((element) => {
      if (element.verdict == "OK") {
        count++;
        arr.push(element.problem.rating);
        element.problem.tags.forEach((ele) => {
          arr2.push(ele);
        });
      }
    });
    // console.log(count);
    // console.log(arr2)

    //Rating of problem

    arr.forEach((element) => {
      if (counter[element]) {
        counter[element] += 1;
      } else {
        counter[element] = 1;
      }
    });

    //Types of problem

    arr2.forEach((element) => {
      if (counter2[element]) {
        counter2[element] += 1;
      } else {
        counter2[element] = 1;
      }
    });
    // console.log(counter2);
    data2.tags = counter2;
    data2.problemStats = counter;

    //   .then((data) => console.log((data.result)));
    // console.log(data2.problemStats['800']);

    res.status(200).json(data2);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "fail",
      error,
    });
  }
};
