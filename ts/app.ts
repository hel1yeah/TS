enum StatusCode {
  SUCCESS = 400,
  IN_PROGRESS = 3,
  FAILURE = 'failure',
}

const res = {
  message: 'pay success',
  status: 300,
}


if(res.status === StatusCode.SUCCESS) {
  console.log(StatusCode.SUCCESS);
  console.log('xdsdsdsd');
  
}

// 13 success
// 2 pending
// 3 failure