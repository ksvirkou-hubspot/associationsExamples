require('dotenv').config({ path: '.env' })

const hubspot = require('@hubspot/api-client')

const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })

async function main() {
  try {
    const apiResponse = await hubspotClient.crm.associations.v4.basicApi.create('contacts', '311347', '2-33117159', '14460884307', []);
    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e) {
    e.message === 'HTTP request failed'
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e)
  }
}

main()

