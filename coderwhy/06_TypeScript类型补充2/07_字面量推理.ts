const info = {
  name: 'why',
  age: 18
}

info.name = 'zjt';
info.age = 26;

type Method = 'GET' | 'POST';

function request(url: string, method: Method) {}

// type Option = {
//   url: string,
//   method: Method
// }

const options = {
  url: 'https://www.iamzjt.com',
  method: 'POST'
} as const

// request(options.url, options.method as Method);
request(options.url, options.method);

export {}
