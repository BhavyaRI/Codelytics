const axios = require("axios");

const getUserinfo = async (req, res) => {
  try {
    const user = req.params.userId;

    const [info, ratingres,statusres] = await Promise.all([
      axios.get(`https://codeforces.com/api/user.info?handles=${user}`),
      axios.get(`https://codeforces.com/api/user.rating?handle=${user}`),
      axios.get(`https://codeforces.com/api/user.status?handle=${user}`),
    ]
    );
    // This is used for getting graph points for no. of prblms vs rating graphs
    const submissions = statusres.data.result; 
    const solvedrating = new Set();
    const graphdata  = {};
    for(const rating of submissions){
      const {problem,verdict} = rating;
      if(verdict==='OK' && problem.rating){
        const key = `${problem.contestId}-${problem.index}`;
        if(!solvedrating.has(key)){
          solvedrating.add(key);
          graphdata[problem.rating] = (graphdata[problem.rating] || 0)+1;
        }
      }
    }

    //This is for plotting rating vs time graph 
    const contestrating = {};
    const ratingdata = ratingres.data.result;
    for(const d of ratingdata){
      const{ratingUpdateTimeSeconds,newRating} = d;
      contestrating[ratingUpdateTimeSeconds] = newRating;
    } 
    const data = {
      info:info.data.result[0],
      ratinggraph:contestrating,
      problemgraph:graphdata
    }
    res.send(data);
  } catch (error) {
    return res.status(400).json({
        status:'FAILED',
        message:error.message,
    });
  }
};


module.exports = {getUserinfo};