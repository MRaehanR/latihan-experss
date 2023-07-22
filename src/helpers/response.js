export const response = (req, res, next) => {
  res.success = (message, data = [], code = 200) => {
    return res
      .status(code)
      .json({ success: true, code, message, data, errors: [] });
  };

  res.error = (message, code = 400, data = [], errors = []) => {
    return res
      .status(code)
      .json({ success: false, code, message, data, errors });
  };

  res.internalServerError = () => {
    return res.status(500).json({
      success: false,
      code: 500,
      message: "Internal Server Error",
    });
  };

  next();
};
