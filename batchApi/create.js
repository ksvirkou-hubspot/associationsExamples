require('dotenv').config({ path: '.env' })

const hubspot = require('@hubspot/api-client')

const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })

async function main() {
const request = { inputs: [{"types":[{"associationCategory":"HUBSPOT_DEFINED","associationTypeId":1}],"_from":{"id":"311347"},"to":{"id":"15782691733"}},{"types":[{"associationCategory":"HUBSPOT_DEFINED","associationTypeId":279}],"_from":{"id":"311347"},"to":{"id":"14984643251"}}] };

try {
  const apiResponse = await hubspotClient.crm.associations.v4.batchApi.create('contacts', 'companies', request);
  console.log(JSON.stringify(apiResponse, null, 2));
} catch (e) {
  e.message === 'HTTP request failed'
    ? console.error(JSON.stringify(e.response, null, 2))
    : console.error(e)
}
}

main()

