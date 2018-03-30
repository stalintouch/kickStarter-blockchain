import React, { Component } from 'react';
import Layout from '../../components/layout';
import  { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';


class CampaignNew extends Component {

  state ={
    minimumContribution: '',
    errorMessage: '',
    loading: false
  }

  onSubmit =  async (e) => {
    e.preventDefault();
    
    this.setState({loading: true, errorMessage: ''});

    try{
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minimumContribution).send({
        from: accounts[0]
      });

      Router.pushRoute('/')
    } catch(err){
      this.setState({errorMessage: err.message});
    }

    this.setState({loading:false})
  }

  render() {
    return (
      <Layout>
        <h1>Create Campaign!</h1>

        <Form error={!!this.state.errorMessage} onSubmit={this.onSubmit}>
          <Form.Field>
            <label style={{color: '#fff'}}>Minimum contribution</label>
            <Input 
              value={this.state.minimumContribution}
              onChange={e => this.setState({minimumContribution: e.target.value})} 
              label="wei" 
              labelPosition="right" />
          </Form.Field>
          <Message
            error
            header="Oops!, something went wrong"
            content={this.state.errorMessage} 
          />
          <Button loading={this.state.loading} primary>
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
