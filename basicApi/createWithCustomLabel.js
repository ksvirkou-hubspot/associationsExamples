require('dotenv').config({ path: '.env' })

const hubspot = require('@hubspot/api-client')

const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })

const logResponse = (data) => {
  console.log('Response from API', JSON.stringify(data, null, 1))
}

async function main() {
const associationSpecs = [
  {
    "associationCategory": "USER_DEFINED",
    "associationTypeId": 556
  }
];

try {
  const apiResponse = await hubspotClient.crm.associations.v4.basicApi.create('contacts', '311347', 'contacts', '313459', associationSpecs);
  console.log(JSON.stringify(apiResponse, null, 2));
} catch (e) {
  e.message === 'HTTP request failed'
    ? console.error(JSON.stringify(e.response, null, 2))
    : console.error(e)
}
}

main()

