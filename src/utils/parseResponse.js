const parseResponse = ({ res, endpoint }) => {
  //TODO llevar a utils
  let response = endpoint.responses.find(el => parseInt(el.code[0]) === res.status / 100);
  let indentation = 0;
  //TODO it doesn't work for all responses
  response.value = JSON.stringify(res.data).replace(
    /([":/\w":\s-\d]*[{[,])|(],?|},?)|(".*")/g,
    match => {
      let returnStr = "";
      if (
        match.indexOf("}") >= 0 ||
        match.indexOf("]") >= 0 ||
        match.indexOf("},") >= 0 ||
        match.indexOf("],") >= 0
      ) {
        indentation--;
      }
      returnStr = `${"  ".repeat(indentation)}${match}\n`;
      if (match.indexOf("{") >= 0 || match.indexOf("[") >= 0) {
        indentation++;
      }
      return returnStr;
    }
  );
  return response;
};

export default parseResponse;