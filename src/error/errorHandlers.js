module.exports = {
    notFoundPage: (req, res) => {
      
      res.status(404).render("error", {title: "Error 404"});
    
    } 
  }