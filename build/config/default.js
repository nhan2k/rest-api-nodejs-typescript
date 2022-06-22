"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    port: 1337,
    dbUri: "mongodb://127.0.0.1:27017/rest-api-tutorial",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    publicKey: `-----BEGIN PUBLIC KEY-----
  MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALbTFHWN61wAtTpYx9+YWVwISkW0PqIM
  PVTMLes5DYdRPMmeIQpSvODo9HyyG+Fhu6a5iMY+xitosh/Rxsd0B58CAwEAAQ==
  -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIIBOQIBAAJBALbTFHWN61wAtTpYx9+YWVwISkW0PqIMPVTMLes5DYdRPMmeIQpS
  vODo9HyyG+Fhu6a5iMY+xitosh/Rxsd0B58CAwEAAQJAc1W2EnL1h5Tqv2RCs0vp
  E6YnNNIAsToHdvdYAIx9fF8xurdqi07FBsCKEfuojJdt10pGeGWg+mXulx+N9GJc
  AQIhAOlml8KvxpqrhugVcCEaqjIzDau3PbSg+5FKRsVO1pDDAiEAyIbU/5/wSuSB
  paagubwEc13sq4GnWdzPjKRQ6yfev/UCICL+cM6N0DcsdIOjgzZTayUvpmMSjDvi
  zxUPj+DRWzZFAiB+9tfwDj1fvfTUhH8peoE65pJOOSZTwHptKzDM446m7QIgHnET
  WoCC51nxIkIg3kwich6a9a+lbr+fuvnF3pez0Lo=
  -----END RSA PRIVATE KEY-----`,
};
//# sourceMappingURL=default.js.map