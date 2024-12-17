require('dotenv').config({ path: '.env' })

const hubspot = require('@hubspot/api-client')

const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })

async function main() {
  try {
    const request = { inverseLabel: "Employee", name: "manager_employee", label: "Manager" };

    const apiResponse = await hubspotClient.crm.associations.v4.schema.definitionsApi.create('contacts', 'contacts', request);

    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e) {
    e.message === 'HTTP request failed'
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e)
  }
}

main()

