const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}];

const getWorthyWorkers = (workers) => {
  if (workers.salary < 1000) {
    return false;
  }
  return true;
};

console.log(workers.filter(getWorthyWorkers));