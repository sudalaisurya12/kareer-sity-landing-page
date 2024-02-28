const client = ZoomMtgEmbedded.createClient()

let meetingSDKElement = document.getElementById('meetingSDKElement')

// setup your Meeting SDK auth endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
var authEndpoint = 'http://localhost:4000'
var sdkKey = 'P2JMI3UURhyZ5hCUHiIQ2w'
var meetingNumber = '84283226129'
var passWord = '473579'
var role = 1
var userName = 'test'
var userEmail = 'cortexmediamarketing@gmail.com'
// pass in the registrant's token if your meeting or webinar requires registration. More info here:
// Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-meeting-with-registration-required
// Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-webinar-with-registration-required
var registrantToken = ''
var zakToken = ''

client.init({
  zoomAppRoot: meetingSDKElement,
  language: 'en-US',
})

function getSignature() {
  fetch(authEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      meetingNumber: "84283226129",
      role: 1
    })
  }).then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
    startMeeting(data.signature)
  }).catch((error) => {
  	console.log(error)
  })
}

function startMeeting(signature) {
  client.join({
    signature: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJQMkpNSTNVVVJoeVo1aENVSGlJUTJ3IiwibW4iOiI4NDI4MzIyNjEyOSIsInJvbGUiOjEsImlhdCI6MTY3OTcyNTk3MSwiZXhwIjoxNjc5NzMzMTcxLCJhcHBLZXkiOiJQMkpNSTNVVVJoeVo1aENVSGlJUTJ3IiwidG9rZW5FeHAiOjE2Nzk3MzMxNzF9.hFQtfMHc89Rt4-k_re9hdg95zFJWihe1ocrGhU0v3nk",
    sdkKey: "P2JMI3UURhyZ5hCUHiIQ2w",
    meetingNumber: "84283226129",
    password: "473519",
    userName: "test",
    userEmail: "cortexmediamarketing@gmail.com",
    tk: "",
    zak: ""
  })
}
