const axios = require("axios");

const me = async(req, res) =>{

       // Fetch a random cat fact from the Cat Facts API
      const catFactResponse = await axios.get(process.env.API_URL);
      const catFact = catFactResponse?.data?.fact;

     const response = {
        status: "success", // Response status
        // User details
        user: {
          email: "clintonictendency@gmail.com", 
          name: "Clinton .T. Clinton",      
          stack: "Node.js/Express", 
        },
  
        timestamp: new Date().toISOString(), // Current UTC time in ISO 8601 format
        fact: catFact, // Random cat fact
      };

  try {
    
      // Send JSON response with proper content type
      res.setHeader("Content-Type", "application/json");

      
      res.status(200).json(response);
  
    } catch (error) {
      console.error("Error fetching cat fact:", error.message);
  
      // Error response
      res.status(500).json({
        status: "error",
        message: "Failed to fetch cat fact",
      });
    }
}

module.exports = {me}