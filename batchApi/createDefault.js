require('dotenv').config({ path: '.env' })

const hubspot = require('@hubspot/api-client')

const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })

async function main() {
  const request = { inputs: [{"_from":{"id":"313459"},"to":{"id":"15782691733"}},{"_from":{"id":"309638"},"to":{"id":"15782691733"}}] };

  try {
    const apiResponse = await hubspotClient.crm.associations.v4.batchApi.createDefault('contacts', 'companies', request);
    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e) {
    e.message === 'HTTP request failed'
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e)
  }
}

main()

