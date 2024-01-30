const formattedMessage = async (res, message = "Success", result = []) => {
  res.status(200).json({
    condition: true,
    message,
    result,
  });
};
module.exports = { formattedMessage };
