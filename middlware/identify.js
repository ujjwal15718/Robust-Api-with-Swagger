// deleteCandidate.js

const axios = require('axios');

async function deleteCandidate(candidateIdToDelete) {
  try {
    console.log(candidateIdToDelete,'>>>>>>>>>>7 identify.jsssss')
    const headers = {
      'x-candidate-role': 'admin' // Include the candidate role in the request headers
    };
    const response = await axios.delete(`http://localhost:8000/candidate_delete/${candidateIdToDelete}`, { headers });
    // const response = await axios.delete(`http://your-api-endpoint/candidate_delete/${candidateIdToDelete}`, { headers });
    console.log(response.data.message);
  } catch (error) {
    console.error(error.response.data.message);
  }
}

module.exports = deleteCandidate;
