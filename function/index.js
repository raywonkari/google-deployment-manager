const current_datetime = new Date()
const formatted_time = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 

exports.handler = function(req, res) {
  console.log(req.body.message);
  res.status(200).send({
    hello: 'world', 
    request_received_at: formatted_time
  });
};
