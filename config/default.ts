export default {
  port: 1337,
  dbUri: "mongodb://127.0.0.1:27017/rest-api-tutorial",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
  MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFpCGITIwlRVxIdAN8a/8aCAUq74
  +Rx9FPdjkp2UpjGoVrGppk72wAsPi7b3f3ikKS3xlUqP4VwF6+vmLPzkoRdTWW5Y
  0+Q3VNHe0LeUUpAgnoiOli8DYmDwFI8VTCZRIoLUVcFESF+tfTIduMb/5fGwEs2d
  vp2eiAgPfbNgc8LTAgMBAAE=
  -----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICXAIBAAKBgFpCGITIwlRVxIdAN8a/8aCAUq74+Rx9FPdjkp2UpjGoVrGppk72
  wAsPi7b3f3ikKS3xlUqP4VwF6+vmLPzkoRdTWW5Y0+Q3VNHe0LeUUpAgnoiOli8D
  YmDwFI8VTCZRIoLUVcFESF+tfTIduMb/5fGwEs2dvp2eiAgPfbNgc8LTAgMBAAEC
  gYAf7pZiE+y8jYN0HkIdbLb9g6i9ApSPgakzROUQHxEVLGtPe6e89AtJXnydhL5y
  XhG7kWax9GlUdzvaP5rW9cQP4qPyKnn1TfNFeNYGrrvDnbYmOVNEZo1egNa4oNQn
  QuypCwm4Q5QnjeZAH/U30RjTbqBDR1LVaE+ps1O+RqxGUQJBAKSxtb1GAnnEh9ud
  G/aGgbJKDCzI1sjm4g3nui7Q+HFZHhUwQi0z5bW9xxXbqXF56Z/EleQa+g2zfFMp
  OdK99c0CQQCMTAbL3nC/FLkV0o+/9BZz4BGZDsFi5UIWsgQNDOCNWrerQ5SKMLqw
  u7U/OzXo3SzhhDtlN6YBFbXm44GWP/sfAkEAgwUhaO8OPyL7Vdo6Cbhd66F+6A3q
  2S7cfWVxN5dlXn8gMIkQzHcx8pCElj4HIdBz7HdvK2XOsiGs8VeluaMHrQJBAIhX
  0jsKH7PzJbQJf13ijndqCHAgoNvFRSbdNYahPxDgWqJ7+L0bgjMDGK8skcWOPHGl
  mjtRi2h+etq5ulQUNa0CQGCxRDH4XhkSfwxZiPpab6+gZFKSoN8CX7EzGpUJ10TN
  DDAa6/Bm6pEGxOPPgcANrF7qDhkFbcrZUBmrkIAMdYw=
  -----END RSA PRIVATE KEY-----`,
};
