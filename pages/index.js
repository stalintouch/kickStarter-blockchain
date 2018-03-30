import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/layout';
import { Link } from '../routes';


class CampaignIndex extends Component {
  //this is a special method from next to fetch data before rendering a component, word static is required 
  static async getInitialProps(){
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns }
  }

  renderCampaigns(){
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>view Campaign</a>
          </Link>
        ),
        meta: 'Campaign Proposal',
        fluid: false
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h1>Open Campaigns</h1>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                color="teal"
              />
            </a>
          </Link>
          <div className="render-campaigns">{this.renderCampaigns()}</div>
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
